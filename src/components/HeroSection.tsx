import { ArrowUpRight, Play } from 'lucide-react'
import FadingVideo from './FadingVideo'
import BlurText from './BlurText'
import FadeIn from './FadeIn'

const ClockIcon = ({ size = 28, className = '' }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
)

const GlobeIcon = ({ size = 28, className = '' }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
)

const HeroSection = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const bookWhatsApp = () => {
    const msg = encodeURIComponent(
      'Hello SAY-AUTOS GH! I visited your website and I am interested in your car services. Please get back to me with more details. Thank you!'
    )
    window.open(`https://wa.me/233000000000?text=${msg}`, '_blank')
  }

  return (
    <section id="home" className="relative min-h-screen bg-black overflow-hidden flex flex-col">
      {/* Background video from public folder */}
      <FadingVideo
        src="/hero_video.mp4"
        className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top"
        style={{ width: '120%', height: '120%', zIndex: 0 }}
      />

      {/* z-10 layer: Hero content → Partners */}
      <div className="relative flex flex-col min-h-screen" style={{ zIndex: 10 }}>
        {/* Hero content (centered, pt-24 px-4) */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 pt-24 text-center">
          {/* Badge (delay 0.4s) */}
          <FadeIn delay={0.4}>
            <div className="liquid-glass inline-flex items-center gap-2 px-1.5 py-1.5" style={{ borderRadius: '9999px' }}>
              <span className="bg-[#1B6FFF] text-white px-3 py-1 text-xs font-semibold font-[family-name:var(--font-body)]" style={{ borderRadius: '9999px' }}>
                New
              </span>
              <span className="text-sm text-white/90 font-[family-name:var(--font-body)] pr-3">
                Premium Fleet Now Available in Awoshie, Ghana
              </span>
            </div>
          </FadeIn>

          {/* Headline — BlurText component */}
          <div className="mt-6">
            <BlurText
              text="Drive Your Dreams Across Ghana"
              className="text-6xl md:text-7xl lg:text-[5.5rem] font-[family-name:var(--font-heading)] italic text-white leading-[0.8] max-w-4xl justify-center tracking-[-4px]"
              delay={0.2}
            />
          </div>

          {/* Subheading (delay 0.8s) */}
          <FadeIn delay={0.8} className="mt-4">
            <p className="text-sm md:text-base text-white max-w-2xl font-[family-name:var(--font-body)] font-light leading-tight">
              Ghana's trusted destination for car imports, rentals, sales, and expert auto services.
              From the Hyundai Tucson to the Benz C300, we deliver quality vehicles and peace of mind
              — right here in Awoshie.
            </p>
          </FadeIn>

          {/* CTAs (delay 1.1s) */}
          <FadeIn delay={1.1} className="mt-6">
            <div className="flex items-center gap-6 flex-wrap justify-center">
              <button
                onClick={bookWhatsApp}
                className="liquid-glass-strong inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white font-[family-name:var(--font-body)] cursor-pointer border-none"
                style={{ borderRadius: '9999px' }}
              >
                Start Your Journey <ArrowUpRight size={20} />
              </button>
              <button
                onClick={() => scrollTo('fleet')}
                className="inline-flex items-center gap-2 text-sm font-medium text-white font-[family-name:var(--font-body)] hover:text-[#D4A417] transition-colors cursor-pointer bg-transparent border-none"
              >
                View Our Fleet <Play size={16} />
              </button>
            </div>
          </FadeIn>

          {/* Stats row (delay 1.3s) */}
          <FadeIn delay={1.3} className="mt-8">
            <div className="flex items-stretch gap-4 flex-wrap justify-center">
              <div className="liquid-glass p-5 w-[220px] flex flex-col" style={{ borderRadius: '1.25rem' }}>
                <div className="mb-auto">
                  <ClockIcon className="text-[#D4A417]" />
                </div>
                <div className="mt-4">
                  <div className="text-4xl font-[family-name:var(--font-heading)] italic text-white tracking-[-1px] leading-none">
                    15+
                  </div>
                  <div className="text-xs text-white font-[family-name:var(--font-body)] font-light mt-2">
                    Years Serving Ghana
                  </div>
                </div>
              </div>
              <div className="liquid-glass p-5 w-[220px] flex flex-col" style={{ borderRadius: '1.25rem' }}>
                <div className="mb-auto">
                  <GlobeIcon className="text-[#1B6FFF]" />
                </div>
                <div className="mt-4">
                  <div className="text-4xl font-[family-name:var(--font-heading)] italic text-white tracking-[-1px] leading-none">
                    500+
                  </div>
                  <div className="text-xs text-white font-[family-name:var(--font-body)] font-light mt-2">
                    Happy Customers Nationwide
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Partners / Featured Fleet (bottom of hero, delay 1.4s) */}
        <FadeIn delay={1.4} className="flex flex-col items-center gap-4 pb-8">
          <div className="liquid-glass px-3.5 py-1 text-xs font-medium text-white font-[family-name:var(--font-body)]" style={{ borderRadius: '9999px' }}>
            Premium Fleet Available Now
          </div>
          <div className="flex items-center gap-8 md:gap-16 flex-wrap justify-center px-4">
            {['Hyundai Tucson', 'Benz C300', 'Honda Civic', 'Hyundai Santa Fe'].map((car) => (
              <span key={car} className="font-[family-name:var(--font-heading)] italic text-white text-2xl md:text-3xl tracking-tight hover:text-[#D4A417] transition-colors cursor-default">
                {car}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default HeroSection
