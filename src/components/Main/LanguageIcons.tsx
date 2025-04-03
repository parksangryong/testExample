import { CircleFlag } from "react-circle-flags";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const LanguageIcons = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { i18n } = useTranslation();

  const onButtonClick = (countryCode: string) => {
    navigate(`/?lang=${countryCode}`);
    i18n.changeLanguage(countryCode);
  };

  useEffect(() => {
    i18n.changeLanguage(searchParams.get("lang") || "Kor");
  }, [searchParams, i18n]);

  return (
    <div className="languageIcons">
      <CircleFlag
        className={`languageIcon ${
          searchParams.get("lang") === "Kor" ||
          searchParams.get("lang") === null
            ? "active"
            : ""
        }`}
        countryCode="kr"
        width={48}
        onClick={() => onButtonClick("Kor")}
      />
      <CircleFlag
        className={`languageIcon ${
          searchParams.get("lang") === "Eng" ? "active" : ""
        }`}
        countryCode="us"
        width={48}
        onClick={() => onButtonClick("Eng")}
      />
      <CircleFlag
        className={`languageIcon ${
          searchParams.get("lang") === "JP" ? "active" : ""
        }`}
        countryCode="jp"
        width={48}
        onClick={() => onButtonClick("JP")}
      />
    </div>
  );
};

export default LanguageIcons;
