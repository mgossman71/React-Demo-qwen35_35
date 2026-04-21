import { siteData } from '../data/site';

export default function Eligibility() {
  return (
    <section id="eligibility" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header">
          <span className="badge mb-4">Requirements</span>
          <h2 className="section-title">Eligibility Requirements</h2>
          <p className="section-subtitle">
            Before starting a transfer, ensure you meet the basic requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.eligibility.map((item, index) => (
            <div key={index} className="card border-l-4 border-ffl-gold">
              <div className="flex items-start space-x-4">
                <div className="text-3xl flex-shrink-0">
                  {index < 2 ? '⚖️' : index < 4 ? '🆔' : '✅'}
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Important Notice */}
        <div className="mt-12 bg-ffl-gold/10 border-l-4 border-ffl-gold p-6 rounded-r-lg">
          <div className="flex items-start space-x-4">
            <div className="text-3xl">⚠️</div>
            <div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                Important Notice
              </h3>
              <p className="text-slate-700">
                Even if you meet the basic requirements, you may still be prohibited from receiving a firearm. 
                We reserve the right to deny any transfer at our discretion. All transfers are subject to 
                federal and state background check requirements.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">
            Not sure if you qualify? Contact us for a free consultation.
          </p>
          <a href="#contact" className="btn-primary">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
