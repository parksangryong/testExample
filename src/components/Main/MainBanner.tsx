import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import LanguageIcons from "./LanguageIcons";
const MainBanner = () => {
  const { t, i18n } = useTranslation();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    i18n.changeLanguage(searchParams.get("lang") || "Kor");
  }, [searchParams, i18n]);

  return (
    <div className="mainBanner">
      <span className="headerTitle">{t("title")}</span>
      <LanguageIcons />
    </div>
  );
};

export default MainBanner;
