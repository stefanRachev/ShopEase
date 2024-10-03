// src/context/LanguageContext.jsx
import PropTypes from "prop-types";
import { createContext, useState } from "react";
import translationsEn from "../locales/en.json"
import translationsBg from "../locales/bg.json"

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("bg"); 

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "bg" : "en"));
  };

  const translations = {
    en: translationsEn,
    bg: translationsBg,
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage,translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};


export { LanguageContext };

