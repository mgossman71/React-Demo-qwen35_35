export default function Footer() {
  return (
    <footer className="bg-ffl-dark text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🛡️</span>
              <span className="text-xl font-bold">MJG Firearms</span>
            </div>
            <p className="text-slate-300 text-sm">
              Professional FFL firearms transfer services. Safe, secure, and compliant.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Contact</h3>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>📞 (612) 508-6258</li>
              <li>📧 info@mjgfirearms.com</li>
              <li>📍 Andover, MN 55304</li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Hours</h3>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>Mon-Fri: 9AM-6PM</li>
              <li>Sat: 10AM-4PM</li>
              <li>Sun: Closed</li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>
                <a href="#services" className="hover:text-ffl-gold transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-ffl-gold transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#eligibility" className="hover:text-ffl-gold transition-colors">
                  Eligibility
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-ffl-gold transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} MJG Firearms. All rights reserved.</p>
          <p className="mt-2">FFL Licensed & Compliant • NICS Background Checks Processed</p>
        </div>
      </div>
    </footer>
  );
}
