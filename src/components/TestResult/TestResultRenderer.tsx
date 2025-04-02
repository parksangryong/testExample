import { TestProps } from "../../types/dataType";

interface TestResultRendererProps {
  resultInfo: TestProps["results"][0];
}

const TestResultRenderer = ({ resultInfo }: TestResultRendererProps) => {
  return (
    <div>
      <h3>결과는...</h3>
      <img
        src={resultInfo.img_src}
        alt={resultInfo.type}
        className="imageWidth"
      />
    </div>
  );
};

export default TestResultRenderer;
