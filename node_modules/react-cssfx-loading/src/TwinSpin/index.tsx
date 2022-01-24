import "../../css/TwinSpin.css";

import React from "react";

interface TwinSpinProps {
  className?: string;
  color?: string;
  width?: number | string;
  height?: number | string;
  duration?: string;
}

const TwinSpin: React.FC<TwinSpinProps & React.HTMLProps<HTMLDivElement>> = ({
  className = "",
  color = "#0d6efd",
  width = "3em",
  height = "3em",
  style,
  duration = "0.6s",
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
      className={`cssfx-twin-spin ${className}`}
    ></div>
  );
};

export default TwinSpin;
