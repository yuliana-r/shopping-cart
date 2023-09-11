function Header() {
  return(
    <header className="flex flex-col justify-center items-center p-3 text-center gap-2 
    border-double border-silver border-b-2 w-full shadow-md">
        <i className="fa-solid fa-shop text-2xl text-blue"></i>
        <h1 className="font-display text-4xl font-black text-red">shop &apos;n&apos; roll</h1>
        <p className="font-motto text-4xl text-gray">rollin&apos;, strollin&apos;, and sho-ppin&apos; away</p>
    </header>
  )
}

export default Header;