// src/context/useLanguage.js

import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export const useLanguage = () => {
  return useContext(LanguageContext);
};
