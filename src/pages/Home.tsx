import { Link } from 'react-router-dom'
import hero from '../assets/img/alex-fxrwJGMCz_g-unsplash.jpg'
import galaxy1 from '../assets/img/aron-visuals-GdP2aN8GS7k-unsplash.jpg'
import galaxy2 from '../assets/img/casey-horner-RmoWqDCqN2E-unsplash.jpg'
import galaxy3 from '../assets/img/jeremy-thomas-E0AHdsENmDg-unsplash.jpg'
import hoodie from '../assets/img/hoodie.jpg'

function Home() {
  return (
    <main>
      {/* Hero Banner */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <img src={hero} alt="hero" className="absolute inset-0 w-full h-full object-cover opacity-50" />
        <div className="relative z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-widest drop-shadow-lg">
            WEAR THE <span className="text-purple-400">UNIVERSE</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 mb-8">Fashion inspired by the cosmos. Limited collections, infinite style.</p>
          <Link to="/shop" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-purple-400 mb-10">Explore Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { img: galaxy1, title: 'Hoodies', desc: 'Galaxy printed hoodies for cosmic comfort.' },
            { img: galaxy2, title: 'T-Shirts', desc: 'Nebula designs on premium cotton tees.' },
            { img: galaxy3, title: 'Accessories', desc: 'Hats, bags and more from outer space.' },
          ].map((cat) => (
            <Link to="/shop" key={cat.title} className="group relative rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
              <img src={cat.img} alt={cat.title} className="w-full h-64 object-cover group-hover:opacity-70 transition" />
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-6 bg-gradient-to-t from-black/70">
                <h3 className="text-white text-2xl font-bold">{cat.title}</h3>
                <p className="text-gray-300 text-sm px-4 text-center">{cat.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Product */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <img src={hoodie} alt="Featured hoodie" className="w-full md:w-1/2 rounded-2xl shadow-2xl" />
          <div>
            <span className="text-purple-400 uppercase tracking-widest text-sm">Featured Product</span>
            <h2 className="text-4xl font-bold text-white mt-2 mb-4">Galaxy Zip Hoodie</h2>
            <p className="text-gray-400 text-lg mb-6">Our bestseller — a deep space watercolor print on a premium zip-up hoodie. Perfect for stargazers and fashion lovers alike.</p>
            <p className="text-3xl font-bold text-purple-400 mb-6">€79.99</p>
            <Link to="/shop" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition">
              View in Shop
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home