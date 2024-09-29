// src/context/LanguageContext.jsx
import PropTypes from "prop-types";
import { createContext, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // по подразбиране е английски

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "bg" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// export за използване в useLanguage
export { LanguageContext };

