import Layout from "./components/layout/Layout";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";

import { Routes, Route } from 'react-router-dom';
import NavPlayground from "./components/pages/NavPlayground";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Projects />
            <Skills />
            <Experience />
            <About />
            <Contact />
          </>
        } />
        <Route path="/demo/nav-playground" element={<NavPlayground />} />
        {/* Add other routes as needed if we split pages later */}
        <Route path="*" element={
          <div className="flex flex-col items-center justify-center min-h-[50vh]">
            <h1 className="text-4xl font-bold text-primary dark:text-secondary">404</h1>
            <p className="text-neutral-medium dark:text-neutral-light">Page not found</p>
          </div>
        } />
      </Routes>
    </Layout>
  );
};

export default App;
