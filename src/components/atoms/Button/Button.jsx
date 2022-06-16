import React from "react";
import { Link } from "react-router-dom";

import "./Button.scss";

function Button({
  children,
  styles,
  id,
  className,
  onClick,
  linkTo,
  linkState,
  type,
  tabIndex,
  icon,
  ...props
}) {
  return (
    <button
      id={id}
      className={`Button ${className} ${icon ? "with-icon" : ""}`}
      type={type}
      style={styles}
      onClick={onClick}
      tabIndex={tabIndex}
      {...props}
    >
      {linkTo && (
        <Link
          style={{
            textDecoration: "none",
            width: "100%",
            height: "100%",
            position: "absolute",
          }}
          to={linkTo}
          state={linkState}
        />
      )}
      {!!icon && <div className="Button-icon">{icon}</div>}
      <span>{children}</span>
    </button>
  );
}

export { Button };
