import { motion } from "motion/react";
import { Bot, Zap, Code, BarChart3, MessageSquare, ArrowRight, Github, Twitter, Linkedin, CheckCircle2, Sparkles, Layers, MousePointer2, Users, Send, User, TrendingUp, Activity } from "lucide-react";
import { useState, useEffect } from "react";

// --- Components ---

const Logo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <div className={`${className} flex items-center justify-center`}>
    <svg viewBox="0 0 160 170" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M20 10C14.4772 10 10 14.4772 10 20V120C10 125.523 14.4772 130 20 130H40V160L80 130H140C145.523 130 150 125.523 150 120V20C150 14.4772 145.523 10 140 10H20Z" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="35" y="45" width="25" height="25" rx="4" stroke="currentColor" strokeWidth="8" strokeLinejoin="round"/>
      <circle cx="110" cy="45" r="15" stroke="currentColor" strokeWidth="8"/>
      <rect x="97.5" y="95" width="25" height="25" rx="4" stroke="currentColor" strokeWidth="8" strokeLinejoin="round"/>
      <path d="M60 57.5H80C85 57.5 85 45 90 45H95" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M60 57.5H80C85 57.5 85 107.5 90 107.5H97.5" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="50" cy="105" r="6" fill="currentColor"/>
      <path d="M50 105V85C50 75 45 70 40 70" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);

