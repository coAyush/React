import NavbarElements from "./NavbarElements"
function Navbar() {
  return (
    <>
      <nav className="bg-indigo-600 h-22.5 mx-4 rounded-b-[40px] shadow-lg flex items-center pl-6 gap-5">
        <div className="flex items-center justify-center">
          <div className="w-15 h-15 bg-indigo-800 rounded-xl text-4xl  text-white font-bold flex items-center justify-center">F</div>
          <p className="text-white font-extrabold text-4xl">Fintrack</p>
        </div>
        <div className="flex flex-1 justify-center">
          <NavbarElements />
        </div>
        <div className="flex items-center justify-center ml-auto mr-2.5">
          <div className="w-12 h-12 rounded-full bg-indigo-800 flex items-center justify-center text-3xl text-white font-bold active:bg-amber-300">A</div>
        </div>
      </nav>
    </>
  )
}

export default Navbar