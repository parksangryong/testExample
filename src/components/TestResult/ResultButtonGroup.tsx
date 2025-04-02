import { CopyToClipboard } from "react-copy-to-clipboard";
import { base_Url } from "../../App";

//icons
import { LinkOutlined, RedoOutlined, HomeOutlined } from "@ant-design/icons";

//router
import { useNavigate } from "react-router-dom";

// i18n
import { useTranslation } from "react-i18next";

interface ResultButtonGroupProps {
  testParams: string;
  resultParams: string;
  lang: string;
}

const ResultButtonGroup = ({
  testParams,
  resultParams,
  lang,
}: ResultButtonGroupProps) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleRedo = () => {
    navigate(`/${testParams}`);
  };

  const handleHome = () => {
    navigate(`/?lang=${lang}`);
  };

  return (
    <div className="buttonGroup">
      <div className="upperButtonGroup">
        <CopyToClipboard
          text={`${base_Url}/${testParams}/result/${resultParams}`}
        >
          <button
            className="upperButton"
            onClick={() => {
              alert(t("copySuccess"));
            }}
          >
            <LinkOutlined /> &nbsp; {t("copy")}
          </button>
        </CopyToClipboard>
        <button className="upperButton" onClick={handleRedo}>
          <RedoOutlined /> &nbsp; {t("redo")}
        </button>
      </div>
      <div className="lowerButtonGroup">
        <button className="lowerButton" onClick={handleHome}>
          <HomeOutlined /> &nbsp; {t("home")}
        </button>
      </div>
    </div>
  );
};

export default ResultButtonGroup;
