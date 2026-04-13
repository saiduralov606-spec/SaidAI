import { motion } from "motion/react";
import { Bot, Zap, Code, BarChart3, MessageSquare, ArrowRight, Github, Twitter, Linkedin, CheckCircle2, Sparkles, Layers, MousePointer2, Users, Send, User } from "lucide-react";
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

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-blue-50 rounded-full blur-3xl opacity-50 -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-slate-50 rounded-full blur-3xl opacity-50 -z-10" />

      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold tracking-wide uppercase mb-8">
            <Sparkles className="w-3.5 h-3.5" />
            AI Automation for Modern Business
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]">
            I build AI bots that <br className="hidden md:block" /> 
            increase your <span className="text-blue-600">revenue</span>
          </h1>
          
          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Stop wasting time on repetitive tasks. I design custom AI agents that automate your workflows, capture leads, and scale your operations 24/7.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 flex items-center justify-center gap-2">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold text-lg hover:bg-slate-50 transition-all">
              View Demo
            </button>
          </div>

          {/* Social Proof Bar */}
          <div className="mt-20 pt-10 border-t border-slate-100">
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-8">Trusted by growing teams</p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale">
              <div className="text-xl font-bold tracking-tighter text-slate-900">TECHFLOW</div>
              <div className="text-xl font-bold tracking-tighter text-slate-900">LOGICORE</div>
              <div className="text-xl font-bold tracking-tighter text-slate-900">BLOOM.AI</div>
              <div className="text-xl font-bold tracking-tighter text-slate-900">NEXUS</div>
            </div>
            
            <div className="flex justify-center gap-12 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">20+</div>
                <div className="text-xs text-slate-500 font-semibold">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">1000+</div>
                <div className="text-xs text-slate-500 font-semibold">Users Reached</div>
              </div>
            </div>
          </div>
        </motion.div>
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
                  src="https://picsum.photos/seed/professional-said/800/1000" 
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
      icon: <Bot className="w-8 h-8" />,
      title: "AI Chatbots",
      description: "Intelligent agents that handle support and sales 24/7.",
      benefit: "Reduce support costs by 60%"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Telegram Automation",
      description: "Custom bots for community management and workflows.",
      benefit: "Save 10+ hours per week"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "LLM Integration",
      description: "Connect ChatGPT or Claude to your existing business tools.",
      benefit: "Supercharge your productivity"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Lead Gen Systems",
      description: "Automated pipelines to find and qualify high-value leads.",
      benefit: "3x your conversion rate"
    }
  ];

  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-slate-900 mb-4">SaaS-Grade AI Services</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            I provide clean, scalable AI solutions designed to integrate perfectly with your business.
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
              className="p-8 rounded-2xl bg-white border border-slate-100 shadow-card hover:shadow-soft hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                {service.benefit}
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
};

const Project = () => {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4 block">Featured Case Study</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-8">SmartHabit AI</h2>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  The Problem
                </h4>
                <p className="text-slate-600">Users struggle to maintain habits because traditional trackers are passive and easily ignored.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  The Solution
                </h4>
                <p className="text-slate-600">An AI-powered Telegram bot that proactively checks in, provides coaching, and holds users accountable.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  The Result
                </h4>
                <div className="flex gap-8 mt-4">
                  <div>
                    <div className="text-3xl font-bold text-slate-900">85%</div>
                    <div className="text-xs text-slate-500 font-semibold">Retention Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-slate-900">10k+</div>
                    <div className="text-xs text-slate-500 font-semibold">Active Users</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-100 p-4 rounded-[40px] shadow-2xl"
          >
            {/* Mock Dashboard UI */}
            <div className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-slate-200">
              <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                    <Bot className="text-white w-5 h-5" />
                  </div>
                  <span className="font-bold text-slate-900">SmartHabit Dashboard</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-slate-200" />
                  <div className="w-2 h-2 rounded-full bg-slate-200" />
                </div>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">
                    <div className="text-xs text-blue-600 font-bold uppercase mb-1">Active Users</div>
                    <div className="text-2xl font-bold text-slate-900">12,482</div>
                  </div>
                  <div className="p-4 rounded-xl bg-green-50 border border-green-100">
                    <div className="text-xs text-green-600 font-bold uppercase mb-1">Completion</div>
                    <div className="text-2xl font-bold text-slate-900">94.2%</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-4 w-full bg-slate-100 rounded-full" />
                  <div className="h-4 w-3/4 bg-slate-100 rounded-full" />
                  <div className="h-4 w-5/6 bg-slate-100 rounded-full" />
                </div>
                <div className="mt-8 flex justify-center">
                   <div className="w-32 h-32 rounded-full border-8 border-blue-100 border-t-blue-600 flex items-center justify-center">
                     <span className="text-xl font-bold text-slate-900">85%</span>
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
          
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-8 relative z-10">
            Let's build your AI <br className="hidden md:block" /> system today
          </h2>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-12 relative z-10">
            Ready to automate your growth? Contact me now to discuss your custom AI solution.
          </p>
          <button className="px-12 py-5 rounded-xl bg-white text-blue-600 font-bold text-xl hover:bg-blue-50 transition-all shadow-xl relative z-10">
            Contact Me
          </button>
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

export { Navbar, Hero, About, Services, HowItWorks, Project, CTA, Footer };
