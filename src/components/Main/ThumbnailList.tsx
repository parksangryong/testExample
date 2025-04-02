import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { TESTS } from "../../data/TESTS";
import { base_Url } from "../../App";

const ThumbnailList = () => {
  const [searchParams] = useSearchParams();
  const [testList, setTestList] = useState(TESTS);

  useEffect(() => {
    const currentLang = searchParams.get("lang") || "kor";
    if (currentLang) {
      const filteredTestList = TESTS.filter((test) => {
        return test.info.lang === currentLang;
      });
      setTestList(filteredTestList);
    }
  }, [searchParams]);

  return (
    <div className="thumbnail-list">
      {testList.map((test) => (
        <Link to={`${base_Url}/${test.info.mainUrl}`} key={test.info.mainUrl}>
          <img
            src={test.info.thumbImage}
            alt={test.info.mainUrl}
            className="imageWidth"
          />
        </Link>
      ))}
    </div>
  );
};

export default ThumbnailList;
