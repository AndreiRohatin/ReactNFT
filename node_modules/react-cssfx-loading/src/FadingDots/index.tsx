import "../../css/FadingDots.css";

import React from "react";

interface FadingDotsProps {
  className?: string;
  color?: string;
  width?: number | string;
  height?: number | string;
  duration?: string;
}

const FadingDots: React.FC<FadingDotsProps & React.HTMLProps<HTMLDivElement>> =
  ({
    className = "",
    color = "#0d6efd",
    width = "3em",
    height = "3em",
    style,
    duration = "1.5s",
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
        className={`cssfx-fading-dots ${className}`}
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  };

export default FadingDots;
