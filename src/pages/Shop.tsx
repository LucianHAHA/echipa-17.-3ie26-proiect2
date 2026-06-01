import hoodie from '../assets/img/hoodie.jpg'
import galaxy1 from '../assets/img/aron-visuals-GdP2aN8GS7k-unsplash.jpg'
import galaxy2 from '../assets/img/casey-horner-RmoWqDCqN2E-unsplash.jpg'
import galaxy3 from '../assets/img/jeremy-thomas-E0AHdsENmDg-unsplash.jpg'
import galaxy4 from '../assets/img/3d-render-boXjuvhEFpA-unsplash.jpg'
import galaxy5 from '../assets/img/andy-holmes-rCbdp8VCYhQ-unsplash.jpg'
import galaxy6 from '../assets/img/nate-rayfield-_WR6tUIAJe8-unsplash.jpg'

const products = [
  { id: 1, name: 'Galaxy Zip Hoodie', price: '€79.99', img: hoodie, tag: 'Bestseller' },
  { id: 2, name: 'Nebula Hoodie', price: '€69.99', img: galaxy1, tag: 'New' },
  { id: 3, name: 'Stardust T-Shirt', price: '€34.99', img: galaxy2, tag: '' },
  { id: 4, name: 'Cosmic Sweatshirt', price: '€59.99', img: galaxy3, tag: 'New' },
  { id: 5, name: 'Black Hole Tee', price: '€29.99', img: galaxy4, tag: '' },
  { id: 6, name: 'Milky Way Jacket', price: '€99.99', img: galaxy5, tag: 'Limited' },
  { id: 7, name: 'Aurora Hoodie', price: '€74.99', img: galaxy6, tag: '' },
]

function Shop() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold text-purple-400 mb-2 text-center">Our Collection</h1>
      <p className="text-gray-400 text-center mb-10">Handcrafted pieces inspired by the cosmos</p>

      {/* Filter bar */}
      <div className="flex gap-3 justify-center mb-10 flex-wrap">
        {['All', 'Hoodies', 'T-Shirts', 'Jackets', 'Accessories'].map(cat => (
          <button key={cat} className="px-5 py-2 rounded-full border border-purple-600 text-purple-400 hover:bg-purple-700 hover:text-white transition text-sm">
            {cat}
          </button>
        ))}
      </div>

      {/* Products grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(p => (
          <div key={p.id} className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-900 hover:scale-105 transition-transform group">
            <div className="relative">
              <img src={p.img} alt={p.name} className="w-full h-64 object-cover group-hover:opacity-80 transition" />
              {p.tag && (
                <span className="absolute top-3 left-3 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">{p.tag}</span>
              )}
            </div>
            <div className="p-5">
              <h3 className="text-white font-bold text-lg">{p.name}</h3>
              <p className="text-purple-400 font-bold text-xl mt-1">{p.price}</p>
              <button className="mt-4 w-full bg-purple-700 hover:bg-purple-600 text-white py-2 rounded-full transition font-semibold">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Shop