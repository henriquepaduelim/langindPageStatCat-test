import React from "react";

type IconProps = {
  name: string;
  className?: string;
  label?: string;
};

const Icon = ({ name, className, label }: IconProps) => {
  return (
    <span
      className={`material-symbols-outlined ${className ?? ""}`.trim()}
      aria-hidden={label ? undefined : true}
      aria-label={label}
    >
      {name}
    </span>
  );
};

export default Icon;
