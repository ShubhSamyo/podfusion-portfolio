import React from "react";
import "./button.css";

interface ButtonProps {
  children: React.ReactNode;
  size?: string;
}

const Button = ({ children, size = "lg" }: ButtonProps) => {
  return (
    <button className={size === "sm" ? "button-type-1-sm" : "button-type-1"}>
      {children}
    </button>
  );
};

export default Button;
