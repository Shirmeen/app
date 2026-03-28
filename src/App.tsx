import { useEffect, useRef, useState } from 'react';
import './App.css';
import {
  Globe,
  Gamepad2,
  Heart,
  Users,
  Apple,
  Hand,
  ShoppingBag,
  Wallet,
  Brain,
  Briefcase,
  Scissors,
  Dog,
  Plane,
  Scale,
  Coins,
  Smartphone,
  TreePine,
  Frown,
  ShoppingCart,
  Radio,
  Menu,
  X,
  ChevronDown,
  ExternalLink,
  BookOpen,
  Target,
  Lightbulb,
  Gavel,
  Zap,
  Star
} from 'lucide-react';

// Project data
const projects = [
  {
    id: 1,
    title: "Tourism",
    centralIdea: "Tourism connects people and cultures",
    linesOfInquiry: [
      "The nature and purpose of tourism",
      "The impact of tourism on people, cultures, and places",
      "Responsible tourism and sustainable decision-making"
    ],
    concepts: ["Causation", "Change", "Responsibility"],
    sdg: 11,
    image: "project-tourism.png",
    icon: Globe,
    rotation: "-1deg"
  },
  {
    id: 2,
    title: "گیمز کا نشہ",
    centralIdea: "Excessive gaming affects our lifestyle",
    linesOfInquiry: [
      "Types and reasons children play video games",
      "Effects of excessive gaming on physical and mental health",
      "Ways to maintain a balanced and healthy lifestyle while using technology"
    ],
    concepts: ["Form", "Causation", "Responsibility"],
    sdg: 3,
    image: "project-gaming.png",
    icon: Gamepad2,
    rotation: "1deg"
  },
  {
    id: 3,
    title: "Beauty Standards",
    centralIdea: "Societal beauty standards erase confidence",
    linesOfInquiry: [
      "Influences on perceptions of beauty",
      "Promoting acceptance and diversity",
      "Effects of beauty standards on individuals and relationships"
    ],
    concepts: ["Perspective", "Responsibility", "Causation"],
    sdg: 10,
    image: "project-beauty.png",
    icon: Heart,
    rotation: "-0.5deg"
  },
  {
    id: 4,
    title: "Inclusion",
    centralIdea: "Inclusion empowers individuals to overcome barriers and thrive",
    linesOfInquiry: [
      "Different types of disabilities and how they affect daily life",
      "Barriers that prevent people with disabilities from fully participating in society",
      "Promoting inclusion and accessibility"
    ],
    concepts: ["Form", "Causation", "Responsibility"],
    sdg: 3,
    image: "project-inclusion.png",
    icon: Users,
    rotation: "0.5deg"
  },
  {
    id: 5,
    title: "متوازن غذا",
    centralIdea: "Nutrition choices influence physical health",
    linesOfInquiry: [
      "The role of nutrients in the body",
      "Maintaining physical health through lifestyle",
      "Making healthy choices for long-term well-being"
    ],
    concepts: ["Function", "Connection", "Responsibility"],
    sdg: 3,
    image: "project-nutrition.png",
    icon: Apple,
    rotation: "-1deg"
  },
  {
    id: 6,
    title: "چائلڈ لیبر",
    centralIdea: "Child domestic labour violates children's rights",
    linesOfInquiry: [
      "Effects of denial of children's rights",
      "Factors contributing to child domestic labour",
      "Promoting protection and advocacy for children"
    ],
    concepts: ["Causation", "Perspective", "Responsibility"],
    sdg: 4,
    image: "project-childlabour.png",
    icon: Hand,
    rotation: "1deg"
  },
  {
    id: 7,
    title: "خوراک کا ضیاع",
    centralIdea: "Food wastage at social gatherings leads to challenges in the community",
    linesOfInquiry: [
      "Causes of food wastage at social gatherings",
      "Impact of food wastage on the community and environment",
      "Actions to reduce food wastage"
    ],
    concepts: ["Causation", "Connection", "Responsibility"],
    sdg: 2,
    image: "project-foodwaste.png",
    icon: ShoppingBag,
    rotation: "-0.5deg"
  },
  {
    id: 8,
    title: "خواتین کی خود مختاری",
    centralIdea: "Financial independence influences girls' life choices",
    linesOfInquiry: [
      "Impact of financial independence on girls' decisions",
      "Relationship between financial independence and empowerment",
      "Ways communities support girls in becoming financially independent"
    ],
    concepts: ["Causation", "Perspective", "Responsibility"],
    sdg: 5,
    image: "project-financial.png",
    icon: Wallet,
    rotation: "0.5deg"
  },
  {
    id: 9,
    title: "AI",
    centralIdea: "AI manipulates human thinking",
    linesOfInquiry: [
      "Ways AI influences human thoughts, choices, and behaviors",
      "Benefits and risks of AI in daily life",
      "Ethical responsibilities of humans when using AI"
    ],
    concepts: ["Causation", "Perspective", "Responsibility"],
    sdg: 3,
    image: "project-ai.png",
    icon: Brain,
    rotation: "-1deg",
    link: {
      url: "https://share.google/hoyEvVBOD2Tg0844L",
      label: "View in Minute Mirror ePaper (Page 4)"
    }
  },
  {
    id: 10,
    title: "Career Pressure",
    centralIdea: "Pressure to choose career affects people's identity",
    linesOfInquiry: [
      "Influences on career choices",
      "Impact of external pressures on identity",
      "Balancing personal interests with societal expectations"
    ],
    concepts: ["Connection", "Perspective", "Responsibility"],
    sdg: 3,
    image: "project-career.png",
    icon: Briefcase,
    rotation: "1deg"
  },
  {
    id: 11,
    title: "Textile & Fashion",
    centralIdea: "Textile and fashion are powerful expressions of cultural identity that evolve through revival and innovation",
    linesOfInquiry: [
      "Textile and fashion express cultural identity and tradition",
      "Ways traditional textile practices are revived and preserved",
      "Innovation and modern design influence the evolution of fashion"
    ],
    concepts: ["Form", "Change", "Connection"],
    sdg: 9,
    image: "project-textile.png",
    icon: Scissors,
    rotation: "-0.5deg"
  },
  {
    id: 12,
    title: "جانوروں پر ظلم",
    centralIdea: "Human action and choices affect the life and wellbeing of stray animals",
    linesOfInquiry: [
      "Human behaviors and their impact on stray animals",
      "Interventions that improve the lives of stray animals",
      "Promoting responsible human choices for animal welfare"
    ],
    concepts: ["Causation", "Connection", "Responsibility"],
    sdg: 15,
    image: "project-strayanimals.png",
    icon: Dog,
    rotation: "0.5deg"
  },
  {
    id: 13,
    title: "Brain Drain",
    centralIdea: "Brain drain fuels individual growth but risks draining community roots",
    linesOfInquiry: [
      "Causes of brain drain for education and employment",
      "Effects of brain drain on individuals, families, and communities",
      "Responsibility in supporting home countries from abroad"
    ],
    concepts: ["Causation", "Connection", "Responsibility"],
    sdg: 8,
    image: "project-braindrain.png",
    icon: Plane,
    rotation: "-1deg"
  },
  {
    id: 14,
    title: "Stereotypes",
    centralIdea: "Stereotypes limit people's opportunity",
    linesOfInquiry: [
      "The nature and formation of stereotypes",
      "Causes and consequences of stereotypes on individuals and society",
      "Challenging stereotypes through actions and systems"
    ],
    concepts: ["Form", "Causation", "Responsibility"],
    sdg: 10,
    image: "project-stereotypes.png",
    icon: Scale,
    rotation: "1deg"
  },
  {
    id: 15,
    title: "Dowry",
    centralIdea: "Dowry practices generate social pressure",
    linesOfInquiry: [
      "Causes of social pressure in dowry practices",
      "Perspectives surrounding dowry practices",
      "The role of individuals and society in reducing pressure and promoting change"
    ],
    concepts: ["Causation", "Perspective", "Responsibility"],
    sdg: 5,
    image: "project-dowry.png",
    icon: Gavel,
    rotation: "-0.5deg"
  },
  {
    id: 16,
    title: "بھکاری مافیا",
    centralIdea: "Begging mafia exploits society",
    linesOfInquiry: [
      "Causes of organized begging systems",
      "Functioning of organized begging systems",
      "Connection between societal attitudes and the growth of organized begging"
    ],
    concepts: ["Causation", "Function", "Connection"],
    sdg: 1,
    image: "project-begging.png",
    icon: Coins,
    rotation: "0.5deg"
  },
  {
    id: 17,
    title: "ان لائن ہراسانی",
    centralIdea: "Online communication affects how we connect with others and can create both opportunities and risks",
    linesOfInquiry: [
      "The impact of online interactions on emotions and relationships",
      "Causes of cyberbullying and influences on online behavior",
      "Responsibility in promoting safe and respectful online behavior"
    ],
    concepts: ["Connection", "Causation", "Responsibility"],
    sdg: 3,
    image: "project-cyberbullying.png",
    icon: Smartphone,
    rotation: "-1deg"
  },
  {
    id: 18,
    title: "Deforestation",
    centralIdea: "Deforestation affects ecosystems",
    linesOfInquiry: [
      "Effects of deforestation",
      "Living and non-living things depend on forestation",
      "Our role in protecting forests"
    ],
    concepts: ["Causation", "Connection", "Responsibility"],
    sdg: 13,
    image: "project-deforestation.png",
    icon: TreePine,
    rotation: "1deg"
  },
  {
    id: 19,
    title: "Body Shaming",
    centralIdea: "Body shaming affects mental well-being",
    linesOfInquiry: [
      "Different ways people feel and respond to body shaming",
      "Body shaming affects mental health",
      "Our role in stopping body shaming"
    ],
    concepts: ["Perspective", "Connection", "Responsibility"],
    sdg: 3,
    image: "project-bodyshaming.png",
    icon: Frown,
    rotation: "-0.5deg"
  },
  {
    id: 20,
    title: "Brand Obsession",
    centralIdea: "Obsession with brands influences social identity",
    linesOfInquiry: [
      "The connection between brands and people's emotions, needs, and habits",
      "Different perspectives on brands based on experiences and needs",
      "Responsibility in making brand choices and their impact on society and the environment"
    ],
    concepts: ["Connection", "Perspective", "Responsibility"],
    sdg: 12,
    image: "project-brands.png",
    icon: ShoppingCart,
    rotation: "0.5deg"
  },
  {
    id: 21,
    title: "Media Influence",
    centralIdea: "Media influences perceptions",
    linesOfInquiry: [
      "Different types of media and the ways messages are created and presented",
      "The influence of media on ideas, beliefs, and attitudes",
      "Different perspectives in interpreting and responding to media"
    ],
    concepts: ["Form", "Causation", "Perspective"],
    sdg: 16,
    image: "project-media.png",
    icon: Radio,
    rotation: "-1deg"
  }
];

