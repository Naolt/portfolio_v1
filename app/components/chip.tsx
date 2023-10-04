import React from "react";

interface ChipProps {
  text: string;
  outlined?: boolean;
  small?: boolean;
}

const Chip: React.FC<ChipProps> = ({
  text = "default",
  outlined = true,
  small,
}) => {
  const borderStyle = `${
    outlined == true
      ? "border-solid border-2 border-Secondary-Color hover:bg-Secondary-Color/[0.2]"
      : "bg-Secondary-Color text-Text-Color"
  }`;

  const sizeStyle = `${
    small == true ? "px-2 py-2 text-xs rounded-3xl" : "px-4 py-2 rounded-md"
  }`;

  const chipClasses = `${sizeStyle} flex w-fit justify-center font-medium items-center font-Montserrat uppercase text-Secondary-Color  cursor-pointer ${borderStyle}`;

  return <div className={chipClasses}>{text}</div>;
};

export default Chip;
