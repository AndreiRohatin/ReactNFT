import "../../css/Ring.css";

import React from "react";

interface RingProps {
  className?: string;
  color?: string;
  width?: number | string;
  height?: number | string;
  duration?: string;
}

const Ring: React.FC<RingProps & React.SVGProps<SVGSVGElement>> = ({
  className = "",
  color = "#0d6efd",
  width = "3em",
  height = "3em",
  style,
  duration = "1s",
  ...others
}) => {
  return (
    <svg
      {...others}
      crossOrigin="anonymous"
      viewBox="0 0 50 50"
      style={{
        ...style,
        ["--width" as any]: width,
        ["--height" as any]: height,
        ["--color" as any]: color,
        ["--duration" as any]: duration,
      }}
      className={`cssfx-ring-svg ${className}`}
    >
      <circle className="cssfx-ring" cx="25" cy="25" r="20"></circle>
      <circle className="cssfx-ring-ball" cx="25" cy="5" r="3.5"></circle>
    </svg>
  );
};

export default Ring;
