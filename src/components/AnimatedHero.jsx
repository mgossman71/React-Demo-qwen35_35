import { siteData } from '../data/site';
import ScrollAnimations from './ScrollAnimations';

export default function AnimatedHero() {
  return (
    <section id="home" className="pt-24 pb-24 gradient-hero text-white relative overflow-hidden">
      <ScrollAnimations />
      
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-600 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600 rounded-full blur-[100px] animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-amber-400 rounded-full blur-[80px] animate-blob"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div data-animate className="opacity-0 translate-y-8 transition-all duration-700 delay-100">
              <span className="badge inline-block mb-6 px-6 py-2 text-base">
                🔥 Trusted by 500+ Customers
              </span>
            </div>
            
            <div data-animate className="opacity-0 translate-y-8 transition-all duration-700 delay-200">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
                <span className="block">Professional</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300 animate-gradient">
                  FFL Firearm
                </span>
                <span className="block">Transfer Services</span>
              </h1>
            </div>

            <div data-animate className="opacity-0 translate-y-8 transition-all duration-700 delay-300">
              <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
                <span className="text-white font-semibold">Safe, secure, and fully compliant</span> with all federal and state regulations. Your trust is our priority.
              </p>
            </div>

            <div data-animate className="opacity-0 translate-y-8 transition-all duration-700 delay-400">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <a href="#contact" className="btn-primary group relative overflow-hidden">
                  <span className="relative z-10">Start a Transfer</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-700 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </a>
                <a href="#how-it-works" className="btn-secondary">
                  How It Works
                </a>
              </div>
            </div>

            <div data-animate className="opacity-0 translate-y-8 transition-all duration-700 delay-500">
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                {siteData.features.slice(0, 3).map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-2xl shadow-lg animate-scale-in">
                      {feature.icon}
                    </div>
                    <div className="text-slate-300 text-sm font-medium">{feature.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hero Graphic */}
          <div className="hidden lg:block">
            <div className="glass-card relative">
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-500 rounded-2xl flex items-center justify-center text-4xl shadow-xl animate-float">
                🛡️
              </div>
              
              <div className="space-y-6">
                {siteData.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center text-3xl shadow-lg">
                      {feature.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-lg text-white mb-1">{feature.title}</div>
                      <div className="text-slate-300 text-sm">{feature.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
