import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// data
import { TESTS } from "../data/TESTS";

// components
import IntroRenderer from "../components/Test/IntroRenderer";

export interface TestProps {
  info: {
    mainTitle: string;
    subTitle: string;
    mainUrl: string;
    scoreType: string;
    mainImage: string;
    thumbImage: string;
    lang: string;
    category: string;
  };
  questions: {
    which: string;
    question: string;
    answers: {
      type: string;
      content: string;
    }[];
  }[];
  results: {
    type: string;
    query: string;
    img_src: string;
  }[];
}

const Test = () => {
  const { testParams } = useParams();
  const [currentTest, setCurrentTest] = useState<TestProps | null>(null);

  useEffect(() => {
    const currentTest = TESTS.find((test) => test.info.mainUrl === testParams);
    if (currentTest) {
      setCurrentTest(currentTest);
    }
  }, [testParams]);

  return (
    <div>
      <IntroRenderer currentTest={currentTest} />
    </div>
  );
};

export default Test;
