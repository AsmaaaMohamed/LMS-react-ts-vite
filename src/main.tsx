import AppRouter from "@routes/AppRouter";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "@store";
// axios
import "./services/axios-global.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
        <AppRouter />
    </Provider>
  </React.StrictMode>
);
