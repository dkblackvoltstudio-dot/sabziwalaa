import { motion } from "motion/react";
import { 
  Laptop, 
  Link as LinkIcon, 
  BarChart3, 
  Headphones,
  CheckCircle2,
  Building2,
  Users2,
  ShieldCheck,
  Utensils,
  Wallet
} from "lucide-react";

export default function OurSolution() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="pt-16">
      {/* Intro Section */}
      <section className="py-10 md:py-12 bg-slate-50 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-green/5 blur-[100px] -z-0" />
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-10 relative z-10"
        >
          <motion.div variants={fadeIn} className="max-w-3xl mb-10">
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter leading-tight">
              The Sabziwalaa <br />
              <span className="text-brand-green">Food Allowance</span> Program
            </h1>
            <p className="text-xl text-slate-600 font-semibold leading-relaxed">
              At Sabziwalaa, we've developed an innovative solution to combat the dual challenges of rising food costs for consumers and market pressures faced by MSMEs.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="bg-white p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-xl mb-12 lg:flex items-center gap-16">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h2 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">The Core of Our Solution</h2>
              <p className="text-slate-500 font-medium leading-relaxed mb-6">
                Our program is a pioneering Public-Private Partnership (PPP), designed to bring essential food items to Indian employees and retirees at significantly enhanced benefit value, while simultaneously bolstering local businesses.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                  <p className="text-slate-700 font-bold">Directly address financial strain on households</p>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                  <p className="text-slate-700 font-bold">Solve competitive challenges faced by MSMEs</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-brand-green-light/30 p-8 rounded-[2.5rem] border border-brand-green/10 flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-green text-white flex items-center justify-center mb-6 shadow-lg shadow-brand-green/20">
                  <Users2 className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-black text-brand-green-dark mb-2">Current Employees</h3>
                <p className="text-4xl font-black text-brand-green mb-2">Prime</p>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Essential Benefits</p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-brand-orange-light/30 p-8 rounded-[2.5rem] border border-brand-orange/10 flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-orange text-white flex items-center justify-center mb-6 shadow-lg shadow-brand-orange/20">
                  <Users2 className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-black text-brand-orange-dark mb-2">Retired Employees</h3>
                <p className="text-4xl font-black text-brand-orange mb-2">Lifetime</p>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Legacy Benefits</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* MSME Section */}
      <section className="py-10 bg-white relative">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-10"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeIn} className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-orange/5 blur-[80px]" />
              <div className="rounded-[3rem] overflow-hidden shadow-2xl relative z-10 border-8 border-slate-50">
                <img 
                  src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?auto=format&fit=crop&q=80&w=800" 
                  alt="MSME Manufacturing"
                  className="w-full h-full object-cover aspect-[4/3]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
            <motion.div variants={fadeIn}>
              <h2 className="text-4xl font-black text-slate-900 mb-8 tracking-tighter text-balance">Empowering MSMEs</h2>
              <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8 italic">
                "We source food items directly from Micro, Small, and Medium Enterprise (MSME) manufacturers."
              </p>
              <p className="text-slate-500 font-medium leading-relaxed mb-8">
                This direct procurement model not only ensures competitive pricing for consumers but also provides a vital platform for local businesses to grow, compete with larger e-commerce players, and contribute to the local economy.
              </p>
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 text-brand-orange flex items-center justify-center">
                  <Building2 className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-slate-900 font-black">Direct Sourcing</p>
                  <p className="text-sm text-slate-400 font-bold uppercase tracking-widest leading-none">Bypassing Middlemen</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Meal Allowance Explanation */}
      <section className="py-24 bg-brand-green/5 relative">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-10"
        >
          <motion.div variants={fadeIn} className="text-center mb-16">
            <h2 className="text-5xl font-black text-slate-900 mb-6 tracking-tighter leading-tight">Understanding Meal Allowances</h2>
            <p className="text-lg text-slate-600 font-medium max-w-3xl mx-auto italic">
              Empowering employees with tax-efficient food benefits that go beyond simple salary components.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div variants={fadeIn} className="bg-white p-10 rounded-[3rem] border border-brand-green/10 shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-brand-green/10 text-brand-green flex items-center justify-center mb-8">
                <Utensils className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">What is a meal allowance?</h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                It refers to a specific amount of money in the form of coupons or digital cards provided to employees by employers. It is a tax-saving allowance and is a core part of the employee's salary structure.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-white p-10 rounded-[3rem] border border-brand-green/10 shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-brand-green/10 text-brand-green flex items-center justify-center mb-8">
                <Wallet className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">Tax Exemption Limits</h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                The government allows tax exemption of up to <span className="font-black text-brand-green">₹8,800</span> on food expenses. This means ₹8,800 spent on food through our program is non-taxable, increasing take-home pay.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-white p-10 rounded-[3rem] border border-brand-green/10 shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-brand-green/10 text-brand-green flex items-center justify-center mb-8">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">Food Coupon Benefit</h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                Employees receive food coupons/digital balance worth the allowance fixed by the government, which can be used to purchase food and non-alcoholic beverages at verified partner outlets.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Technology Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.05),transparent_40%)]" />
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-10 relative z-10"
        >
          <motion.div variants={fadeIn} className="text-center mb-16">
            <h2 className="text-5xl font-black text-slate-900 mb-5 tracking-tighter">Technology-Enabled Solutions</h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium text-lg italic">Built on a foundation of robust technology to ensure widespread reach and impact.</p>
          </motion.div>
 
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Laptop className="w-8 h-8" />,
                title: "Digital Platforms",
                desc: "User-friendly online platform facilitating easy registration and efficient, transparent disbursement of allowances.",
                color: "bg-blue-600",
                bg: "bg-blue-50"
              },
              {
                icon: <LinkIcon className="w-8 h-8" />,
                title: "Blockchain Tech",
                desc: "Decentralized ledger ensuring traceability, tamper-proofing, and accessibility for authorized users.",
                color: "bg-indigo-600",
                bg: "bg-indigo-50"
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Data Analytics",
                desc: "Monitoring usage patterns to identify anomalies and proactively prevent fraudulent activities.",
                color: "bg-rose-600",
                bg: "bg-rose-50"
              }
            ].map((tech, i) => (
              <motion.div 
                key={i}
                variants={fadeIn}
                whileHover={{ y: -12, scale: 1.02 }}
                className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group overflow-hidden"
              >
                <div className={`w-16 h-16 rounded-[1.25rem] ${tech.bg} ${tech.color.replace('bg-', 'text-')} flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:bg-opacity-20 transition-all`}>
                  {tech.icon}
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight leading-tight">{tech.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed text-sm">{tech.desc}</p>
                <div className={`absolute bottom-0 right-0 w-24 h-24 ${tech.bg} opacity-[0.2] rounded-tl-[4rem] group-hover:scale-150 transition-transform duration-500`} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Impact Numbers Bar */}
      <section className="bg-brand-green py-16 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-10 relative z-10"
        >
          <div className="grid md:grid-cols-3 gap-12 items-center text-center">
            <motion.div variants={fadeIn}>
              <p className="text-5xl font-black mb-2 tracking-tighter">300M</p>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-green-light">Employees Targeted</p>
            </motion.div>
            <motion.div variants={fadeIn} className="border-y md:border-y-0 md:border-x border-white/20 py-8 md:py-0">
              <p className="text-5xl font-black mb-2 tracking-tighter">50%</p>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-green-light">Workforce Coverage Goal</p>
            </motion.div>
            <motion.div variants={fadeIn}>
              <p className="text-5xl font-black mb-2 tracking-tighter">30%</p>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-green-light">Quick Commerce Reduction</p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
