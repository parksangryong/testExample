import { useParams } from "react-router-dom";

const TestResult = () => {
  const { testParams, resultParams } = useParams();

  return (
    <div>
      TestResult {testParams} {resultParams}
    </div>
  );
};

export default TestResult;
