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
        percent={(questionNumber / questions.length) * 100}
        showInfo={false}
        strokeColor="brown"
        trailColor="#eee"
        size={{ height: 10 }}
      />
    </div>
  );
};

export default Quiz;
