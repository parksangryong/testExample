import MainBanner from "../components/Main/MainBanner";
import CategoryButtons from "../components/Main/CategoryButtons";
import ThumbnailList from "../components/Main/ThumbnailList";

const Main = () => {
  return (
    <div style={{ marginTop: "70px" }}>
      <MainBanner />

      <CategoryButtons />
      <ThumbnailList />
    </div>
  );
};

export default Main;
