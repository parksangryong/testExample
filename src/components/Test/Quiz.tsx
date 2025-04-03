import { useState } from "react";
import { QuizProps, TestProps } from "../../types/dataType";
import { Progress } from "antd";
import { arrayShuffler } from "../../utils/arraySuffler";

interface QuizComponentProps {
  questions: TestProps["questions"];
  mbtiScore: QuizProps["mbtiScore"];
  setMode: (mode: "intro" | "quiz" | "loading") => void;
  setMbtiScore: (mbtiScore: QuizProps["mbtiScore"]) => void;
}

const Quiz = ({
  questions,
  mbtiScore,
  setMode,
  setMbtiScore,
}: QuizComponentProps) => {
  const [questionNumber, setQuestionNumber] = useState<number>(0);

  const handleAnswerClick = (answer: string) => {
    setMbtiScore({
      ...mbtiScore,
      [answer]: mbtiScore[answer as keyof QuizProps["mbtiScore"]] + 1,
    });
    setQuestionNumber(questionNumber + 1);

    if (questionNumber === questions.length - 1) {
      setMode("loading");
    }
  };

  return (
    <div>
      <h2 className="questionText">{questions[questionNumber].question}</h2>
      {arrayShuffler(questions[questionNumber].answers).map((answer) => (
        <button
          key={answer.type}
          className="answerButton"
          onClick={() => handleAnswerClick(answer.type)}
        >
          {answer.content}
        </button>
      ))}
      <Progress
        percent={((questionNumber + 1) / questions.length) * 100}
        showInfo={false}
        strokeColor="brown"
        trailColor="#eee"
        size={{ height: 10, width: 250 }}
        style={{ margin: "2rem 0 1rem 0" }}
      />
      <span className="questionNumber">{`${questionNumber + 1} / ${
        questions.length
      }`}</span>
    </div>
  );
};

export default Quiz;
