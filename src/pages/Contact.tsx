import { useState } from 'react'
import space from '../assets/img/nasa-Q1p7bh3SHj8-unsplash.jpg'

function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <main>
      {/* Hero */}
      <section className="relative h-64 flex items-center justify-center">
        <img src={space} alt="contact hero" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-extrabold text-white tracking-widest">Contact Us</h1>
          <p className="text-purple-400 mt-2">We'd love to hear from you.</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Info */}
        <div>
          <h2 className="text-2xl font-bold text-purple-400 mb-6">Get in Touch</h2>
          <div className="flex flex-col gap-6">
            {[
              { icon: '📍', title: 'Address', info: 'Str. Galaxiei 42, Timișoara, Romania' },
              { icon: '📧', title: 'Email', info: 'contact@galaxyshop.ro' },
              { icon: '📞', title: 'Phone', info: '+40 721 000 000' },
              { icon: '🕐', title: 'Hours', info: 'Mon-Fri: 9:00 - 18:00' },
            ].map(item => (
              <div key={item.title} className="flex items-start gap-4">
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <p className="text-white font-semibold">{item.title}</p>
                  <p className="text-gray-400">{item.info}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="bg-gray-900 rounded-2xl p-8">
          {sent ? (
            <div className="text-center py-10">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
              <p className="text-gray-400">We'll get back to you faster than light.</p>
              <button onClick={() => setSent(false)} className="mt-6 px-6 py-2 bg-purple-600 rounded-full text-white hover:bg-purple-700 transition">
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold text-white mb-2">Send a Message</h2>
              <input
                type="text" placeholder="Your Name" required
                value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                className="bg-gray-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="email" placeholder="Your Email" required
                value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                className="bg-gray-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="text" placeholder="Subject" required
                value={form.subject} onChange={e => setForm({...form, subject: e.target.value})}
                className="bg-gray-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <textarea
                placeholder="Your Message" rows={5} required
                value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                className="bg-gray-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
              />
              <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-full font-bold text-lg transition">
                Send Message 🚀
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  )
}

export default Contact