// SDG data
const sdgs = [
  { number: 1, name: "No Poverty", color: "#e5243b" },
  { number: 2, name: "Zero Hunger", color: "#dda63a" },
  { number: 3, name: "Good Health", color: "#4c9f38" },
  { number: 4, name: "Quality Education", color: "#c5192d" },
  { number: 5, name: "Gender Equality", color: "#ff3a21" },
  { number: 8, name: "Decent Work", color: "#a21942" },
  { number: 9, name: "Innovation", color: "#fd6925" },
  { number: 10, name: "Reduced Inequalities", color: "#dd1367" },
  { number: 11, name: "Sustainable Cities", color: "#fd9d24" },
  { number: 12, name: "Responsible Consumption", color: "#bf8b2e" },
  { number: 13, name: "Climate Action", color: "#3f7e44" },
  { number: 15, name: "Life on Land", color: "#56c02b" },
  { number: 16, name: "Peace & Justice", color: "#00689d" },
];

// SDG Icon Component
function SDGIcon({ number, displayNo, size = "md" }: { number: number; displayNo?: number | string; size?: "sm" | "md" | "lg" }) {
  const sdg = sdgs.find(s => s.number === number);
  const sizeClasses = {
    sm: "w-8 h-8 text-xs",
    md: "w-12 h-12 text-sm",
    lg: "w-16 h-16 text-base"
  };

  return (
    <div
      className={`${sizeClasses[size]} rounded-xl flex items-center justify-center text-white font-bold shadow-md`}
      style={{ backgroundColor: sdg?.color || '#666' }}
    >
      {displayNo || number}
    </div>
  );
}

