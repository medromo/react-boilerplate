import React from "react";

import "./Home.scss";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        fontSize: "5rem",
      }}
    >
      <h1
        style={{
          fontSize: "5rem",
          fontWeight: "normal",
        }}
      >
        Hello World!
      </h1>
    </div>
  );
}

export { Home };
