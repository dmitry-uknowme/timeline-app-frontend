export type TTimeline = {
  id: string;
  minDate: string;
  maxDate: string;
  events: TTimelineEvent[];
};

export type TTimelineEvent = {
  id: string;
  title: string;
  description: string;
};
