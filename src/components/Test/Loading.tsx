import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "react-lottie";
import { QuizProps, TestProps } from "../../types/dataType";
import loading from "../../assets/loading.json";

interface LoadingProps {
  mbtiScore: QuizProps["mbtiScore"];
  currentTest: TestProps;
}

const Loading = ({ mbtiScore, currentTest }: LoadingProps) => {
  const navigate = useNavigate();
  const [finalQuery, setFinalQuery] = useState<string>("");

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const calculateMbtiType = useCallback(() => {
    const mbtiPairs = [
      ["E", "I"],
      ["N", "S"],
      ["T", "F"],
      ["J", "P"],
    ];

    return mbtiPairs.reduce((resultType, [firstType, secondType]) => {
      const firstScore = mbtiScore[firstType as keyof QuizProps["mbtiScore"]];
      const secondScore = mbtiScore[secondType as keyof QuizProps["mbtiScore"]];
      return resultType + (firstScore > secondScore ? firstType : secondType);
    }, "");
  }, [mbtiScore]);

  useEffect(() => {
    const resultType = calculateMbtiType();
    const resultQuery = currentTest.results.find(
      (result) => result.type === resultType
    )?.query;

    if (resultQuery) {
      setFinalQuery(resultQuery);
    }
  }, [calculateMbtiType, currentTest]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (finalQuery) {
        navigate(`/${currentTest.info.mainUrl}/result/${finalQuery}`);
      }
    }, 4000);

    return () => clearTimeout(timeout);
  }, [finalQuery, currentTest.info.mainUrl, navigate]);

  return (
    <div style={{ marginTop: "5rem" }}>
      <Lottie options={defaultOptions} width={200} />
    </div>
  );
};

export default Loading;
