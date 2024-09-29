import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Импортирай преводите
import translationEN from './locales/en.json';
import translationBG from './locales/bg.json';

const resources = {
  en: {
    translation: translationEN
  },
  bg: {
    translation: translationBG
  }
};

i18n
  .use(LanguageDetector)  // За автоматично разпознаване на езика
  .use(initReactI18next)   // За интеграция с React
  .init({
    resources,
    fallbackLng: 'en',  // Когато няма превод, използвай английски
    interpolation: {
      escapeValue: false  // React вече защитава от XSS
    }
  });

export default i18n;
