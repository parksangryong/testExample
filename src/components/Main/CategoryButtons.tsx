import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CategoryButtons = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const [lang, setLang] = useState("Kor");
  const navigate = useNavigate();

  useEffect(() => {
    const currentLang = searchParams.get("lang") || "Kor";
    setLang(currentLang);
  }, [searchParams]);

  const onCategoryButtonClick = (category: string) => {
    if (category === "all") {
      navigate(`/?lang=${lang}`);
    } else if (category === "love" || category === "characteristic") {
      navigate(`/?lang=${lang}&category=${category}`);
    } else {
      alert("잘못된 카테고리입니다.");
      navigate(`/?lang=${lang}`);
    }
  };

  return (
    <div className="category-button-container">
      <button
        className={`category-button ${
          searchParams.get("category") === "all" ||
          searchParams.get("category") === null
            ? "active"
            : ""
        }`}
        onClick={() => onCategoryButtonClick("all")}
      >
        {t("all")}
      </button>
      <button
        className={`category-button ${
          searchParams.get("category") === "love" ? "active" : ""
        }`}
        onClick={() => onCategoryButtonClick("love")}
      >
        {t("love")}
      </button>
      <button
        className={`category-button ${
          searchParams.get("category") === "characteristic" ? "active" : ""
        }`}
        onClick={() => onCategoryButtonClick("characteristic")}
      >
        {t("characteristic")}
      </button>
    </div>
  );
};

export default CategoryButtons;
