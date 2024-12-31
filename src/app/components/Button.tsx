import React from "react";
import { ButtonProps } from "../interfaces/interfaces";
import clsx from "clsx";

const Button: React.FC<ButtonProps> = ({
  color,
  size,
  icon,
  onClick,
  children,
  disabled,
  className: classNAme
}) => {
  // Define color styles
  const colorStyles = {
    primary: "btn-primary",
    secondary: "btn-secondary",
  };

  // Define size styles
  const sizeStyles = {
    regular: "px-4 py-2 text-base",
    small: "px-2 py-1 text-sm",
    large: "px-6 py-3 text-lg",
    disabled: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`btn ${colorStyles[color]} ${sizeStyles[size]} ${clsx(disabled && `hidden`)} ${classNAme}`}
      onClick={onClick}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
