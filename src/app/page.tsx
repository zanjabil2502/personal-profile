"use client";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBrain,
  faCloud,
  faCode,
  faDatabase,
  faEnvelope,
  faGraduationCap,
  faMapMarkerAlt,
  faMicrochip,
  faMicrophone,
  faNetworkWired,
  faProjectDiagram,
  faRobot,
  faStar,
  faTrophy,
  faVolumeUp,
  faWaveSquare
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

// Optimized Typing Animation Component
function TypingText({ text, speed = 50 }: { text: string; speed?: number }) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className="relative">
      {displayedText}
      <motion.span
        className="inline-block w-0.5 h-6 bg-cyan-400 ml-1"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      />
    </span>
  );
}

// Enhanced Neural Network (Only Background Animation)
function OptimizedNeuralNetwork() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      <svg className="w-full h-full" viewBox="0 0 800 600">
        <defs>
          <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.2" />
          </radialGradient>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        
        {/* Enhanced Neural Nodes */}
        {Array.from({ length: 12 }, (_, i) => (
          <motion.circle
            key={`node-${i}`}
            cx={80 + (i % 4) * 180}
            cy={100 + Math.floor(i / 4) * 150}
            r="4"
            fill="url(#nodeGradient)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1.5, 1],
              opacity: [0, 1, 0.7],
            }}
            transition={{
              duration: 3,
              delay: i * 0.2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
        
        {/* Enhanced Synaptic Connections */}
        {Array.from({ length: 15 }, (_, i) => {
          const startX = 80 + (Math.floor(Math.random() * 4)) * 180;
          const startY = 100 + (Math.floor(Math.random() * 3)) * 150;
          const endX = 80 + (Math.floor(Math.random() * 4)) * 180;
          const endY = 100 + (Math.floor(Math.random() * 3)) * 150;
          
          return (
            <motion.path
              key={`synapse-${i}`}
              d={`M ${startX} ${startY} Q ${(startX + endX) / 2} ${(startY + endY) / 2 - 50} ${endX} ${endY}`}
              stroke="url(#connectionGradient)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 1, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 4,
                delay: i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}

        {/* Additional Neural Pulses */}
        {Array.from({ length: 8 }, (_, i) => (
          <motion.circle
            key={`pulse-${i}`}
            cx={80 + (i % 4) * 180}
            cy={100 + Math.floor(i / 4) * 150}
            r="8"
            fill="none"
            stroke="url(#nodeGradient)"
            strokeWidth="1"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 3, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 2,
              delay: i * 0.4,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

// Smooth scroll function
const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

// Download resume function
const downloadResume = () => {
  const link = document.createElement('a');
  link.href = '/docs/resume.pdf';
  link.download = 'Zanjabila_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Updated profile data
const profile = {
  name: "ZANJABILA",
  title: "AI Engineer - Speech and Agent AI System",
  subtitle: "Building the Future with Artificial Intelligence",
  location: "Banyuwangi, East Java, Indonesia",
  avatar: "/img/profile.jpeg",
  contacts: [
    {
      icon: faEnvelope,
      url: "mailto:zanjabilaabil@gmail.com",
      label: "Email",
    },
    {
      icon: faLinkedin,
      url: "https://linkedin.com/in/zanjabila/",
      label: "LinkedIn",
    },
    {
      icon: faGithub,
      url: "https://github.com/zanjabil2502",
      label: "GitHub",
    },
  ],
  bio: `Seasoned AI Engineer with five years immersed in the world of Artificial Intelligence, I've honed my expertise in building both SaaS and On-Premise AI-driven systems, leveraging the power of Python, LlamaIndex, VLLm, Qdrant, etc. Beyond AI, I'm passionate about crafting dynamic web services, bringing three years of experience with Next.js, Tailwind CSS, and Socket.IO.`,
  skills: [
    { 
      icon: faBrain, 
      label: "Machine Learning & Deep Learning", 
      color: "from-purple-600 to-violet-700",
      description: "Advanced expertise in neural networks, computer vision, and natural language processing"
    },
    { 
      icon: faRobot, 
      label: "LLM & Generative AI", 
      color: "from-blue-600 to-cyan-700",
      description: "Large Language Models, prompt engineering, and generative AI applications"
    },
    { 
      icon: faMicrochip, 
      label: "Python, LlamaIndex, Redis, MongoDB, Qdrant", 
      color: "from-emerald-600 to-teal-700",
      description: "Core programming with advanced vector databases, caching systems, and AI frameworks"
    },
    { 
      icon: faWaveSquare, 
      label: "Speech Processing & NLP", 
      color: "from-orange-600 to-red-700",
      description: "Real-time speech recognition, synthesis, and natural language understanding"
    },
    { 
      icon: faProjectDiagram, 
      label: "System Architecture & Workflow Logic Process", 
      color: "from-indigo-600 to-purple-700",
      description: "Designing scalable AI systems, workflow orchestration, and complex logic processing pipelines"
    },
    { 
      icon: faCode, 
      label: "Backend AI Services & Frontend Development", 
      color: "from-slate-600 to-gray-700",
      description: "Full-stack AI application development with robust backend services and intuitive user interfaces"
    },
    { 
      icon: faDatabase, 
      label: "Vector Databases & RAG Systems", 
      color: "from-pink-600 to-rose-700",
      description: "Retrieval-Augmented Generation, semantic search, and advanced vector database implementations"
    },
    { 
      icon: faNetworkWired, 
      label: "Real-Time Systems with SocketIO Protocol", 
      color: "from-yellow-600 to-amber-700",
      description: "High-performance real-time communication systems, WebSocket protocols, and live data streaming"
    },
  ],
  // Hard Skills Section
  hardSkills: [
    {
      icon: faCloud,
      title: "Large Language Models Integration",
      description: "Experienced in integrating both third-party and local large language models.",
      color: "from-blue-600 to-indigo-700",
      technologies: ["Claude", "Gemini", "VLLM", "Ollama", "SeaLLM", "Llama", "Deepseek", "etc"]
    },
    {
      icon: faMicrophone,
      title: "Speech-to-Text Models Integration",
      description: "Experienced in integrating both third-party and local speech-to-text models.",
      color: "from-green-600 to-emerald-700",
      technologies: ["Whisper", "Real-time STT", "Audio Processing", "Signal Processing", "Diarization", "etc"]
    },
    {
      icon: faVolumeUp,
      title: "Text-to-Speech Models Integration",
      description: "Experienced in integrating both third-party and local text-to-speech models.",
      color: "from-purple-600 to-pink-700",
      technologies: ["Coqui", "Voice Synthesis", "Audio Generation", "ViTs", "Voice Clone", "etc"]
    },
  ],
  experiences: [
    {
      company: "Ajari Technologies PTE. LTD",
      location: "Jakarta, Indonesia",
      period: "Jan 2025 - Present",
      title: "Lead AI Engineer",
      details: [
        "Led an AI team of 3 members developing enterprise AI solutions",
        "Designed 5+ AI System Architectures & Workflow Processes",
        "Developed 5+ PoC AI services for international clients",
        "PoC projects: AI Multimodal Sentiment & Anomaly Analytics",
        "Managed 3 AI products and 5+ AI projects",
      ],
      color: "from-purple-700 to-blue-800",
    },
    {
      company: "Ajari Technologies PTE. LTD",
      location: "Jakarta, Indonesia",
      period: "Mar 2024 - Present",
      title: "AI Engineer Staff",
      details: [
        "Built 2 Real-Time Transcription & Translation Services",
        "Developed Vision AI services: Face Verification, Focus Rate Detection",
        "Built 6+ Real-Time Speech-to-Speech AI Assistants",
        "Developed 5+ AI agents and RAG systems, including Call Reservation Agent, Translator Agent, Minutes of Meeting Agent, Tax Agent, and more.",
        "Discovered new agentic workflow for low-resource settings",
        "Conducted research, benchmarking, and evaluation of systems, models, and LLM responses.",
        "Developed an environment for local AI models to serve as the central AI service hub.",
      ],
      color: "from-cyan-700 to-teal-800",
    },
    {
      company: "PT. Bahasa Kita",
      location: "Jakarta, Indonesia",
      period: "Dec 2022 - Feb 2024",
      title: "Production Staff",
      details: [
        "Built 10+ API Services (Speech To Text, Text Translation)",
        "Designed UI/UX for 3 Web Services including Dikte.in platform",
        "Development Web Service of product based on user experience.",
        "Build Products and Features, such as Dikte.in, Upload feature, Streaming feature, Summary feature, etc.",
        "Testing, evaluating, & monitoring products performance, especially End-to-End Test."
      ],
      color: "from-emerald-700 to-green-800",
    },
    {
      company: "PT. Bahasa Kita",
      location: "Jakarta, Indonesia",
      period: "Sep 2022 - Feb 2024",
      title: "Research & Development Staff",
      details: [
        "Researched Open Source & Local AI Models for Indonesian language, such as Whiper, Pyannote, Silero VAD, NLLB.",
        "Development 3 AI Inferance, such as Upload STT Inference, Streaming STT Inference, etc.",
        "Improve AI Inference Performances such as Reduce Processing Time, CPU Usage, GPU Usage, and Implementing a New Method.",
      ],
      color: "from-orange-700 to-red-800",
    },
  ],
  education: {
    school: "Institut Teknologi Sepuluh Nopember (ITS)",
    location: "Surabaya, Indonesia",
    period: "Aug 2018 - Aug 2022",
    degree: "Bachelor of Engineering Physics",
    gpa: "3.62/4.00",
    details: [
      "Final Project: COVID-19 Cough Sound Classification using Deep Learning (88.19% accuracy)",
      "Co-authored multiple research papers on AI & signal processing",
      "Active member of Vibration and Acoustics Laboratory",
      "Relevant coursework: Signal Processing, Machine Learning, Data Science",
    ],
  },
  achievements: [
    {
      icon: faTrophy,
      title: "Gold Medal, PIMNAS 34",
      year: 2021,
      desc: "Respiratory Disease Classification using CNN (Presentation Category) - National Student Scientific Competition",
      color: "from-amber-600 to-yellow-700",
    },
    {
      icon: faTrophy,
      title: "Bronze Medal, PIMNAS 34",
      year: 2021,
      desc: "Respiratory Disease Classification using CNN (Poster Category) - National Student Scientific Competition",
      color: "from-orange-600 to-amber-700",
    },
    {
      icon: faStar,
      title: "ICML ExVo 2022 - 6th Place",
      year: 2022,
      desc: "Expressive Vocalization Multi-Task Challenge - International Conference on Machine Learning",
      color: "from-blue-600 to-purple-700",
    },
    {
      icon: faStar,
      title: "ComParE 2022 Finalist",
      year: 2022,
      desc: "Computational Paralinguistics Challenge - Vocalisations & Stuttering sub-challenge",
      color: "from-indigo-600 to-blue-700",
    },
  ],
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-black text-white font-sans relative overflow-x-hidden">
      {/* Optimized Background Effects */}
      <div className="fixed inset-0 -z-30">
        {/* Simplified Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-slate-900 to-black" />
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-950/15 via-transparent to-cyan-950/15" />
        
        {/* Reduced Animated Gradient Orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial from-cyan-500/6 via-purple-500/3 to-transparent rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-purple-500/5 via-pink-500/2 to-transparent rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Only Neural Network Animation (Matrix Removed) */}
      <OptimizedNeuralNetwork />

      {/* Enhanced Navbar */}
      <motion.nav 
        className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-cyan-500/10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto px-8 py-4">
          <motion.div 
            className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-bold text-2xl"
            whileHover={{ scale: 1.05 }}
          >
            Personal Profile
          </motion.div>
          <div className="flex gap-8 text-white/70">
            {["Profile", "Skills", "Hard Skills", "Experience", "Education", "Achievements", "Contact"].map((item, i) => (
              <motion.button
                key={item}
                onClick={() => smoothScrollTo(item.toLowerCase().replace(' ', '-'))}
                className="hover:text-cyan-400 transition-all duration-300 relative group cursor-pointer"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="profile" className="min-h-screen flex items-center justify-center px-8 pt-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            style={{ y, opacity }}
            className="relative"
          >
            {/* Avatar */}
            <motion.div
              className="relative mx-auto mb-8 w-48 h-48"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 via-purple-500/20 to-pink-500/30 rounded-full blur-xl opacity-60 animate-pulse" />
              <img
                src={profile.avatar}
                alt={profile.name}
                className="relative w-full h-full rounded-full border-4 border-cyan-400/30 shadow-2xl object-cover bg-white/5 backdrop-blur-sm"
              />
              <motion.div
                className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-3 h-3 bg-white rounded-full" />
              </motion.div>
            </motion.div>

            {/* Name and Title */}
            <motion.h1
              className="text-6xl md:text-8xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {profile.name}
            </motion.h1>

            <motion.h2
              className="text-2xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              {profile.title}
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl text-cyan-200/70 mb-8 font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              {profile.subtitle}
            </motion.p>

            {/* Location */}
            <motion.div
              className="flex items-center justify-center gap-2 text-white/60 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-cyan-400" />
              <span>{profile.location}</span>
            </motion.div>

            {/* Bio with Typing Effect */}
            <motion.div
              className="max-w-4xl mx-auto text-lg md:text-xl text-white/70 leading-relaxed mb-12 font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
            >
              <TypingText text={profile.bio} speed={25} />
            </motion.div>

            {/* Contact Links */}
            <motion.div
              className="flex flex-wrap gap-6 justify-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              {profile.contacts.map((contact, i) => (
                <motion.a
                  key={contact.label}
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-md rounded-full border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.7 + i * 0.1 }}
                >
                  <FontAwesomeIcon 
                    icon={contact.icon} 
                    className="text-cyan-400 group-hover:text-white transition-colors" 
                  />
                  <span className="text-white/70 group-hover:text-white transition-colors">
                    {contact.label}
                  </span>
                </motion.a>
              ))}
            </motion.div>

            {/* Download Resume Button */}
            {/* <motion.button
              onClick={downloadResume}
              className="group px-8 py-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full font-semibold text-white shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
            >
              <FontAwesomeIcon icon={faDownload} className="mr-2" />
              Download Resume
            </motion.button> */}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            AI Expertise
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {profile.skills.map((skill, i) => (
              <motion.div
                key={skill.label}
                className="group relative p-6 bg-white/3 backdrop-blur-md rounded-2xl border border-white/5 hover:border-cyan-400/30 transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -10 }}
                viewport={{ once: true }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-lg`}>
                    <FontAwesomeIcon icon={skill.icon} className="text-lg text-white" />
                  </div>
                  
                  <h3 className="text-sm font-semibold text-center text-white/90 group-hover:text-cyan-300 transition-colors mb-2">
                    {skill.label}
                  </h3>
                  
                  <p className="text-xs text-white/60 text-center leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hard Skills Section */}
      <section id="hard-skills" className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Hard Skills
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {profile.hardSkills.map((skill, i) => (
              <motion.div
                key={skill.title}
                className="group relative p-8 bg-white/3 backdrop-blur-md rounded-2xl border border-white/5 hover:border-green-400/30 transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-lg`}>
                    <FontAwesomeIcon icon={skill.icon} className="text-2xl text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-center text-white/90 group-hover:text-green-300 transition-colors mb-4">
                    {skill.title}
                  </h3>
                  
                  <p className="text-white/70 text-center leading-relaxed mb-6">
                    {skill.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skill.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80 border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Experience
          </motion.h2>

          <div className="space-y-8">
            {profile.experiences.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                className="group relative p-8 bg-white/3 backdrop-blur-md rounded-2xl border border-white/5 hover:border-purple-400/30 transition-all duration-500"
                initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
                viewport={{ once: true }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white/90 mb-2">{exp.title}</h3>
                      <h4 className="text-xl text-cyan-300/80 mb-2">{exp.company}</h4>
                      <p className="text-white/60 flex items-center gap-2">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-cyan-400" />
                        {exp.location}
                      </p>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full text-cyan-300/80 border border-cyan-400/20">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.details.map((detail, j) => (
                      <motion.li
                        key={j}
                        className="flex items-start gap-3 text-white/70"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: (i * 0.2) + (j * 0.1) }}
                        viewport={{ once: true }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mt-2 flex-shrink-0" />
                        <span>{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-blue-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Education
          </motion.h2>

          <motion.div
            className="group relative p-8 bg-white/3 backdrop-blur-md rounded-2xl border border-white/5 hover:border-emerald-400/30 transition-all duration-500 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-blue-600 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faGraduationCap} className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white/90">{profile.education.degree}</h3>
                  <h4 className="text-xl text-emerald-300/80">{profile.education.school}</h4>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <p className="text-white/60 flex items-center gap-2">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-emerald-400" />
                  {profile.education.location}
                </p>
                <div className="flex gap-4 mt-4 md:mt-0">
                  <span className="px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-full text-emerald-300/80 border border-emerald-400/20">
                    {profile.education.period}
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full text-blue-300/80 border border-blue-400/20">
                    GPA: {profile.education.gpa}
                  </span>
                </div>
              </div>
              
              <ul className="space-y-3">
                {profile.education.details.map((detail, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3 text-white/70"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full mt-2 flex-shrink-0" />
                    <span>{detail}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Achievements
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {profile.achievements.map((achievement, i) => (
              <motion.div
                key={achievement.title}
                className="group relative p-6 bg-white/3 backdrop-blur-md rounded-2xl border border-white/5 hover:border-amber-400/30 transition-all duration-500"
                initial={{ opacity: 0, y: 50, rotate: -5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                viewport={{ once: true }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 bg-gradient-to-br ${achievement.color} rounded-full flex items-center justify-center shadow-lg`}>
                      <FontAwesomeIcon icon={achievement.icon} className="text-sm text-white" />
                    </div>
                    <span className="px-2 py-1 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-full text-amber-300/80 text-xs border border-amber-400/20">
                      {achievement.year}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white/90 mb-3 group-hover:text-amber-300 transition-colors">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-white/60 leading-relaxed text-sm">
                    {achievement.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Let's Build the Future Together
          </motion.h2>
          
          <motion.p
            className="text-xl text-white/70 mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to transform your ideas into intelligent solutions? Let's connect and explore the possibilities of AI together.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-6 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {profile.contacts.map((contact, i) => (
              <motion.a
                key={contact.label}
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-md rounded-full border border-cyan-400/20 hover:border-cyan-400/50 hover:from-cyan-500/20 hover:to-purple-500/20 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                viewport={{ once: true }}
              >
                <FontAwesomeIcon 
                  icon={contact.icon} 
                  className="text-2xl text-cyan-400 group-hover:text-white transition-colors" 
                />
                <span className="text-lg text-white/70 group-hover:text-white transition-colors font-medium">
                  {contact.label}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Personal Profile
              </span>
            </div>
            
            <p className="text-white/50 mb-6">
              Building the future with Artificial Intelligence • {new Date().getFullYear()}
            </p>
            
            <div className="flex justify-center gap-6">
              {profile.contacts.map((contact) => (
                <motion.a
                  key={contact.label}
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 hover:border-cyan-400/30 hover:bg-cyan-400/10 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FontAwesomeIcon 
                    icon={contact.icon} 
                    className="text-white/60 hover:text-cyan-400 transition-colors" 
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <motion.button
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </div>
  );
}