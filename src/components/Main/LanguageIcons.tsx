import { CircleFlag } from "react-circle-flags";
import { useNavigate } from "react-router-dom";

const LanguageIcons = () => {
  const navigate = useNavigate();

  const onButtonClick = (countryCode: string) => {
    navigate(`/?lang=${countryCode}`);
  };

  return (
    <div className="languageIcons">
      <CircleFlag
        countryCode="kr"
        width={48}
        onClick={() => onButtonClick("Kor")}
      />
      <CircleFlag
        countryCode="us"
        width={48}
        onClick={() => onButtonClick("Eng")}
      />
      <CircleFlag
        countryCode="jp"
        width={48}
        onClick={() => onButtonClick("JP")}
      />
    </div>
  );
};

export default LanguageIcons;
