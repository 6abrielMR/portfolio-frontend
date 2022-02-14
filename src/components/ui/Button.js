import React from "react";

export const Button = ({
  size = "s",
  icon = "",
  text = "",
  striking = false,
  onclick = () => {},
}) => {
  return (
    <div
      className={`d-flex justify-content-center align-items-center button button-${size} ${
        striking && "striking"
      }`}
      onClick={onclick}
    >
      {icon && !text ? <i className={icon}></i> : text}
    </div>
  );
};
