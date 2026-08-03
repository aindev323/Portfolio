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
    <section id="skills" className={`skills fade-in-section ${visibleLevels[0] ? "is-visible" : ""}`} ref={sectionRef}>
      <div className="container">
        <div className="title">
          <span>핵심 역량</span>
          <h2>EXPERTISE</h2>
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
          <li className="descTitle">사용자 중심의 반응형 UI/UX 설계 및 컴포넌트 구조화</li>
          <li>• Figma를 활용한 기획부터 서비스 배포까지의 전 주기(End-to-End) 프로젝트 경험 보유</li>
          <li>• HTML, SCSS를 이용해 모든 기기에서 일관성 있는 반응형 화면 구축</li>
          <li className="descLast">• 공통 컴포넌트를 통해 유지보수성과 코드 재사용성 극대화</li>

          <li className="descTitle">React 기반 프론트엔드 개발 및 풀스택 데이터 연동</li>
          <li>• 외부 API(TMDB) 비동기 연동을 통한 동적이고 직관적인 UI 구현</li>
          <li>• Firebase, PHP, MySQL을 활용한 회원가입 및 CRUD 구현으로 백엔드 흐름 이해</li>
          <li className="descLast">• Git/GitHub 및 Vercel을 활용한 체계적인 버전 관리와 안정적인 배포 파이프라인 구축</li>

          <li className="descTitle">유기적인 직군 간 협업 및 이슈 해결 역량</li>
          <li>• Figma를 활용한 화면 구현 과정에서 디자이너와 원활한 소통 유지</li>
          <li>• 팀원 간 GitHub(Push, Pull, Merge)을 통한 코드 병합 및 충돌 해결</li>
          <li className="descLast">• 협업 과정의 기술적 이슈를 유연하게 조율하며 정해진 일정 내 결과물 도출</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;