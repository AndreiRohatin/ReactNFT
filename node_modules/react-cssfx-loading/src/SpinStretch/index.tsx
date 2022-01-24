import "../../css/SpinStretch.css";

import React from "react";

interface SpinStretchProps {
  className?: string;
  color?: string;
  width?: number | string;
  height?: number | string;
  duration?: string;
}

const SpinStretch: React.FC<
  SpinStretchProps & React.HTMLProps<HTMLDivElement>
> = ({
  className = "",
  color = "#0d6efd",
  width = "2em",
  height = "2em",
  style,
  duration = "2s",
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
      className={`cssfx-spin-stretch ${className}`}
    ></div>
  );
};

export default SpinStretch;
