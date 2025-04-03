import { TestProps } from "../../types/dataType";

// components
import IntroButtonGroup from "./IntroButtonGroup";

// i18n
import { useTranslation } from "react-i18next";

import { RocketOutlined } from "@ant-design/icons";

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
      <h1 className="mainTitle">{info.mainTitle}</h1>
      <p className="subTitle">
        <i>{info.subTitle}</i>
      </p>
      <img src={info.mainImage} alt={info.mainTitle} className="imageWidth" />
      <p className="introText">
        <span className="boldText">{info.mainTitle}</span>, {t("intro")}
      </p>
      <button className="introButton" onClick={imageClickHandler}>
        <RocketOutlined /> &nbsp; {t("start")}
      </button>
      <div className="line" />
      <IntroButtonGroup testParams={info.mainUrl} lang={info.lang} />
    </div>
  );
};

export default Intro;