const Navbar = ({ onDashboardClick }: { onDashboardClick: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "How it works", href: "#how-it-works" },
    { name: "Work", href: "#projects" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md border-b border-slate-100 py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <Logo className="w-10 h-10 text-blue-600" />
          <span className="font-display font-bold text-xl tracking-tight text-slate-900">Said<span className="text-blue-600">.ai</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={onDashboardClick}
            className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
          >
            Dashboard
          </button>
          <button className="px-5 py-2.5 rounded-full bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition-all shadow-md shadow-blue-100">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

const DashboardMockup = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Main Dashboard Window */}
      <motion.div 
        initial={{ opacity: 0, y: 40, rotateX: 10 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="bg-white rounded-[2rem] shadow-2xl border border-slate-100 overflow-hidden relative z-10"
      >
        {/* Window Header */}
        <div className="h-12 bg-slate-50 border-b border-slate-100 flex items-center px-6 gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
          </div>
          <div className="mx-auto text-[10px] font-bold text-slate-400 uppercase tracking-widest">AI Systems Dashboard</div>
        </div>

        {/* Window Content */}
        <div className="p-8">
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
              <div className="flex items-center justify-between mb-2">
                <Users className="text-blue-600 w-5 h-5" />
                <span className="text-[10px] font-bold text-blue-600 bg-white px-2 py-0.5 rounded-full">+12%</span>
              </div>
              <div className="text-2xl font-bold text-slate-900">1,284</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Active Users</div>
            </div>
            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
              <div className="flex items-center justify-between mb-2">
                <TrendingUp className="text-emerald-600 w-5 h-5" />
                <span className="text-[10px] font-bold text-emerald-600 bg-white px-2 py-0.5 rounded-full">Live</span>
              </div>
              <div className="text-2xl font-bold text-slate-900">$42.5k</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Revenue Growth</div>
            </div>
          </div>

          {/* Chart Mockup */}
          <div className="space-y-4">
            <div className="h-32 w-full bg-slate-50 rounded-2xl relative overflow-hidden">
              <svg viewBox="0 0 400 100" className="absolute bottom-0 left-0 w-full h-full">
                <path 
                  d="M0 80 Q 50 70, 100 40 T 200 60 T 300 20 T 400 40 V 100 H 0 Z" 
                  fill="url(#gradient)" 
                  className="opacity-20"
                />
                <path 
                  d="M0 80 Q 50 70, 100 40 T 200 60 T 300 20 T 400 40" 
                  fill="none" 
                  stroke="#3b82f6" 
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex justify-between px-2">
              {[1,2,3,4,5,6,7].map(i => <div key={i} className="w-1 h-4 bg-slate-100 rounded-full" />)}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-12 -right-12 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 z-20 flex items-center gap-3"
      >
        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
          <Bot size={20} />
        </div>
        <div>
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">AI Agent</div>
          <div className="text-xs font-bold text-slate-900">Processing Leads...</div>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -bottom-8 -left-8 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 z-20 flex items-center gap-3"
      >
        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
          <Zap size={20} />
        </div>
        <div>
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Automation</div>
          <div className="text-xs font-bold text-slate-900">Task Completed</div>
        </div>
      </motion.div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-400/10 rounded-full blur-[100px] -z-10" />
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-40 overflow-hidden bg-white">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[1000px] h-[1000px] bg-blue-50 rounded-full blur-[120px] opacity-60 -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[800px] h-[800px] bg-slate-50 rounded-full blur-[120px] opacity-60 -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold tracking-widest uppercase mb-8 border border-blue-100/50">
              <Sparkles className="w-3.5 h-3.5" />
              Said — Premium AI Solutions
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.05]">
              Automate your business with AI — <span className="text-blue-600 relative">
                save time, increase revenue
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-blue-200 -z-10" viewBox="0 0 400 20" fill="none">
                  <path d="M5 15C100 5 300 5 395 15" stroke="currentColor" strokeWidth="8" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>
            
            <p className="text-slate-600 text-xl md:text-2xl max-w-2xl mb-12 leading-relaxed font-medium">
              I build smart AI systems that replace manual work and deliver real results.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-14">
              <button className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200 flex items-center justify-center gap-3 group">
                Get Your AI System
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white border border-slate-200 text-slate-700 font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                See How It Works
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-slate-400 font-bold text-xs uppercase tracking-[0.2em]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-500" />
                <span>20+ projects</span>
              </div>
              <div className="w-1.5 h-1.5 bg-slate-200 rounded-full hidden sm:block" />
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-500" />
                <span>1000+ users</span>
              </div>
              <div className="w-1.5 h-1.5 bg-slate-200 rounded-full hidden sm:block" />
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-500" />
                <span>Real results</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProofSection = () => {
  const stats = [
    { label: "Projects Completed", value: "20+", icon: <Layers className="w-6 h-6" /> },
    { label: "Users Reached", value: "1000+", icon: <Users className="w-6 h-6" /> },
    { label: "AI Systems Built", value: "3+", icon: <Bot className="w-6 h-6" /> },
  ];

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">Proven Results</h2>
          <p className="text-slate-500 font-medium">Delivering measurable impact through intelligent automation.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-white rounded-2xl border border-slate-100 shadow-soft text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mx-auto mb-6">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
              <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="aspect-video bg-slate-200 rounded-2xl overflow-hidden shadow-card border border-slate-100 relative group">
            <img src="https://picsum.photos/seed/admin-panel/800/450" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt="Admin Panel Preview" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <div className="text-white font-bold">Admin Dashboard UI</div>
            </div>
          </div>
          <div className="aspect-video bg-slate-200 rounded-2xl overflow-hidden shadow-card border border-slate-100 relative group">
            <img src="https://picsum.photos/seed/bot-ui/800/450" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt="Bot UI Preview" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <div className="text-white font-bold">AI Bot Interface</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-16 items-center">
          {/* Left Side: Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5"
          >
            <div className="relative max-w-md mx-auto">
              {/* Decorative Background Shape */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-blue-50 rounded-[2.5rem] -z-10" />
              
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-soft border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" 
                  alt="Said - AI Developer" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Verified</div>
                  <div className="text-sm font-bold text-slate-900">AI Expert</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6">
              <User size={14} />
              About the Developer
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              I help businesses <span className="text-blue-600">automate growth</span> with custom AI solutions
            </h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                Hi, I'm Said. My mission is to bridge the gap between complex AI technology and practical business results. I don't just build bots; I build revenue-generating systems.
              </p>
              <p>
                With a focus on Telegram automation and custom LLM integrations, I've helped dozens of businesses reclaim hundreds of hours and scale their operations without increasing headcount.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-slate-900">50+</div>
                  <div className="text-sm font-semibold text-slate-500">Clients Helped</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-slate-900">100%</div>
                  <div className="text-sm font-semibold text-slate-500">Delivery Rate</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Layers className="w-8 h-8" />,
      title: "AI Automation Systems",
      description: "Save time & reduce manual work by automating your entire business logic.",
      whyCare: "Focus on strategy while AI handles the repetitive tasks."
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Telegram & Web Apps",
      description: "Engage and convert users where they already are with powerful bots.",
      whyCare: "Meet your customers on their favorite platforms instantly."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "ChatGPT Integration",
      description: "Smart automation that understands context and intent.",
      whyCare: "Provide human-like responses and intelligent processing."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom AI Tools",
      description: "Tailored solutions built specifically for your unique business challenges.",
      whyCare: "Get a competitive edge with software built just for you."
    }
  ];

  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-slate-900 mb-4">Sell Benefits, Not Just Features</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            I build systems that solve real problems and drive actual business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-white border border-slate-100 shadow-card hover:shadow-soft hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>
              <div className="pt-4 border-t border-slate-50">
                <div className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-2">Why should you care?</div>
                <div className="text-xs font-bold text-slate-700">
                  {service.whyCare}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Contact me",
      description: "We discuss your business needs and identify automation opportunities."
    },
    {
      number: "02",
      title: "I build your AI bot",
      description: "I develop and test your custom AI system to ensure perfect performance."
    },
    {
      number: "03",
      title: "You grow your business",
      description: "Deploy the bot and watch your efficiency and revenue increase."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-slate-900 mb-4">How it works</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            A simple, transparent process to get your AI system up and running.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <div className="text-6xl font-black text-blue-100 mb-4">{step.number}</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {step.description}
              </p>
              {i < 2 && (
                <div className="hidden md:block absolute top-10 -right-6 text-blue-200">
                  <ArrowRight className="w-8 h-8" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};const Project = () => {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest mb-6">
              Featured Case Study
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-8">SmartHabit AI</h2>
            
            <div className="space-y-10">
              <div className="relative pl-8 border-l-2 border-slate-100">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-red-400" />
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">The Problem</h4>
                <p className="text-slate-600 text-lg">Traditional habit trackers are passive. Users forget to log data, leading to a 90% drop-off rate within the first week.</p>
              </div>
              
              <div className="relative pl-8 border-l-2 border-slate-100">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-blue-500" />
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">The Solution</h4>
                <p className="text-slate-600 text-lg">A proactive AI agent that initiates conversations, provides personalized coaching, and uses behavioral psychology to ensure consistency.</p>
              </div>
              
              <div className="relative pl-8 border-l-2 border-slate-100">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-green-500" />
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">The Result</h4>
                <div className="grid grid-cols-2 gap-8 mt-6">
                  <div className="p-6 rounded-2xl bg-green-50 border border-green-100">
                    <div className="text-3xl font-bold text-green-700">85%</div>
                    <div className="text-[10px] font-bold text-green-600 uppercase tracking-widest mt-1">Retention Rate</div>
                  </div>
                  <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100">
                    <div className="text-3xl font-bold text-blue-700">10k+</div>
                    <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mt-1">Active Users</div>
                  </div>
                </div>
                <p className="mt-6 text-slate-500 font-medium italic">"The most effective automation I've ever deployed for personal growth."</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-slate-100 rounded-full blur-3xl opacity-50 -z-10" />
            
            <div className="bg-slate-100 p-4 rounded-[40px] shadow-2xl border border-white">
              {/* Mock Dashboard UI */}
              <div className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-slate-200">
                <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-200">
                      <Bot className="text-white w-5 h-5" />
                    </div>
                    <span className="font-bold text-slate-900 text-sm">SmartHabit Dashboard</span>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                  </div>
                </div>
                <div className="p-8">
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm">
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Users</div>
                      <div className="text-2xl font-bold text-slate-900">12,482</div>
                      <div className="text-[10px] text-emerald-500 font-bold mt-1">↑ 12.5%</div>
                    </div>
                    <div className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm">
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Growth</div>
                      <div className="text-2xl font-bold text-slate-900">94.2%</div>
                      <div className="text-[10px] text-emerald-500 font-bold mt-1">↑ 8.1%</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      <span>System Load</span>
                      <span>Normal</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full w-2/3 bg-blue-600 rounded-full" />
                    </div>
                  </div>

                  <div className="flex items-center justify-center p-8 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mx-auto mb-3">
                        <Sparkles className="text-blue-600 w-6 h-6" />
                      </div>
                      <div className="text-xs font-bold text-slate-900">AI Optimization Active</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const VideoDemo = () => {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full bg-blue-600/10 -z-10" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold mb-4">See how it works</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Watch a quick walkthrough of a live AI automation system in action.
          </p>
        </div>

        <div className="max-w-4xl mx-auto aspect-video bg-slate-800 rounded-3xl border border-white/10 shadow-2xl flex items-center justify-center relative group cursor-pointer overflow-hidden">
          <img src="https://picsum.photos/seed/demo-video/1200/675" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" alt="Video Placeholder" referrerPolicy="no-referrer" />
          <div className="w-20 h-20 rounded-full bg-white text-blue-600 flex items-center justify-center shadow-xl relative z-10 group-hover:scale-110 transition-transform">
            <MousePointer2 size={32} />
          </div>
          <div className="absolute bottom-8 left-8 right-8 text-center z-10">
            <span className="px-4 py-2 rounded-full bg-black/50 backdrop-blur-md text-xs font-bold uppercase tracking-widest">Click to play demo</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-blue-600 rounded-[40px] p-12 md:p-20 text-center text-white shadow-2xl shadow-blue-200 relative overflow-hidden"
        >
          {/* Decorative Circle */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 relative z-10 leading-tight">
            Let's build your AI <br className="hidden md:block" /> system today
          </h2>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-12 relative z-10">
            Start automating your business now. Stop leaving money on the table and reclaim your time.
          </p>
          <div className="flex flex-col items-center gap-4 relative z-10">
            <button className="px-12 py-5 rounded-xl bg-white text-blue-600 font-bold text-xl hover:bg-blue-50 transition-all shadow-xl flex items-center gap-3">
              <Send size={24} />
              Message me on Telegram
            </button>
            <p className="text-blue-200 text-xs font-bold uppercase tracking-widest animate-pulse">
              Limited availability for new projects this month
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Logo className="w-8 h-8 text-blue-600" />
            <span className="font-display font-bold text-lg text-slate-900">Said<span className="text-blue-600">.ai</span></span>
          </div>
          
          <div className="flex gap-8">
            <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Github className="w-5 h-5" /></a>
            <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Linkedin className="w-5 h-5" /></a>
          </div>

          <p className="text-slate-400 text-sm font-medium">
            © 2026 Said.ai — Premium AI Automation
          </p>
        </div>
      </div>
    </footer>
  );
};

export { Navbar, Hero, ProofSection, About, Services, HowItWorks, VideoDemo, Project, CTA, Footer };
