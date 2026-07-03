import { Truck, Car, Tag, Satellite, Wrench, MapPin } from 'lucide-react'
import FadingVideo from './FadingVideo'
import FadeIn from './FadeIn'

const ServicesSection = () => {
  const services = [
    {
      title: 'Import of Cars',
      icon: <Truck className="text-white h-6 w-6" />,
      tags: ['Direct Import', 'Duty Cleared', 'Custom Orders', 'Inspection Pass'],
      body: 'We import vehicles directly from trusted international dealers. Every car is cleared, inspected, and delivered to your doorstep in Awoshie — hassle-free and fully documented.',
    },
    {
      title: 'Car Rentals',
      icon: <Car className="text-white h-6 w-6" />,
      tags: ['Daily Hire', 'Weekly Deals', 'Chauffeur Option', 'Airport Pickup'],
      body: 'Flexible daily and weekly rental plans with a premium fleet. Whether you need a sedan for the city or an SUV for the road, we have the perfect ride waiting for you.',
    },
    {
      title: 'Selling of Cars',
      icon: <Tag className="text-white h-6 w-6" />,
      tags: ['Certified Pre-Owned', 'Warranty Included', 'Trade-In Welcome', 'Financing Available'],
      body: 'Buy with confidence from our curated selection of certified pre-owned vehicles. Each car comes with warranty coverage and full service history. Trade-ins and financing welcome.',
    },
    {
      title: 'Tracking Installation',
      icon: <Satellite className="text-white h-6 w-6" />,
      tags: ['GPS Tracking', 'Real-Time Monitor', 'Theft Recovery', 'Geo-Fencing'],
      body: 'Protect your investment with professional GPS tracking installation. Monitor your vehicle in real-time, set geo-fences, and recover your car quickly in case of theft.',
    },
    {
      title: 'Repairs & Service',
      icon: <Wrench className="text-white h-6 w-6" />,
      tags: ['Full Diagnostics', 'Genuine Parts', 'Oil Service', 'AC & Electrical'],
      body: 'Expert maintenance and repairs using genuine parts. From routine oil changes to complex electrical and AC work, our certified technicians keep your vehicle running like new.',
    },
  ]

  return (
    <section id="services" className="relative min-h-screen bg-black overflow-hidden flex flex-col">
      {/* Background video from public folder */}
      <FadingVideo
        src="/Cinematic_aerial.mp4"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      />

      {/* Content */}
      <div className="relative px-8 md:px-16 lg:px-20 pt-24 pb-10 flex flex-col min-h-screen" style={{ zIndex: 10 }}>
        {/* Header (mb-auto) */}
        <div className="mb-auto">
          <FadeIn delay={0.2}>
            <p className="text-sm font-[family-name:var(--font-body)] text-white/80 mb-6">// Services</p>
          </FadeIn>
          <FadeIn delay={0.35}>
            <h2 className="font-[family-name:var(--font-heading)] italic text-white text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px]">
              Everything<br/>Auto
            </h2>
          </FadeIn>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 flex-1">
          {services.map((service, idx) => (
            <FadeIn key={service.title} delay={0.4 + idx * 0.15} className="h-full">
              <div className="liquid-glass p-6 min-h-[360px] flex flex-col h-full" style={{ borderRadius: '1.25rem' }}>
                {/* Top row */}
                <div className="flex items-start justify-between gap-4">
                  <div className="liquid-glass-gold w-11 h-11 flex items-center justify-center shrink-0" style={{ borderRadius: '0.75rem' }}>
                    {service.icon}
                  </div>
                  <div className="flex flex-wrap justify-end gap-1.5 max-w-[70%]">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="liquid-glass px-3 py-1 text-[11px] text-white/90 font-[family-name:var(--font-body)] whitespace-nowrap"
                        style={{ borderRadius: '9999px' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Middle: flex-1 spacer */}
                <div className="flex-1" />
                {/* Bottom */}
                <div className="mt-6">
                  <h3 className="font-[family-name:var(--font-heading)] italic text-white text-3xl md:text-4xl tracking-[-1px] leading-none">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-white/90 font-[family-name:var(--font-body)] font-light leading-snug max-w-[32ch]">
                    {service.body}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Location footer */}
        <FadeIn delay={1.2} className="mt-12 flex items-center justify-center gap-2">
          <MapPin size={20} className="text-white/80" />
          <span className="text-sm text-white/80 font-[family-name:var(--font-body)] font-light">
            Awoshie, Ghana — Serving Accra &amp; Beyond
          </span>
        </FadeIn>
      </div>
    </section>
  )
}

export default ServicesSection
