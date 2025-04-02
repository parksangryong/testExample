import { useState, useEffect } from "react";

import loading from "../../assets/loading.json";
import Lottie from "react-lottie";
import { QuizProps, TestProps } from "../../types/dataType";
import { useNavigate } from "react-router-dom";
interface LoadingProps {
  mbtiScore: QuizProps["mbtiScore"];
  currentTest: TestProps;
}

const Loading = ({ mbtiScore, currentTest }: LoadingProps) => {
  const navigation = useNavigate();
  const [finalQuery, setFinalQuery] = useState<string>("");

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const loadingTime = 3700; // ms
  useEffect(() => {
    // 4개의 슬롯 Array [[E, I], [N, S], [T, F], [J, P]]
    const mbtiPairs = [
      ["E", "I"],
      ["N", "S"],
      ["T", "F"],
      ["J", "P"],
    ];
    // 비어있는 문자열 변수
    let resultType = "";
    // Array 순회 -> 각 슬롯의 winner 선정 -> 문자열 변수에 추가
    for (const pair of mbtiPairs) {
      const firstType = pair[0]; //E, N, T, J
      const secondType = pair[1]; //I, S, F, P
      const firstTypeScore =
        mbtiScore[firstType as keyof QuizProps["mbtiScore"]]; //2, ...
      const secondTypeScore =
        mbtiScore[secondType as keyof QuizProps["mbtiScore"]]; //1, ...
      if (firstTypeScore > secondTypeScore) {
        resultType += firstType;
      } else {
        resultType += secondType;
      }
    }
    const resultQuery = currentTest?.results?.find(
      (result) => result?.type === resultType
    )?.query;
    if (resultQuery) {
      setFinalQuery(resultQuery);
    }
  }, [mbtiScore, currentTest]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (finalQuery) {
        navigation(`/${currentTest?.info?.mainUrl}/result/${finalQuery}`);
      }
    }, loadingTime);
    return () => {
      clearTimeout(timeout);
    };
  }, [loadingTime, navigation, finalQuery, currentTest?.info?.mainUrl]);

  return (
    <div
      style={{
        marginTop: "5rem",
      }}
    >
      <Lottie options={defaultOptions} width={200} />
    </div>
  );
};

export default Loading;
