import { useParams } from "react-router-dom";

const Test = () => {
  const { testParams } = useParams();

  return <div>Test Screen {testParams}</div>;
};

export default Test;
