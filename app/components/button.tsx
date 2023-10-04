import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  outlined?: boolean;
  bgColor?: string;
  textColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  outlined = false,
  bgColor = "Light-Green",
  textColor = "Text-Color",
  ...props
}) => {
  const buttonClasses = `font-Montserrat py-2.5 px-5  font-normal text-${textColor} text-base uppercase transition-all ease-in-out rounded-sm ${
    outlined == true
      ? `text-${textColor} border-solid border-2 border-${bgColor} hover:bg-${bgColor}/[0.2]`
      : `bg-${bgColor} text-${textColor}`
  }`;

  return <button className={buttonClasses} {...props} />;
};

export default Button;
