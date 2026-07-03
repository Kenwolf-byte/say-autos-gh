import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react'

const cars = [
  {
    name: 'Hyundai Tucson',
    image: '/hyundai-tucson.jpg',
    tag: 'SUV',
    desc: 'Spacious, reliable, and ready for Ghanaian roads.',
  },
  {
    name: 'Mercedes-Benz C300',
    image: '/benz-c300.jpg',
    tag: 'Luxury Sedan',
    desc: 'Executive comfort with premium performance.',
  },
  {
    name: 'Honda Civic',
    image: '/honda-civic.jpg',
    tag: 'Compact Sedan',
    desc: 'Fuel-efficient and stylish for city driving.',
  },
  {
    name: 'Hyundai Santa Fe',
    image: '/hyundai-santa-fe.jpg',
    tag: 'Premium SUV',
    desc: 'Family-sized luxury with advanced safety.',
  },
]

const FleetSection = () => {
  const [idx, setIdx] = useState(0)
  const next = () => setIdx((i) => (i + 1) % cars.length)
  const prev = () => setIdx((i) => (i - 1 + cars.length) % cars.length)

  const bookCar = (carName: string) => {
    const msg = encodeURIComponent(
      `Hello SAY-AUTOS GH! I am interested in the ${carName}. I saw it on your website and would like to book it. Please get back to me with availability and pricing. Thank you!`
    )
    window.open(`https://wa.me/233000000000?text=${msg}`, '_blank')
  }

  return (
    <section id="fleet" className="relative bg-black py-24 px-8 md:px-16 lg:px-20 overflow-hidden">
      {/* Background subtle grid */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(27,111,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(27,111,255,0.08) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <p className="text-sm font-[family-name:var(--font-body)] text-white/80 mb-4">// Fleet</p>
          <h2 className="font-[family-name:var(--font-heading)] italic text-white text-5xl md:text-6xl lg:text-[5rem] leading-[0.9] tracking-[-3px]">
            Our Premium Fleet
          </h2>
          <p className="mt-4 text-sm md:text-base text-white/70 max-w-xl mx-auto font-[family-name:var(--font-body)] font-light">
            Drive excellence. Every vehicle is inspected, serviced, and ready for the road.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative flex items-center justify-center">
          {/* Prev */}
          <button
            onClick={prev}
            className="liquid-glass w-12 h-12 flex items-center justify-center cursor-pointer shrink-0 mr-4 hover:scale-105 transition-transform"
            style={{ borderRadius: '9999px' }}
          >
            <ChevronLeft className="text-[#D4A417]" size={24} />
          </button>

          {/* Card */}
          <div className="flex-1 max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 50, filter: 'blur(10px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="liquid-glass p-6 md:p-8"
                style={{ borderRadius: '1.25rem' }}
              >
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="w-full md:w-1/2 aspect-[4/3] overflow-hidden" style={{ borderRadius: '0.75rem' }}>
                    <img
                      src={cars[idx].image}
                      alt={cars[idx].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full md:w-1/2 text-center md:text-left">
                    <span
                      className="liquid-glass-gold px-3 py-1 text-[11px] text-white/90 font-[family-name:var(--font-body)]"
                      style={{ borderRadius: '9999px' }}
                    >
                      {cars[idx].tag}
                    </span>
                    <h3 className="font-[family-name:var(--font-heading)] italic text-white text-3xl md:text-4xl tracking-[-1px] leading-none mt-4">
                      {cars[idx].name}
                    </h3>
                    <p className="mt-3 text-sm text-white/80 font-[family-name:var(--font-body)] font-light leading-snug">
                      {cars[idx].desc}
                    </p>
                    <button
                      onClick={() => bookCar(cars[idx].name)}
                      className="liquid-glass-strong inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white font-[family-name:var(--font-body)] mt-6 cursor-pointer border-none hover:scale-105 transition-transform"
                      style={{ borderRadius: '9999px' }}
                    >
                      Book This Car <ArrowUpRight size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next */}
          <button
            onClick={next}
            className="liquid-glass w-12 h-12 flex items-center justify-center cursor-pointer shrink-0 ml-4 hover:scale-105 transition-transform"
            style={{ borderRadius: '9999px' }}
          >
            <ChevronRight className="text-[#D4A417]" size={24} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {cars.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className="cursor-pointer border-none bg-transparent p-1"
            >
              <div
                className={`w-2.5 h-2.5 transition-all duration-300 ${
                  i === idx ? 'bg-[#D4A417] scale-125' : 'bg-white/30'
                }`}
                style={{ borderRadius: '9999px' }}
              />
            </button>
          ))}
        </div>

        {/* Grid thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {cars.map((car, i) => (
            <motion.button
              key={car.name}
              onClick={() => setIdx(i)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`liquid-glass p-3 cursor-pointer border-none text-left transition-all duration-300 ${
                i === idx ? 'ring-1 ring-[#D4A417]/60' : 'opacity-60 hover:opacity-100'
              }`}
              style={{ borderRadius: '1rem' }}
            >
              <div className="aspect-[4/3] overflow-hidden mb-3" style={{ borderRadius: '0.5rem' }}>
                <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
              </div>
              <p className="font-[family-name:var(--font-heading)] italic text-white text-sm tracking-tight">
                {car.name}
              </p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FleetSection