// Navigation Component
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="crescent_logo.png"
              alt="Crescent Logo"
              className="w-12 h-12 object-contain"
            />
            <span className={`font-display font-bold text-lg ${scrolled ? 'text-pyp-dark' : 'text-pyp-dark'}`}>
              PYP V Exhibition
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#projects" className="text-pyp-dark hover:text-pyp-orange transition-colors font-medium">Projects</a>
            <a href="#about" className="text-pyp-dark hover:text-pyp-orange transition-colors font-medium">About</a>
            <a href="#sdgs" className="text-pyp-dark hover:text-pyp-orange transition-colors font-medium">SDGs</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            <a href="#projects" className="block py-2 text-pyp-dark hover:text-pyp-orange" onClick={() => setIsOpen(false)}>Projects</a>
            <a href="#about" className="block py-2 text-pyp-dark hover:text-pyp-orange" onClick={() => setIsOpen(false)}>About</a>
            <a href="#sdgs" className="block py-2 text-pyp-dark hover:text-pyp-orange" onClick={() => setIsOpen(false)}>SDGs</a>
          </div>
        )}
      </div>
    </nav>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <img
          src="pyp-pattern.png"
          alt="PYP Geometric Pattern"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-pyp-beige/60 via-transparent to-pyp-beige" />
      </div>

      {/* Content: Increased padding to prevent overlap with fixed navigation */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-28 md:pt-40">
        {/* School Name and Logos */}
        <div className="animate-in mb-8 flex flex-col items-center">
          <div className="flex flex-col items-center gap-6 mb-8">
            {/* Responsive Branding Cluster: Stacked on Mobile, Side-by-Side on Desktop */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-20 mb-8 md:mb-12">
              <img
                src="crescent_logo.png"
                alt="Crescent Logo"
                className="w-28 h-28 md:w-56 md:h-56 object-contain animate-float-logo drop-shadow-xl"
              />
              {/* Divider: Only visible on desktop when icons are side-by-side */}
              <div className="w-1.5 h-12 md:h-40 bg-pyp-orange/20 rounded-full hidden md:block" />
              <img
                src="sdg-circle.png"
                alt="UN SDG Circle"
                className="w-32 h-32 md:w-80 md:h-80 object-contain animate-float-logo-slow drop-shadow-xl"
              />
            </div>

            <div className="text-center">
              <p className="text-pyp-dark font-bold text-base md:text-2xl uppercase tracking-widest mb-1 px-4">
                Crescent Model Higher Secondary School
              </p>
              <p className="inline-block px-8 py-2 bg-[#2E8B7A] text-white font-display font-bold text-base md:text-2xl rounded-full shadow-lg mt-4 tracking-wider uppercase ring-4 ring-[#2E8B7A]/20 border-2 border-white/30">
                Girls Campus
              </p>
            </div>
          </div>

          {/* Main Hero Heading */}
          <h1 className="font-display text-4xl md:text-7xl lg:text-9xl text-pyp-orange text-shadow-xl mb-4 md:mb-6">
            PYP V Exhibition
          </h1>
          <p className="text-pyp-dark font-black text-xl md:text-4xl mb-8 md:mb-10 tracking-[0.2em] text-pyp-green">
            2026
          </p>

          <p className="text-pyp-dark/90 text-sm md:text-2xl max-w-4xl mx-auto font-medium leading-relaxed bg-white/60 backdrop-blur-md p-6 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl border border-white/40 transform hover:scale-[1.02] transition-transform duration-500">
            Explore the diverse range of inquiry-based projects created by our students,
            each addressing real-world issues aligned with the UN Sustainable Development Goals.
          </p>
        </div>

        {/* Logos */}
        <div className="flex justify-center items-center gap-4 md:gap-12 mb-8 animate-in-delay-1 flex-wrap">
          <div className="w-20 h-20 md:w-32 md:h-32 bg-white rounded-2xl shadow-xl flex items-center justify-center p-3 animate-float overflow-hidden">
            <img
              src="crescent_logo.png"
              alt="Crescent School Logo"
              className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="w-20 h-20 md:w-32 md:h-32 bg-white rounded-2xl shadow-xl flex items-center justify-center p-4 animate-float overflow-hidden" style={{ animationDelay: '0.3s' }}>
            <img
              src="ib-logo.png"
              alt="IB World School Logo"
              className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="w-20 h-20 md:w-32 md:h-32 bg-white rounded-2xl shadow-xl flex items-center justify-center p-4 animate-float overflow-hidden" style={{ animationDelay: '0.6s' }}>
            <img
              src="ib-logo-mini.png"
              alt="IB Logo Badge"
              className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="animate-in-delay-3 mt-6 md:mt-10">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-pyp-orange text-white px-8 py-3 md:px-10 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-pyp-orange/90 transition-all hover:scale-105 shadow-2xl"
          >
            Go to Exhibition
            <ChevronDown className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Girlpower Floating Badge - REVISED: Hidden on small mobile screens to prevent overlap */}
      <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20">
        <div className="bg-[#2E8B7A] text-white font-display font-bold text-xl md:text-2xl py-12 px-5 rounded-l-[2.5rem] shadow-2xl border-l border-t border-b border-white/20 transform hover:-translate-x-2 transition-transform duration-300">
          <span className="[writing-mode:vertical-rl] uppercase tracking-[0.3em]">#GIRLPOWER</span>
        </div>
      </div>

      {/* Moving Slider (Ticker) */}
      <div className="absolute bottom-0 w-full bg-pyp-dark/95 backdrop-blur-lg py-5 overflow-hidden z-20 border-t border-pyp-orange/30">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-16 px-8">
              <span className="text-white font-bold text-lg flex items-center gap-4">
                <span className="w-9 h-9 rounded-full bg-pink-500 flex items-center justify-center shadow-lg">
                  <Zap className="w-5 h-5 text-white" />
                </span>
                #GIRLPOWER
              </span>
              <span className="text-white/70 font-bold text-lg flex items-center gap-4">
                <span className="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center shadow-lg">
                  <Globe className="w-5 h-5 text-white" />
                </span>
                Explore the World
              </span>
              <span className="text-white/70 font-bold text-lg flex items-center gap-4">
                <span className="w-9 h-9 rounded-full bg-purple-500 flex items-center justify-center shadow-lg">
                  <Users className="w-5 h-5 text-white" />
                </span>
                Connect Cultures
              </span>
              <span className="text-white/70 font-bold text-lg flex items-center gap-4">
                <span className="w-9 h-9 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
                  <TreePine className="w-5 h-5 text-white" />
                </span>
                Travel Responsibly
              </span>
              <span className="text-white font-extrabold text-lg flex items-center gap-4">
                <span className="w-9 h-9 rounded-full bg-yellow-500 flex items-center justify-center shadow-lg">
                  <Star className="w-5 h-5 text-white" />
                </span>
                Empowered Girls, Better World
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .writing-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float-logo {
          animation: float-gentle 4s ease-in-out infinite;
        }
        .animate-float-logo-slow {
          animation: float-gentle 6s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(-50%) translateY(-10px); }
          50% { transform: translateY(-50%) translateY(10px); }
        }
        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

