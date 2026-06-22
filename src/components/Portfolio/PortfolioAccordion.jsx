const PortfolioAccordion = ({ projects, active, setActive }) => {
  return (
    <div className="portfolio-accordion">
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`panel ${active === index ? "active" : ""}`}
          onClick={() => setActive(index)}>
          <img src={project.thumbnail} alt={project.title}/>
          <div className="overlay">
            <h3>{project.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioAccordion;