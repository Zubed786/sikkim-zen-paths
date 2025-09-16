const Footer = () => {
  return (
    <footer className="bg-gradient-monastery text-black mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Digital Monasteries</h3>
            <p className="text-black/80 leading-relaxed">
              Preserving and promoting the rich monastery heritage of Sikkim through digital innovation 
              and cultural preservation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><a href="/heritage" className="text-white/80 hover:text-white transition-gentle">Monastery Heritage</a></li>
              <li><a href="/virtual" className="text-white/80 hover:text-white transition-gentle">Virtual Tours</a></li>
              <li><a href="/donations" className="text-white/80 hover:text-white transition-gentle">Support Monasteries</a></li>
              <li><a href="/marketplace" className="text-white/80 hover:text-white transition-gentle">Sacred Artifacts</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <p className="text-white/80 mb-2">Gangtok, Sikkim</p>
            <p className="text-white/80 mb-2">info@digitalmonasteries.org</p>
            <p className="text-white/80">+91 98765 43210</p>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60">
            © 2024 Digital Monasteries. Preserving Sacred Heritage for Future Generations.
          </p>
          <p className="text-white/40 text-sm mt-2">
            "May all beings find peace and wisdom" - Buddhist Blessing
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
