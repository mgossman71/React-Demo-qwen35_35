import { siteData } from '../data/site';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white relative">
      <!-- Parallax background pattern -->
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)`,
        backgroundSize: '20px 20px'
      }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="section-header">
          <span className="badge mb-4">Our Services</span>
          <h2 className="section-title">FFL Transfer Services</h2>
          <p className="section-subtitle">
            We provide comprehensive firearms transfer services for all your FFL needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteData.services.map((service, index) => (
            <div key={index} className="card group hover:border-amber-500 transition-all duration-300 hover:-translate-y-2">
              <div className="feature-icon mb-6 group-hover:scale-110 transition-transform duration-300">
                {['💼', '🛒', '📜', '🏛️'][index]}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 mb-4 leading-relaxed">{service.description}</p>
              <div className="mb-4">
                <span className="text-amber-600 font-bold text-lg">{service.fees}</span>
              </div>
              <ul className="space-y-2">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-sm text-slate-600 group-hover:text-slate-700 transition-colors">
                    <span className="text-amber-500 mt-1 flex-shrink-0 group-hover:scale-125 transition-transform">✓</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">
            All transfers are conducted in full compliance with federal and state regulations.
          </p>
          <a href="#contact" className="btn-primary">
            Request a Transfer
          </a>
        </div>
      </div>
    </section>
  );
}
