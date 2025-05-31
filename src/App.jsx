import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Home from './Home/home';
import About from './About/about';
import Projects from './Projects/projects';
import Certifications from './Certifications/certifications';
import Contact from './Contact/contact';
import FloatingNavigation from './components/FloatingNavigation';
import FeedbackForm from './components/FeedbackForm';
import { setupCache, addResourceHints } from './utils/performance';
import { runAllTests } from './utils/testing';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Performance optimizations
    setupCache();
    addResourceHints();

    // Run tests in development
    if (process.env.NODE_ENV === 'development') {
      runAllTests();
    }

    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-primary-dark text-text-primary">
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loading"
              className="fixed inset-0 flex items-center justify-center bg-primary-dark"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="text-center">
                <motion.div
                  className="w-16 h-16 border-4 border-accent-blue border-t-transparent rounded-full mx-auto mb-4"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <motion.h1
                  className="text-2xl font-space font-bold bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Loading Portfolio
                </motion.h1>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FloatingNavigation />
              <main>
                <Home />
                <About />
                <Projects />
                <Certifications />
                <Contact />
              </main>
              <FeedbackForm />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}

export default App;
