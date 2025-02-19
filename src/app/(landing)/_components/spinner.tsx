import React from "react";
import "../../spinner.css";

interface SpinnerProps {
  size?: string;
  color?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ size = "1.48rem", color = "theme('colors.primary-800')" }) => {
  const spinnerStyle = {
    "--spinner-size": size,
    "--spinner-color": color,
  } as React.CSSProperties;

  return <div className="spinner" style={spinnerStyle}></div>;
};

export { Spinner };
