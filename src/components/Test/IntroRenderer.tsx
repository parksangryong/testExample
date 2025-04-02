import { useState } from "react";
import { TestProps } from "../../data/dataType";

// components
import Intro from "./Intro";
import Quiz from "./Quiz";
import Loading from "./Loading";
import Error from "./Error";

interface IntroRendererProps {
  currentTest: TestProps | null;
}

const IntroRenderer = ({ currentTest }: IntroRendererProps) => {
  const [mode, setMode] = useState<"intro" | "quiz" | "loading">("intro");

  if (!currentTest) {
    return <Error />;
  }

  if (mode === "intro") {
    return <Intro info={currentTest.info} setMode={setMode} />;
  } else if (mode === "quiz") {
    return <Quiz />;
  } else if (mode === "loading") {
    return <Loading />;
  } else {
    return <Error />;
  }
};

export default IntroRenderer;
