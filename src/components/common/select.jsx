import React from "react";

export default function Select({ options, name, label, ...rest }) {
  return (
    <div className="mb-3">
      <label htmlFor={name}>{label}</label>
      <select className="form-select" {...rest}>
        {options.map((option, index) => (
          <option key={option + index} value={index} className={options}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
