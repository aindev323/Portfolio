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
          <li>Figma를 활용한 UI/UX 기획 및 와이어프레임, 프로토타이핑</li>
          <li className="descLast">HTML5, CSS3, SCSS 기반의 반응형 웹 구성 및 크로스 브라우징 대응</li>

          <li className="descTitle">Frontend</li>
          <li>React + Vite 환경의 컴포넌트 기반 UI 설계 및 동적 인터랙션 구현</li>
          <li>TypeScript를 도입한 정적 타입 지정 및 기본 구조 설계</li>
          <li className="descLast">JavaScript 및 jQuery를 활용한 클라이언트 기능 개발</li>

          <li className="descTitle">Backend</li>
          <li>PHP, MySQL 기반의 CRUD 기능 구현 및 데이터베이스 연동</li>
          <li className="descLast">Firebase (Authentication, Firestore)를 활용한 사용자 인증 및 데이터 관리</li>

          <li className="descTitle">DevOps & Deploy</li>
          <li>Git / GitHub을 활용한 소스코드 버전 관리 및 협업</li>
          <li className="descLast">Vercel, GitHub Pages를 통한 프론트엔드 서비스 배포</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;