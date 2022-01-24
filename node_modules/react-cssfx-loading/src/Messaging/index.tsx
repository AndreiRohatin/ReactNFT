import "../../css/Messaging.css";

import React from "react";

interface MessagingProps {
  className?: string;
  color?: string;
  width?: number | string;
  height?: number | string;
  duration?: string;
}

const Messaging: React.FC<MessagingProps & React.HTMLProps<HTMLDivElement>> = ({
  className = "",
  color = "#0d6efd",
  width = "0.8em",
  height = "0.8em",
  duration = "0.6s",
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
      className={`cssfx-messaging-balls ${className}`}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Messaging;
