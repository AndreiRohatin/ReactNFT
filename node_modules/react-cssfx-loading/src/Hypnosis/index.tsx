import "../../css/Hypnosis.css";

import React from "react";

interface HypnosisProps {
  className?: string;
  color?: string;
  width?: number | string;
  height?: number | string;
  duration?: string;
}

const Hypnosis: React.FC<HypnosisProps & React.HTMLProps<HTMLDivElement>> = ({
  className = "",
  color = "#0d6efd",
  width = "3em",
  height = "3em",
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
      className={`cssfx-hypnosis-loader ${className}`}
    >
      <div className="cssfx-hypnosis-outer"></div>
      <div className="cssfx-hypnosis-middle"></div>
      <div className="cssfx-hypnosis-inner"></div>
    </div>
  );
};

export default Hypnosis;
