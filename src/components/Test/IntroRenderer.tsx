import { useState } from "react";
import { TestProps, QuizProps } from "../../types/dataType";

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
  const [mbtiScore, setMbtiScore] = useState<QuizProps["mbtiScore"]>({
    E: 0,
    I: 0,
    N: 0,
    S: 0,
    T: 0,
    F: 0,
    P: 0,
    J: 0,
  });

  if (!currentTest) {
    return <Error />;
  }

  if (mode === "intro") {
    return <Intro info={currentTest.info} setMode={setMode} />;
  } else if (mode === "quiz") {
    return (
      <Quiz
        setMode={setMode}
        questions={currentTest.questions}
        mbtiScore={mbtiScore}
        setMbtiScore={setMbtiScore}
      />
    );
  } else if (mode === "loading") {
    return <Loading mbtiScore={mbtiScore} currentTest={currentTest} />;
  } else {
    return <Error />;
  }
};

export default IntroRenderer;
