import { TestProps } from "../../page/Test";

interface IntroRendererProps {
  currentTest: TestProps | null;
}

const IntroRenderer = ({ currentTest }: IntroRendererProps) => {
  return <div>{currentTest?.info.mainTitle}</div>;
};

export default IntroRenderer;
