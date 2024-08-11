import About from "./About/about";
import Home from "./Home/home";
import Navbar from "./Navbar/Navbar";
import Contact from "./Contact/contact";
import CertificatesGallery from "./Certificates/certificate";
import PortfolioSection from "./Projects/projects";

const App = () => {
  return (
      <div>
        <Navbar />
        <Home />
        <About />
        <PortfolioSection />
        <CertificatesGallery />
        <Contact />
      </div>
  );
};

export default App;
