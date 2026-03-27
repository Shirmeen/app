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
  Gavel
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
    image: "/project-tourism.png",
    icon: Globe,
    rotation: "-1deg"
  },
  {
    id: 2,
    title: "Gaming",
    centralIdea: "Excessive gaming affects our lifestyle",
    linesOfInquiry: [
      "Types and reasons children play video games",
      "Effects of excessive gaming on physical and mental health",
      "Ways to maintain a balanced and healthy lifestyle while using technology"
    ],
    concepts: ["Form", "Causation", "Responsibility"],
    sdg: 3,
    image: "/project-gaming.png",
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
    image: "/project-beauty.png",
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
    image: "/project-inclusion.png",
    icon: Users,
    rotation: "0.5deg"
  },
  {
    id: 5,
    title: "Nutrition",
    centralIdea: "Nutrition choices influence physical health",
    linesOfInquiry: [
      "The role of nutrients in the body",
      "Maintaining physical health through lifestyle",
      "Making healthy choices for long-term well-being"
    ],
    concepts: ["Function", "Connection", "Responsibility"],
    sdg: 3,
    image: "/project-nutrition.png",
    icon: Apple,
    rotation: "-1deg"
  },
  {
    id: 6,
    title: "Child Labour",
    centralIdea: "Child domestic labour violates children's rights",
    linesOfInquiry: [
      "Effects of denial of children's rights",
      "Factors contributing to child domestic labour",
      "Promoting protection and advocacy for children"
    ],
    concepts: ["Causation", "Perspective", "Responsibility"],
    sdg: 4,
    image: "/project-childlabour.png",
    icon: Hand,
    rotation: "1deg"
  },
  {
    id: 7,
    title: "Food Wastage",
    centralIdea: "Food wastage at social gatherings leads to challenges in the community",
    linesOfInquiry: [
      "Causes of food wastage at social gatherings",
      "Impact of food wastage on the community and environment",
      "Actions to reduce food wastage"
    ],
    concepts: ["Causation", "Connection", "Responsibility"],
    sdg: 2,
    image: "/project-foodwaste.png",
    icon: ShoppingBag,
    rotation: "-0.5deg"
  },
  {
    id: 8,
    title: "Financial Independence",
    centralIdea: "Financial independence influences girls' life choices",
    linesOfInquiry: [
      "Impact of financial independence on girls' decisions",
      "Relationship between financial independence and empowerment",
      "Ways communities support girls in becoming financially independent"
    ],
    concepts: ["Causation", "Perspective", "Responsibility"],
    sdg: 5,
    image: "/project-financial.png",
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
    image: "/project-ai.png",
    icon: Brain,
    rotation: "-1deg"
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
    image: "/project-career.png",
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
    image: "/project-textile.png",
    icon: Scissors,
    rotation: "-0.5deg"
  },
  {
    id: 12,
    title: "Stray Animals",
    centralIdea: "Human action and choices affect the life and wellbeing of stray animals",
    linesOfInquiry: [
      "Human behaviors and their impact on stray animals",
      "Interventions that improve the lives of stray animals",
      "Promoting responsible human choices for animal welfare"
    ],
    concepts: ["Causation", "Connection", "Responsibility"],
    sdg: 15,
    image: "/project-strayanimals.png",
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
    image: "/project-braindrain.png",
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
    image: "/project-stereotypes.png",
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
    image: "/project-dowry.png",
    icon: Gavel,
    rotation: "-0.5deg"
  },
  {
    id: 16,
    title: "Begging Mafia",
    centralIdea: "Begging mafia exploits society",
    linesOfInquiry: [
      "Causes of organized begging systems",
      "Functioning of organized begging systems",
      "Connection between societal attitudes and the growth of organized begging"
    ],
    concepts: ["Causation", "Function", "Connection"],
    sdg: 1,
    image: "/project-begging.png",
    icon: Coins,
    rotation: "0.5deg"
  },
  {
    id: 17,
    title: "Online Communication",
    centralIdea: "Online communication affects how we connect with others and can create both opportunities and risks",
    linesOfInquiry: [
      "The impact of online interactions on emotions and relationships",
      "Causes of cyberbullying and influences on online behavior",
      "Responsibility in promoting safe and respectful online behavior"
    ],
    concepts: ["Connection", "Causation", "Responsibility"],
    sdg: 3,
    image: "/project-cyberbullying.png",
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
    image: "/project-deforestation.png",
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
    image: "/project-bodyshaming.png",
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
    image: "/project-brands.png",
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
    image: "/project-media.png",
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
function SDGIcon({ number, size = "md" }: { number: number; size?: "sm" | "md" | "lg" }) {
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
      {number}
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
              src="/crescent_logo.png"
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
          src="/pyp-pattern.png" 
          alt="PYP Geometric Pattern" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-pyp-beige/60 via-transparent to-pyp-beige" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-20">
        {/* School Name */}
        <div className="animate-in mb-8">
          <p className="text-pyp-dark/80 font-medium text-sm md:text-base uppercase tracking-wider">
            Crescent Model Higher Secondary School
          </p>
          <p className="text-pyp-dark/80 font-medium text-sm md:text-base mb-6">
            Girls Campus
          </p>
          <p className="text-pyp-dark/90 text-xl md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed bg-white/40 backdrop-blur-sm p-6 rounded-3xl shadow-sm border border-white/50">
            Explore the diverse range of inquiry-based projects created by our students, 
            each addressing real-world issues aligned with the UN Sustainable Development Goals.
          </p>
        </div>

        {/* Logos */}
        <div className="flex justify-center items-center gap-8 mb-8 animate-in-delay-1">
          <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-2xl shadow-xl flex items-center justify-center p-3 animate-float overflow-hidden">
            <img
              src="/crescent_logo.png"
              alt="Crescent School Logo"
              className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-2xl shadow-xl flex items-center justify-center p-4 animate-float overflow-hidden" style={{ animationDelay: '0.5s' }}>
            <img
              src="/ib-logo.png"
              alt="IB Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Main Title */}
        <div className="animate-in-delay-2 mb-8">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-pyp-orange text-shadow-lg">
            PYP V Exhibition
          </h1>
          <p className="text-pyp-dark/70 text-lg md:text-xl mt-4 font-medium">
            2026
          </p>
        </div>

        {/* Tagline */}
        {/* Tagline & Call to Action */}
        <div className="animate-in-delay-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-pyp-orange text-white px-8 py-3 rounded-full font-semibold hover:bg-pyp-orange/90 transition-all hover:scale-105 shadow-xl"
          >
            Go to Exhibition
            <ChevronDown className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Vertical Hashtag */}
      <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 hidden lg:block">
        <span className="writing-vertical text-pyp-orange font-display font-bold text-2xl tracking-wider opacity-80">
          #GIRLPOWER
        </span>
      </div>

      <style>{`
        .writing-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
        }
      `}</style>
    </section>
  );
}

