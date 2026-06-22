import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;