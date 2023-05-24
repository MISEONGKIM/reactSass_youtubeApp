import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { SearchContextProvider } from "./context/SearchContext.tsx";

import "./scss/main.scss";
import { SideBarContextProvider } from "./context/SideBarContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <SearchContextProvider>
        <SideBarContextProvider>
          <App />
        </SideBarContextProvider>
      </SearchContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
