import React, { useState } from 'react';
import { ethers } from 'ethers';

import { MetaMaskInpageProvider } from '@metamask/providers';

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }
}

const ConnectWallet: React.FC = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [chainId, setChainId] = useState<number | null>(null);

  const connectWallet = async () => {
    if ((window).ethereum) {
      try {
        // Request account access if needed
        await (window).ethereum.request({ method: 'eth_requestAccounts' });

        // We use Web3Provider from ethers.js to wrap the injected provider (e.g., MetaMask)
        const web3Provider = new ethers.BrowserProvider(window.ethereum);

        // Get the signer
        const signer = await web3Provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);

        // Get the chain ID
        const network = await web3Provider.getNetwork();
        // convert hex chainId to decimal
        const chainId = ethers.getNumber(network.chainId.toString());
        setChainId(chainId);

        // Listen for account changes
      } catch (error) {
        console.error("Error connecting to wallet:", error);
      }
    } else {
      alert('No Ethereum provider found. Install a wallet like MetaMask.');
    }
  };

  return (
    <div className="border border-slate-300 p-2">
      {account ? (
        <div className="flex flex-col items-start justify-start gap-4">
          <div>
            <p className="text-sm">Connected account:</p>
            <p className="font-mono text-xs break-all">{account}</p>
          </div>
          <div>
            <p className="text-sm">Connected chain ID:</p>
            <p className="font-mono text-xs break-all">{chainId}</p>
          </div>
        </div>
      ) : (
        <button
          onClick={connectWallet}
          className="px-2 py-1 cursor-pointer"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default ConnectWallet;

