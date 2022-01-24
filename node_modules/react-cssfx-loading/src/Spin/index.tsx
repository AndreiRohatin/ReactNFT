import "../../css/Spin.css";

import React from "react";

interface SpinProps {
  className?: string;
  color?: string;
  width?: number | string;
  height?: number | string;
  duration?: string;
}

const Spin: React.FC<SpinProps & React.HTMLProps<HTMLDivElement>> = ({
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
        ["--border-color" as any]: /^\#......$/gm.test(color)
          ? `${color}33`
          : color,
      }}
      className={`cssfx-spin ${className}`}
    ></div>
  );
};

export default Spin;
