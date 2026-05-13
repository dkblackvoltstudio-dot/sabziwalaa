import { Link } from "react-router-dom";
import { ShieldCheck, Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { motion } from "motion/react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#f8fafc] border-t border-slate-200 pt-20 pb-10 overflow-hidden relative text-slate-900">
      {/* Refined Background Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-green/5 to-transparent pointer-events-none opacity-50" />
      <div className="absolute bottom-0 left-0 w-1/4 h-full bg-gradient-to-r from-brand-orange/5 to-transparent pointer-events-none opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          {/* Logo & Description Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex flex-col mb-8 group">
              <span className="text-3xl font-black tracking-tighter text-[#15803d]">
                Sabziwalaa
              </span>
              <p className="text-[9px] uppercase tracking-[0.25em] font-black text-slate-400 leading-none mt-1">
                FDS Pvt Ltd
              </p>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium max-w-xs">
              Revolutionizing employee benefits through direct-from-source food allowance programs and strategic MSME empowerment.
            </p>
            

          </div>

          {/* Quick Links Column */}
          <div className="lg:pl-10">
            <h5 className="font-black text-slate-900 mb-8 uppercase tracking-[0.25em] text-[10px]">Ecosystem</h5>
            <ul className="space-y-4">
              <li>
                <Link to="/solution" className="text-sm font-semibold text-slate-500 hover:text-brand-green transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-brand-green transition-colors" />
                  Our Solution
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm font-semibold text-slate-500 hover:text-brand-green transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-brand-green transition-colors" />
                  Direct Services
                </Link>
              </li>
              <li>
                <Link to="/solution" className="text-sm font-semibold text-slate-500 hover:text-brand-green transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-brand-green transition-colors" />
                  Partnerships
                </Link>
              </li>
              <li>
                <Link to="/about#leadership" className="text-sm font-semibold text-slate-500 hover:text-brand-green transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-brand-green transition-colors" />
                  Leadership
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div>
            <h5 className="font-black text-slate-900 mb-8 uppercase tracking-[0.25em] text-[10px]">Contact</h5>
            <ul className="space-y-5">
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex-shrink-0 flex items-center justify-center text-brand-green shadow-sm">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest leading-none mb-1.5">Email</p>
                  <a href="mailto:contact@sabziwalaa.com" className="text-sm font-bold text-slate-700 hover:text-brand-green transition-colors">contact@sabziwalaa.com</a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex-shrink-0 flex items-center justify-center text-brand-orange shadow-sm">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest leading-none mb-1.5">Phone</p>
                  <a href="tel:+913368263768" className="text-sm font-bold text-slate-700 hover:text-brand-green transition-colors">+91 336 826 3768</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Recognition Column */}
          <div className="lg:pl-5">
            <h5 className="font-black text-slate-900 mb-8 uppercase tracking-[0.25em] text-[10px]">Registry</h5>
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-green/5 rounded-bl-[4rem] -mr-4 -mt-4 transition-transform group-hover:scale-110" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-brand-green/10 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-brand-green" />
                  </div>
                  <div>
                    <p className="text-[11px] font-black text-slate-900 tracking-tight leading-tight">DIPP Recognized Startup</p>
                    <p className="text-[10px] font-bold text-brand-green">DIPP116770</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1.5 font-sans">Ministry Affiliation</p>
                    <p className="text-[10px] font-semibold text-slate-600 leading-relaxed italic">
                      Department for Promotion of Industry and Internal Trade (DPIIT)
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-50">
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1.5 font-sans">Corporate Entity</p>
                    <p className="text-[10px] font-bold text-slate-800">
                      Future Door Services Pvt Ltd
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <span>© 2026 Future Door Services Pvt Ltd</span>
            <div className="hidden md:block w-1 h-1 rounded-full bg-slate-300" />
            <div className="flex gap-6">
              <Link to="/about" className="hover:text-brand-green">Privacy Policy</Link>
              <Link to="/about" className="hover:text-brand-green">Terms of Service</Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 bg-white px-5 py-2.5 rounded-full border border-slate-100 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">PPP Initiative Live</span>
            </div>
            
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-brand-green transition-colors shadow-lg"
              title="Back to Top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
