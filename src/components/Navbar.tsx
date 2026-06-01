import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dark, setDark] = useState(true)
  const [search, setSearch] = useState('')

  const toggleDark = () => {
    setDark(!dark)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <nav className="sticky top-0 z-50 bg-gray-950/90 backdrop-blur border-b border-purple-900">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-purple-400 tracking-widest whitespace-nowrap" style={{fontFamily:'Orbitron, sans-serif'}}>
          🌌 GalaxyShop
        </Link>

        {/* Search - desktop */}
        <div className="hidden md:flex flex-1 max-w-xs">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-gray-800 text-white text-sm rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-6 items-center">
          <Link to="/" className="hover:text-purple-400 transition">Home</Link>
          <Link to="/shop" className="hover:text-purple-400 transition">Shop</Link>
          <Link to="/about" className="hover:text-purple-400 transition">About</Link>
          <Link to="/contact" className="hover:text-purple-400 transition">Contact</Link>
          <button onClick={toggleDark} className="px-3 py-1 rounded-full border border-purple-500 text-purple-400 text-sm hover:bg-purple-900 transition">
            {dark ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>

        {/* Hamburger */}
        <button className="md:hidden text-purple-400 text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-950 px-4 pb-4 flex flex-col gap-4">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-gray-800 text-white text-sm rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-purple-400">Home</Link>
          <Link to="/shop" onClick={() => setMenuOpen(false)} className="hover:text-purple-400">Shop</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-purple-400">About</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-purple-400">Contact</Link>
          <button onClick={toggleDark} className="text-left text-purple-400">
            {dark ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar