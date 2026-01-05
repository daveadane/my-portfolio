export default function ProjectCard({ title, description, image, liveLink, repoLink }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} />
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="links">
          <a href={liveLink} target="_blank" rel="noreferrer" className="btn">Live Demo</a>
          <a href={repoLink} target="_blank" rel="noreferrer" className="btn-outline">GitHub</a>
        </div>
      </div>
    </div>
  );
}