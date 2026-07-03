import { MapPin, Car, Phone, MessageCircle, ArrowUpRight } from 'lucide-react'
import FadeIn from './FadeIn'

const ContactSection = () => {
  const bookWhatsApp = () => {
    const msg = encodeURIComponent(
      'Hello SAY-AUTOS GH! I visited your website and I am interested in your car services. Please get back to me with more details. Thank you!'
    )
    window.open(`https://wa.me/233000000000?text=${msg}`, '_blank')
  }

  return (
    <section id="contact" className="relative bg-black py-16 px-8 md:px-16 lg:px-20">
      <FadeIn>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-heading)] italic text-white text-5xl md:text-6xl lg:text-[5rem] leading-[0.9] tracking-[-3px]">
            Ready to Ride?
          </h2>
          <p className="mt-4 text-sm md:text-base text-white/80 max-w-xl mx-auto font-[family-name:var(--font-body)] font-light leading-relaxed">
            Visit us at Awoshie, Ghana, or reach out today. Whether you are buying, renting, importing, or
            servicing — SAY-AUTOS GH is your one-stop automotive partner.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
            <a
              href="tel:+233000000000"
              className="liquid-glass-strong inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white font-[family-name:var(--font-body)]"
              style={{ borderRadius: '9999px' }}
            >
              Call Us Now <Phone size={20} />
            </a>
            <button
              onClick={bookWhatsApp}
              className="liquid-glass inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white font-[family-name:var(--font-body)] cursor-pointer border-none"
              style={{ borderRadius: '9999px' }}
            >
              WhatsApp <MessageCircle size={20} />
            </button>
          </div>
          <div className="mt-12 flex items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-white/60" />
              <span className="text-xs text-white/60 font-[family-name:var(--font-body)]">
                Awoshie, Ghana
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Car size={16} className="text-white/60" />
              <span className="text-xs text-white/60 font-[family-name:var(--font-body)]">
                SAY-AUTOS GH &copy; 2025
              </span>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}

export default ContactSection
