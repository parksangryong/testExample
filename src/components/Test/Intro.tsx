import { TestProps } from "../../types/dataType";

// components
import IntroButtonGroup from "./IntroButtonGroup";

// i18n
import { useTranslation } from "react-i18next";

interface IntroProps {
  info: TestProps["info"];
  setMode: (mode: "intro" | "quiz" | "loading") => void;
}

const Intro = ({ info, setMode }: IntroProps) => {
  const { t } = useTranslation();

  const imageClickHandler = () => {
    setMode("quiz");
  };

  return (
    <div>
      <h1>{info.mainTitle}</h1>
      <p>{info.subTitle}</p>
      <img
        onClick={imageClickHandler}
        src={info.mainImage}
        alt={info.mainTitle}
        className="imageWidth"
      />
      <p>
        <span className="boldText">{info.mainTitle}</span>
        {t("intro")}
      </p>
      <IntroButtonGroup testParams={info.mainUrl} lang={info.lang} />
    </div>
  );
};

export default Intro;
