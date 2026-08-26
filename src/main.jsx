import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const links = {
  github: "https://github.com/Ashwitha12-star",
  linkedin: "https://www.linkedin.com/in/ashwitharacharla",
  leetcode: "https://leetcode.com/u/Ashwitharacharla09/",
  email: "mailto:ashwitharacharla@gmail.com",
  phone: "tel:+919032702926",
};

const projects = [
  {
    title: "OneBox",
    label: "AI / Full Stack",
    description:
      "An AI-powered email management platform that brings multiple inbox workflows into one place with smart organization and automation.",
    points: [
      "Built a unified inbox experience for managing email conversations efficiently",
      "Implemented AI-assisted email categorization and organization",
      "Added secure authentication and backend API workflows",
      "Focused on responsive UI and smooth user experience",
    ],
    stack: ["Node.js", "Express.js", "OpenAI", "IMAP", "Bootstrap 5", "JavaScript", "MongoDB"],
    href: "https://github.com/Ashwitha12-star/email-onebox",
    linkText: "View on GitHub",
  },
  {
    title: "AI Voice Collections Assistant",
    label: "AI / Full Stack",
    description:
      "An AI-powered voice collections assistant designed for compliant outbound customer conversations with a professional and respectful workflow.",
    points: [
      "Customer verification and debt-disclosure protection",
      "Promise-to-Pay handling and payment-link triggering",
      "Escalation and disposition tracking",
      "Multilingual support for collection scenarios",
    ],
    stack: ["React.js", "Node.js", "Express.js", "REST APIs", "Vapi", "Vercel", "Render"],
    href: "https://ai-voice-assistant-sage.vercel.app/",
    linkText: "Live Project",
  },
  {
    title: "Emotion Detection from Text",
    label: "Machine Learning",
    description:
      "An NLP-based emotion classification system trained on 10,000+ text samples to classify 6+ emotions.",
    points: [
      "Achieved 89% classification accuracy",
      "Applied text preprocessing and feature engineering",
      "Improved model precision by 60% through preprocessing and feature engineering",
      "Built an end-to-end NLP pipeline for consistent classification",
    ],
    stack: ["Python", "Machine Learning", "NLP"],
    href: "https://github.com/Ashwitha12-star/emotion-detection-",
    linkText: "View on GitHub",
  },
];

const skills = [
  ["Languages", "C++", "C", "JavaScript", "Python"],
  ["Frameworks", "Node.js", "React.js", "Express.js", "Bootstrap"],
  ["Databases", "MongoDB", "MySQL"],
  ["Tools", "VS Code", "Postman", "Git", "GitHub"],
  ["Coursework", "DBMS", "DSA", "OOPs", "Computer Networks", "Operating Systems", "Machine Learning", "Generative AI"],
];

const certifications = [
  {
    name: "React.js – Frontend Development",
    issuer: "NxtWave / CCBP",
    href: "https://certificates.ccbp.in/academy/react-js?id=DJRNFKRCHW",
    detail: "Responsive React interfaces, component-based architecture, state management and API integration.",
  },
  {
    name: "Node.js – Backend Development",
    issuer: "NxtWave / CCBP",
    href: "https://certificates.ccbp.in/academy/node-js?id=SIREKMSSJC",
    detail: "Server-side development with Node.js, RESTful APIs, middleware and database connectivity.",
  },
  {
    name: "Programming Foundations with Python",
    issuer: "NxtWave / CCBP",
    href: "https://certificates.ccbp.in/academy/programming-foundations-with-python?id=DPVHDKAPNF",
    detail: "Python programming foundations and problem-solving concepts.",
  },
  {
    name: "Introduction to Databases",
    issuer: "NxtWave / CCBP",
    href: "https://certificates.ccbp.in/academy/introduction-to-databases?id=JEGWITVWTU",
    detail: "Database fundamentals and SQL concepts.",
  },
];

