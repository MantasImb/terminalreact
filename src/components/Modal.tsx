import { useState } from 'react'

export default function Modal({ icon, title, children }:
  {
    icon?: string,
    title: string,
    children: React.ReactNode
  }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button className="flex items-center justify-center flex-col" onClick={() => setIsOpen(true)}>
        {icon ? <img src={icon} alt="icon" className='size-14' /> : null}
        <h2 className="mt-1 px-2 text-lg bg-slate-100">{title}</h2>
      </button>
      {isOpen ?
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={() => setIsOpen(false)} />
          <div className="fixed overflow-y-auto max-h-[80vh] max-w-[95vw] left-4 top-1/5 flex flex-col justify-start bg-slate-100 z-20">
            <header className="sticky top-0 flex w-[95vw] bg-slate-100">
              <div className="mx-auto flex h-7 w-[90vw] items-center justify-between bg-repeat-x bg-center bg-[url(/lines.svg)]">
                <button className="h-4 w-6 bg-slate-100 pr-2" onClick={() => setIsOpen(false)}>
                  <img src="/close.webp" alt="close" />
                </button>
                <h2 className="px-2 text-sm bg-slate-100">{title}</h2>
                <div />
              </div>
            </header>
            <div className="flex h-full flex-col items-center justify-center gap-4 p-8">
              {children}
            </div>
          </div>
        </>
        : null
      }
    </>
  )
}
