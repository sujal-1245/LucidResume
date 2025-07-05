import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types'; // Optional: for prop type checking

const TemplateContext = createContext();

const defaultUserData = {
  name: 'Your Name',
  email: 'yourname@example.com',
  phone: '+91-XX00X0XX00',
  summary: 'Creative Frontend Developer with a passion for UI excellence.',
  skills: ['HTML','CSS','JS'],
  experience: [
    {
      title: 'Frontend Engineer',
      company: 'PixelForge',
      duration: '2022 - Present',
      description: 'Built interactive UIs for SaaS platforms.',
    },
  ],
};

export const TemplateProvider = ({ children }) => {
  const [selectedTemplate, setSelectedTemplate] = useState('classic');
  const [userData, setUserData] = useState(defaultUserData);

  const resetUserData = () => setUserData(defaultUserData); // Optional utility

  return (
    <TemplateContext.Provider
      value={{ selectedTemplate, setSelectedTemplate, userData, setUserData, resetUserData }}
    >
      {children}
    </TemplateContext.Provider>
  );
};

// Optional: Prop validation
TemplateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useTemplate = () => useContext(TemplateContext);
