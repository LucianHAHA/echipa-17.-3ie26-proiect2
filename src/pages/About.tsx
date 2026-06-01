import galaxy from '../assets/img/alex-fxrwJGMCz_g-unsplash.jpg'
import nebula from '../assets/img/alexander-andrews-eNoeWZkO7Zc-unsplash.jpg'
import space from '../assets/img/ferenc-horvath-skcFiBu91AA-unsplash.jpg'

function About() {
  return (
    <main>
      {/* Hero About */}
      <section className="relative h-72 flex items-center justify-center">
        <img src={galaxy} alt="about hero" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-extrabold text-white tracking-widest">About Us</h1>
          <p className="text-purple-400 mt-2 text-lg">Born from the stars, made for Earth.</p>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-purple-400 mb-6">Our Story</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          GalaxyShop was founded in 2022 by a group of space enthusiasts and fashion lovers who believed that clothing
          could be more than just fabric — it could be a window to the universe. Every piece in our collection is
          designed with deep space imagery, nebula prints, and cosmic colors that make you feel like you're wearing
          the night sky.
        </p>
      </section>

      {/* Values */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-purple-400 text-center mb-10">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '🌌', title: 'Cosmic Design', desc: 'Every print is inspired by real NASA imagery and deep space photography.' },
              { icon: '♻️', title: 'Sustainability', desc: 'We use organic cotton and eco-friendly inks for all our products.' },
              { icon: '🚀', title: 'Quality First', desc: 'Premium materials that are built to last, just like the stars.' },
            ].map(v => (
              <div key={v.title} className="bg-gray-800 rounded-2xl p-8 text-center hover:bg-gray-700 transition">
                <div className="text-5xl mb-4">{v.icon}</div>
                <h3 className="text-white font-bold text-xl mb-2">{v.title}</h3>
                <p className="text-gray-400">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-purple-400 text-center mb-10">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Luna Ionescu', role: 'Founder & Designer', img: nebula },
            { name: 'Alex Popescu', role: 'Lead Developer', img: space },
            { name: 'Maria Stan', role: 'Marketing Director', img: galaxy },
          ].map(m => (
            <div key={m.name} className="text-center">
              <img src={m.img} alt={m.name} className="w-40 h-40 rounded-full mx-auto object-cover mb-4 border-4 border-purple-600" />
              <h3 className="text-white font-bold text-xl">{m.name}</h3>
              <p className="text-purple-400">{m.role}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default About