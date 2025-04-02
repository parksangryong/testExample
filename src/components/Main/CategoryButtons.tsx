import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const CategoryButtons = () => {
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
    <div>
      <button
        className={`category-button ${
          searchParams.get("category") === "all" ||
          searchParams.get("category") === null
            ? "active"
            : ""
        }`}
        onClick={() => onCategoryButtonClick("all")}
      >
        전체
      </button>
      <button
        className={`category-button ${
          searchParams.get("category") === "love" ? "active" : ""
        }`}
        onClick={() => onCategoryButtonClick("love")}
      >
        연애
      </button>
      <button
        className={`category-button ${
          searchParams.get("category") === "characteristic" ? "active" : ""
        }`}
        onClick={() => onCategoryButtonClick("characteristic")}
      >
        성격
      </button>
    </div>
  );
};

export default CategoryButtons;
