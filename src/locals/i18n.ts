import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// 언어 파일
import translationEN from "./enTranslation.json";
import translationKO from "./koTranslation.json";
import translationJP from "./jpTranslation.json";

const resources = {
  Eng: {
    translation: translationEN,
  },
  Kor: {
    translation: translationKO,
  },
  JP: {
    translation: translationJP,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "Kor", // 기본 설정 언어, 'cimode'로 설정할 경우 키 값으로 출력된다.
  fallbackLng: "Eng", // 번역 파일에서 찾을 수 없는 경우 기본 언어
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
