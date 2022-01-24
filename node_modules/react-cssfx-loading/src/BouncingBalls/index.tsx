import "../../css/BouncingBalls.css";

import React from "react";

interface BouncingBallsProps {
  className?: string;
  color?: string;
  width?: number | string;
  height?: number | string;
  duration?: string;
}

const BouncingBalls: React.FC<
  BouncingBallsProps & React.HTMLProps<HTMLDivElement>
> = ({
  className = "",
  color = "#0d6efd",
  width = "0.8em",
  height = "0.8em",
  duration = "0.4s",
  style,
  ...others
}) => {
  return (
    <div
      {...others}
      style={{
        ...style,
        ["--width" as any]: width,
        ["--height" as any]: height,
        ["--color" as any]: color,
        ["--duration" as any]: duration,
      }}
      className={`cssfx-bouncing-balls ${className}`}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default BouncingBalls;
