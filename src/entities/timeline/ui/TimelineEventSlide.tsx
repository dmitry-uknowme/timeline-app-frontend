import { SwiperSlide } from "swiper/react";
import { TTimelineEvent } from "../model";
import "./timeline.scss";

interface TimelineEventSlideProps {
  event: TTimelineEvent;
}

const TimelineEventSlide: React.FC<TimelineEventSlideProps> = ({ event }) => {
  const { id, title, description } = event;
  return (
    <div className="event_slide">
      <h4 className="event_slide__title">{title}</h4>
      <p className="event_slide__desc">{description}</p>
    </div>
  );
};

export default TimelineEventSlide;
