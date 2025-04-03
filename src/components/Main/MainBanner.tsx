import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const MainBanner = () => {
  const { t, i18n } = useTranslation();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    i18n.changeLanguage(searchParams.get("lang") || "Kor");
  }, [searchParams, i18n]);

  return (
    <div className="mainBanner">
      <h1>{t("title")}</h1>
    </div>
  );
};

export default MainBanner;
