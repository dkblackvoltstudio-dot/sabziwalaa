import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    
    // Lock scroll when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Our Solution", path: "/solution" },
  ];

  const getTextColor = () => {
    if (isScrolled) return "text-[#0a0f1e]";
    if (isHome) return "text-white";
    return "text-[#0a0f1e]";
  };

  const getBgColor = () => {
    if (isScrolled) return "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#15803d]/10 py-3";
    if (isHome) return "bg-transparent py-5";
    return "bg-white/80 backdrop-blur-sm border-b border-slate-100 py-3";
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${getBgColor()}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center">
          <Link to="/" className="flex flex-col group">
            <span className="text-2xl font-black tracking-tighter transition-colors text-[#15803d]">
              Sabziwalaa
            </span>
            <p className="text-[9px] uppercase tracking-[0.25em] font-black text-slate-500 leading-none mt-1 opacity-80 group-hover:opacity-100 transition-opacity">
              Future Door Services Pvt Ltd
            </p>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-8 text-[11px] font-black uppercase tracking-[0.2em]">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link 
                    key={link.path}
                    to={link.path} 
                    className={`relative py-1 transition-colors ${getTextColor()} ${isActive ? '' : 'opacity-60 hover:opacity-100'}`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div 
                        layoutId="navUnderline"
                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#15803d]" 
                      />
                    )}
                  </Link>
                );
              })}
            </div>
            
            <Link to="/about">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest flex items-center gap-2 border-2 transition-all ${
                  isScrolled || !isHome
                    ? "bg-[#0a0f1e] text-white border-[#0a0f1e] hover:bg-transparent hover:text-[#0a0f1e]"
                    : "bg-white text-[#0a0f1e] border-white hover:bg-transparent hover:text-white"
                }`}
              >
                Contact Us
                <ArrowUpRight className="w-3.5 h-3.5" />
              </motion.button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Toggle Button (Fixed Position to stay on top of overlay) */}
      <button 
        className={`md:hidden fixed top-4 right-6 z-[110] p-2 transition-colors ${mobileMenuOpen ? 'text-white' : getTextColor()}`}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle Menu"
      >
        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-[#0a0f1e] w-full h-full min-h-screen overflow-y-auto md:hidden"
            style={{ backgroundColor: '#0a0f1e' }}
          >
            <div className="flex flex-col min-h-screen w-full p-8 pt-28">
              <div className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.div 
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ delay: i * 0.05 + 0.1 }}
                  >
                    <Link 
                      to={link.path} 
                      onClick={() => setMobileMenuOpen(false)} 
                      className={`text-5xl font-black tracking-tighter transition-colors ${location.pathname === link.path ? 'text-[#15803d]' : 'text-white hover:text-[#15803d]'}`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.3 }}
                className="mt-auto pt-16 grid grid-cols-1 gap-10"
              >
                <div className="space-y-4">
                  <p className="text-slate-500 text-xs font-black uppercase tracking-[0.2em]">Quick Contact</p>
                  <a href="mailto:fds@sabziwalaa.com" className="text-xl text-white font-bold block hover:text-[#15803d] transition-colors">fds@sabziwalaa.com</a>
                  <p className="text-[#15803d] text-2xl font-black tracking-tight">+91 336 826 3768</p>
                </div>
                
                <div className="pt-8 border-t border-white/5">
                  <p className="text-slate-600 text-[10px] font-black uppercase tracking-widest leading-relaxed">
                    © 2026 Future Door Services <br /> Private Limited
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
