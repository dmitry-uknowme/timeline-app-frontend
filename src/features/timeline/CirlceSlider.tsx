import { useEffect, useRef, useState } from "react";
import { TTimeline } from "../../entities/timeline";
import React from "react";
import CirclePoint from "./CirclePoint";

interface CircleSliderProps {
  items: TTimeline[];
}

const generateCircleWithPoints = (size: number = 400, pointsCount: number) => {
  const centerX = size / 2;
  const centerY = size / 2;
  const radius = size / 2;
  const points = [];
  for (let i = 0; i < pointsCount; i++) {
    const angle = (i * (2 * Math.PI)) / pointsCount - Math.PI / 2;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    points.push({ x, y });
  }

  return { points };
};

const circleSize = 400;

const CircleSlider: React.FC<CircleSliderProps> = ({ items }) => {
  const circleRef = useRef<HTMLDivElement>(null);
  const [points, setPoints] = useState(
    generateCircleWithPoints(circleSize, 6).points
  );

  return (
    <div className="circle_slider">
      <div className="circle" ref={circleRef}>
        {points.map((point) => (
          <CirclePoint circleRef={circleRef} x={point.x} y={point.y} />
        ))}
      </div>
    </div>
  );
};

export default CircleSlider;
