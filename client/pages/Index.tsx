import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Github, Linkedin, MapPin, BookOpen, Code2, ExternalLink } from "lucide-react";

// Hero Section Component
const HeroSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });

  const roles = [
    "Aspiring Software Developer",
    "Web Enthusiast",
    "Python Explorer",
    "First-Year CS Student",
  ];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Floating background orb */}
      <motion.div
        className="absolute -top-40 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/10 blur-3xl"
        animate={{
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Main heading with letter stagger */}
        <div className="mb-8">
          <motion.h1
            className="text-6xl md:text-8xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-indigo-400 leading-tight mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            FALAH<br />
            FAZAL
          </motion.h1>

          {/* Rotating role text */}
          <div className="h-12 md:h-16 flex items-center justify-center my-8">
            <motion.div
              key={roles[currentRole]}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6 }}
              className="text-xl md:text-2xl text-blue-300/80 font-light"
            >
              {roles[currentRole]}
            </motion.div>
          </div>
        </div>

        {/* Animated divider */}
        <motion.div
          className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-10 glow-blue"
          initial={{ width: 0 }}
          animate={isInView ? { width: 80 } : { width: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        />

        {/* Info row */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-12 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="flex flex-col items-center gap-2">
            <MapPin className="w-5 h-5 text-blue-400" />
            <span className="text-sm text-gray-400">New Delhi, India</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-400" />
            <span className="text-sm text-gray-400">CS Student</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Code2 className="w-5 h-5 text-blue-400" />
            <span className="text-sm text-gray-400">Web Dev</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-lg text-blue-400">●</span>
            <span className="text-sm text-gray-400">Available</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium rounded-lg glow-blue hover:shadow-lg transition-shadow duration-300"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-blue-500/30 text-blue-300 font-medium rounded-lg hover:bg-blue-500/10 transition-colors duration-300"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border border-blue-400/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1 h-2 bg-blue-400 rounded-full"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// About Section
const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-blue-300 mb-10">
            About Me
          </h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              I'm a first-year Computer Science student with a passion for building elegant, functional digital experiences. Currently exploring the intersection of systems thinking and creative frontend development.
            </p>
            <p>
              My focus is on understanding core concepts—from algorithms and data structures to web architecture. I believe that strong fundamentals enable better design decisions.
            </p>
            <p>
              Right now, I'm diving deep into React, improving my Python skills, and building small projects that help me learn by doing. I'm particularly interested in web performance and interactive design.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Skills Section with Progress Bars
const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const skillGroups = {
    Frontend: [
      { name: "HTML", level: 75 },
      { name: "CSS", level: 70 },
      { name: "JavaScript", level: 65 },
      { name: "React", level: 60 },
    ],
    Programming: [
      { name: "Python", level: 70 },
      { name: "TypeScript", level: 55 },
      { name: "Git", level: 65 },
      { name: "Problem Solving", level: 60 },
    ],
    Tools: [
      { name: "VS Code", level: 75 },
      { name: "Figma", level: 50 },
      { name: "Terminal", level: 60 },
      { name: "Vite", level: 55 },
    ],
  };

  const ProgressBar = ({ label, level, index }: { label: string; level: number; index: number }) => {
    return (
      <motion.div
        key={label}
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
        className="mb-6"
      >
        <div className="flex justify-between mb-2">
          <span className="text-gray-300 font-medium">{label}</span>
          <span className="text-blue-400 text-sm">{level}%</span>
        </div>
        <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 glow-blue"
            initial={{ width: 0 }}
            animate={isInView ? { width: `${level}%` } : { width: 0 }}
            transition={{ delay: index * 0.1 + 0.3, duration: 0.8, ease: "easeOut" }}
          />
        </div>
      </motion.div>
    );
  };

  return (
    <section ref={ref} className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-display font-bold text-blue-300 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12">
          {Object.entries(skillGroups).map(([category, skills]) => (
            <div key={category}>
              <motion.h3
                className="text-lg font-semibold text-blue-300 mb-6"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                {category}
              </motion.h3>
              {skills.map((skill, idx) => (
                <ProgressBar key={skill.name} label={skill.name} level={skill.level} index={idx} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Timeline Section
const TimelineSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const events = [
    { year: 2025, title: "Started CS", description: "Began my computer science journey" },
    { year: 2025, title: "Built First Website", description: "Created a club website project" },
    { year: 2025, title: "Python Microprojects", description: "Started exploring Python fundamentals" },
    { year: 2025, title: "Learning React", description: "Diving into modern frontend framework" },
  ];

  return (
    <section ref={ref} className="relative py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-display font-bold text-blue-300 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          Learning Timeline
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-indigo-500 transform md:-translate-x-1/2" />

          <div className="space-y-12 md:space-y-16">
            {events.map((event, idx) => (
              <motion.div
                key={idx}
                className={`relative flex flex-col ${idx % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 md:gap-12`}
                initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
              >
                <div className="md:w-1/2" />

                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900 glow-blue" />

                {/* Content */}
                <div className="md:w-1/2 ml-8 md:ml-0">
                  <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/10 border border-blue-500/20 rounded-lg p-6 glow-blue">
                    <div className="text-sm font-mono text-blue-400 mb-2">{event.year}</div>
                    <h3 className="text-xl font-semibold text-blue-300 mb-2">{event.title}</h3>
                    <p className="text-gray-400">{event.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Projects Section
const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Club Website",
      description: "A modern, responsive website for a student organization",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "#",
    },
    {
      title: "Python Utilities",
      description: "Collection of useful command-line utilities built with Python",
      tech: ["Python", "CLI"],
      link: "#",
    },
    {
      title: "React Component Library",
      description: "Custom reusable components for faster development",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      link: "#",
    },
  ];

  return (
    <section ref={ref} className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-display font-bold text-blue-300 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="group relative"
              onHoverStart={() => setHoveredProject(idx)}
              onHoverEnd={() => setHoveredProject(null)}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
            >
              <motion.div
                className="relative bg-gradient-to-br from-blue-900/20 to-indigo-900/10 border border-blue-500/20 rounded-xl p-8 glow-blue cursor-pointer transition-all duration-300"
                animate={
                  hoveredProject === idx
                    ? {
                        y: -8,
                        rotateX: 5,
                        rotateY: -5,
                      }
                    : {
                        y: 0,
                        rotateX: 0,
                        rotateY: 0,
                      }
                }
              >
                <h3 className="text-2xl font-semibold text-blue-300 mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
                >
                  View Project
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Metrics Section
const MetricsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const metrics = [
    { label: "Projects Built", value: 12 },
    { label: "Technologies Explored", value: 15 },
    { label: "Lines of Code", value: 5000 },
    { label: "Hours Learning", value: 200 },
  ];

  const Counter = ({ target, label }: { target: number; label: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isInView) return;

      let current = 0;
      const increment = target / 30;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 50);

      return () => clearInterval(timer);
    }, [isInView]);

    return (
      <motion.div
        className="text-center p-8 bg-gradient-to-br from-blue-900/20 to-indigo-900/10 border border-blue-500/20 rounded-lg glow-blue"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">{count}+</div>
        <div className="text-gray-400">{label}</div>
      </motion.div>
    );
  };

  return (
    <section ref={ref} className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-display font-bold text-blue-300 mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          Metrics
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-6">
          {metrics.map((metric) => (
            <Counter key={metric.label} target={metric.value} label={metric.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Currently Building Section
const CurrentlyBuildingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const items = [
    "Improving frontend fundamentals",
    "Exploring React and its ecosystem",
    "Building Python utilities",
    "Learning Data Structures & Algorithms",
    "Understanding Web Performance",
  ];

  return (
    <section ref={ref} className="relative py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-display font-bold text-blue-300 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          Currently Building
        </motion.h2>

        <div className="space-y-4">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              className="flex items-center gap-4 p-4 rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-colors group cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ x: 8 }}
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:glow-blue" />
              <span className="text-gray-300 group-hover:text-blue-300 transition-colors">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section ref={ref} className="relative py-24 px-6 min-h-screen flex items-center justify-center">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl md:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-12">
          Let's Build<br />Something.
        </h2>

        <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto">
          Interested in collaborating or just want to chat? Reach out to me on any platform below.
        </p>

        <motion.div
          className="relative inline-block"
          onMouseMove={handleMouseMove}
        >
          <motion.button
            className="relative px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg glow-blue-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
            <motion.div
              className="absolute pointer-events-none w-20 h-20 bg-white/20 rounded-full blur-xl"
              animate={{
                x: mousePosition.x - 40,
                y: mousePosition.y - 40,
              }}
              transition={{ duration: 0.2 }}
            />
          </motion.button>
        </motion.div>

        <div className="flex gap-6 justify-center mt-12">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:hello@falah.dev" className="text-gray-400 hover:text-blue-400 transition-colors">
            <span className="text-sm font-mono">hello@falah.dev</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

// Main Page Component
export default function Index() {
  const { scrollY } = useScroll();
  const navBg = useTransform(scrollY, [0, 100], ["rgba(11, 15, 26, 0)", "rgba(11, 15, 26, 0.8)"]);

  return (
    <div className="relative bg-background overflow-hidden">
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-blue-500/10"
        style={{ backgroundColor: navBg as any }}
      >
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div className="text-xl font-display font-bold text-blue-400">FF</motion.div>
          <div className="flex gap-6">
            <a href="#about" className="text-gray-400 hover:text-blue-300 transition-colors text-sm">
              About
            </a>
            <a href="#skills" className="text-gray-400 hover:text-blue-300 transition-colors text-sm">
              Skills
            </a>
            <a href="#projects" className="text-gray-400 hover:text-blue-300 transition-colors text-sm">
              Projects
            </a>
            <a href="#contact" className="text-gray-400 hover:text-blue-300 transition-colors text-sm">
              Contact
            </a>
          </div>
        </div>
      </motion.nav>

      {/* Sections */}
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <TimelineSection />
      <ProjectsSection />
      <MetricsSection />
      <CurrentlyBuildingSection />
      <ContactSection />

      {/* Footer */}
      <footer className="border-t border-blue-500/10 py-8 px-6 text-center text-gray-500 text-sm">
        <p>Built with React, Tailwind CSS & Framer Motion. © 2025 Falah Fazal.</p>
      </footer>
    </div>
  );
}
