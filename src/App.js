import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import LandingSection from './components/LandingSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';

import Footer from './components/Footer';
import { AlertProvider } from './context/alertContext';
import Alert from './components/Alert';

// Custom light theme with modern design
const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)',
        color: '#2d3748',
        fontFamily: "'Inter', sans-serif",
      },
    },
  },
  colors: {
    brand: {
      900: '#1a202c',
      800: '#2d3748',
      700: '#4a5568',
      600: '#718096',
      500: '#38b2ac',
      400: '#4fd1c0',
      300: '#81e6d9',
      200: '#b2f5ea',
      100: '#e6fffa',
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AlertProvider>
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Header />
          <LandingSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <CertificationsSection />
          <ContactSection />
          <Footer />
          <Alert />
        </motion.main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
