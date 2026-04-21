import { useState, useEffect } from 'react';
import { siteData } from '../data/site';

export default function SplitHero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="pt-24 min-h-screen relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Panel - Dark */}
        <div className="relative min-h-[50vh] lg:min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center px-8 lg:px-16">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div 
              className="absolute top-20 left-20 w-64 h-64 bg-amber-600 rounded-full blur-3xl"
              style={{ transform: `translateY(${scrollY * 0.2}px)` }}
            ></div>
            <div 
              className="absolute bottom-20 right-20 w-96 h-96 bg-orange-600 rounded-full blur-3xl"
              style={{ transform: `translateY(${scrollY * -0.1}px)` }}
            ></div>
          </div>

          <div className="relative z-10 max-w-2xl">
            <div className="reveal-up" data-delay="100">
              <span className="inline-block badge mb-8 px-6 py-3 text-lg">
                🔥 Trusted FFL Partner Since 2015
              </span>
            </div>

            <div className="reveal-up" data-delay="200">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-tight mb-8">
                <span className="block">Safe, Secure,</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                  Stress-Free
                </span>
                <span className="block">Firearm Transfers</span>
              </h1>
            </div>

            <div className="reveal-up" data-delay="300">
              <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-xl">
                Professional FFL transfer services that handle all the paperwork, compliance, and security so you don't have to.
              </p>
            </div>

            <div className="reveal-up" data-delay="400">
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="btn-primary group relative overflow-hidden">
                  <span className="relative z-10 font-semibold">Start Your Transfer</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-700 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </a>
                <a href="#how-it-works" className="btn-secondary">
                  How It Works
                </a>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-6 reveal-up" data-delay="500">
              {siteData.features.slice(0, 3).map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-3xl mb-3 shadow-lg">
                    {feature.icon}
                  </div>
                  <div className="text-sm font-semibold text-slate-300">{feature.title}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 reveal-up" data-delay="600">
            <div className="animate-bounce">
              <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>

        {/* Right Panel - Light */}
        <div className="relative min-h-[50vh] lg:min-h-screen bg-gradient-to-br from-slate-50 to-white flex items-center px-8 lg:px-16">
          <div className="max-w-2xl">
            {/* Floating glass cards */}
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-amber-500 rounded-2xl flex items-center justify-center text-4xl shadow-xl z-10 animate-float-delay-1">
                🛡️
              </div>
              <div className="absolute top-1/3 -right-8 w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center text-3xl shadow-xl animate-float-delay-2">
                ✅
              </div>
            </div>

            <div className="space-y-8 reveal-up" data-delay="300">
              {siteData.features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-amber-300 group hover:-translate-y-1"
                  style={{ opacity: 0, transform: 'translateY(30px)' }}
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-lg text-slate-900 mb-1 group-hover:text-amber-600 transition-colors">
                      {feature.title}
                    </div>
                    <div className="text-slate-600 text-sm leading-relaxed">
                      {feature.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
