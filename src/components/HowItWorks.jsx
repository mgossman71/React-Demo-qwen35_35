import { siteData } from '../data/site';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header">
          <span className="badge mb-4">Simple Process</span>
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Getting your firearm transferred is easy. Here's what to expect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteData.process.map((step) => (
            <div key={step.step} className="relative">
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-ffl-primary text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                {step.step}
              </div>
              
              {/* Card */}
              <div className="card h-full pt-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Visual */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">
            Typical Timeline
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            {['Contact', 'Paperwork', 'Background Check', 'Receipt', 'Pickup'].map((stage, index) => (
              <div key={stage} className="text-center">
                <div className="w-16 h-16 bg-ffl-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">
                    {index === 0 && '📞'}
                    {index === 1 && '📋'}
                    {index === 2 && '✅'}
                    {index === 3 && '📦'}
                    {index === 4 && '🔑'}
                  </span>
                </div>
                <div className="font-semibold text-slate-900">{stage}</div>
                <div className="text-sm text-slate-600 mt-1">
                  {index === 0 && 'Day 1'}
                  {index === 1 && 'Day 2-3'}
                  {index === 2 && 'Day 3-5'}
                  {index === 3 && 'Day 6-8'}
                  {index === 4 && 'Day 8-10'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
