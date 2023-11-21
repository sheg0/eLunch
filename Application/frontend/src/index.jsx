import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { MealContextProvider } from "./context/MealContext";
import { BrowserRouter } from "react-router-dom";
import { EventContextProvider } from "./context/EventContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<React.StrictMode>
  <EventContextProvider>
    <MealContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MealContextProvider>
  </EventContextProvider>
  //</React.StrictMode>
);
