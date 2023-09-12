import Nav from "./Nav";

function Header() {
  return(
    <div className="flex flex-col items-center justify-center w-full border-b-2 border-double shadow-md select-none border-silver">
      <header className="flex flex-col items-center justify-center gap-2 p-3 text-center">
        <i className="text-2xl fa-solid fa-shop text-blue"></i>
        <h1 className="text-4xl font-black font-display text-red">shop &apos;n&apos; roll</h1>
        <p className="text-4xl font-motto text-gray">rollin&apos;, strollin&apos;, and sho-ppin&apos; away</p>
    </header>
    <Nav />
    </div>
  )
}

export default Header;