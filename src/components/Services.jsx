import { siteData } from '../data/site';

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header">
          <span className="badge mb-4">Our Services</span>
          <h2 className="section-title">FFL Transfer Services</h2>
          <p className="section-subtitle">
            We provide comprehensive firearms transfer services for all your FFL needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteData.services.map((service, index) => (
            <div key={index} className="card">
              <div className="text-4xl mb-4">{['💼', '🛒', '📜', '🏛️'][index]}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 mb-4">{service.description}</p>
              <div className="mb-4">
                <span className="text-ffl-gold font-semibold">{service.fees}</span>
              </div>
              <ul className="space-y-2">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-sm text-slate-600">
                    <span className="text-ffl-primary mt-1">✓</span>
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
