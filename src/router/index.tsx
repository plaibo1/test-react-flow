import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { ThereminApp } from "../components/ThereminApp/ThereminApp";
import { ThereminWithMouseApp } from "../components/ThereminWithMouseApp/ThereminWithMouseApp";
import { ErrorElement } from "../components/ErrorElement/ErrorElement";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: <ThereminApp />,
      },
      {
        path: "/theremin-mousemove",
        element: <ThereminWithMouseApp />,
      },
    ],
  },
]);
