import { lazy, Suspense } from 'react';
import Layout from "./components/layout/Layout";
import { useDynamicFavicon } from './hooks/useDynamicFavicon';

import { Routes, Route } from 'react-router-dom';

// Lazy load components for code splitting
const Hero = lazy(() => import("./components/sections/Hero"));
const Projects = lazy(() => import("./components/sections/Projects"));
const Skills = lazy(() => import("./components/sections/Skills"));
const Articles = lazy(() => import("./components/pages/Articles"));
const Experience = lazy(() => import("./components/sections/Experience"));
const Certificates = lazy(() => import("./components/sections/Certificates"));
const About = lazy(() => import("./components/sections/About"));
const Contact = lazy(() => import("./components/sections/Contact"));
const NavPlayground = lazy(() => import("./components/pages/NavPlayground"));
const Analytics = lazy(() => import("./pages/admin/Analytics"));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

const App = () => {
  useDynamicFavicon();
  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={
            <Suspense fallback={<LoadingSpinner />}>
              <>
                <Hero />
                <Projects />
                <Skills />
                <Articles />
                <Experience />
                <Certificates />
                <About />
                <Contact />
              </>
            </Suspense>
          } />
          <Route path="/demo/nav-playground" element={<NavPlayground />} />
          <Route path="/admin/analytics" element={<Analytics />} />
          {/* Add other routes as needed if we split pages later */}
          <Route path="*" element={
            <div className="flex flex-col items-center justify-center min-h-[50vh]">
              <h1 className="text-4xl font-bold text-primary dark:text-secondary">404</h1>
              <p className="text-neutral-medium dark:text-neutral-light">Page not found</p>
            </div>
          } />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
