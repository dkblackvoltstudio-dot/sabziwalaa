import { motion } from "motion/react";
import { 
  ShieldCheck, 
  Leaf, 
  Phone, 
  Globe,
  CheckCircle2
} from "lucide-react";

export default function About() {
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
      {/* About Section */}
      <section className="py-8 md:py-10 bg-slate-50 relative overflow-hidden">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-10"
        >
          <motion.div variants={fadeIn} className="mb-10">
            <h2 className="text-5xl font-black text-slate-900 mb-8 tracking-tighter text-center">About <span className="text-brand-green">Sabziwalaa</span></h2>
            <div className="bg-white p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-xl overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <p className="text-xl text-slate-700 font-semibold leading-relaxed mb-8 italic">
                "Welcome to Sabziwalaa, an initiative by Future Door Services Private Limited. We are committed to fostering employee well-being and driving economic growth across India through our innovative Public-Private Partnership (PPP) model."
              </p>
              
              <div className="grid md:grid-cols-2 gap-12">
                <motion.div variants={fadeIn}>
                  <h3 className="text-2xl font-black text-brand-green-dark mb-4 flex items-center gap-2">
                    <Leaf className="w-6 h-6" /> Our Vision
                  </h3>
                  <p className="text-slate-600 font-medium leading-relaxed">
                    To create a secure and prosperous future for Indian citizens by alleviating the financial burden of rising food costs, enhancing employee well-being, and stimulating the growth of Micro, Small, and Medium Enterprises (MSMEs). We aim to empower a significant portion of India's workforce and contribute to the overall economic and social development of the community.
                  </p>
                </motion.div>
                <motion.div variants={fadeIn}>
                  <h3 className="text-2xl font-black text-brand-orange mb-4 flex items-center gap-2">
                    <ShieldCheck className="w-6 h-6" /> Our Mission
                  </h3>
                  <p className="text-slate-600 font-medium leading-relaxed">
                    To mitigate the impact of escalating food costs on Indian employees and retirees by providing access to essential food items at prime benefit value through a transparent and efficient digital platform. Simultaneously, we strive to support and empower local MSME manufacturers, ensuring sustainable economic growth and reduced dependence on quick commerce in target sectors.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* The Challenge & Impact */}
          <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeIn} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
              <h4 className="text-2xl font-black text-brand-orange mb-8 tracking-tight">The Challenge We Address</h4>
              <div className="space-y-6 text-sm text-slate-600 font-medium">
                {[
                  { t: "Financial Strain", d: "Higher expenses reduce disposable income, especially for low-income and retirees." },
                  { t: "Decreased Productivity", d: "Financial stress impacts workplace focus and overall performance." },
                  { t: "Increased Attrition", d: "Rising cost of living drives employees to seek higher pay, increasing turnover." },
                  { t: "MSME Vulnerability", d: "Intense competition from quick-commerce impacts local manufacturers' stability." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-2 flex-shrink-0" />
                    <p><span className="font-extrabold text-slate-900">{item.t}:</span> {item.d}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-brand-green/5 p-10 rounded-[2.5rem] border border-brand-green/10 shadow-sm relative overflow-hidden">
              <h4 className="text-2xl font-black text-brand-green-dark mb-8 tracking-tight">Our Impact Goals</h4>
              <div className="space-y-6 text-sm text-slate-700 font-medium relative z-10">
                {[
                  { t: "Quick Commerce Independence", d: "Aiming for 30% reduction in dependence within target sectors." },
                  { t: "Enhanced Well-being", d: "Reduced financial burden leads to better nutrition and quality of life." },
                  { t: "Productivity & Retention", d: "Higher morale and focus reduces recruitment costs and absenteeism." },
                  { t: "MSME Growth", d: "Direct purchasing stimulates local businesses to compete with e-commerce giants." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <p><span className="font-extrabold text-brand-green-dark">{item.t}:</span> {item.d}</p>
                  </div>
                ))}
                <div className="pt-4 border-t border-brand-green/10 mt-6">
                  <p className="text-lg font-black text-brand-green-dark">Goal: Covering 50% of India's workforce (~300M employees)</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(22,163,74,0.05),transparent_50%)]" />
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-10 relative z-10"
        >
          <motion.div variants={fadeIn} className="text-center mb-16">
            <h2 className="text-5xl font-black text-slate-900 mb-5 tracking-tighter">Our Leadership</h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium text-lg italic text-balance text-center mx-auto">The visionaries driving Sabziwalaa's mission to affordable nutrition.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Sounak Sarkar",
                role: "Director & Founder",
                bio: "Started Sabziwalaa at just 16 years of age, driven by a vision to solve food affordability for India's working class.",
                color: "border-brand-green/20 hover:border-brand-green/50",
                iconBg: "bg-brand-green/10"
              },
              {
                name: "Granth Jain",
                role: "Executive Director",
                bio: "IIT Kharagpur alumnus bringing engineering rigor and systems thinking to Sabziwalaa's growth.",
                color: "border-brand-orange/20 hover:border-brand-orange/50",
                iconBg: "bg-brand-orange/10"
              }
            ].map((leader, i) => (
              <motion.div 
                key={leader.name}
                variants={fadeIn}
                whileHover={{ y: -12, scale: 1.02 }}
                className={`bg-white rounded-[3rem] p-10 border shadow-sm hover:shadow-2xl transition-all h-full flex flex-col pt-12 relative overflow-hidden group ${leader.color}`}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 ${leader.iconBg} -translate-y-1/2 translate-x-1/2 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700`} />
                <h3 className="text-2xl font-black text-slate-900 mb-1 relative z-10">{leader.name}</h3>
                <p className="text-brand-green-dark font-black text-xs uppercase tracking-[0.2em] mb-8 relative z-10">{leader.role}</p>
                <p className="text-slate-600 font-medium leading-relaxed italic border-l-4 border-brand-green/20 pl-6 py-2 relative z-10 bg-slate-50/50 rounded-r-2xl">
                  "{leader.bio}"
                </p>
                <div className={`mt-auto pt-8 flex items-center gap-2 font-bold text-xs uppercase tracking-widest ${i === 1 ? 'text-brand-orange' : i === 2 ? 'text-brand-blue' : 'text-brand-green'}`}>
                  <span>Visionary Leader</span>
                  <div className="h-[1px] flex-1 bg-current opacity-20" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

    </div>
  );
}
