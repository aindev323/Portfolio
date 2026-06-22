import { useRef, useEffect, useState } from "react";
import "./Skills.scss";

const Skills = () => {
  const sectionRef = useRef(null);
  const [visibleLevels, setVisibleLevels] = useState({});
  const skillsList = [
    { name: "HTML5", lvl: "95", img: "html.png" },
    { name: "CSS3", lvl: "95", img: "css.png" },
    { name: "SCSS", lvl: "90", img: "scss.png" },
    { name: "JavaScript", lvl: "75", img: "javascript.png" },
    { name: "React", lvl: "65", img: "react.png" },
    { name: "TypeScript", lvl: "65", img: "typescript.png" },
    { name: "PHP", lvl: "65", img: "php.png" },
    { name: "MySQL", lvl: "65", img: "mysql.png" },
    { name: "Firebase", lvl: "65", img: "firebase.svg" },
    { name: "GitHub", lvl: "70", img: "github.png" },
    { name: "Vercel", lvl: "65", img: "vercel.svg" },
    { name: "Figma", lvl: "70", img: "figma.png" }
  ];
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          skillsList.forEach((skill, index) => {
            setTimeout(() => {
              setVisibleLevels(prev => ({...prev, [index]: `${skill.lvl}%`}));
            }, index * 120);
          });
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="skills" 
      className={`skills fade-in-section ${visibleLevels[0] ? "is-visible" : ""}`} 
      ref={sectionRef}
    >
      <div className="container">
        <div className="title">
          <span>MY SKILLS</span>
          <h2>Skills</h2>
        </div>
        <ul className="skillBox">
          {skillsList.map((skill, idx) => (
            <li 
              key={idx} 
              data-level={skill.lvl}
              style={{"--level": visibleLevels[idx] || "0%"}}>
              <img src={`/img/${skill.img}`} alt={skill.name}/>
              <span>{skill.name}</span>
            </li>
          ))}
        </ul>
        <ul className="desc">
          <li className="descTitle">UI/UX & Publishing</li>
          <li>HTML, CSS, SCSS 기반 반응형 웹 및 크로스 브라우징 구현</li>
          <li className="descLast">웹 표준 및 컴포넌트 단위 레이아웃 설계 경험</li>

          <li className="descTitle">Interaction & Logic</li>
          <li>React 기반 동적 UI 및 인터랙션 구현</li>
          <li className="descLast">JavaScript 중심의 클라이언트 로직 설계</li>

          <li className="descTitle">Data & Server Link</li>
          <li>PHP 기반 CRUD 및 API 연동 경험</li>
          <li className="descLast">JSON 비동기 데이터 처리 및 화면 구성 경험</li>

          <li className="descTitle">Devops & Deploy</li>
          <li>Git/GitHub 협업 경험</li>
          <li>Vercel 및 호스팅 배포 경험</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;