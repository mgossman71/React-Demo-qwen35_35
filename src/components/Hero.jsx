import { siteData } from '../data/site';

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-ffl-dark to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Professional{' '}
              <span className="text-ffl-gold">FFL Firearm</span> Transfer Services
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl">
              {siteData.tagline}. Safe, secure, and fully compliant with all federal and state regulations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a href="#contact" className="btn-primary text-center">
                Start a Transfer
              </a>
              <a href="#how-it-works" className="btn-secondary text-center">
                How It Works
              </a>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {siteData.features.slice(0, 3).map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span className="text-2xl">{feature.icon}</span>
                  <span className="text-slate-300">{feature.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image/Graphic */}
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">🏅</div>
                  <div>
                    <div className="font-semibold text-lg">FFL Licensed</div>
                    <div className="text-slate-300 text-sm">Fully compliant with ATF regulations</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">⚡</div>
                  <div>
                    <div className="font-semibold text-lg">Fast Processing</div>
                    <div className="text-slate-300 text-sm">7-10 business days average</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">🔒</div>
                  <div>
                    <div className="font-semibold text-lg">Secure Storage</div>
                    <div className="text-slate-300 text-sm">24/7 monitored facility</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">👨‍💼</div>
                  <div>
                    <div className="font-semibold text-lg">Expert Staff</div>
                    <div className="text-slate-300 text-sm">Certified FFL professionals</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
