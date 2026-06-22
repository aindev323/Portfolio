# 🚀 [포트폴리오 사이트]

<br>

>React 기반으로 데이터 중심 구조와 커스텀 Hook을 활용해 제작한 포트폴리오 사이트

<br>

## 📌 Project Overview

| 구분 | 내용 |
| :--- | :--- |
| **개발 기간** | 2026.06 (약 1주) |
| **개발 인원** | 개인 프로젝트 |
| **배포 URL** | [🔗 Live Demo 보러가기](주소) |

<br>

---

## 🛠 Tech Stack

<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

<br>

---

## 🌟 핵심 기능 및 구현 내용

### 1. 데이터 기반 포트폴리오 구조 설계
* 프로젝트 정보를 별도의 JavaScript 데이터 파일로 분리하여 관리
* 컴포넌트 수정 없이 데이터 추가만으로 확장 가능한 구조 설계
* 유지보수와 재사용성을 고려한 구조로 구현

---

### 2. 스크롤 기반 인터랙션 및 애니메이션 구현
* IntersectionObserver를 활용하여 스크롤 진입 시점을 감지
* 요소 등장 애니메이션과 스킬바 애니메이션을 분리하여 구현
* CSS 변수(`--level`)를 활용하여 스킬바 길이를 동적으로 조절

---

### 3. 커스텀 Hook을 활용한 로직 분리
* `useScrollAnimation`을 통해 스크롤 감지 로직 재사용 구조화
* `useSkillBar`를 통해 스킬바 애니메이션 로직 분리
* 스크롤 감지와 UI 로직을 분리하여 컴포넌트 구조 단순화

---

### 4. SCSS 기반 스타일 구조 모듈화
* 컴포넌트 단위로 SCSS 파일 분리
* mixin / variables를 활용한 스타일 재사용 구조 구축
* 스타일 유지보수성과 디자인 일관성 확보

<br>

---

## 🔥 트러블슈팅

### 1. 스크롤 애니메이션과 스킬바 충돌 문제

* **문제 상황:**  
  스크롤 진입 애니메이션과 스킬바 애니메이션이 동시에 실행되면서 일부 UI가 정상적으로 렌더링되지 않는 문제 발생

* **원인 분석:**  
  `IntersectionObserver`가 Hook과 컴포넌트 내부에서 중복 사용되며 동일 요소에 대해 여러 Observer가 동작하면서 충돌 발생

* **해결 방안:**
  * 스크롤 감지 로직을 Observer 기반으로 단일화
  * 스킬바 애니메이션은 state 기반(`visibleLevels`)으로 분리
  * DOM 직접 제어 대신 CSS 변수 기반으로 UI 제어
  * Hook은 감지 역할, UI는 렌더링 역할로 책임 분리

* **결과:**
  * 애니메이션 충돌 문제 해결
  * UI 안정성 확보
  * 코드 구조 단순화 및 유지보수성 향상