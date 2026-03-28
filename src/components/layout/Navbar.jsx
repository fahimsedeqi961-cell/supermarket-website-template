import { Link, NavLink } from "react-router-dom"
import { Search, Menu, X } from "lucide-react"
import { useState } from "react"
export default function Navbar() {
  const [isOpen, setIsopen] = useState(false);
  return (
    <>
      <header className="sticky top-0 z-50 bg-green-700 backdrop:blur-md shadow-sm h-20">

        <nav className="max-w-7xl mx-auto flex gap-6 px-6 py-4 justify-between items-center">
          <div>
            <Link to="/" className="text-2xl font-bold text-white">
              FreshMart
            </Link>
          </div>

          <div >
            <button
              onClick={() => setIsopen(!isOpen)}
              className="md:hidden "
            >
              {isOpen ?
                <X size={32} className="text-white" /> :
                <Menu size={32} className="text-white" />
              }
            </button>

          </div>

          <ul className="md:flex gap-12 hidden">
            <li className="text-lg font-semibold hover:text-yellow-400 transition-colors duration-300">
              <NavLink to="/" className={({ isActive }) =>
                isActive ? "text-yellow-500" : "text-white"}>
                Home
              </NavLink>
            </li>

            <li className="text-lg font-semibold hover:text-yellow-400 transition-colors duration-300">
              <NavLink to="/products" className={({ isActive }) =>
                isActive ? "text-yellow-500" : "text-white"}>
                Products
              </NavLink>
            </li>

            <li className="text-lg font-semibold hover:text-yellow-400 transition-colors duration-300">
              <NavLink to="/offers" className={({ isActive }) =>
                isActive ? "text-yellow-500" : "text-white"}>
                Offers
              </NavLink>
            </li>

            <li className="text-lg font-semibold hover:text-yellow-400 transition-colors duration-300">
              <NavLink to="/about" className={({ isActive }) =>
                isActive ? "text-yellow-500" : "text-white"}>
                About
              </NavLink>
            </li>

            <li className="text-lg font-semibold hover:text-yellow-400 transition-colors duration-300">
              <NavLink to="/contact" className={({ isActive }) =>
                isActive ? "text-yellow-500" : "text-white"}>
                Contact
              </NavLink>
            </li>

          </ul>

          <div className="relative w-80 hidden md:block">
            <input
              type="search"
              placeholder="Search products..."
              className="w-full border border-yellow-300 text-gray-800 bg-gray-100 py-2 pl-4 pr-10 rounded-full focus:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition "
            />

            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />

          </div>

          <button className="px-4 py-2 hidden md:block rounded-lg text-gray-200 font-semibold bg-yellow-500 hover:bg-yellow-400 cursor-pointer transition-colors duration-300">
            Shop Now
          </button>

        </nav>


        {/* Hamburger Menu */}

        <ul
          className={`absolute top-full left-0 md:hidden flex flex-col space-y-6 
            w-full bg-gray-100 shadow-lg p-4 text-gray-700 transform transition-all duration-300 
            ease-linear overflow-hidden
            ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1 pointer-events-none"}
            `}
        >
          <li
            onClick={() => setIsopen(false)}
            className="text-base font-semibold">
            <Link to="/" >Home</Link>
          </li>

          <li
            onClick={() => setIsopen(false)}
            className="text-base font-semibold">
            <Link to="/products" >Products</Link>
          </li>

          <li
            onClick={() => setIsopen(false)}
            className="text-base font-semibold">
            <Link to="/offers" >Offers</Link>
          </li>

          <li
            onClick={() => setIsopen(false)}
            className="text-base font-semibold">
            <Link to="/about" >About</Link>
          </li>

          <li
            onClick={() => setIsopen(false)}
            className="text-base font-semibold">
            <Link to="/contact" >Contact</Link>
          </li>

        </ul>
      </header>

    </>
  )
}