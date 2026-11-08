import React from "react";

function Button({
  text = "Click me",
  variant = "primary",
  disabled = false,
  onClick,
}) {
  return (
    <button
      className={`btn btn-${variant}`}
      type="button"
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
