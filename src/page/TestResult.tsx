import { useParams } from "react-router-dom";

// Components
import TestResultRenderer from "../components/TestResult/TestResultRenderer";
import ShareButtonGroup from "../components/TestResult/ShareButtonGroup";
import ResultButtonGroup from "../components/TestResult/ResultButtonGroup";
import ResultThumbnailList from "../components/TestResult/ResultThumnailList";

const TestResult = () => {
  const { testParams, resultParams } = useParams();
  console.log(testParams, resultParams);

  return (
    <div>
      <TestResultRenderer />
      <ShareButtonGroup />
      <ResultButtonGroup />
      <ResultThumbnailList />
    </div>
  );
};

export default TestResult;