// Project Card Component
function ProjectCard({ project, index, onOpenGallery }: { project: any; index: number; onOpenGallery?: (images: string[]) => void }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const Icon = project.icon;

  return (
    <div
      ref={cardRef}
      className={`project-card ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700`}
      style={{
        transitionDelay: `${(index % 3) * 100}ms`,
        transform: isVisible ? `rotate(${project.rotation})` : 'rotate(0deg) translateY(32px)'
      }}
    >
      {/* Header with Icon and SDG */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-pyp-orange/10 rounded-xl flex items-center justify-center">
            <Icon className="w-5 h-5 text-pyp-orange" />
          </div>
          <h3 className="font-display font-bold text-xl text-pyp-dark leading-relaxed" dir="auto">
            {project.title}
          </h3>
        </div>
        <SDGIcon number={project.sdg} displayNo={project.id} size="sm" />
      </div>

      {/* Central Idea */}
      <div className="central-idea-box mb-4">
        <p className="text-sm md:text-base">{project.centralIdea}</p>
      </div>

      {/* Lines of Inquiry */}
      <div className="info-box mb-4">
        <h4 className="font-semibold text-pyp-dark mb-2 flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-pyp-orange" />
          Lines of Inquiry
        </h4>
        <ul className="space-y-1 mb-4">
          {(project.linesOfInquiry || []).map((line: string, i: number) => (
            <li key={i} className="text-sm text-pyp-dark/80 flex items-start gap-2">
              <span className="text-pyp-orange font-bold">{i + 1}.</span>
              <span>{line}</span>
            </li>
          ))}
        </ul>

        {/* External Link if exists */}
        {project.link && (
          <a
            href={project.link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2 px-3 bg-pyp-orange/90 text-white rounded-lg font-bold text-xs hover:bg-pyp-orange transition-all hover:scale-[1.01] shadow-sm group"
          >
            <ExternalLink className="w-3 h-3 group-hover:rotate-12 transition-transform" />
            {project.link.label}
          </a>
        )}

        {/* Child Labour Gallery Button */}
        {project.id === 6 && onOpenGallery && (
          <button
            onClick={() => onOpenGallery([
              "child labour 1.jpeg",
              "child labour 2.jpeg",
              "child labour 3.jpeg",
              "child labour 4.jpeg"
            ])}
            className="flex items-center justify-center gap-2 w-full mt-3 py-2 px-3 bg-[#c5192d] text-white rounded-lg font-bold text-sm hover:bg-[#a01424] transition-all hover:scale-[1.01] shadow-md group"
          >
            <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            View Photo Gallery
          </button>
        )}

        {/* Food Wastage Gallery Button */}
        {project.id === 7 && onOpenGallery && (
          <button
            onClick={() => onOpenGallery([
              "food waste 1.jpeg",
              "food waste 2.jpeg",
              "food waste 3.jpeg",
              "food waste 4.jpeg"
            ])}
            className="flex items-center justify-center gap-2 w-full mt-3 py-2 px-3 bg-pyp-orange text-white rounded-lg font-bold text-sm hover:bg-pyp-orange/90 transition-all hover:scale-[1.01] shadow-md group"
          >
            <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            View Photo Gallery
          </button>
        )}

        {/* Girls Empowerment Gallery Button */}
        {project.id === 8 && onOpenGallery && (
          <button
            onClick={() => onOpenGallery([
              "empowerment 1.jpeg",
              "empowerment 2.jpeg",
              "empowerment 3.jpeg",
              "empowerment 4.jpeg",
              "empowerment 5.jpeg",
              "empowerment 6.jpeg",
              "empowerment 7.jpeg",
              "empowerment 8.jpeg",
              "empowerment 9.jpeg",
              "empowerment 10.jpeg"
            ])}
            className="flex items-center justify-center gap-2 w-full mt-3 py-2 px-3 bg-[#e5243b] text-white rounded-lg font-bold text-sm hover:bg-[#c5192d] transition-all hover:scale-[1.01] shadow-md group"
          >
            <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            View Photo Gallery
          </button>
        )}

        {/* Gaming Addiction Gallery Button */}
        {project.id === 2 && onOpenGallery && (
          <button
            onClick={() => onOpenGallery([
              "gaming 1.jpeg",
              "gaming 2.jpeg",
              "gaming 3.jpeg",
              "gaming 4.jpeg"
            ])}
            className="flex items-center justify-center gap-2 w-full mt-3 py-2 px-3 bg-[#0d6efd] text-white rounded-lg font-bold text-sm hover:bg-[#0b5ed7] transition-all hover:scale-[1.01] shadow-md group"
          >
            <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            View Photo Gallery
          </button>
        )}

        {/* Healthy Food Gallery Button */}
        {project.id === 5 && onOpenGallery && (
          <button
            onClick={() => onOpenGallery([
              "nutrition 1.jpeg",
              "nutrition 2.jpeg",
              "nutrition 3.jpeg"
            ])}
            className="flex items-center justify-center gap-2 w-full mt-3 py-2 px-3 bg-[#4c9f38] text-white rounded-lg font-bold text-sm hover:bg-[#3d7f2d] transition-all hover:scale-[1.01] shadow-md group"
          >
            <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            View Photo Gallery
          </button>
        )}

        {/* Animal Abuse Gallery Button */}
        {project.id === 12 && onOpenGallery && (
          <div className="space-y-2">
            <button
              onClick={() => onOpenGallery([
                "animals 1.jpeg",
                "animals 2.jpeg",
                "animals 3.jpeg",
                "animals 4.jpeg"
              ])}
              className="flex items-center justify-center gap-2 w-full mt-3 py-2 px-3 bg-[#56c02b] text-white rounded-lg font-bold text-sm hover:bg-[#46a020] transition-all hover:scale-[1.01] shadow-md group"
            >
              <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              View Photo Gallery
            </button>
            <a
              href="https://rescue4paws.base44.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2 px-3 bg-[#0d6efd] text-white rounded-lg font-bold text-sm hover:bg-[#0b5ed7] transition-all hover:scale-[1.01] shadow-md group"
            >
              <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              Website Made by Students
            </a>
          </div>
        )}

        {/* Online Harassment Gallery Button */}
        {project.id === 17 && onOpenGallery && (
          <button
            onClick={() => onOpenGallery([
              "online 1.jpeg",
              "online 2.jpeg",
              "online 3.jpeg"
            ])}
            className="flex items-center justify-center gap-2 w-full mt-3 py-2 px-3 bg-[#dd1367] text-white rounded-lg font-bold text-sm hover:bg-[#c2105a] transition-all hover:scale-[1.01] shadow-md group"
          >
            <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            View Photo Gallery
          </button>
        )}
      </div>

      {/* Specified Concepts */}
      <div className="info-box mb-4">
        <h4 className="font-semibold text-pyp-dark mb-2 flex items-center gap-2">
          <Lightbulb className="w-4 h-4 text-pyp-orange" />
          Specified Concepts
        </h4>
        <div className="flex flex-wrap gap-2">
          {(project.concepts || []).map((concept: string, i: number) => (
            <span
              key={i}
              className="px-3 py-1 bg-pyp-orange/10 text-pyp-orange rounded-full text-sm font-medium"
            >
              {concept}
            </span>
          ))}
        </div>
      </div>

      {/* Illustration */}
      <div className="relative h-40 rounded-xl overflow-hidden bg-pyp-beige mb-4">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
    </div>
  );
}

// Projects Section
function ProjectsSection() {
  const [galleryImages, setGalleryImages] = useState<string[] | null>(null);

  // Lock body scroll when gallery is open
  useEffect(() => {
    if (galleryImages) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [galleryImages]);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-pyp-dark mb-4">
            Exhibition Projects
          </h2>
          <div className="w-24 h-1 bg-pyp-orange mx-auto rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} onOpenGallery={setGalleryImages} />
          ))}
        </div>
      </div>

      {/* Fullscreen Image Gallery Popup */}
      {galleryImages && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 md:p-10 animate-fade-in backdrop-blur-sm">
          <button
            onClick={() => setGalleryImages(null)}
            className="absolute top-6 right-6 text-white hover:text-pyp-orange transition-colors z-50 bg-black/50 p-2 rounded-full"
          >
            <X className="w-8 h-8" />
          </button>

          <div className="w-full max-w-6xl h-full flex flex-col">
            <h3 className="text-white text-3xl font-display font-bold mb-6 text-center">Project Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 overflow-y-auto pb-10 pr-2">
              {galleryImages.map((src, i) => (
                <div key={i} className="bg-white/5 p-2 rounded-2xl">
                  <img
                    src={src}
                    alt={`Gallery Image ${i + 1}`}
                    className="w-full h-auto max-h-[60vh] object-contain rounded-xl shadow-2xl"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

// About Section
function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: 21, label: "Student Projects" },
    { number: 13, label: "UN SDGs Covered" },
    { number: 100, label: "+ Students" },
    { number: 1, label: "Amazing Showcase" },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <h2 className="font-display text-4xl md:text-5xl text-pyp-dark mb-6">
              About PYP Exhibition
            </h2>
            <div className="space-y-4 text-pyp-dark/80">
              <p>
                The PYP Exhibition represents the culmination of students' learning journey in the
                Primary Years Programme. It showcases their ability to conduct in-depth inquiries
                into real-world issues that matter to them and their communities.
              </p>
              <p>
                Through collaborative research, critical thinking, and creative expression, our
                students explore topics connected to the UN Sustainable Development Goals,
                demonstrating their understanding of key concepts and their development as
                internationally-minded learners.
              </p>
              <p>
                The exhibition empowers students to take ownership of their learning and make
                a positive difference in the world around them.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`bg-pyp-beige rounded-2xl p-4 text-center transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="font-display text-3xl text-pyp-orange font-bold">{stat.number}</div>
                  <div className="text-sm text-pyp-dark/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className={`relative transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative">
              <div className="absolute -inset-4 bg-pyp-orange/10 rounded-3xl transform rotate-3" />
              <div className="relative bg-white rounded-3xl p-8 shadow-card">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-pyp-orange rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-pyp-dark">Inquiry-Based Learning</h3>
                    <p className="text-sm text-pyp-dark/60">Student-driven exploration</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-pyp-green/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Lightbulb className="w-4 h-4 text-pyp-green" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-pyp-dark">Critical Thinking</h4>
                      <p className="text-sm text-pyp-dark/70">Analyzing issues from multiple perspectives</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Users className="w-4 h-4 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-pyp-dark">Collaboration</h4>
                      <p className="text-sm text-pyp-dark/70">Working together to find solutions</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Globe className="w-4 h-4 text-purple-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-pyp-dark">Global Awareness</h4>
                      <p className="text-sm text-pyp-dark/70">Understanding our role in the world</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// SDGs Section
function SDGsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="sdgs" ref={sectionRef} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-display text-4xl md:text-5xl text-pyp-dark mb-4">
            United Nations Sustainable Development Goals
          </h2>
          <p className="text-pyp-dark/70 max-w-2xl mx-auto">
            Our projects align with the UN SDGs to create a better world.
            Each project contributes to addressing global challenges and promoting sustainable development.
          </p>
        </div>

        {/* SDG Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
          {sdgs.map((sdg, index) => (
            <div
              key={sdg.number}
              className={`group transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <img
                src={`https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-${sdg.number < 10 ? '0' + sdg.number : sdg.number}.jpg`}
                alt={sdg.name}
                className="w-full aspect-square rounded-2xl object-cover cursor-pointer hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-xl"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Learn More Link */}
        <div className={`text-center mt-10 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <a
            href="https://sdgs.un.org/goals"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-pyp-orange hover:text-pyp-orange/80 font-semibold transition-colors"
          >
            Learn more about UN SDGs
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-pyp-dark text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* School Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-pyp-orange rounded-full flex items-center justify-center">
                <span className="text-white font-bold">C</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg">Crescent Model</h3>
                <p className="text-white/60 text-sm">Higher Secondary School</p>
              </div>
            </div>
            <p className="text-white/70 text-sm">
              Girls Campus<br />
              Empowering future leaders through quality education
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#projects" className="text-white/70 hover:text-pyp-orange transition-colors text-sm">Projects</a></li>
              <li><a href="#about" className="text-white/70 hover:text-pyp-orange transition-colors text-sm">About PYP</a></li>
              <li><a href="#sdgs" className="text-white/70 hover:text-pyp-orange transition-colors text-sm">UN SDGs</a></li>
              <li><a href="https://www.ibo.org" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-pyp-orange transition-colors text-sm inline-flex items-center gap-1">IB World School <ExternalLink className="w-3 h-3" /></a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Connect With Us</h4>
            <p className="text-white/70 text-sm mb-4">
              Follow our journey and stay updated with our latest projects and achievements.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-pyp-orange transition-colors">
                <span className="text-sm font-bold">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-pyp-orange transition-colors">
                <span className="text-sm font-bold">in</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-pyp-orange transition-colors">
                <span className="text-sm font-bold">X</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © 2026 PYP V Exhibition. All rights reserved.
          </p>
          <p className="text-white/50 text-sm flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-pyp-orange" /> by Crescent Girls Campus
          </p>
        </div>
      </div>
    </footer>
  );
}

// Main App
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loader after a short delay or when everything is ready
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-[100] bg-pyp-beige flex flex-col items-center justify-center">
        <div className="relative">
          <div className="w-24 h-24 border-4 border-pyp-orange/20 border-t-pyp-orange rounded-full animate-spin" />
          <img
            src="crescent_logo.png"
            alt="Loading..."
            className="absolute inset-0 w-12 h-12 m-auto object-contain animate-pulse"
            loading="lazy"
          />
        </div>
        <p className="mt-6 font-display font-bold text-pyp-dark animate-pulse">
          PYP V Exhibition 2026
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pyp-beige selection:bg-pyp-orange/30">
      <Navigation />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <SDGsSection />
      <Footer />
    </div>
  );
}

export default App;
