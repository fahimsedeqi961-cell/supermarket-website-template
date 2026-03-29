import { Link, NavLink } from "react-router-dom"
import { Search, Menu, X, ShoppingCart } from "lucide-react"
import { useState } from "react"
export default function Navbar() {
  const [isOpen, setIsopen] = useState(false);
  return (
    <>
      <header className="sticky top-0 z-50 bg-green-700/95 backdrop-blur-md shadow-md">

        <nav className="max-w-7xl mx-auto flex gap-6 px-4 md:px-6 h-20 py-4 justify-between items-center">

          {/* Logo & Mobile Menu Toggle */}
          <div className="flex items-center gap-4" >
            <button
              onClick={() => setIsopen(!isOpen)}
              className="md:hidden text-white hover:bg-green-600 p-1 rounded-md transition-colors "
            >
              {isOpen ?
                <X size={32} /> : <Menu size={32} />}
            </button>

            <Link to="/" className="text-2xl font-bold tracking-tight italic text-white">
              FRESH <span className="text-yellow-400">MART</span>
            </Link>

          </div>

          {/* Desktop navigation links */}

          <ul className="hidden md:flex gap-8 items-center ">
            {["Home", "Products", "Offers", "About", "Contact"].map((item) => (
              <li key={item}>
                <NavLink to={item === 'Home' ? '/' : `/$item.toLowerCase()`}
                  className={({ isActive }) =>
                    `text-sm font-bold uppercase tracking-wide transition-colors hover:text-yellow-400 ${isActive ? 'text-yellow-400' : 'text-white'}`}>

                  {item}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Search bar  */}
          <div className="relative  flex-grow max-w-md mx-4  sm:block">
            <input
              type="search"
              placeholder="Search products..."
              className="w-full border bg-white/10 border-white/20 text-white placeholder:text-green-100 py-2 pl-4 pr-10 rounded-full focus:bg-white focus:text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all "
            />

            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60" size={18} />

          </div>

          {/* Icon and Action button */}
          <div className="flex items-center gap-4 md:gap-5">

            <button className="text-white hover:text-yellow-400 transition-colors relative">
              <ShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-yellow-500 text-green-900 text-[10px] font-bold px-1.5 py-0.5 rounded-full">3</span>
            </button>

            <button className="hidden md:block px-6 py-2.5 rounded-full text-green-900 font-bold bg-yellow-400 hover:bg-yellow-300 shadow-sm cursor-pointer transition-transform active:scale-95">
              Shop Now
            </button>
          </div>

        </nav>


        {/* Hamburger Menu */}

        <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          onClick={() => setIsopen(false)}
        >
          <ul
            onClick={(e) => e.stopPropagation()}
            className={`absolute top-0 left-0 h-screen w-3/4 max-w-sm bg-white p-8  md:hidden flex flex-col gap-6 
            transition-transform duration-300 
            ease-out overflow-hidden
            ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
          >

            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-bold text-green-700">Menu</span>
              <X onClick={() => setIsopen(false)} className="text-gray-400 cursor-pointer" />
            </div>

            {/* Mobile items */}
            <li
              onClick={() => setIsopen(false)}
              className="border-b pb-2">
              <Link to="/products" className="text-lg font-semibold text-gray-800">Products</Link>
            </li>
            <li
              onClick={() => setIsopen(false)}
              className="border-b pb-2">
              <Link to="/offers" className="text-lg font-semibold text-gray-800">Hot offers</Link>
            </li>
            <li
              onClick={() => setIsopen(false)}
              className="border-b pb-2">
              <Link to="/about" className="text-lg font-semibold text-gray-800">About</Link>
            </li>
            <li
              onClick={() => setIsopen(false)}
              className="border-b pb-2">
              <Link to="/contact" className="text-lg font-semibold text-gray-800">Contact</Link>
            </li>

          </ul>
        </div>
      </header>

    </>
  )
}