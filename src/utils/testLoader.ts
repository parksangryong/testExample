import { LoaderFunctionArgs, redirect } from "react-router-dom";
import { TESTS } from "../data/TESTS";

export const testLoader = ({ params }: LoaderFunctionArgs) => {
  const test = TESTS.find((test) => test.info.mainUrl === params.testParams);
  if (!test) {
    return redirect("/");
  }
  return test;
};

export const resultLoader = ({ params }: LoaderFunctionArgs) => {
  const test = TESTS.find((test) => test.info.mainUrl === params.testParams);
  if (!test) {
    return redirect("/");
  }

  const result = test.results.find(
    (result) => result.query === params.resultParams
  );
  if (!result) {
    return redirect("/");
  }
  return result;
};
