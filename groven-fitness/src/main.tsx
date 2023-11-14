import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import ErrorPage from "./routes/errorPage/ErrorPage";
import OmOss from "./routes/omOss/OmOss";
import PersonligTrener from "./routes/personligTrener/PersonligTrener";
import Hjem from "./routes/hjem/Hjem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Hjem />,
      },
      {
        path: "/OmOss",
        element: <OmOss />,
      },
      {
        path: "/PersonligTrener",
        element: <PersonligTrener />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
