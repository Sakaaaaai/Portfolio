import React from "react";

const Textarea = ({ placeholder, value, onChange, className }) => {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`textarea ${className}`}
    />
  );
};

export { Textarea };
