import { TestProps } from "../../types/dataType";

// components
import IntroButtonGroup from "./IntroButtonGroup";

interface IntroProps {
  info: TestProps["info"];
  setMode: (mode: "intro" | "quiz" | "loading") => void;
}

const Intro = ({ info, setMode }: IntroProps) => {
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
        <span className="boldText">{info.mainTitle}</span>로 여러분의 성향을
        테스트해보세요!
      </p>
      <IntroButtonGroup />
    </div>
  );
};

export default Intro;
