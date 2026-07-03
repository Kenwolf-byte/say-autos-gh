import { ArrowUpRight } from 'lucide-react'

const Navbar = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const bookWhatsApp = () => {
    const msg = encodeURIComponent(
      'Hello SAY-AUTOS GH! I visited your website and I am interested in your car services. Please get back to me with more details. Thank you!'
    )
    window.open(`https://wa.me/233000000000?text=${msg}`, '_blank')
  }

  return (
    <nav
      style={{
        position: 'fixed',
        top: '1rem',
        left: 0,
        right: 0,
        zIndex: 2147483647,
        pointerEvents: 'auto',
      }}
      className="flex items-center justify-between px-8 lg:px-16 py-4"
    >
      {/* Left: Logo — click to scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="liquid-glass w-12 h-12 flex items-center justify-center shrink-0 cursor-pointer"
        style={{ borderRadius: '9999px', pointerEvents: 'auto' }}
      >
        <img
          src="/say-autos-logo.jpg"
          alt="SAY-AUTOS GH"
          className="w-10 h-10 object-contain"
        />
      </button>

      {/* Center: Nav links (desktop only) */}
      <div
        className="hidden md:flex items-center liquid-glass px-1.5 py-1.5"
        style={{ borderRadius: '9999px', pointerEvents: 'auto' }}
      >
        {[
          { label: 'Home', id: 'home' },
          { label: 'Fleet', id: 'fleet' },
          { label: 'Services', id: 'services' },
          { label: 'About', id: 'about' },
          { label: 'Contact', id: 'contact' },
        ].map((item) => (
          <button
            key={item.label}
            onClick={() => scrollTo(item.id)}
            className="px-3 py-2 text-sm font-medium text-white/90 font-[family-name:var(--font-body)] hover:text-white transition-colors cursor-pointer bg-transparent border-none"
            style={{ pointerEvents: 'auto' }}
          >
            {item.label}
          </button>
        ))}
        <button
          onClick={bookWhatsApp}
          className="ml-2 bg-white text-black px-4 py-2 text-sm font-medium font-[family-name:var(--font-body)] flex items-center gap-1 cursor-pointer border-none"
          style={{ borderRadius: '9999px', whiteSpace: 'nowrap', pointerEvents: 'auto' }}
        >
          Book Now <ArrowUpRight size={16} />
        </button>
      </div>

      {/* Right: 48×48 invisible spacer to balance logo */}
      <div className="w-12 h-12 invisible shrink-0" />
    </nav>
  )
}

export default Navbar
