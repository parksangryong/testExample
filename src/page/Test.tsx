import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// data
import { TESTS } from "../data/TESTS";

// components
import IntroRenderer from "../components/Test/IntroRenderer";

// type
import { TestProps } from "../data/dataType";

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
