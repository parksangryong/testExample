import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// data
import { TESTS } from "../data/TESTS";
import { TestProps } from "../types/dataType";

// Components
import TestResultRenderer from "../components/TestResult/TestResultRenderer";
import ShareButtonGroup from "../components/TestResult/ShareButtonGroup";
import ResultButtonGroup from "../components/TestResult/ResultButtonGroup";
import ResultThumbnailList from "../components/TestResult/ResultThumnailList";

// i18n
import { useTranslation } from "react-i18next";

interface ResultInfo {
  type: string;
  query: string;
  img_src: string;
}

const TestResult = () => {
  const { testParams, resultParams } = useParams();
  const { i18n } = useTranslation();

  const [testData, setTestData] = useState<TestProps>({
    info: {
      mainTitle: "",
      subTitle: "",
      mainUrl: "",
      scoreType: "",
      mainImage: "",
      thumbImage: "",
      lang: "",
      category: "",
    },
    questions: [],
    results: [],
  });
  const [resultInfo, setResultInfo] = useState<ResultInfo>({
    type: "",
    query: "",
    img_src: "",
  });

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

  useEffect(() => {
    i18n.changeLanguage(testData.info.lang || "Kor");
  }, [testData, i18n]);

  return (
    <div>
      <TestResultRenderer resultInfo={resultInfo} />
      <ShareButtonGroup
        testParams={testParams as string}
        resultParams={resultParams as string}
        renderTestInfo={testData}
      />
      <ResultButtonGroup
        testParams={testParams as string}
        resultParams={resultParams as string}
        lang={testData.info.lang}
      />
      <ResultThumbnailList
        testParam={testParams as string}
        lang={testData.info.lang}
      />
    </div>
  );
};

export default TestResult;
