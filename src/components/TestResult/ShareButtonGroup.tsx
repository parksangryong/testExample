import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  XIcon,
} from "react-share";
import { base_Url } from "../../App";

// type
import { TestProps } from "../../types/dataType";

import { CopyToClipboard } from "react-copy-to-clipboard";

interface ShareButtonGroupProps {
  testParams: string;
  resultParams: string;
  renderTestInfo: TestProps;
}

const ShareButtonGroup = ({
  testParams,
  resultParams,
  renderTestInfo,
}: ShareButtonGroupProps) => {
  return (
    <div>
      <h3 className="shareTitle">친구한테 공유하기</h3>
      <div className="shareButtonGroup">
        <FacebookShareButton
          url={`${base_Url}/${testParams}/result/${resultParams}`}
          hashtag={`${renderTestInfo.info.mainTitle}`}
        >
          <FacebookIcon round={true} size={48} />
        </FacebookShareButton>
        <TwitterShareButton
          url={`${base_Url}/${testParams}/result/${resultParams}`}
          title={`${renderTestInfo.info.mainTitle}`}
          hashtags={[`${renderTestInfo.info.mainTitle}`]}
        >
          <XIcon round={true} size={48} />
        </TwitterShareButton>
        <CopyToClipboard
          text={`${base_Url}/${testParams}/result/${resultParams}`}
        >
          <button
            onClick={() => {
              alert("URL이 복사되었습니다.");
            }}
            className="urlShareButton"
          >
            URL
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default ShareButtonGroup;
