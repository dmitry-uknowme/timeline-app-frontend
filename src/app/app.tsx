import "swiper/css";
import "swiper/css/navigation";
import "./app.scss";
import TimelineSlider from "../features/timeline/TimelineSlider";

const App = () => {
  return (
    <div className="app">
      <div className="app__side_left"></div>
      <main className="app__main">
        {/* <div className="app__column"></div> */}
        {/* <div> */}
        <h2 className="app__title">
          Исторические <br />
          даты
        </h2>
        <TimelineSlider />
        {/* </div> */}
      </main>
      <div className="app__side_right"></div>
    </div>
  );
};

export default App;
