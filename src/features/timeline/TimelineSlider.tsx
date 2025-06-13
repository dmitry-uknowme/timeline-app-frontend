import { TTimeline } from "../../entities/timeline";
import CircleSlider from "./CirlceSlider";
import EventsSlider from "./EventsSlider";
import "./timeline.scss";

const timelineItems: TTimeline[] = [
  {
    id: "1",
    maxDate: "2015",
    minDate: "2022",
    events: [
      {
        id: "1",
        title: "2015",
        description: `13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды`,
      },
      {
        id: "2",
        title: "2015",
        description: `13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды`,
      },
      {
        id: "3",
        title: "2015",
        description: `13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды`,
      },
      {
        id: "4",
        title: "2015",
        description: `13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды`,
      },
      {
        id: "5",
        title: "2015",
        description: `13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды`,
      },
      {
        id: "6",
        title: "2015",
        description: `13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды`,
      },
    ],
  },
];

const TimelineSlider = () => {
  return (
    <>
      <CircleSlider items={timelineItems} />
      <EventsSlider events={timelineItems[0].events} />
    </>
  );
};
export default TimelineSlider;
