import { useState } from "react";
import { useScrollAnimation } from "../../hook/useScrollAnimation";
import { portfolioData } from "../../data/portfolioData";
import PortfolioAccordion from "./PortfolioAccordion";
import PortfolioDetail from "./PortfolioDetail";
import "./Portfolio.scss";
import "./PortfolioAccordion.scss";
import "./PortfolioDetail.scss";

const Portfolio = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [active, setActive] = useState(0);
  if (!portfolioData || portfolioData.length === 0) {
    return (
      <section id="portfolio" className="portfolio">
        <div className="container">
          포트폴리오 데이터를 불러오는 중입니다...
        </div>
      </section>
    );
  }
  const currentProject = portfolioData[active];
  return(
    <section id="portfolio" className={`portfolio fade-in-section ${isVisible ? "is-visible" : ""}`} ref={ref}>
      <div className="container">
        <div className="title">
          <span>프로젝트 상세</span>
          <h2>라이브 링크와 깃허브를 통해 세부 사항을 확인해 보세요.</h2>
        </div>
        <PortfolioAccordion
          projects={portfolioData}
          active={active}
          setActive={setActive}/>
        <PortfolioDetail project={currentProject} />
      </div>
    </section>
  );
};

export default Portfolio;