import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// data
import { TESTS } from "../data/TESTS";

// Components
import TestResultRenderer from "../components/TestResult/TestResultRenderer";
import ShareButtonGroup from "../components/TestResult/ShareButtonGroup";
import ResultButtonGroup from "../components/TestResult/ResultButtonGroup";
import ResultThumbnailList from "../components/TestResult/ResultThumnailList";

const TestResult = () => {
  const { testParams, resultParams } = useParams();
  const [testData, setTestData] = useState({});
  const [resultInfo, setResultInfo] = useState({});

  useEffect(() => {
    const currentTest = TESTS.find((test) => test.info.mainUrl === testParams);
    if (currentTest) {
      setTestData(currentTest);
    }
    const resultTestData = currentTest?.results.find(
      (result) => result.type === resultParams
    );
    if (resultTestData) {
      setResultInfo(resultTestData);
    }
  }, [testParams, resultParams]);

  return (
    <div>
      <TestResultRenderer resultInfo={resultInfo} />
      <ShareButtonGroup />
      <ResultButtonGroup />
      <ResultThumbnailList />
    </div>
  );
};

export default TestResult;
