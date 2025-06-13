import { RefObject, useEffect, useRef } from "react";

interface CirclePointProps {
  circleRef: RefObject<HTMLDivElement | null>;
  x: number;
  y: number;
}

const CirclePoint: React.FC<CirclePointProps> = ({ circleRef, x, y }) => {
  return (
    <div
      className="circle_point"
      style={{
        position: "absolute",
        left: `${x.toFixed(2)}px`,
        top: `${y.toFixed(2)}px`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="circle_point__title"></div>
    </div>
  );
};

export default CirclePoint;
