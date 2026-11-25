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
  ChevronRight
} from 'lucide-react';

export default function App() {
  const [copied, setCopied] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  const copyEmail = () => {
    navigator.clipboard.writeText('himankbatra2005@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const projects = [
    {
      id: 'yatralekha',
      title: 'YatraLekha',
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
      accent: 'from-amber-500/20 to-orange-500/10',
      borderAccent: 'group-hover:border-amber-500/50',
      tagColor: 'text-amber-400 bg-amber-400/10 border-amber-400/20'
    },
    {
      id: 'aegissoc',
      title: 'Aegis SOC',
      badge: 'Multi-Vector Threat Detection',
      tagline: 'Computer vision-powered malware triage engine combining spatial byte projections with explainable AI.',
      stack: ['FastAPI', 'PyTorch', 'ResNet-50', 'Grad-CAM', 'Gmail API', 'Vercel', 'Python'],
      highlights: [
        'Pre-download malware triage across PE binaries (.exe, .dll) and media payloads (.jpg, .pdf).',
        'Nataraj spatial byte-mapping converting raw binary bytes into 2D grayscale matrices for CNN evaluation.',
        'Fine-tuned ResNet-50 classifying 25 malware families with 94%+ detection accuracy.',
        'Visual explainability via Grad-CAM neural attention heatmaps and live Gmail/WhatsApp attachment ingestion.'
      ],
      metrics: [
        { label: 'Classification Accuracy', val: '94%+' },
        { label: 'Malware Families', val: '25 Classes' },
        { label: 'Explainability', val: 'Grad-CAM Heatmaps' }
      ],
      liveUrl: 'https://aegis-soc-security.vercel.app/',
      githubUrl: 'https://github.com/Himank1-tech/threat-detection-ui',
      videoUrl: 'https://youtu.be/bH-n4xYR4Z4',
      accent: 'from-emerald-500/20 to-teal-500/10',
      borderAccent: 'group-hover:border-emerald-500/50',
      tagColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20'
    },
    {
      id: 'quantumfloor',
      title: 'QuantumFloor Pro',
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
        { label: 'Pipeline', val: '3-Tier Dual-Agent' },
        { label: 'Risk Model', val: 'Deterministic RiskGovernor' }
      ],
      liveUrl: 'https://quantumfloor-pro.onrender.com/',
      githubUrl: 'https://github.com/Himank1-tech/quantumfloor-pro',
      videoUrl: 'https://youtu.be/rb33UOjQDRU',
      accent: 'from-cyan-500/20 to-blue-500/10',
      borderAccent: 'group-hover:border-cyan-500/50',
      tagColor: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20'
    }
  ];

  const skillCategories = [
    {
      name: 'Languages',
      skills: ['Java (DSA & OOP)', 'Python', 'TypeScript', 'JavaScript (ES6+)', 'SQL (PostgreSQL, MySQL)', 'C++']
    },
    {
      name: 'Agentic AI & ML',
      skills: ['LangGraph', 'CrewAI', 'Model Context Protocol (MCP)', 'Agent-to-Agent (A2A)', 'RAG Pipelines', 'QLoRA Fine-Tuning', 'PyTorch', 'ResNet-50', 'Grad-CAM', 'Google Gemini API', 'OpenAI API', 'OpenCV']
    },
    {
      name: 'Full-Stack & Cloud',
      skills: ['Next.js', 'React.js', 'FastAPI', 'Node.js', 'Express.js', 'PostgreSQL (Neon)', 'AWS S3', 'Server-Sent Events (SSE)', 'Progressive Web Apps (PWA)', 'Tailwind CSS', 'Redux Toolkit', 'Docker', 'Vercel', 'Render', 'Power BI & DAX']
    },
    {
      name: 'Core CS & Fundamentals',
      skills: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Database Management (DBMS)', 'Operating Systems', 'System Design & Distributed Patterns']
    }
  ];

  const experiences = [
    {
      role: 'Python & Power BI Intern',
      company: 'Edutantr',
      period: 'Jun 2025 – Jul 2025',
      type: 'Internship',
      points: [
        'Automated ETL pipelines in Python (Pandas, NumPy) to clean, normalize, and transform operational datasets.',
        'Engineered executive Power BI dashboards with custom DAX calculations, slashing analytical reporting turnaround time by 35%.'
      ]
    },
    {
      role: 'Member',
      company: 'Google Developer Groups (GDG) on Campus, SPPU',
      period: 'Aug 2025 – May 2026',
      type: 'Developer Community',
      points: [
        'Organized and executed 6 technical bootcamps, code sprints, and hands-on workshops on Cloud systems and Full-Stack paradigms.',
        'Mentored 150+ student developers in Git version control practices, open-source workflows, and clean code principles.'
      ]
    },
    {
      role: 'Head of University Sports Department & Team Lead (3 Years)',
      company: 'Savitribai Phule Pune University (SPPU) / GHRCEM',
      period: '2023 – 2026',
      type: 'University Leadership & Athletics',
      points: [
        'Governed athletic department operations over a 36-month tenure, leading a 30-member committee to direct 8+ regional tournaments hosting 1,200+ athletes.',
        'Streamlined equipment logistics and administration, reducing delays by 25%; mentored 4 sports divisions producing 7 championship podium finishes.',
        'Competed as a State-Level Table Tennis Athlete representing SPPU, securing 3 inter-collegiate championship titles.'
      ]
    }
  ];

  const certifications = [
    {
      title: 'AI Engineer Agentic Track: The Complete Agent & MCP Course (21h)',
      issuer: 'Udemy',
      date: 'Nov 2026',
      id: 'UC-f78c59d9-4ec6-422b-bff6-8d3d99da2c9d',
      url: 'https://www.udemy.com/certificate/UC-f78c59d9-4ec6-422b-bff6-8d3d99da2c9d/'
    },
    {
      title: 'AI Engineer Core Track: LLM Engineering, RAG, QLoRA, Agents (33.5h)',
      issuer: 'Udemy',
      date: 'Oct 2026',
      id: 'UC-e6384159-5817-4415-b063-dbe4ccbd7054',
      url: 'https://www.udemy.com/certificate/UC-e6384159-5817-4415-b063-dbe4ccbd7054/'
    },
    {
      title: 'The Complete Full-Stack Web Development Bootcamp (62h)',
      issuer: 'Udemy',
      date: 'Aug 2026',
      id: 'UC-458445ef-982c-4521-9889-b98c306c0149',
      url: 'https://www.udemy.com/certificate/UC-458445ef-982c-4521-9889-b98c306c0149/'
    }
  ];

  const honors = [
    {
      title: 'Infosys HackWithInfy 2026',
      subtitle: 'Round 1 Qualifier',
      tag: 'Competitive Coding'
    },
    {
      title: 'Smart India Hackathon (SIH) 2026',
      subtitle: 'National Finalist (Top 50 of 300+ entries)',
      tag: 'National Hackathon'
    },
    {
      title: 'HACK2IGNITE 2026 & National Space Hackathon',
      subtitle: 'National Finalist (Top 50 Teams)',
      tag: 'AI Communication'
    },
    {
      title: 'LeetCode Problem Solving',
      subtitle: 'Solved 100+ DSA Problems across Graphs, DP & Trees',
      tag: 'Algorithms'
    }
  ];

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-black">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-[128px]"></div>
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-indigo-500/10 rounded-full blur-[128px]"></div>
      </div>

      {/* Sticky Navigation */}
      <header className="sticky top-0 z-50 glass-panel border-b border-white/5 py-4 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 font-bold tracking-tight text-lg text-white hover:text-emerald-400 transition-colors">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-black font-black text-sm shadow-lg shadow-emerald-500/20">HB</span>
            <span className="hidden sm:inline">Himank Sachin Batra</span>
          </a>

          <nav className="flex items-center gap-3 sm:gap-6 text-sm font-medium text-slate-300">
            <a href="#systems" className="hover:text-emerald-400 transition-colors">Systems</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-emerald-400 transition-colors">Experience</a>
            <a href="#credentials" className="hover:text-emerald-400 transition-colors hidden md:inline">Credentials</a>
            <button 
              onClick={copyEmail}
              className="px-3.5 py-1.5 text-xs rounded-full bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/10 text-emerald-400 transition-all flex items-center gap-1.5 font-mono"
            >
              {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
              <span>{copied ? 'Copied Email!' : 'Copy Email'}</span>
            </button>
          </nav>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-6xl mx-auto px-6 sm:px-12 py-12 sm:py-20 z-10 w-full space-y-24">

        {/* HERO SECTION */}
        <section className="space-y-8 pt-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Available for SDE, AI Engineer & Full-Stack Roles (15–16 LPA+ Tier)
          </div>

          <div className="space-y-4 max-w-4xl">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Engineering <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">Full-Stack Systems</span> & <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Agentic AI</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed">
              Software Engineer specializing in <span className="text-white font-medium">Next.js, FastAPI, and Neon PostgreSQL</span> alongside autonomous multi-agent pipelines with <span className="text-white font-medium">LangGraph, MCP, and PyTorch</span>. Track record of designing and deploying 3 end-to-end production systems with quantified impact.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-3">
            <div className="glass-card p-4 rounded-xl border border-white/5">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">3</div>
              <div className="text-xs text-slate-400 mt-1">Production Systems Deployed</div>
            </div>
            <div className="glass-card p-4 rounded-xl border border-white/5">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">7.5</div>
              <div className="text-xs text-slate-400 mt-1">B.Tech CGPA (GHRCEM Pune)</div>
            </div>
            <div className="glass-card p-4 rounded-xl border border-white/5">
              <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono">116.5h+</div>
              <div className="text-xs text-slate-400 mt-1">Udemy AI & Full-Stack Tracks</div>
            </div>
            <div className="glass-card p-4 rounded-xl border border-white/5">
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono">3x</div>
              <div className="text-xs text-slate-400 mt-1">University Table Tennis Champ</div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a 
              href="#systems"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-black font-semibold text-sm transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-2"
            >
              <span>View Live Systems</span>
              <ChevronRight size={16} />
            </a>

            <a 
              href="https://github.com/Himank1-tech" 
              target="_blank" 
              rel="noreferrer"
              className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-sm transition-all flex items-center gap-2"
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>

            <a 
              href="https://linkedin.com/in/himank-batra" 
              target="_blank" 
              rel="noreferrer"
              className="px-5 py-3 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 text-blue-400 font-medium text-sm transition-all flex items-center gap-2"
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>

            <a 
              href="mailto:himankbatra2005@gmail.com"
              className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 font-medium text-sm transition-all flex items-center gap-2"
            >
              <Mail size={16} />
              <span>Email</span>
            </a>
          </div>
        </section>

        {/* FLAGSHIP PRODUCTION SYSTEMS */}
        <section id="systems" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <div className="text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider">Flagship Architecture</div>
              <h2 className="text-3xl font-bold text-white tracking-tight mt-1">Production Deployed Systems</h2>
            </div>
            <p className="text-xs text-slate-400 max-w-md font-mono">
              Live production deployments with automated CI/CD, persistent cloud databases, and verifiable links.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {projects.map((proj) => (
              <div 
                key={proj.id}
                className="glass-card group rounded-2xl p-6 sm:p-8 border border-white/10 relative overflow-hidden transition-all duration-300"
              >
                {/* Background glow gradient */}
                <div className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-br ${proj.accent} rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 opacity-50 group-hover:opacity-100 transition-opacity`}></div>

                <div className="relative z-10 space-y-6">
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-2xl font-bold text-white tracking-tight">{proj.title}</h3>
                        <span className={`text-xs px-2.5 py-0.5 rounded-full font-mono font-medium border ${proj.tagColor}`}>
                          {proj.badge}
                        </span>
                      </div>
                      <p className="text-sm text-slate-400 mt-1">{proj.tagline}</p>
                    </div>

                    {/* 3 Interactive Clickable Links */}
                    <div className="flex flex-wrap items-center gap-2 pt-2 sm:pt-0">
                      <a 
                        href={proj.liveUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-medium flex items-center gap-1.5 transition-all shadow-sm"
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
                        className="px-3 py-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 text-xs font-medium flex items-center gap-1.5 transition-all"
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

                  {/* Highlights Bullet List */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-300">
                    {proj.highlights.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2 bg-black/20 p-3 rounded-lg border border-white/5">
                        <span className="text-emerald-400 font-mono text-xs mt-0.5">▹</span>
                        <span className="leading-snug">{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Quantified Metrics Footer */}
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/5">
                    {proj.metrics.map((m, idx) => (
                      <div key={idx} className="text-center sm:text-left">
                        <div className="text-xs text-slate-400 font-mono">{m.label}</div>
                        <div className="text-sm font-bold text-white font-mono mt-0.5">{m.val}</div>
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
            <div className="text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider">Technical Proficiency</div>
            <h2 className="text-3xl font-bold text-white tracking-tight mt-1">Skills & Architectural Matrix</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl border border-white/5 space-y-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                  <h3 className="font-semibold text-white tracking-wide text-base">{cat.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 hover:bg-emerald-500/10 hover:text-emerald-300 border border-white/10 hover:border-emerald-500/30 text-slate-300 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE & LEADERSHIP TIMELINE */}
        <section id="experience" className="space-y-6 scroll-mt-24">
          <div className="border-b border-white/10 pb-4">
            <div className="text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider">Career & Leadership</div>
            <h2 className="text-3xl font-bold text-white tracking-tight mt-1">Experience & Athletics Timeline</h2>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div key={idx} className="glass-card p-6 sm:p-7 rounded-2xl border border-white/5 space-y-3 relative">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                    <div className="text-sm text-emerald-400 font-medium">{exp.company}</div>
                  </div>
                  <div className="text-xs font-mono text-slate-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/10 w-fit">
                    {exp.period}
                  </div>
                </div>

                <div className="space-y-2 pt-1 text-sm text-slate-300">
                  {exp.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2">
                      <span className="text-emerald-400 text-xs mt-1">▹</span>
                      <p className="leading-relaxed">{pt}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Education Card */}
            <div className="glass-card p-6 sm:p-7 rounded-2xl border border-white/5 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <h3 className="text-lg font-bold text-white">Bachelor of Technology in Computer Engineering</h3>
                  <div className="text-sm text-cyan-400 font-medium">G H Raisoni College of Engineering and Management, Pune</div>
                </div>
                <div className="text-xs font-mono text-slate-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/10 w-fit">
                  2023 – 2027
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold">
                  Current CGPA: 7.5 / 10.0
                </span>
                <span className="text-xs text-slate-400 font-mono">Affiliated to SPPU, Pune</span>
              </div>
            </div>
          </div>
        </section>

        {/* VERIFIED CREDENTIALS & HONORS */}
        <section id="credentials" className="space-y-6 scroll-mt-24">
          <div className="border-b border-white/10 pb-4">
            <div className="text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider">Verifiable Credentials</div>
            <h2 className="text-3xl font-bold text-white tracking-tight mt-1">Certifications & Hackathon Honors</h2>
          </div>

          <div className="space-y-6">
            {/* Udemy Certifications */}
            <div className="space-y-3">
              <div className="text-sm font-semibold text-slate-300 font-mono">Udemy Engineering Tracks (116.5 Hours)</div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {certifications.map((cert, idx) => (
                  <a 
                    key={idx}
                    href={cert.url}
                    target="_blank"
                    rel="noreferrer"
                    className="glass-card p-5 rounded-xl border border-white/5 hover:border-emerald-500/40 flex flex-col justify-between group transition-all"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs text-emerald-400 font-mono">
                        <span>{cert.issuer} Verified</span>
                        <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                      <div className="font-semibold text-white text-sm group-hover:text-emerald-300 transition-colors">
                        {cert.title}
                      </div>
                    </div>
                    <div className="text-[11px] font-mono text-slate-400 pt-3 border-t border-white/5 mt-3">
                      ID: {cert.id.slice(0, 15)}... | {cert.date}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Honors & Hackathons */}
            <div className="space-y-3 pt-2">
              <div className="text-sm font-semibold text-slate-300 font-mono">Winnings & Competitions</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {honors.map((h, idx) => (
                  <div key={idx} className="glass-card p-4 rounded-xl border border-white/5 space-y-1">
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/5 text-cyan-400 border border-white/10">
                      {h.tag}
                    </span>
                    <div className="font-bold text-white text-sm pt-1.5">{h.title}</div>
                    <div className="text-xs text-slate-400 leading-snug">{h.subtitle}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-12 pb-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Himank Sachin Batra. Crafted with Next.js, Vite & Tailwind CSS.
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/Himank1-tech" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/himank-batra" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="mailto:himankbatra2005@gmail.com" className="hover:text-white transition-colors">Contact</a>
          </div>
        </footer>

      </main>
    </div>
  );
}
