import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      Error : 잘못된 페이지입니다.
      <Link to="/">홈으로 돌아가기</Link>
    </div>
  );
};

export default Error;
