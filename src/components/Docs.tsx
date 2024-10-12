import {
  useRef
} from 'react'

export default function Docs() {
  const sectionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ]

  function scrollToSection(section: number) {
    sectionRefs[section].current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="h-full flex flex-col md:flex-row items-center md:items-start justify-center">
      <div className="md:sticky md:top-12 flex flex-col items-center justify-center gap-4 p-4 text-nowrap">
        <div className="flex flex-col items-center justify-center">
          <h3 className='text-lg underline'>KRYPT CAPITAL</h3>
          <button className="w-full py-1 hover:bg-slate-300" onClick={() => scrollToSection(0)}>Introduction</button>
          <button className="w-full py-1 hover:bg-slate-300" onClick={() => scrollToSection(1)}>Opportunity</button>
          <button className="w-full py-1 hover:bg-slate-300" onClick={() => scrollToSection(2)}>What is $Krypt?</button>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className='text-lg underline'>UTILITIES</h3>
          <button className="w-full py-1 hover:bg-slate-300" onClick={() => scrollToSection(3)}>Krypt Mechanics</button>
          <button className="w-full py-1 hover:bg-slate-300" onClick={() => scrollToSection(4)}>KRYPT Protocol</button>
          <button className="w-full py-1 hover:bg-slate-300" onClick={() => scrollToSection(5)}>Alpha Pinger</button>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className='text-lg underline'>$KRYPT</h3>
          <button className="w-full py-1 hover:bg-slate-300" onClick={() => scrollToSection(6)}>KRYPT Tokenomics</button>
          <button className="w-full py-1 hover:bg-slate-300" onClick={() => scrollToSection(7)}>Links</button>
          <button className="w-full py-1 hover:bg-slate-300" onClick={() => scrollToSection(8)}>Privacy Policy</button>
          <button className="w-full py-1 hover:bg-slate-300" onClick={() => scrollToSection(9)}>Terms of Use</button>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center gap-12 p-4'>

        <h3 className='text-2xl underline'>KRYPT CAPITAL</h3>
        <section ref={sectionRefs[0]} className="flex flex-col items-center justify-center gap-4">
          <h4 className='text-xl underline'>Introduction</h4>
          <p>Our team is highly experienced in meme coins, with a deep understanding of their mechanics and profit potential. We're here to ignite this supercycle and share our knowledge with you.</p>
          <p>Our private group, Krypt Huntors, was formed at the end of 2023 as a space where we were buying shitcoins and building our own teh and alpha tools for ourselves. We never thought it would turn into a hedge fund. Krypt Capital started as a fun concept among friends during TOKEN2049 in Singapore, where a few guys inspired us to bring the idea to life and launch our own hedge fund and share potential alphas with others. Krypt Capital. And here we are. supercycle (real)</p>
          <p>There is some profits (no flex)((join us))</p>
          <img src="/flex1.png" alt="flex" className="w-fit" />
          <img src="/flex2.png" alt="flex" className="w-fit" />
          <img src="/flex3.png" alt="flex" className="w-fit" />
        </section>

        <section ref={sectionRefs[1]} className="flex flex-col items-center justify-center gap-4">
          <h4 className='text-xl underline'>Opportunity</h4>
          <p>People say the meme game is over, but let’s be real memecoins are more than just a joke. In today’s attention economy, memes = value.</p>
          <p>Lemme break down why these internet legends still have serious upside potential.</p>
          <p>With thousands of memecoins to choose from, you must choose wisely when it comes to investing your money.</p>
          <p>Why just laugh at memes when you can make money off them?</p>
          <p>If you want to be early in shitcoins, frontrun grifter devs and smart money, simply join Krypt Capital. We offer real teh, not ai(shit). Our teh includes tracking smart money moves, whale wallets, high-ROI wallets, small market cap pings, and BIG PROOOOFITS (noflex)</p>
          <div className='flex flex-col md:flex-row items-center justify-center gap-1'>
            <img src='/opportunity1.png' alt='opportunity' className='md:w-1/3' />
            <img src='/opportunity2.png' alt='opportunity' className='md:w-1/3' />
            <img src='/opportunity3.png' alt='opportunity' className='md:w-1/3' />
          </div>
        </section>

        <section ref={sectionRefs[2]} className="flex flex-col items-center justify-center gap-4">
          <h4 className='text-xl underline'>What is $Krypt?</h4>
          <p>KRYPT is not just a hedge fund but also a token, DeFi protocol and alpha ping bot(sypercycle is real)</p>
          <p>$KRYPT Token – We've tokenized our vision to ensure it value and only for those who are into tehh. Our mission is to create an exclusive community of people who see the future in decentralized tools and understand their potential. By holding the $KRYPT token, you are not just investing in a project - you're holding real teh not ai(shit) like other shitcoins. To use our alpha ping bot(teh) you have to buy atleast 0.5% tokens and stake them on our KRYPT Protocol.</p>
          <p>Krypt Protocol - allows users to borrow ETH by staking their $KRYPT tokens. This gives them pk to their ETH and access to our alpha ping bot(chain destroyer). A portion of the profits is distributed to the Krypt Capital hedge fund wallet, which is used for developing our teh and tools, rewarding holders and maintining an upward trend on the chart. (send it) ((teh))</p>
          <p>Krypt alpha ping bot (chain destroyer) - pings every alpha early play on ethereum and sol(upcoming jeet chain). We have collected many smart wallets, whale wallets, insider wallets which paid off in our journey. We recycle them every few days, add more things, change algos, and working with our product. (teh)</p>
        </section>

        <h2 className='text-2xl underline'>UTILITIES</h2>

        <section ref={sectionRefs[3]} className="flex flex-col items-center justify-center gap-4">
          <h4 className='text-xl underline'>Krypt Mechanics</h4>
          <p>We may add some detailed technical explanations about how our up only teh work, later if there's demand for it, but for now, we'll just explain the basic flow of the protocol.</p>
          <p>Here, we will provide a more detailed explanation of how our "up only" teh works. If there's enough interest later, we might create a video to attract more people to our community.</p>
          <img src="/mechanics.avif" alt="mechanics" className="w-fit" />
          <div />
          <h3 className='text-lg'>For teh people;</h3>
          <p>Below, you'll find some guidance on how to use our teh (token, protocol, alpha tools).</p>
          <ol className='list-decimal'>
            <li>Buy $KRYPT token. You can do what ever u want with tokens, but read our offers if you like real teh not ai(shit);
              <ol>
                <li>a. Hold it and do nothing like normie; </li>
                <li>b. Use our protocol with KRYPT tokens and get benefits; </li>
                <li>c. SELL IT HARD NERD (aishit member);</li>
              </ol></li>
            <li>Okay, if you choose "b", you can read forward, and become one of us.
              Stake your $KRYPT and receive Wallet with PK(Which you need to add into Banana bot(recommended). More % you stake - more ETH you will receive from our protocol.</li>
            <li>Access our alpha ping bot(gem destroyer), and use your borrowed ETH to quickly buy meme coins based on our pings. If you don't use our bot, you will be removed and labeled as an ai shit lover.</li>
            <li>10% of the profits generated from trading will be automatically directed to a MultiSig wallet. This wallet will be dedicated to funding marketing efforts and supporting only up chart teh, ensuring that a portion of our earnings contributes to sustainable practices while promoting our brand. By allocating funds in this way, we aim to foster a positive impact on the environment and enhance our community's awareness of our mission.</li>
          </ol>
          <h3 className='text-lg'>Token Mechanics</h3>
          <p>Every hunter, meme coin lover, and utility enthusiast is always on the lookout for potential gems. But no one has ever built a truly up only teh. Here we are: UP ONLY SUPERCYCLE BEASTS.</p>
          <p>Here we’ll explain how our token mechanics work and how we will deliver our up only teh.</p>
          <ol className='list-decimal'>
            <li>$Krypt will have only a 2% buy and sell tax, which will be deposited into our MultiSig wallet.</li>
            <li>As everyone already knows what MultiSig is (if you don’t, please stop reading).
              The funds from the MultiSig wallet tax will be distributed into multiple wallets, which will purchase $KRYPT coins and stake them using our defi protocol.</li>
            <li>After staking, we, like other stakers, will borrow ETH from our protocol. This ensures that our coins will be staked for life (only using the funds from the MultiSig wallet tax).</li>
            <li>We will use the borrowed ETH to buy our pings before anyone else, and all profits will go into our up only chart.</li>
          </ol>
        </section>

        <section ref={sectionRefs[4]} className="flex flex-col items-center justify-center gap-4">
          <h4 className='text-xl underline'>KRYPT Protocol</h4>
          <p> In order to utilize our trading bot, you are required to stake a minimum of 0.5% of the total supply. If you choose to stake an amount below this threshold - specifically, less than 0.5% of the total supply of $KRYPT - you will still earn staking rewards: however, you will not gain access to the functionalities of the bot. Importantly, there is no penalty or lock-in period associated with staking, allowing users the flexibility to stake and unstake their tokens at any time, based on their individual needs and preferences. This ensures that you have complete control over your investments while still benefiting from the rewards associated with staking. </p>
          <p>Holders who unstake their tokens, as we mentioned, will not incur any penalties; however, there are benefits to staking over a longer period. Our token revenue distribution occurs once a week, and there is a bonus for those who stake for at least 24 hours. For example, if Holder 1 stakes for 19 hours, they will not receive the x% bonus with their rewards. In contrast, Holder 2, who stakes for 25 hours, will receive an x * 1% bonus (equivalent to a one-day stake), while Holder 3, who stakes for 168 hours (7 days), will receive an x * 7% bonus (for a full week of staking).</p>
          <p>There is a table that presents our staking rewards based on the amount you stake and the duration of your staking (STRAIGHT). For instance, with a total supply of 1,000,000 tokens, we evaluate the rewards over various time periods, including 1 day, 7 days, 1 month, 3 months, 6 months, and 1 year. </p>
          <p>The staking formula we are using is as follows:</p>
          <ul className='list-disc'>
            <li>During the first 7 days, staking for one day yields a 0.01 bonus for rewards. Therefore, if you stake 0.1% of the total supply, which is 1,000 $KRYPT, you will receive 1,000 * 0.01 = 10 $KRYPT for one day.</li>
            <li>During the period from 7 days to one month, staking for one day gives you a 0.03 bonus for rewards. Therefore, if you stake 0.1% of the total supply, which is 1,000 $KRYPT, you will receive 1,000 * 0.03 = 30 $KRYPT for one day.</li>
            <li>During the period from 1 month to 3 months, staking for one day provides a 0.05 bonus for rewards. Therefore, if you stake 0.1% of the total supply, which is 1,000 $KRYPT, you will receive 1,000 * 0.05 = 50 $KRYPT for one day.</li>
            <li>During the period from 3 months to 6 months, staking for one day provides a 0.08 bonus for rewards. Therefore, if you stake 0.1% of the total supply, which is 1,000 $KRYPT, you will receive 1,000 * 0.08 = 80 $KRYPT for one day.</li>
            <li>During the period from 6 months to 1 year, staking for one day provides a 0.1 bonus for rewards. Therefore, if you stake 0.1% of the total supply, which is 1,000 $KRYPT, you will receive 1,000 * 0.1 = 100 $KRYPT for one day.</li>
          </ul>
          <img src="/equation.png" alt="equation" className="w-fit" />
          <p>Where:</p>
          <ul className='list-disc'>
            <li>S - $KRYPT you will have after x time period;</li>
            <li>n - days you stake;</li>
            <li>K1 - rewards bonus (1-7 days period);</li>
            <li>K2 - rewards bonus (7-30 days period);</li>
            <li>K3 - rewards bonus (1 month - 3 month period);</li>
            <li>K4 - rewards bonus (3 month - 6 month period);</li>
            <li>K5 - rewards bonus (6 month - 1 year period);</li>
            <li>i = 1 - one day, two days and so on, there is no 1.5days;</li>
            <li>Sk - amount you stake;</li>
          </ul>
          <img src="/table1.png" alt="formula" className="w-fit" />
          <p><strong>Important!</strong> We have calculated only a few options for staking: the amount is not crucial - you can stake just 1 token if you wish, and you will still receive rewards!</p>
          <p>As we can see from the table results, a user who stakes 0.1% of the total supply for one year will receive almost 0.3% of the total supply, while a staker who invests 2% for one year will earn nearly 6% of the total supply.</p>
          <p> In conclusion, we will not impose penalties for unstaking, nor will we lock your staked tokens. However, as demonstrated by the table, the rewards are quite substantial. Additionally, for investors who choose not to use the bot, there are still benefits to staking and earning rewards. </p>
        </section>

        <section ref={sectionRefs[5]} className="flex flex-col items-center justify-center gap-4">
          <h4 className='text-xl underline'>Alpha Pinger</h4>
          <p>Profit = Profit / teh is real {">"} ai = shit</p>
          <div className='grid grid-rows-3 md:grid-rows-2 grid-cols-2 md:grid-cols-3 gap-1'>
            <img src='/pinger1.png' alt='pinger' className='' />
            <img src='/pinger2.png' alt='pinger' className='' />
            <img src='/pinger3.png' alt='pinger' className='' />
            <img src='/pinger4.png' alt='pinger' className='' />
            <img src='/pinger5.png' alt='pinger' className='' />
            <img src='/pinger6.png' alt='pinger' className='' />
          </div>
        </section>

        <h2 className='text-2xl underline'>$KRYPT</h2>

        <section ref={sectionRefs[6]} className="flex flex-col items-center justify-center gap-4">
          <h4 className='text-xl underline'>KRYPT Tokenomics</h4>
          <p>The KRYPT will have 2 tokens:</p>
          <ol className='list-decimal'>
            <li>The primary utility token $KRYPT;</li>
            <li>The staking token $wKRYPT;</li>
          </ol>
          <h3 className='text-lg'>$KRYPT</h3>
          <p>KRYPT is the native equity and utility token of the protocol</p>
          <p>Total Supply: 1,000,000</p>
          <p>Token allocation:</p>
          <ul className='list-disc'>
            <li>10% Private Sale (10 participants, each receiving 1%, vested for 2 months via Sablier, along with access to tools).</li>
            <li>5% is allocated for team, which will be locked for 6 months via Sablier.</li>
            <li>10% is allocated to the staking protocol.</li>
            <li>75% liquidity pool (LP).</li>
          </ul>
          <h3 className='text-lg'>KRYPT Private Sale</h3>
          <p>We decided to conduct a private sale with trusted individuals to raise funds for the launch of the coin.</p>
          <p>We sold 10% of the total supply to 10 participants, each receiving 1%, which will be vested for 2 months via Sablier (link) along with access to tools.</p>
          <p>Private sale was collected in 15/09/2024.</p>
          <h3 className='text-lg'>Team allocation</h3>
          <p>The team allocation is designated for core contributors as well as smaller contributors, such as auditors and developers who supported us during the building phase.</p>
          <p>Each core contributor has received a small percentage of the supply, so please support $KRYPT to ensure we get compensated for our efforts.</p>
          <h3 className='text-lg'>Staking</h3>
          <p>10% is allocated to the staking protocol, which is designed to incentivize token holders to participate actively in our ecosystem. This allocation will be used to reward users who stake their tokens, providing them with the opportunity to earn additional tokens over time.</p>
          <h3 className='text-lg'>Liquidity Pool</h3>
          <p>We have allocated 75% of the KRYPT supply to the initial KRYPT/WETH liquidity pool, along with the corresponding amount of ETH, and this allocation has been locked for 3 years (until next bullrun).</p>
        </section>

        <section ref={sectionRefs[7]} className="flex flex-col items-center justify-center gap-4">
          <h4 className='text-xl underline'>Links</h4>
          <p>Here are some links to our social media pages, our website, and our blog.</p>
          <ul className='list-disc'>
          </ul>
        </section>

        <section ref={sectionRefs[8]} className="flex flex-col items-center justify-center gap-4">
          <h4 className='text-xl underline'>Privacy Policy</h4>
          <h3 className='text-lg'>Welcome to Krypt Capital</h3>
          <p>This Privacy Policy explains how we collect, use, disclose, and protect your information when you visit our website WEB LINK (the "Website").</p>
          <p>Personal Information: We may collect personal information that you provide to us, such as your name, email address, and other contact details.</p>
          <p>Usage Data: We may collect information about your interactions with our Website, including IP address, browser type, and access times.</p>
          <ol className='list-decimal'>
            <li>Use of Information</li>
            <p>We use the information we collect to:</p>
            <ul className='list-disc'>
              <li>Provide, operate, and maintain our services.</li>
              <li>Improve, personalize, and expand our services.</li>
              <li>Communicate with you, either directly or through one of our partners, for customer service, updates, and other information.</li>
            </ul>
            <li>Sharing of Information</li>
            <p>We do not sell or trade your personal information to third parties. We may share your information with:</p>
            <ul className='list-disc'>
              <li>Service providers who assist us in operating our Website and conducting our business.</li>
              <li>Legal authorities if required by law or in response to valid requests.</li>
            </ul>
            <li>Security of Information</li>
            <p>We implement security measures to protect your information from unauthorized access, use, or disclosure.</p>
            <li>Cookies</li>
            <p>We use cookies and similar tracking technologies to enhance your experience on our Website. You can choose to disable cookies through your browser settings.</p>
            <li>Your rights</li>
            <p>Depending on your location, you may have the right to:</p>
            <ul className='list-disc'>
              <li>Access and update your personal information.</li>
              <li>Request deletion of your personal information.</li>
              <li>Object to the processing of your personal information.</li>
            </ul>
            <li>Changes to This Privacy Policy</li>
            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our Website.</p>
          </ol>
        </section>

        <section ref={sectionRefs[9]} className="flex flex-col items-center justify-center gap-4">
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
        </section>
      </div>
    </div>
  )
}
