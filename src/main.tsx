import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { SearchContextProvider } from "./context/SearchContext.tsx";

import "./scss/main.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <SearchContextProvider>
        <App />
      </SearchContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
