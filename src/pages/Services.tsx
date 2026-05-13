import { motion, AnimatePresence } from "motion/react";
import { 
  ClipboardCheck, 
  Link as LinkIcon, 
  BarChart3, 
  Target,
  UserCheck,
  Globe,
  Store,
  ShieldCheck,
  Database,
  Building2,
  ArrowRight,
  Zap
} from "lucide-react";
import { useState, useRef } from "react";
import React from "react";

interface CardProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
  accent: "green" | "orange";
  link?: string;
}

const ServiceCard = ({ title, desc, icon, accent, link = "Learn more →" }: CardProps) => (
  <motion.div 
    whileHover={{ 
      scale: 1.02,
      y: -5,
      transition: { duration: 0.2, ease: "easeOut" }
    }}
    className="relative bg-white rounded-[12px] border-[0.5px] border-slate-200 p-[18px_16px] flex flex-col h-full overflow-hidden group shadow-sm hover:shadow-2xl transition-all cursor-default"
  >
    {/* Top accent bar */}
    <div className={`absolute top-0 left-0 w-full h-[3px] ${accent === "green" ? "bg-[#15803d]" : "bg-[#ff9100]"}`} />
    
    <div className={`w-9 h-9 rounded-[8px] flex items-center justify-center mb-5 ${accent === "green" ? "bg-[#e8f5ee] text-[#15803d]" : "bg-[#fff3eb] text-[#ff9100]"}`}>
      {React.cloneElement(icon as React.ReactElement, { size: 16 })}
    </div>
    
    <h3 className="text-[17px] font-black text-[#0a0f1e] leading-tight mb-3 tracking-tight group-hover:text-[#15803d] transition-colors">
      {title}
    </h3>
    
    <p className="text-[13px] font-medium text-slate-500 leading-relaxed mb-6 flex-grow">
      {desc}
    </p>
    
    <button className="text-[13px] font-black text-[#15803d] flex items-center gap-1 hover:gap-2 transition-all text-left">
      {link}
    </button>
  </motion.div>
);

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);
  
  const hrRef = useRef<HTMLElement>(null);
  const employeeRef = useRef<HTMLElement>(null);
  const govRef = useRef<HTMLElement>(null);

  const scrollToSection = (index: number) => {
    setActiveTab(index);
    const refs = [hrRef, employeeRef, govRef];
    const target = refs[index].current;
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 120,
        behavior: "smooth"
      });
    }
  };

  const tabs = [
    "For Corporate HR",
    "For Employees",
    "For Government / PSUs"
  ];

  return (
    <div className="pt-20 bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="py-20 md:py-24 bg-[#0a0f1e] text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#fff3eb] border border-[#ff9100]/20 text-[#ff9100] text-[11px] font-black uppercase tracking-[0.1em] mb-10"
          >
            Startup India Recognized · DIPP116770
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[1.1] mb-8 max-w-4xl"
          >
            One Program. <br className="hidden md:block" />
            <span className="text-[#15803d]">Three Stakeholders.</span> <br />
            Unlimited Impact.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed max-w-3xl mb-12"
          >
            Sabziwalaa's PPP model serves corporate organizations, government bodies, and India's 300M+ workforce — all through a single platform.
          </motion.p>

          {/* Interactive Tabs */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 p-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => scrollToSection(i)}
                className={`relative px-6 py-3 rounded-full text-[11px] md:text-[12px] font-black uppercase tracking-widest transition-all duration-300 ${
                  activeTab === i ? "text-[#0a0f1e]" : "text-white/60 hover:text-white"
                }`}
              >
                {activeTab === i && (
                  <motion.div 
                    layoutId="tabBg"
                    className="absolute inset-0 bg-[#15803d] rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
          <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#15803d] rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#ff9100] rounded-full blur-[100px]" />
        </div>
      </section>

      {/* SECTION 1 — FOR CORPORATE HR */}
      <section ref={hrRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-16">
            <span className="text-[11px] font-black text-[#15803d] uppercase tracking-[0.25em] block mb-4">FOR CORPORATE HR</span>
            <p className="text-2xl md:text-3xl font-black text-[#0a0f1e] tracking-tight max-w-2xl leading-snug">
              Everything your organization needs to onboard and manage the food allowance program
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              accent="green"
              icon={<ClipboardCheck />}
              title="MOU & Onboarding"
              desc="Sign a formal Memorandum of Understanding with Sabziwalaa and formalize the employee benefit partnership."
            />
            <ServiceCard 
              accent="green"
              icon={<LinkIcon />}
              title="System Integration"
              desc="Sync your HR data securely with our AI-enabled platform developed by FDS for seamless benefit distribution."
            />
            <ServiceCard 
              accent="green"
              icon={<BarChart3 />}
              title="Analytics Dashboard"
              desc="Track employee usage, spending patterns, and program ROI through a real-time employer portal."
            />
            <ServiceCard 
              accent="orange"
              icon={<Target />}
              title="Grant Support"
              desc="Access financial program support and government collaboration frameworks through our PPP structure."
            />
          </div>
        </div>
      </section>

      {/* SECTION 2 — FOR EMPLOYEES & RETIREES */}
      <section ref={employeeRef} className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-16">
            <span className="text-[11px] font-black text-[#15803d] uppercase tracking-[0.25em] block mb-4">FOR EMPLOYEES & RETIREES</span>
            <p className="text-2xl md:text-3xl font-black text-[#0a0f1e] tracking-tight max-w-2xl leading-tight">
              Discounted essentials delivered online and offline — every day
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <ServiceCard 
              accent="green"
              icon={<UserCheck />}
              title="Easy Registration"
              desc="One-tap onboarding for employees via HR portals or company ID verification."
            />
            <ServiceCard 
              accent="green"
              icon={<Globe />}
              title="Online Ordering"
              desc="Access our vast digital catalog of fresh produce and essentials with direct home delivery."
            />
            <ServiceCard 
              accent="orange"
              icon={<Store />}
              title="Vikshit Dukaan"
              desc="Redeem benefits at our tech-enabled offline partner stores (built and designed by FDS)."
            />
          </div>
        </div>
      </section>

      {/* SECTION 3 — FOR GOVERNMENT / PSUs */}
      <section ref={govRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-16">
            <span className="text-[11px] font-black text-[#15803d] uppercase tracking-[0.25em] block mb-4">FOR GOVERNMENT / PSUs</span>
            <p className="text-2xl md:text-3xl font-black text-[#0a0f1e] tracking-tight max-w-2xl leading-tight">
              A formalized Public-Private Partnership framework with full interdepartmental support
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              accent="green"
              icon={<Building2 />}
              title="PPP Framework"
              desc="Legal and operational synergy between private efficiency and public scale."
            />
            <ServiceCard 
              accent="green"
              icon={<ShieldCheck />}
              title="Blockchain Transparency"
              desc="Immutable logging of every transaction for zero-leakage distribution."
            />
            <ServiceCard 
              accent="green"
              icon={<Database />}
              title="Data Sharing"
              desc="Secure protocols for interdepartmental data exchange and benefit verification."
            />
            <ServiceCard 
              accent="orange"
              icon={<Zap />}
              title="MSME Integration"
              desc="Connecting government-supported small industries directly to the corporate workforce."
            />
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="w-full bg-slate-50 border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 md:gap-x-12 text-[10px] md:text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] text-center">
            <span className="flex items-center gap-3">
              <div className="w-1 h-1 rounded-full bg-slate-300 hidden md:block" />
              Startup India Recognized
            </span>
            <span className="flex items-center gap-3 text-slate-600">
              <div className="w-1 h-1 rounded-full bg-slate-300 hidden md:block" />
              DIPP116770
            </span>
            <span className="flex items-center gap-3">
              <div className="w-1 h-1 rounded-full bg-slate-300 hidden md:block" />
              PPP Initiative
            </span>
            <span className="flex items-center gap-3">
              <div className="w-1 h-1 rounded-full bg-slate-300 hidden md:block" />
              Pan-India Network
            </span>
            <span className="flex items-center gap-3 text-[#15803d]">
              <div className="w-1 h-1 rounded-full bg-slate-300 hidden md:block" />
              300M+ Workforce Targeted
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
