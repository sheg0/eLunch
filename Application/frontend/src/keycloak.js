import Keycloak from "keycloak-js";
require("dotenv").config();

const keycloak = new Keycloak({
  url: process.env.KC_SERVER_URL,
  realm: process.env.KC_REALM,
  clientId: process.env.clientId,
});

export default keycloak;
