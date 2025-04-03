import { useTranslation } from "react-i18next";

interface TestResultRendererProps {
  resultInfo: {
    type: string;
    query: string;
    img_src: string;
  };
}

const TestResultRenderer = ({ resultInfo }: TestResultRendererProps) => {
  const { t } = useTranslation();

  return (
    <div>
      <h3 className="resultText">{t("resultText")}</h3>
      <img
        src={resultInfo.img_src}
        alt={resultInfo.type}
        className="imageWidth"
      />
    </div>
  );
};

export default TestResultRenderer;
