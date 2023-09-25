import Nav from './Nav';

export default function Header() {

  return(
    <header className="fixed overflow-hidden top-0 flex flex-col items-center justify-center w-full min-w-[300px] pb-0.5 border-b-2 border-solid shadow-lg select-none bg-silver-50 border-silver-300">
      <div className="flex flex-col items-center justify-center gap-2 p-3 mb-2 text-center">
        <i className="text-2xl text-yellow-400 fa-solid fa-shop"></i>
        <h1 className="text-4xl font-black text-navy-500 font-display">shop &apos;n&apos; roll</h1>
        <p className="text-4xl text-silver-800 font-motto">rollin&apos;, strollin&apos;, and shoppin&apos; away</p>
      </div>
      <Nav />
    </header>
  )
}
