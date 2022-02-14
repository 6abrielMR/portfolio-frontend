import React, { useState } from "react";

export const FieldForm = ({
  isNormalField = true,
  fieldname,
  name,
  onChange,
  value,
}) => {
  const [isActive, setIsActive] = useState(false);

  const onFocus = () => {
    setIsActive(true);
  };
  const onBlur = () => {
    setIsActive(false);
  };

  return (
    <div className="w-100 main-content-field">
      <h2 className="text-uppercase mb-3">{fieldname}</h2>
      <div
        className={`content-field ${isNormalField ? "n-field" : "textarea"} ${
          isActive ? "active" : "no-active"
        }`}
      >
        <div className="field">
          {isNormalField ? (
            <input
              type="text"
              className="w-100 h-100 p-3"
              onFocus={onFocus}
              onBlur={onBlur}
              name={name}
              onChange={onChange}
              value={value}
            />
          ) : (
            <textarea
              className="w-100 h-100 p-3"
              onFocus={onFocus}
              onBlur={onBlur}
              name={name}
              onChange={onChange}
              value={value}
            />
          )}
        </div>
      </div>
    </div>
  );
};
