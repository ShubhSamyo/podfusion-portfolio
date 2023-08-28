import React from "react";
import "./button.css";

interface ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <div>
      <button className="button-type-1">{children}</button>
    </div>
  );
};

export default Button;
