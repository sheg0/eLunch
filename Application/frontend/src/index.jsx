import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import keycloak from "./keycloak";
import { MealContextProvider } from "./context/MealContext";
import { BrowserRouter } from "react-router-dom";
import { EventContextProvider } from "./context/EventContext";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ReactKeycloakProvider
    authClient={keycloak}
    initOptions={{ onLoad: "login-required", pkceMethod: "S256" }}
  >
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <EventContextProvider>
        <MealContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </MealContextProvider>
      </EventContextProvider>
    </LocalizationProvider>
  </ReactKeycloakProvider>
);
