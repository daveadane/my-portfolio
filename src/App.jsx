import { projects } from './projects';
import './App.css';

function App() {
  return (
    <div className="portfolio">
      {/* 1. HERO SECTION - Now at the top where it belongs */}
      <header className="hero">
        <h1>Dawit Adane</h1>
        <p>React Developer | Building Interactive Web Experiences</p>
        
        <section className="skills">
          <h2>Tech Stack</h2>
          <div className="skills-container">
            <span>React</span>
            <span>JavaScript (ES6+)</span>
            <span>CSS3 (Grid/Flex)</span>
            <span>Vite</span>
            <span>REST APIs</span>
            <span>Git/GitHub</span>
            <span>Python</span>
            <span>SQL</span>
            <span>DevOps</span>
          </div>
        </section>
      </header>

      {/* 2. PROJECTS SECTION - In the middle */}
      <section className="project-section">
        <h2>My Projects</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.link} target="_blank" rel="noreferrer" className="live-link">Live Demo</a>
                <a href={project.github} target="_blank" rel="noreferrer" className="repo-link">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CONTACT SECTION - Now at the bottom */}
      <footer className="contact-section">
        <h2>Get In Touch</h2>
        <p>I'm currently looking for new opportunities. Feel free to reach out!</p>
        <div className="social-links">
          <a href="mailto:your-email@example.com" className="contact-btn">Email Me</a>
          <a href="https://github.com/daveadane" target="_blank" rel="noreferrer" className="contact-btn">GitHub</a>
          <a href="https://www.linkedin.com/in/dawit-adane-50260b63" target="_blank" rel="noreferrer" className="contact-btn">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

export default App;