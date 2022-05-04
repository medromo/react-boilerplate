import React from "react";
import { Outlet } from "react-router-dom";

import "./Layout.scss";

function Layout() {
  return (
    <div className="Layout">
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export { Layout };
