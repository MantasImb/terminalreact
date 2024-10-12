import ConnectWallet from './components/ConnectWallet'
import Docs from './components/Docs'
import Modal from './components/Modal'
import Navbar from './components/Navbar'
import './index.css'

function App() {

  return (
    <>
      <Navbar />
      <main className='bg-black h-screen w-screen bg-[url("/logo-white.svg")] bg-center bg-no-repeat bg-[size:50%] md:bg-contain'>
        <div className='flex items-center justify-between h-full w-full p-12'>

          <div className='flex flex-col items-center justify-start h-full gap-12'>
            <Modal icon="/app.svg" title="App">
              <p>Working Decentralized App is in the final stages of development!</p>
              <ConnectWallet />
            </Modal>
            <Modal icon="/docs.svg" title="Docs">
              <Docs />
            </Modal>
            <Modal icon="/legals.svg" title="Legals">
              <h4 className='text-xl underline'>Terms of Use</h4>
              <i>Last Updated: October 5rd, 2024</i>

              <h2>Welcome to the Krypt Capital!</h2>
              <p>These Terms of Use ("Terms") govern your use of the Krypt Capital protocol, accessible at WEB LINK (the "Website").</p>
              <ol className='list-decimal'>
                <li> Acceptance of Terms </li>
                <p> By accessing or using our Website, you agree to be bound by these Terms and our Privacy Policy. If you do not agree, please do not use our services. </p>
                <li> Eligibility </li>
                <p> You must be at least 18 years old and have the legal capacity to enter into these Terms. By using our services, you represent and warrant that you meet these requirements. </p>
                <li> Services Provided </li>
                <p> International Krypt Capital is a decentralized finance protocol offering various financial services ("Services"). We do not provide any investment, tax, or legal advice. </p>
                <li> User Responsibilities </li>
                <p> You are responsible for your use of the Services and for any consequences thereof. You must comply with all applicable laws and regulations when using our Services. Users are responsible for all taxes related to their use of the Services, including those arising from crypto asset transactions and smart contract interactions. </p>
                <li> No Warranty </li>
                <p> The Services are provided "as is" and "as available," without warranty of any kind. We disclaim all warranties, whether express or implied, including the warranties of merchantability, fitness for a particular purpose, and non-infringement. </p>
                <li> Limitation of Liability </li>
                <p> To the maximum extent permitted by law, Krypt Capital shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly. </p>
                <li> Indemnification </li>
                <p> You agree to indemnify, defend, and hold harmless Krypt Capital, its affiliates, and their respective officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses arising from your use of the Services. </p>
                <li> Changes to Terms </li>
                <p> We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on the Website. Your continued use of the Services following the posting of changes constitutes your acceptance of such changes. </p>
              </ol>
            </Modal>
            <Modal icon="/etherscan.svg" title="Contracts">
              <p>Coming soon</p>
            </Modal>
          </div>

          <div className='flex flex-col items-center justify-start h-full gap-12'>
            <Modal icon="/dexscreener.svg" title="DexScreener">
              <p>Coming soon</p>
            </Modal>
            <Modal icon="/uniswap.svg" title="Uniswap">
              <p>Coming soon</p>
            </Modal>
            <a href="https://memedepot.com/d/stawcp-my-depot" className="flex items-center justify-center flex-col">
              <img src="/memes.svg" alt="icon" className='size-14' />
              <h2 className="mt-1 px-2 text-lg bg-slate-100">Memes</h2>
            </a>
          </div>

        </div>
      </main>
    </>
  )
}

export default App
