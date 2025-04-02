import { CopyToClipboard } from "react-copy-to-clipboard";
import { base_Url } from "../../App";

//icons
import { LinkOutlined, RedoOutlined, HomeOutlined } from "@ant-design/icons";

//router
import { useNavigate } from "react-router-dom";

interface ResultButtonGroupProps {
  testParams: string;
  resultParams: string;
}

const ResultButtonGroup = ({
  testParams,
  resultParams,
}: ResultButtonGroupProps) => {
  const navigate = useNavigate();

  const handleRedo = () => {
    navigate(`/${testParams}`);
  };

  const handleHome = () => {
    navigate(`/`);
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
              alert("URL이 복사되었습니다.");
            }}
          >
            <LinkOutlined /> &nbsp; 링크복사
          </button>
        </CopyToClipboard>
        <button className="upperButton" onClick={handleRedo}>
          <RedoOutlined /> &nbsp; 다시하기
        </button>
      </div>
      <div className="lowerButtonGroup">
        <button className="lowerButton" onClick={handleHome}>
          <HomeOutlined /> &nbsp; 다른 테스트 하러 가기
        </button>
      </div>
    </div>
  );
};

export default ResultButtonGroup;
