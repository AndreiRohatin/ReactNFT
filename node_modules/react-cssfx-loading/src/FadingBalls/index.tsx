import "../../css/FadingBalls.css";

import React from "react";

interface FadingBallsProps {
  className?: string;
  color?: string;
  width?: number | string;
  height?: number | string;
  duration?: string;
}

const FadingBalls: React.FC<
  FadingBallsProps & React.HTMLProps<HTMLDivElement>
> = ({
  className = "",
  color = "#0d6efd",
  width = "0.8em",
  height = "0.8em",
  style,
  duration = "0.8s",
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
      className={`cssfx-fading-balls ${className}`}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default FadingBalls;