function App() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <nav className="nav container">
          <a className="brand" href="#home" onClick={closeMenu}>
            <span className="brand-mark">AR</span>
            <span>Ashwitha Racharla</span>
          </a>

          <button
            className="menu-btn"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {["About", "Skills", "Projects", "Education", "Certificates", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
            ))}
            <button className="theme-btn" onClick={() => setDark(!dark)} aria-label="Toggle theme">
              {dark ? "☀" : "☾"}
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">FULL STACK DEVELOPER • AI & ML ENTHUSIAST</p>
              <h1>Hi, I'm <span>Ashwitha</span>.</h1>
              <p className="hero-text">
                I build responsive web applications, backend services and practical AI-powered solutions.
                My focus is on clean user experiences, scalable APIs and solving real-world problems with code.
              </p>
              <div className="hero-actions">
                <a className="btn primary" href="#projects">View Projects <span>↗</span></a>
                <a className="btn secondary" href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
              <div className="quick-links">
                <a href={links.github} target="_blank" rel="noreferrer">GitHub</a>
                <a href={links.leetcode} target="_blank" rel="noreferrer">LeetCode</a>
                <a href={links.email}>Email</a>
              </div>
            </div>

            <div className="hero-card">
              <div className="code-window">
                <div className="window-bar"><span></span><span></span><span></span></div>
                <pre><code>{`const ashwitha = {
  role: "Full Stack Developer",
  stack: ["React", "Node", "Express"],
  databases: ["MongoDB", "MySQL"],
  interests: ["AI", "ML", "Generative AI"],
  build: "useful things"
};`}</code></pre>
              </div>
              <div className="stat-row">
                <div><strong>8.3</strong><small>CGPA</small></div>
                <div><strong>3</strong><small>Featured Projects</small></div>
                <div><strong>4</strong><small>Certifications</small></div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container two-col">
            <div>
              <p className="section-kicker">01 / ABOUT</p>
              <h2>Building with curiosity and purpose.</h2>
            </div>
            <div className="about-copy">
              <p>
                I'm an Electronics and Communication Engineering graduate with hands-on experience in
                frontend, backend, databases and machine learning. I enjoy turning ideas into working,
                user-friendly products and continuously improving my problem-solving skills.
              </p>
              <div className="about-meta">
                <div><span>Location</span><strong>Hyderabad, India</strong></div>
                <div><span>Focus</span><strong>React • Node • AI/ML</strong></div>
                <div><span>Training</span><strong>NxtWave</strong></div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section section-alt">
          <div className="container">
            <p className="section-kicker">02 / SKILLS</p>
            <div className="section-heading">
              <h2>Tools I work with.</h2>
              <p>A practical stack across web development, databases and AI.</p>
            </div>
            <div className="skills-grid">
              {skills.map(([title, ...items]) => (
                <div className="skill-card" key={title}>
                  <h3>{title}</h3>
                  <div className="chips">{items.map(item => <span className="chip" key={item}>{item}</span>)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <p className="section-kicker">03 / PROJECTS</p>
            <div className="section-heading">
              <h2>Selected work.</h2>
              <p>Projects that show my full-stack, AI and problem-solving experience.</p>
            </div>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <article className="project-card" key={project.title}>
                  <div className="project-top">
                    <span className="project-number">0{index + 1}</span>
                    <span className="project-label">{project.label}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul>{project.points.map(point => <li key={point}>{point}</li>)}</ul>
                  <div className="chips">{project.stack.map(item => <span className="chip" key={item}>{item}</span>)}</div>
                  <a className="text-link" href={project.href} target="_blank" rel="noreferrer">{project.linkText} <span>↗</span></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="section section-alt">
          <div className="container">
            <p className="section-kicker">04 / EDUCATION & EXPERIENCE</p>
            <div className="timeline">
              <div className="timeline-item">
                <span className="timeline-dot"></span>
                <div>
                  <span className="timeline-date">2022 – 2026</span>
                  <h3>B.Tech in Electronics and Communication Engineering</h3>
                  <p>Bhoj Reddy Engineering College for Women, Hyderabad</p>
                  <strong>CGPA: 8.3</strong>
                </div>
              </div>
              <div className="timeline-item">
                <span className="timeline-dot"></span>
                <div>
                  <span className="timeline-date">2020 – 2022</span>
                  <h3>Intermediate</h3>
                  <p>Sri Gayatri Junior College</p>
                  <strong>96%</strong>
                </div>
              </div>
              <div className="timeline-item">
                <span className="timeline-dot"></span>
                <div>
                  <span className="timeline-date">2019 – 2020</span>
                  <h3>10th Class</h3>
                  <p>Netaji High School</p>
                  <strong>100%</strong>
                </div>
              </div>
              <div className="timeline-item">
                <span className="timeline-dot"></span>
                <div>
                  <span className="timeline-date">Dec 2022 – Nov 2026</span>
                  <h3>NxtWave Descriptive Technologies</h3>
                  <p>Structured, industry-oriented training in DSA, Full Stack Development (MERN), Machine Learning and Generative AI.</p>
                </div>
              </div>
              <div className="timeline-item">
                <span className="timeline-dot"></span>
                <div>
                  <span className="timeline-date">Achievement</span>
                  <h3>Placement Coordinator</h3>
                  <p>Coordinated between students, the placement cell and recruiters during campus drives, communicating schedules and interview updates.</p>
                </div>
              </div>
              <div className="timeline-item">
                <span className="timeline-dot"></span>
                <div>
                  <span className="timeline-date">Achievement</span>
                  <h3>Diamond II Achiever – NxtWave</h3>
                  <p>Rank 1800, placing in the top tier of learners based on coding challenges, project execution and technical assessments.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="certificates" className="section">
          <div className="container">
            <p className="section-kicker">05 / CERTIFICATIONS</p>
            <div className="section-heading">
              <h2>Proof of learning.</h2>
              <p>Verified certificates and focused learning across frontend, backend, Python and databases.</p>
            </div>
            <div className="cert-grid">
              {certifications.map(cert => (
                <a className="cert-card" href={cert.href} target="_blank" rel="noreferrer" key={cert.name}>
                  <div className="cert-icon">↗</div>
                  <span>{cert.issuer}</span>
                  <h3>{cert.name}</h3>
                  <p>{cert.detail}</p>
                  <strong>View certificate</strong>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container achievement">
            <div>
              <p className="section-kicker">06 / CODING</p>
              <h2>Always sharpening the fundamentals.</h2>
              <p>I practice data structures and algorithms and keep improving my problem-solving skills through coding challenges.</p>
            </div>
            <a className="btn primary" href={links.leetcode} target="_blank" rel="noreferrer">Visit LeetCode ↗</a>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact">
            <p className="section-kicker">07 / CONTACT</p>
            <h2>Let's build something useful.</h2>
            <p>I'm interested in software development opportunities where I can contribute, learn and build real products.</p>
            <div className="contact-actions">
              <a className="btn primary" href={links.email}>ashwitharacharla@gmail.com</a>
              <a className="btn secondary" href={links.phone}>+91 9032702926</a>
            </div>
            <div className="social-row">
              <a href={links.github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a href={links.leetcode} target="_blank" rel="noreferrer">LeetCode</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Ashwitha Racharla</span>
          <span>Built with React + Vite</span>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode><App /></React.StrictMode>
);
