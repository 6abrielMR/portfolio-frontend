import React from "react";

export const Button = ({
  size = "s",
  icon = "",
  text = "",
  striking = false,
  isLink = false,
  toNavigate = "",
}) => {
  return (
    <div
      className={`d-flex justify-content-center align-items-center button button-${size} ${
        striking && "striking"
      }`}
      onClick={onclick}
    >
      {icon && !text ? (
        <i className={icon}></i>
      ) : isLink ? (
        <a
          className="w-100 h-100 d-flex justify-content-center align-items-center text-white text-decoration-none"
          href={toNavigate}
        >
          {text}
        </a>
      ) : (
        text
      )}
    </div>
  );
};
