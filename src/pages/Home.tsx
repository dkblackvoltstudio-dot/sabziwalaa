import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { Link } from "react-router-dom";
import { 
  Users, 
  FileText, 
  ClipboardCheck, 
  Store,
  ArrowRight
} from "lucide-react";
import { useState, useEffect } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const VEGETABLES = [
  { name: "🍅", color: "#ff5252", radius: 120, speed: 15, size: 40 },
  { name: "🥕", color: "#ff9100", radius: 180, speed: 25, size: 45 },
  { name: "🍆", color: "#7e57c2", radius: 240, speed: 20, size: 50 },
  { name: "🫑", color: "#4caf50", radius: 300, speed: 35, size: 45 },
  { name: "🧅", color: "#f06292", radius: 360, speed: 30, size: 40 }
];

export default function Home() {
  const [savingsValue, setSavingsValue] = useState(4200);

  useEffect(() => {
    const interval = setInterval(() => {
      setSavingsValue(prev => prev + Math.floor(Math.random() * 5));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-[#0a0f1e]">
        {/* Background Radial Pulses */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#15803d]/10 blur-[150px] rounded-full"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
          {/* Left Content */}
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="flex flex-col items-start text-left"
          >

            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] mb-8 tracking-tighter">
              Affordable Essentials <br />
              for Every <span className="text-[#15803d]">Indian</span> <br />
              <span className="text-[#ff9100]">Employee.</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-xl text-slate-400 leading-relaxed mb-10 max-w-lg font-medium">
              Transforming corporate food culture with India's first tech-driven essential benefits suite. Quality essentials, delivered at scale.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-wrap gap-6 items-center mb-16">
              <Link to="/about">
                <motion.button 
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(21,128,61,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#15803d] text-white px-10 py-5 rounded-full text-lg font-black tracking-tight flex items-center gap-3 transition-all"
                >
                  Know more
                  <ArrowRight className="w-5 h-5 font-black" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Section - Orbiting Animation */}
          <div className="relative h-[600px] flex items-center justify-center">
            {/* Center Basket */}
            <motion.div 
              animate={{ 
                rotateY: [0, 360],
                y: [0, -20, 0]
              }}
              transition={{ 
                rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="relative z-20 w-48 h-48 bg-gradient-to-br from-white/10 to-white/5 rounded-full border border-white/20 backdrop-blur-3xl flex items-center justify-center shadow-[0_0_50px_rgba(255,145,0,0.1)]"
            >
              <div className="text-7xl">🧺</div>
              
              {/* Particles/Sparkles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    scale: [0, 1, 0],
                    x: [0, (i % 2 === 0 ? 1 : -1) * 100],
                    y: [0, (i < 3 ? 1 : -1) * 100],
                    opacity: [0, 1, 0]
                  }}
                  transition={{ 
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: i * 0.5
                  }}
                  className={`absolute w-1 h-1 rounded-full ${i % 2 === 0 ? 'bg-[#15803d]' : 'bg-[#ff9100]'}`}
                />
              ))}
            </motion.div>

            {/* Orbiting Vegetables */}
            {VEGETABLES.map((veg, index) => (
              <div 
                key={index}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: veg.speed, repeat: Infinity, ease: "linear" }}
                  style={{ width: veg.radius * 2, height: veg.radius * 2 }}
                  className="relative rounded-full border border-white/5"
                >
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: veg.speed, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 left-1/2 -translate-x-1/2 -mt-6"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      style={{ fontSize: veg.size }}
                      className="drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                    >
                      {veg.name}
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            ))}

            {/* Savings Counter Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute bottom-10 right-0 bg-white shadow-2xl p-6 rounded-[2rem] border border-slate-100 z-30 flex items-center gap-5 min-w-[280px]"
            >
              <div className="relative">
                <div className="w-14 h-14 bg-[#15803d]/10 rounded-2xl flex items-center justify-center">
                  <Store className="text-[#15803d] w-7 h-7" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#15803d] rounded-full border-2 border-white animate-pulse" />
              </div>
              <div className="flex flex-col">
                <motion.p 
                  key={savingsValue}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl font-black text-[#0a0f1e] leading-none tracking-tighter"
                >
                  ₹{savingsValue.toLocaleString()}
                </motion.p>
                <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest mt-1">Saved This Month</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how" className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-orange/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-10 relative z-10">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-24"
          >
            <motion.span variants={fadeIn} className="text-brand-orange font-black uppercase tracking-[0.3em] text-xs mb-4 block">Strategic Process</motion.span>
            <motion.h2 variants={fadeIn} className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter">How It <span className="text-brand-green">Works</span></motion.h2>
            <motion.p variants={fadeIn} className="text-slate-500 max-w-2xl mx-auto font-medium text-lg italic mt-4">Empowering organizations and employees through a structured benefit model.</motion.p>
          </motion.div>

          <div className="relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden lg:block absolute top-[4.5rem] left-[10%] w-[80%] h-[2px] bg-slate-100 z-0" />
            
            <motion.div 
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10"
            >
              {[
                { 
                  icon: <Users className="w-8 h-8" />, 
                  title: "Partnership", 
                  desc: "Organization signs MOU with Sabziwalaa and formalizes the employee benefit partnership.",
                  color: "green"
                },
                { 
                  icon: <FileText className="w-8 h-8" />, 
                  title: "Login", 
                  desc: "Employees register and secure access through the Sabziwalaa platform for seamless benefits.",
                  color: "orange"
                },
                { 
                  icon: <ClipboardCheck className="w-8 h-8" />, 
                  title: "Eligibility Check", 
                  desc: "Rapid digital verification process keeps the platform secure and identifies eligible beneficiaries.",
                  color: "green"
                },
                { 
                  icon: <Store className="w-8 h-8" />, 
                  title: "Start Purchasing", 
                  desc: "Access digital benefits platform and exclusive offline value at Vikshit Dukaan (built by FDS).",
                  color: "orange"
                },
              ].map((step, i) => (
                <motion.div 
                  key={i}
                  variants={fadeIn}
                  whileHover={{ y: -12 }}
                  className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/40 group relative flex flex-col h-full"
                >
                  <div className={`absolute top-6 right-8 text-4xl font-black italic opacity-5 transition-opacity group-hover:opacity-20 ${step.color === 'green' ? 'text-brand-green' : 'text-brand-orange'}`}>
                    0{i + 1}
                  </div>
                  
                  <div className={`mb-10 w-16 h-16 rounded-[1.5rem] flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-110 ${
                    step.color === 'green' ? 'bg-brand-green/10 text-brand-green' : 'bg-brand-orange/10 text-brand-orange'
                  }`}>
                    {step.icon}
                  </div>
                  
                  <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight leading-tight">{step.title}</h3>
                  <p className="text-slate-500 leading-relaxed font-medium text-sm flex-grow">{step.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
