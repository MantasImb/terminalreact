export default function Navbar() {
  return (
    <nav className='absolute top-0 bg-slate-100 w-screen flex justify-start items-center gap-4'>
      <img src='/logo-black.svg' alt='logo' className='w-8 h-8' />
      <ul className="flex justify-center items-center gap-4 text-md">
        <li className="mt-1 px-2 text-lg bg-slate-100"><a href="https://kryptcapital.gitbook.io/kryptcapital" target="_blank">Docs</a></li>
        <li className="mt-1 px-2 text-lg bg-slate-100"><a href="https://x.com/KryptCapital_" target="_blank">X</a></li>
        <li className="mt-1 px-2 text-lg bg-slate-100"><a href="https://t.me/KryptCapital" target="_blank">Telegram</a></li>
        <li className="mt-1 px-2 text-lg bg-slate-100"><a href="https://linktr.ee/kryptcapital" target="_blank">Linktree</a></li>
        <li className="mt-1 px-2 text-lg bg-slate-100"><a href="https://github.com/KryptCapital" target="_blank">Github</a></li>
      </ul>
    </nav>
  )
}
