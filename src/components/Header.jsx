import Nav from "./Nav";

function Header() {
  return(
    <div className="flex flex-col items-center justify-center w-full border-b-2 border-solid shadow-lg select-none bg-black-50 border-silver-300">
      <header className="flex flex-col items-center justify-center gap-2 p-3 text-center">
        <i className="text-2xl text-yellow-300 fa-solid fa-shop"></i>
        <h1 className="text-4xl font-black text-navy-500 font-display">shop &apos;n&apos; roll</h1>
        <p className="text-4xl text-silver-800 font-motto">rollin&apos;, strollin&apos;, and sho-ppin&apos; away</p>
    </header>
    <Nav />
    </div>
  )
}

export default Header;