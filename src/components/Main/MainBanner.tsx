import { useTranslation } from "react-i18next";

const MainBanner = () => {
  const { t } = useTranslation();
  return (
    <div className="mainBanner">
      <h1>{t("title")}</h1>
    </div>
  );
};

export default MainBanner;
