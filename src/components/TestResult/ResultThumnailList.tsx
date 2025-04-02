import { useState } from "react";
import { TESTS } from "../../data/TESTS";
import { Link } from "react-router-dom";

interface ResultThumbnailListProps {
  testParam: string;
  lang: string;
}

const ResultThumbnailList = ({ testParam, lang }: ResultThumbnailListProps) => {
  const [testList] = useState(TESTS);

  return (
    <div>
      {testList
        .filter((test) => test?.info?.mainUrl !== testParam)
        .filter((test) => test?.info?.lang === lang)
        .map((item) => (
          <div key={`/${item?.info?.mainUrl}`}>
            <Link to={`/${item?.info?.mainUrl}`}>
              <img
                style={{ width: "100%" }}
                src={item?.info?.thumbImage}
                alt={item?.info?.mainTitle}
              />
            </Link>
          </div>
        ))}
    </div>
  );
};

export default ResultThumbnailList;
