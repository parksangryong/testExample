import { useState } from "react";
import { Link } from "react-router-dom";
import { TESTS } from "../../data/TESTS";
import { base_Url } from "../../App";

const ThumbnailList = () => {
  const [testList] = useState(TESTS);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        flexDirection: "column",
      }}
    >
      {testList.map((test) => (
        <Link to={`${base_Url}/${test.info.mainUrl}`} key={test.info.mainUrl}>
          <img
            src={test.info.thumbImage}
            alt={test.info.mainUrl}
            style={{ width: "300px", height: "100%" }}
          />
        </Link>
      ))}
    </div>
  );
};

export default ThumbnailList;
