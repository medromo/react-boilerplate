import React from "react";
import { Layout } from "@templates/Layout/Layout";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import "@styles/global.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<div>Hello World!</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export { App };