// Project Card Component
function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
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
          <h3 className="font-display font-bold text-lg text-pyp-dark">{project.title}</h3>
        </div>
        <SDGIcon number={project.sdg} size="sm" />
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
        <ul className="space-y-1">
          {project.linesOfInquiry.map((line, i) => (
            <li key={i} className="text-sm text-pyp-dark/80 flex items-start gap-2">
              <span className="text-pyp-orange font-bold">{i + 1}.</span>
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Specified Concepts */}
      <div className="info-box mb-4">
        <h4 className="font-semibold text-pyp-dark mb-2 flex items-center gap-2">
          <Lightbulb className="w-4 h-4 text-pyp-orange" />
          Specified Concepts
        </h4>
        <div className="flex flex-wrap gap-2">
          {project.concepts.map((concept, i) => (
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
      <div className="relative h-40 rounded-xl overflow-hidden bg-pyp-beige">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}

// Projects Section
function ProjectsSection() {
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
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
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
              <div
                className="aspect-square rounded-2xl flex flex-col items-center justify-center p-3 text-white text-center cursor-pointer transition-transform hover:scale-110 shadow-md"
                style={{ backgroundColor: sdg.color }}
              >
                <span className="text-2xl font-bold">{sdg.number}</span>
                <span className="text-xs mt-1 leading-tight opacity-90">{sdg.name}</span>
              </div>
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
  return (
    <div className="min-h-screen bg-pyp-beige">
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
