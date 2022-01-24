import "../../css/FlippingSquare.css";

import React from "react";

interface FlippingSquareProps {
  className?: string;
  color?: string;
  width?: number | string;
  height?: number | string;
  duration?: string;
}

const FlippingSquare: React.FC<
  FlippingSquareProps & React.HTMLProps<HTMLDivElement>
> = ({
  className = "",
  color = "#0d6efd",
  width = "2em",
  height = "2em",
  style,
  duration = "1s",
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
      className={`cssfx-flipping-square-box ${className}`}
    >
      <div className="cssfx-flipping-square-plane"></div>
    </div>
  );
};

export default FlippingSquare;
