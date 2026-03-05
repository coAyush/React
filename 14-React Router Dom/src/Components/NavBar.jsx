import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="h-[65px] bg-cyan-500 flex items-stretch px-6">
      
      {/* Brand on LEFT */}
      <p className="font-extrabold text-amber-50 text-4xl flex items-center">
        Brand
      </p>

      {/* Spacer pushes links to right */}
      <div className="flex-1" />

      {/* Links on RIGHT */}
      <div className="flex items-stretch gap-2">
        <Link
          to="/"
          className="inline-flex items-center h-full px-4 font-bold text-xl text-white hover:bg-cyan-700 transition"
        >
          Home
        </Link>

        <Link
          to="/about"
          className="inline-flex items-center h-full px-4 font-bold text-xl text-white whitespace-nowrap hover:bg-cyan-700 transition"
        >
          About Us
        </Link>

        <Link
          to="/product"
          className="inline-flex items-center h-full px-4 font-bold text-xl text-white whitespace-nowrap hover:bg-cyan-700 transition"
        >
          Product
        </Link>
      </div>
    </div>
  )
}

export default NavBar