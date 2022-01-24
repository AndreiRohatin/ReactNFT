import "../../css/Coin.css";

import React from "react";

interface CoinProps {
  className?: string;
  color?: string;
  width?: number | string;
  height?: number | string;
  duration?: string;
}

const Coin: React.FC<CoinProps & React.HTMLProps<HTMLDivElement>> = ({
  className = "",
  color = "#0d6efd",
  width = "2em",
  height = "2em",
  style,
  duration = "1.2s",
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
      className={`cssfx-coin-box ${className}`}
    >
      <div className="cssfx-coin"></div>
    </div>
  );
};

export default Coin;
