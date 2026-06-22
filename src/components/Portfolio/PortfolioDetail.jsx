const PortfolioDetail = ({ project }) => {
  return (
    <div id="portfolio-detail" className="detail">
      <div className="left">
        <h3>{project.title}</h3>
        <p className="type">{project.type}</p>
        <div className="tech">
          {project.tech.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <ul>
          <li className="descriptionTitle">
            {project.descriptionTitle}
          </li>
          {project.description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="buttons">
          <a href={project.website} target="_blank" rel="noreferrer">
            <i className="xi-play-circle-o"></i>
            Live Demo
          </a>
          <a href={project.github} target="_blank" rel="noreferrer">
            <i className="xi-github"></i>
            Github
          </a>
        </div>
      </div>
      <div className={`right ${project.deviceType}`}>
        <iframe
          src={project.iframe}
          title={project.title}
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default PortfolioDetail;