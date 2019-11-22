import React, { useState, useMemo } from "react";

import Container from "./Container";

const size = 100;

const arcRadius = 40;

const polarToCartesian = angle => {
  return {
    x: arcRadius * Math.cos(angle) + size / 2,
    y: -arcRadius * Math.sin(angle) + size / 2
  };
};

const circlePath = counter => {
  let angle = (counter * 2 * Math.PI) / 15;

  if (angle > 2 * Math.PI) {
    angle = (angle % 2) * Math.PI;
  }

  console.log(angle);

  const largeArcFlag = angle <= Math.PI ? "0" : "1";

  const start = polarToCartesian(0);

  const end = polarToCartesian(angle);

  return `M ${start.x} ${
    start.y
  } A ${arcRadius} ${arcRadius} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`;
};

const Circle = ({ counter5 }) => {
  const [executedUseMemo, setExecutedUseMemo] = useState(0);

  const memoizedCirclePath = useMemo(() => {
    setExecutedUseMemo(n => n + 1);
    return circlePath(counter5);
  }, [counter5]);

  return (
    <Container name="useMemo">
      <svg viewBox={`0 0 ${size} ${size}`} width={100} height={100}>
        <path
          fill="none"
          strokeLinecap="round"
          strokeWidth={6}
          stroke="darkGray"
          d={memoizedCirclePath}
        />
        <text
          fontSize={arcRadius}
          x={size / 2}
          y={size / 2}
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {executedUseMemo}
        </text>
      </svg>
    </Container>
  );
};

export default Circle;
