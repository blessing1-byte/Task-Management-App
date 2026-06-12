import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routerPaths from "./reactRouter/routeConfig.jsx";
import { Provider } from "react-redux";
import { store } from "./store.js";

const router = createBrowserRouter(routerPaths);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
