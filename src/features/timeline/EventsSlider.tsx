import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { TimelineEventSlide, TTimelineEvent } from "../../entities/timeline";

interface EventsSliderProps {
  events: TTimelineEvent[];
}

const EventsSlider: React.FC<EventsSliderProps> = ({ events }) => {
  return (
    <Swiper
      className="events_slider"
      modules={[Navigation]}
      // spaceBetween={50}
      slidesPerView={3}
      navigation
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {events.map((event) => (
        <SwiperSlide key={event.id}>
          <TimelineEventSlide event={event} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default EventsSlider;

// import { Swiper, SwiperSlide } from "swiper/react";
// import { TimelineEventSlide, TTimelineEvent } from "../../entities/timeline";

// interface EventsSliderProps {
//   events: TTimelineEvent[];
// }

// const EventsSlider: React.FC<EventsSliderProps> = ({ events }) => {
//   console.log({ events });
//   return (
//     <Swiper
//       spaceBetween={50}
//       slidesPerView={3}
//       onSlideChange={() => console.log("slide change")}
//       onSwiper={(swiper) => console.log(swiper)}
//     >
//       {events.map((event) => (
//         <TimelineEventSlide key={event.id} event={event} />
//       ))}
//     </Swiper>
//   );
// };

// export default EventsSlider;
