import { createBrowserRouter, RouterProvider } from "react-router-dom";

// 페이지 컴포넌트
import Main from "./page/Main";
import Test from "./page/Test";
import TestResult from "./page/TestResult";
import Layout from "./Layout";

import { testLoader, resultLoader } from "./utils/testLoader";

export const base_Url = "http://localhost:5173";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Main />,
        },
        {
          path: "/:testParams",
          element: <Test />,
          loader: testLoader,
        },
        {
          path: "/:testParams/result/:resultParams",
          element: <TestResult />,
          loader: resultLoader,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

// 주소 체계
// 1. 메인 썸네일 리스트 페이지 : root/
// 2. 테스트 페이지 - Intro / Quiz / Loading : root/testName
// 3. 결과 페이지 : root/testName/result/resultName
