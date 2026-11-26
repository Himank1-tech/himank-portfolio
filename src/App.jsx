import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Copy, 
  Check, 
  ExternalLink, 
  Play, 
  Terminal, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  TrendingUp, 
  Award, 
  BookOpen, 
  Briefcase, 
  GraduationCap, 
  ArrowUpRight,
  Code2,
  Sparkles,
  ChevronRight,
  MapPin,
  Send
} from 'lucide-react';

export default function App() {
  const [copied, setCopied] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  const copyEmail = () => {
    navigator.clipboard.writeText('himankbatra2005@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const categories = ['All', 'Full-Stack & Cloud', 'Agentic AI & ML', 'Quantitative & FinTech'];

  const projects = [
    {
      id: 'yatralekha',
      title: 'YatraLekha',
      category: 'Full-Stack & Cloud',
      badge: 'Transport OS & Freight Marketplace',
      tagline: 'Multi-tenant commercial transport operating system with real-time telematics and automated dispatch.',
      stack: ['Next.js', 'Node.js', 'Neon PostgreSQL', 'AWS S3', 'SSE', 'Google Gemini AI', 'PWA'],
      highlights: [
        'Real-time Server-Sent Events (SSE) freight load board delivering sub-100ms dispatch synchronization.',
        'AIS-140 GPS telematics and offline-first Service Worker PWA caching for remote transit corridors.',
        'PIN-secured RTO document compliance vault with AWS S3 presigned URLs and OTP email recovery.',
        'Embedded Google Gemini AI copilot for automated route risk triage and freight billing analytics.'
      ],
      metrics: [
        { label: 'Dispatch Latency', val: '<100ms' },
        { label: 'Cloud Database', val: 'Neon Serverless' },
        { label: 'Architecture', val: 'Monorepo' }
      ],
      liveUrl: 'https://web-phi-plum-44.vercel.app/',
      githubUrl: 'https://github.com/Himank1-tech/yatralekha',
      videoUrl: 'https://youtu.be/ovIi3qBQy6Q',
      accentGlow: 'from-cyan-500/20 to-cyan-500/5',
      borderColor: 'group-hover:border-cyan-500/50',
      badgeStyle: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20'
    },
    {
      id: 'aegissoc',
      title: 'Aegis SOC',
      category: 'Agentic AI & ML',
      badge: 'Multi-Vector Threat Detection',
      tagline: 'Computer vision-powered malware triage engine combining spatial byte projections with explainable AI.',
      stack: ['FastAPI', 'PyTorch', 'ResNet-50', 'Grad-CAM', 'Gmail API', 'Vercel', 'Python'],
      highlights: [
        'Pre-download malware triage across PE binaries (.exe, .dll) and media payloads (.jpg, .pdf).',
        'Nataraj spatial byte-mapping converting raw binary bytes into 2D grayscale matrices for CNN evaluation.',
        'Fine-tuned ResNet-50 classifying 25 malware families with 94%+ detection accuracy.',
        'Visual explainability via Grad-CAM neural attention heatmaps and live Gmail attachment ingestion.'
      ],
      metrics: [
        { label: 'Classification Accuracy', val: '94%+' },
        { label: 'Malware Families', val: '25 Classes' },
        { label: 'Explainability', val: 'Grad-CAM Heatmaps' }
      ],
      liveUrl: 'https://aegis-soc-security.vercel.app/',
      githubUrl: 'https://github.com/Himank1-tech/threat-detection-ui',
      videoUrl: 'https://youtu.be/bH-n4xYR4Z4',
      accentGlow: 'from-indigo-500/25 to-indigo-500/5',
      borderColor: 'group-hover:border-indigo-500/50',
      badgeStyle: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20'
    },
    {
      id: 'quantumfloor',
      title: 'QuantumFloor Pro',
      category: 'Quantitative & FinTech',
      badge: 'Autonomous AI Trading Floor',
      tagline: 'Multi-agent quantitative trading and backtesting terminal for Indian equities and global forex.',
      stack: ['FastAPI', 'React/Vite', 'Model Context Protocol (MCP)', 'Python', 'Render', 'TypeScript'],
      highlights: [
        'High-performance quantitative terminal supporting dual Indian equities (NSE/BSE) and global forex.',
        'Model Context Protocol (MCP) tool integration streaming real-time Level 2 order-book feeds.',
        'Institutional price-action detection engine (BOS, CHoCH, liquidity sweeps, dynamic Fibonacci levels).',
        'Adversarial Bull vs. Bear dual-agent debate consensus with a deterministic mathematical RiskGovernor.'
      ],
      metrics: [
        { label: 'Markets Covered', val: 'NSE/BSE & Forex' },
        { label: 'Agent Pipeline', val: '3-Tier Dual-Agent' },
        { label: 'Risk Model', val: 'Deterministic RiskGovernor' }
      ],
      liveUrl: 'https://quantumfloor-pro.onrender.com/',
      githubUrl: 'https://github.com/Himank1-tech/quantumfloor-pro',
      videoUrl: 'https://youtu.be/rb33UOjQDRU',
      accentGlow: 'from-cyan-500/15 to-indigo-500/20',
      borderColor: 'group-hover:border-cyan-400/50',
      badgeStyle: 'text-cyan-300 bg-cyan-500/10 border-cyan-500/20'
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const skillCategories = [
    {
      name: 'Languages & Core Stack',
      accent: 'cyan',
      skills: ['Java (DSA & OOP)', 'Python', 'TypeScript', 'JavaScript (ES6+)', 'SQL (PostgreSQL, MySQL)', 'C++']
    },
    {
      name: 'Agentic AI & Machine Learning',
      accent: 'indigo',
      skills: ['LangGraph', 'CrewAI', 'Model Context Protocol (MCP)', 'Agent-to-Agent (A2A)', 'RAG Pipelines', 'QLoRA Fine-Tuning', 'PyTorch', 'ResNet-50', 'Grad-CAM', 'Google Gemini API', 'OpenAI API', 'OpenCV']
    },
    {
      name: 'Full-Stack Systems & Cloud',
      accent: 'cyan',
      skills: ['Next.js', 'React.js', 'FastAPI', 'Node.js', 'Express.js', 'PostgreSQL (Neon)', 'AWS S3', 'Server-Sent Events (SSE)', 'Progressive Web Apps (PWA)', 'Tailwind CSS', 'Redux Toolkit', 'Docker', 'Vercel', 'Render', 'Power BI & DAX']
    },
    {
      name: 'Core CS & System Design',
      accent: 'indigo',
      skills: ['Data Structures & Algorithms', 'Object-Oriented Design', 'Database Management (DBMS)', 'Operating Systems', 'System Design & Distributed Patterns']
    }
  ];

  const experiences = [
    {
      role: 'Python & Power BI Intern',
      company: 'Edutantr',
      period: 'Jun 2025 – Jul 2025',
      type: 'Software Internship',
      accent: 'cyan',
      points: [
        'Automated ETL pipelines in Python (Pandas, NumPy) to clean, normalize, and transform operational datasets.',
        'Engineered executive Power BI dashboards with custom DAX calculations, slashing analytical reporting turnaround time by 35%.'
      ]
    },
    {
      role: 'Technical Community Mentor & Member',
      company: 'Google Developer Groups (GDG) on Campus, SPPU',
      period: 'Aug 2025 – May 2026',
      type: 'Developer Community',
      accent: 'indigo',
      points: [
        'Organized and executed 6 technical bootcamps, code sprints, and hands-on workshops on Cloud systems and Full-Stack paradigms.',
        'Mentored 150+ student developers in Git version control practices, open-source workflows, and clean code principles.'
      ]
    },
    {
      role: 'Head of University Sports Department & Team Lead (3-Year Tenure)',
      company: 'Savitribai Phule Pune University (SPPU) / GHRCEM',
      period: '2023 – 2026',
      type: 'University Governance & Athletics',
      accent: 'cyan',
      points: [
        'Governed athletic department operations over a 36-month tenure, leading a 30-member committee to direct 8+ regional tournaments hosting 1,200+ athletes.',
        'Streamlined equipment logistics and administration, reducing delays by 25%; mentored 4 sports divisions producing 7 championship podium finishes.',
        'Competed as a State-Level Table Tennis Athlete representing SPPU, securing 3 inter-collegiate championship titles.'
      ]
    }
  ];

  const certifications = [
    {
      title: 'AI Engineer Agentic Track: Complete Agent & MCP Architecture',
      issuer: 'Udemy',
      hours: '21h',
      date: 'Nov 2026',
      id: 'UC-f78c59d9-4ec6-422b-bff6-8d3d99da2c9d',
      url: 'https://www.udemy.com/certificate/UC-f78c59d9-4ec6-422b-bff6-8d3d99da2c9d/',
      accent: 'indigo'
    },
    {
      title: 'AI Engineer Core Track: LLM Engineering, RAG, QLoRA & Agents',
      issuer: 'Udemy',
      hours: '33.5h',
      date: 'Oct 2026',
      id: 'UC-e6384159-5817-4415-b063-dbe4ccbd7054',
      url: 'https://www.udemy.com/certificate/UC-e6384159-5817-4415-b063-dbe4ccbd7054/',
      accent: 'cyan'
    },
    {
      title: 'The Complete Full-Stack Web Development Bootcamp',
      issuer: 'Udemy',
      hours: '62h',
      date: 'Aug 2026',
      id: 'UC-458445ef-982c-4521-9889-b98c306c0149',
      url: 'https://www.udemy.com/certificate/UC-458445ef-982c-4521-9889-b98c306c0149/',
      accent: 'indigo'
    }
  ];

  const honors = [
    {
      title: 'Infosys HackWithInfy 2026',
      subtitle: 'Round 1 Qualifier',
      tag: 'Competitive Coding',
      accent: 'cyan'
    },
    {
      title: 'Smart India Hackathon (SIH) 2026',
      subtitle: 'National Finalist (Top 50 of 300+ entries)',
      tag: 'National Hackathon',
      accent: 'indigo'
    },
    {
      title: 'HACK2IGNITE 2026 & Space Hackathon',
      subtitle: 'National Finalist (Top 50 Teams)',
      tag: 'AI Communication',
      accent: 'cyan'
    },
    {
      title: 'LeetCode Problem Solving',
      subtitle: 'Solved 100+ DSA Problems across Graphs, DP & Trees',
      tag: 'Algorithms',
      accent: 'indigo'
    }
  ];

  return (
    <div className="min-h-screen bg-[#070a13] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-black">
      {/* Background ambient lighting - strictly Cyan & Indigo dual illumination */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[30rem] h-[30rem] bg-cyan-500/10 rounded-full blur-[140px]"></div>
        <div className="absolute top-1/3 -right-40 w-[32rem] h-[32rem] bg-indigo-500/12 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-10 left-1/4 w-[34rem] h-[34rem] bg-cyan-500/8 rounded-full blur-[160px]"></div>
      </div>

      {/* Sticky Navigation */}
      <header className="sticky top-0 z-50 glass-panel border-b border-white/5 py-4 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 font-bold tracking-tight text-lg text-white group">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-indigo-500 flex items-center justify-center text-slate-950 font-black text-sm shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              HB
            </span>
            <div className="flex flex-col">
              <span className="text-white group-hover:text-cyan-400 transition-colors leading-tight">Himank Sachin Batra</span>
              <span className="text-[10px] font-mono font-normal text-slate-400">Software Engineer & AI Architect</span>
            </div>
          </a>

          <nav className="flex items-center gap-3 sm:gap-6 text-sm font-medium text-slate-300">
            <a href="#systems" className="hover:text-cyan-400 transition-colors">Systems</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-indigo-400 transition-colors">Experience</a>
            <a href="#credentials" className="hover:text-indigo-400 transition-colors hidden md:inline">Credentials</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors hidden sm:inline">Contact</a>
            
            <button 
              onClick={copyEmail}
              className="px-3.5 py-1.5 text-xs rounded-full bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-500/10 text-cyan-400 transition-all flex items-center gap-1.5 font-mono"
              title="Click to copy email address"
            >
              {copied ? <Check size={13} className="text-cyan-400" /> : <Copy size={13} />}
              <span>{copied ? 'Copied!' : 'Copy Email'}</span>
            </button>
          </nav>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-6xl mx-auto px-6 sm:px-12 py-12 sm:py-20 z-10 w-full space-y-28">

        {/* HERO SECTION */}
        <section className="space-y-8 pt-4">
          {/* Recruiter Availability Callout */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            <span>Available for SDE, AI Systems & Full-Stack Engineering Roles</span>
          </div>

          <div className="space-y-5 max-w-4xl">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Engineering <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">Full-Stack Systems</span> & <span className="bg-gradient-to-r from-indigo-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">Agentic AI</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed">
              Software Engineer specializing in <span className="text-white font-medium">Next.js, FastAPI, and Neon PostgreSQL</span> alongside autonomous multi-agent pipelines with <span className="text-white font-medium">LangGraph, MCP, and PyTorch</span>. Proven record of designing, building, and deploying 3 production systems with verifiable impact.
            </p>
          </div>

          {/* Quick Quantified Metric Counters */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-2">
            <div className="glass-card p-4 rounded-xl border border-white/5 hover:border-cyan-500/40 transition-colors">
              <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono">3</div>
              <div className="text-xs text-slate-400 mt-1">Production Systems Deployed</div>
            </div>
            <div className="glass-card p-4 rounded-xl border border-white/5 hover:border-indigo-500/40 transition-colors">
              <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400 font-mono">7.5 / 10</div>
              <div className="text-xs text-slate-400 mt-1">B.Tech CGPA (GHRCEM Pune)</div>
            </div>
            <div className="glass-card p-4 rounded-xl border border-white/5 hover:border-cyan-500/40 transition-colors">
              <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono">116.5h+</div>
              <div className="text-xs text-slate-400 mt-1">Udemy AI & Full-Stack Tracks</div>
            </div>
            <div className="glass-card p-4 rounded-xl border border-white/5 hover:border-indigo-500/40 transition-colors">
              <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400 font-mono">3x</div>
              <div className="text-xs text-slate-400 mt-1">University Table Tennis Champ</div>
            </div>
          </div>

          {/* Action CTAs for Recruiters */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a 
              href="#systems"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-cyan-500/20 flex items-center gap-2"
            >
              <span>Explore Flagship Systems</span>
              <ChevronRight size={16} />
            </a>

            <a 
              href="https://github.com/Himank1-tech" 
              target="_blank" 
              rel="noreferrer"
              className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 text-white font-medium text-sm transition-all flex items-center gap-2"
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>

            <a 
              href="https://linkedin.com/in/himank-batra" 
              target="_blank" 
              rel="noreferrer"
              className="px-5 py-3 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 font-medium text-sm transition-all flex items-center gap-2"
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>

            <a 
              href="mailto:himankbatra2005@gmail.com"
              className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 text-slate-300 font-medium text-sm transition-all flex items-center gap-2"
            >
              <Mail size={16} />
              <span>himankbatra2005@gmail.com</span>
            </a>
          </div>
        </section>

        {/* FLAGSHIP PRODUCTION SYSTEMS */}
        <section id="systems" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <div className="text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider">Flagship Architecture</div>
              <h2 className="text-3xl font-bold text-white tracking-tight mt-1">Production Deployed Systems</h2>
            </div>
            
            {/* Interactive Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 bg-white/5 p-1 rounded-xl border border-white/10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all ${
                    activeCategory === cat
                      ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {filteredProjects.map((proj) => (
              <div 
                key={proj.id}
                className={`glass-card group rounded-2xl p-6 sm:p-8 border border-white/10 relative overflow-hidden transition-all duration-300 ${proj.borderColor}`}
              >
                {/* Dual-color ambient card glow */}
                <div className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-br ${proj.accentGlow} rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 opacity-50 group-hover:opacity-100 transition-opacity`}></div>

                <div className="relative z-10 space-y-6">
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-bold text-white tracking-tight">{proj.title}</h3>
                        <span className={`text-xs px-2.5 py-0.5 rounded-full font-mono font-medium border ${proj.badgeStyle}`}>
                          {proj.badge}
                        </span>
                      </div>
                      <p className="text-sm text-slate-400 mt-1">{proj.tagline}</p>
                    </div>

                    {/* Interactive Clickable Production Links */}
                    <div className="flex flex-wrap items-center gap-2 pt-2 sm:pt-0">
                      <a 
                        href={proj.liveUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        className="px-3.5 py-1.5 rounded-lg bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/35 text-xs font-medium flex items-center gap-1.5 transition-all shadow-sm"
                      >
                        <ExternalLink size={13} />
                        <span>Live App</span>
                      </a>
                      <a 
                        href={proj.githubUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xs font-medium flex items-center gap-1.5 transition-all"
                      >
                        <Github size={13} />
                        <span>GitHub</span>
                      </a>
                      <a 
                        href={proj.videoUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-indigo-500/15 hover:bg-indigo-500/25 text-indigo-300 border border-indigo-500/35 text-xs font-medium flex items-center gap-1.5 transition-all"
                      >
                        <Play size={13} />
                        <span>Video Demo</span>
                      </a>
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {proj.stack.map((tech, idx) => (
                      <span key={idx} className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300 font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Engineering Highlights Bullet List */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-300">
                    {proj.highlights.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 bg-black/25 p-3 rounded-lg border border-white/5">
                        <span className="text-cyan-400 font-mono text-xs mt-0.5">▹</span>
                        <span className="leading-snug">{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Quantified Metrics Footer */}
                  <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/5">
                    {proj.metrics.map((m, idx) => (
                      <div key={idx} className="text-center sm:text-left">
                        <div className="text-xs text-slate-400 font-mono">{m.label}</div>
                        <div className="text-sm font-bold text-cyan-300 font-mono mt-0.5">{m.val}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TECHNICAL STACK MATRIX */}
        <section id="skills" className="space-y-6 scroll-mt-24">
          <div className="border-b border-white/10 pb-4">
            <div className="text-indigo-400 text-xs font-mono font-semibold uppercase tracking-wider">Technical Proficiency</div>
            <h2 className="text-3xl font-bold text-white tracking-tight mt-1">Skills & Architectural Matrix</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((cat, idx) => {
              const isCyan = cat.accent === 'cyan';
              return (
                <div 
                  key={idx} 
                  className={`glass-card p-6 rounded-2xl border border-white/5 space-y-4 hover:border-${isCyan ? 'cyan' : 'indigo'}-500/40 transition-colors`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className={`w-2.5 h-2.5 rounded-full ${isCyan ? 'bg-cyan-400 shadow-sm shadow-cyan-400/50' : 'bg-indigo-400 shadow-sm shadow-indigo-400/50'}`}></span>
                    <h3 className="font-semibold text-white tracking-wide text-base">{cat.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx}
                        className={`px-3 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-slate-300 transition-all ${
                          isCyan 
                            ? 'hover:bg-cyan-500/10 hover:text-cyan-300 hover:border-cyan-500/30' 
                            : 'hover:bg-indigo-500/10 hover:text-indigo-300 hover:border-indigo-500/30'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* EXPERIENCE & LEADERSHIP TIMELINE */}
        <section id="experience" className="space-y-6 scroll-mt-24">
          <div className="border-b border-white/10 pb-4">
            <div className="text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider">Career & Leadership</div>
            <h2 className="text-3xl font-bold text-white tracking-tight mt-1">Experience & Athletics Timeline</h2>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, idx) => {
              const isCyan = exp.accent === 'cyan';
              return (
                <div 
                  key={idx} 
                  className={`glass-card p-6 sm:p-7 rounded-2xl border border-white/5 space-y-3 relative hover:border-${isCyan ? 'cyan' : 'indigo'}-500/35 transition-colors`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                      <div className={`text-sm font-medium ${isCyan ? 'text-cyan-400' : 'text-indigo-400'}`}>{exp.company}</div>
                    </div>
                    <div className="text-xs font-mono text-slate-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/10 w-fit">
                      {exp.period}
                    </div>
                  </div>

                  <div className="space-y-2 pt-1 text-sm text-slate-300">
                    {exp.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2">
                        <span className={`text-xs mt-1 ${isCyan ? 'text-cyan-400' : 'text-indigo-400'}`}>▹</span>
                        <p className="leading-relaxed">{pt}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Education Card */}
            <div className="glass-card p-6 sm:p-7 rounded-2xl border border-white/5 space-y-2 hover:border-indigo-500/40 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <h3 className="text-lg font-bold text-white">Bachelor of Technology in Computer Engineering</h3>
                  <div className="text-sm text-indigo-400 font-medium">G H Raisoni College of Engineering and Management, Pune</div>
                </div>
                <div className="text-xs font-mono text-slate-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/10 w-fit">
                  2023 – 2027
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono font-semibold">
                  Current CGPA: 7.5 / 10.0
                </span>
                <span className="text-xs text-slate-400 font-mono">Affiliated to Savitribai Phule Pune University (SPPU)</span>
              </div>
            </div>
          </div>
        </section>

        {/* VERIFIED CREDENTIALS & HONORS */}
        <section id="credentials" className="space-y-6 scroll-mt-24">
          <div className="border-b border-white/10 pb-4">
            <div className="text-indigo-400 text-xs font-mono font-semibold uppercase tracking-wider">Verifiable Credentials</div>
            <h2 className="text-3xl font-bold text-white tracking-tight mt-1">Certifications & Hackathon Honors</h2>
          </div>

          <div className="space-y-6">
            {/* Udemy Certifications */}
            <div className="space-y-3">
              <div className="text-sm font-semibold text-slate-300 font-mono">Udemy Engineering Tracks (116.5 Hours)</div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {certifications.map((cert, idx) => {
                  const isCyan = cert.accent === 'cyan';
                  return (
                    <a 
                      key={idx}
                      href={cert.url}
                      target="_blank"
                      rel="noreferrer"
                      className={`glass-card p-5 rounded-xl border border-white/5 flex flex-col justify-between group transition-all ${
                        isCyan ? 'hover:border-cyan-500/50' : 'hover:border-indigo-500/50'
                      }`}
                    >
                      <div className="space-y-2">
                        <div className={`flex items-center justify-between text-xs font-mono ${isCyan ? 'text-cyan-400' : 'text-indigo-400'}`}>
                          <span>{cert.issuer} Verified ({cert.hours})</span>
                          <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                        <div className={`font-semibold text-white text-sm transition-colors ${
                          isCyan ? 'group-hover:text-cyan-300' : 'group-hover:text-indigo-300'
                        }`}>
                          {cert.title}
                        </div>
                      </div>
                      <div className="text-[11px] font-mono text-slate-400 pt-3 border-t border-white/5 mt-3">
                        ID: {cert.id.slice(0, 15)}... | {cert.date}
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Honors & Hackathons */}
            <div className="space-y-3 pt-2">
              <div className="text-sm font-semibold text-slate-300 font-mono">Competitive Wins & Hackathons</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {honors.map((h, idx) => {
                  const isCyan = h.accent === 'cyan';
                  return (
                    <div 
                      key={idx} 
                      className={`glass-card p-4 rounded-xl border border-white/5 space-y-1.5 transition-colors ${
                        isCyan ? 'hover:border-cyan-500/40' : 'hover:border-indigo-500/40'
                      }`}
                    >
                      <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded border ${
                        isCyan 
                          ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20' 
                          : 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20'
                      }`}>
                        {h.tag}
                      </span>
                      <div className="font-bold text-white text-sm pt-1">{h.title}</div>
                      <div className="text-xs text-slate-400 leading-snug">{h.subtitle}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* RECRUITER CONTACT & CALL TO ACTION */}
        <section id="contact" className="space-y-6 scroll-mt-24">
          <div className="glass-card rounded-2xl p-8 sm:p-10 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/15 via-indigo-500/15 to-transparent rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 max-w-3xl space-y-6">
              <div className="space-y-2">
                <div className="text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider">Get In Touch</div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Let's Build Something Exceptional</h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  I am actively interviewing for <span className="text-white font-medium">Software Engineer, AI Systems Architect, and Full-Stack roles</span>. Whether you have an open position or want to discuss my systems architecture, feel free to reach out directly.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a 
                  href="mailto:himankbatra2005@gmail.com"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-cyan-500/20 flex items-center gap-2"
                >
                  <Send size={15} />
                  <span>Send Direct Email</span>
                </a>

                <button 
                  onClick={copyEmail}
                  className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 text-white font-medium text-sm transition-all flex items-center gap-2"
                >
                  {copied ? <Check size={16} className="text-cyan-400" /> : <Copy size={16} />}
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy himankbatra2005@gmail.com'}</span>
                </button>

                <a 
                  href="https://linkedin.com/in/himank-batra" 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-5 py-3 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 font-medium text-sm transition-all flex items-center gap-2"
                >
                  <Linkedin size={16} />
                  <span>LinkedIn Profile</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-3 text-xs text-slate-400 font-mono">
                <div className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-cyan-400" />
                  <span>Pune, Maharashtra, India</span>
                </div>
                <div>Status: Available Immediately</div>
                <div>Notice Period: Immediate Joiner</div>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-10 pb-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Himank Sachin Batra. Crafted with Next.js, Vite & Tailwind CSS.
          </div>
          <div className="flex items-center gap-5">
            <a href="https://github.com/Himank1-tech" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/himank-batra" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors">LinkedIn</a>
            <a href="mailto:himankbatra2005@gmail.com" className="hover:text-cyan-400 transition-colors">Email</a>
          </div>
        </footer>

      </main>
    </div>
  );
}
