function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-purple-900 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-2xl font-bold text-purple-400">🌌 GalaxyShop</p>
          <p className="text-gray-400 text-sm mt-1">Wear the universe.</p>
        </div>
        <div className="flex gap-6 text-gray-400 text-sm">
          <a href="/" className="hover:text-purple-400 transition">Home</a>
          <a href="/shop" className="hover:text-purple-400 transition">Shop</a>
          <a href="/about" className="hover:text-purple-400 transition">About</a>
          <a href="/contact" className="hover:text-purple-400 transition">Contact</a>
        </div>
        <p className="text-gray-600 text-sm">© 2026 GalaxyShop. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer