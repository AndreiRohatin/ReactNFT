import "../../css/CircularProgress.css";

import React from "react";

interface CircularProgressProps {
  className?: string;
  color?: string;
  width?: number | string;
  height?: number | string;
  duration?: string;
}

const CircularProgress: React.FC<
  CircularProgressProps & React.SVGProps<SVGSVGElement>
> = ({
  className = "",
  color = "#0d6efd",
  width = "3em",
  height = "3em",
  style,
  duration = "2s",
  ...others
}) => {
  return (
    <svg
      {...others}
      crossOrigin="anonymous"
      viewBox="25 25 50 50"
      style={{
        ...style,
        ["--width" as any]: width,
        ["--height" as any]: height,
        ["--color" as any]: color,
        ["--duration" as any]: duration,
      }}
      className={`cssfx-circular-progress-svg ${className}`}
    >
      <circle
        className="cssfx-circular-progress-circle"
        cx="50"
        cy="50"
        r="20"
      ></circle>
    </svg>
  );
};

export default CircularProgress;
