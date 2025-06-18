
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import About from "./sections/Experience";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";


import Navbar from "./components/NavBar";

const App = () => (
  <>
    <Navbar />
    <Hero />
<ShowcaseSection/>

    <About />
    <TechStack />
    <Contact />
    <Footer />
  </>
);

export default App;
