import React, { useState } from "react";

import "./Input.scss";

function Input({
  component, //for unique id in components
  name,
  id,
  type,
  label,
  autoComplete,
  defaultValue,
  value,
  isTextArea,
  placeholder, // optional, !placeholder : label
  step, // optional, only for number type input
  pattern, // optional, for types that include pattern like tel
  required,
  onChange,
  withLabel,
  tabIndex,
  suffix,
  letterCase,
  ...props
}) {
  const [showLabel, setShowLabel] = useState(false);

  const handleChange = e => {
    const val = e.target.value;
    if (letterCase === "upper") e.target.value = val.toUpperCase();
    if (letterCase === "lower") e.target.value = val.toLowerCase();
    if (val) {
      setShowLabel(true);
    } else {
      setShowLabel(false);
    }
    if (onChange) onChange(e);
  };

  return (
    <div id={`${component}-${name}-group`} className="Input">
      {(showLabel || type === "date" || withLabel) && (
        <label htmlFor={id ? id : name} className="Input__label">
          {label}
        </label>
      )}
      {!isTextArea && (
        <input
          id={id ? id : name}
          className="Input__input"
          type={type}
          name={name}
          placeholder={placeholder ? placeholder : label}
          autoComplete={autoComplete ? autoComplete : "on"}
          defaultValue={defaultValue}
          value={value}
          step={step}
          pattern={pattern}
          required={required}
          onChange={handleChange}
          onWheel={e => e.target.blur()} // prevent scroll to increase in number inputs prettier-ignore
          tabIndex={tabIndex}
          {...props}
        />
      )}
      {!!isTextArea && (
        <textarea
          id={id ? id : name}
          className="Input__input Input-large"
          name={name}
          placeholder={placeholder ? placeholder : label}
          autoComplete={autoComplete ? autoComplete : "on"}
          defaultValue={defaultValue}
          required={required}
          value={value}
          onChange={handleChange}
          tabIndex={tabIndex}
        />
      )}
      {suffix && <span className="Input__suffix">{suffix}</span>}
    </div>
  );
}

export { Input };
