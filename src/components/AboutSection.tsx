import { motion } from 'motion/react'
import { MapPin, Clock, Award, Users } from 'lucide-react'

const AboutSection = () => {
  return (
    <section id="about" className="relative bg-black py-24 px-8 md:px-16 lg:px-20 overflow-hidden">
      {/* Background subtle gradient */}
      <div className="absolute inset-0 opacity-20" style={{
        background: 'radial-gradient(ellipse at 30% 50%, rgba(27,111,255,0.15) 0%, transparent 60%)'
      }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <p className="text-sm font-[family-name:var(--font-body)] text-white/80 mb-4">// About</p>
          <h2 className="font-[family-name:var(--font-heading)] italic text-white text-5xl md:text-6xl lg:text-[5rem] leading-[0.9] tracking-[-3px]">
            Driven by Trust<br />Since Day One
          </h2>
        </motion.div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Story */}
          <motion.div
            initial={{ filter: 'blur(10px)', opacity: 0, x: -30 }}
            whileInView={{ filter: 'blur(0px)', opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="liquid-glass p-8 md:p-10"
            style={{ borderRadius: '1.25rem' }}
          >
            <h3 className="font-[family-name:var(--font-heading)] italic text-white text-3xl md:text-4xl tracking-[-1px] leading-none mb-6">
              15+ Years of Excellence
            </h3>
            <div className="space-y-4 text-sm text-white/85 font-[family-name:var(--font-body)] font-light leading-relaxed">
              <p>
                Founded in Awoshie, Ghana, SAY-AUTOS GH has grown from a small neighborhood garage into one of the most trusted automotive service providers in the Greater Accra region.
              </p>
              <p>
                We specialize in importing premium vehicles, offering flexible rental solutions, selling certified pre-owned cars, installing state-of-the-art GPS tracking systems, and providing world-class repairs and maintenance.
              </p>
              <p>
                Our mission is simple: to make car ownership and mobility accessible, safe, and enjoyable for every Ghanaian. Whether you are a first-time buyer, a business in need of a fleet, or a driver seeking reliable service, we treat every customer like family.
              </p>
              <p>
                With over 500 satisfied customers nationwide and partnerships with leading international dealers, SAY-AUTOS GH continues to set the standard for quality and integrity in the Ghanaian automotive industry.
              </p>
            </div>
          </motion.div>

          {/* Right: Stats & Info cards */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
              whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
              className="liquid-glass p-6 flex flex-col"
              style={{ borderRadius: '1.25rem' }}
            >
              <Clock className="text-[#D4A417] mb-4" size={28} />
              <div className="text-4xl font-[family-name:var(--font-heading)] italic text-white tracking-[-1px] leading-none">15+</div>
              <div className="text-xs text-white font-[family-name:var(--font-body)] font-light mt-2">Years in Operation</div>
            </motion.div>

            <motion.div
              initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
              whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
              className="liquid-glass p-6 flex flex-col"
              style={{ borderRadius: '1.25rem' }}
            >
              <Users className="text-[#1B6FFF] mb-4" size={28} />
              <div className="text-4xl font-[family-name:var(--font-heading)] italic text-white tracking-[-1px] leading-none">500+</div>
              <div className="text-xs text-white font-[family-name:var(--font-body)] font-light mt-2">Happy Customers</div>
            </motion.div>

            <motion.div
              initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
              whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
              className="liquid-glass p-6 flex flex-col"
              style={{ borderRadius: '1.25rem' }}
            >
              <Award className="text-[#D4A417] mb-4" size={28} />
              <div className="text-4xl font-[family-name:var(--font-heading)] italic text-white tracking-[-1px] leading-none">5</div>
              <div className="text-xs text-white font-[family-name:var(--font-body)] font-light mt-2">Core Services</div>
            </motion.div>

            <motion.div
              initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
              whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
              className="liquid-glass p-6 flex flex-col"
              style={{ borderRadius: '1.25rem' }}
            >
              <MapPin className="text-[#1B6FFF] mb-4" size={28} />
              <div className="text-4xl font-[family-name:var(--font-heading)] italic text-white tracking-[-1px] leading-none">1</div>
              <div className="text-xs text-white font-[family-name:var(--font-body)] font-light mt-2">Home: Awoshie, Ghana</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
