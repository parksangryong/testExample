import { base_Url } from "../../App";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { LinkOutlined, HomeOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

// i18n
import { useTranslation } from "react-i18next";

interface IntroButtonGroupProps {
  testParams: string;
  lang: string;
}

const IntroButtonGroup = ({ testParams, lang }: IntroButtonGroupProps) => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  const handleHome = () => {
    navigate(`/?lang=${lang}`);
  };

  return (
    <div className="introButtonGroup">
      <CopyToClipboard text={`${base_Url}/${testParams}`}>
        <button
          className="introButton"
          onClick={() => {
            alert(t("copySuccess"));
          }}
        >
          <LinkOutlined /> &nbsp; {t("copy")}
        </button>
      </CopyToClipboard>

      <button className="introButton" onClick={handleHome}>
        <HomeOutlined /> &nbsp; {t("home")}
      </button>
    </div>
  );
};

export default IntroButtonGroup;
