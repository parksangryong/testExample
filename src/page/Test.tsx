import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// data
import { TESTS } from "../data/TESTS";

// components
import IntroRenderer from "../components/Test/IntroRenderer";

// type
import { TestProps } from "../types/dataType";

// i18n
import { useTranslation } from "react-i18next";

const Test = () => {
  const { testParams } = useParams();
  const [currentTest, setCurrentTest] = useState<TestProps | null>(null);
  const { i18n } = useTranslation();

  useEffect(() => {
    const currentTest = TESTS.find((test) => test.info.mainUrl === testParams);
    if (currentTest) {
      setCurrentTest(currentTest);
    }
  }, [testParams]);

  useEffect(() => {
    i18n.changeLanguage(currentTest?.info.lang || "Kor");
  }, [currentTest, i18n]);

  return (
    <div>
      <IntroRenderer currentTest={currentTest} />
    </div>
  );
};

export default Test;
