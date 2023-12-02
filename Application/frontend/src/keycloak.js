import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: process.env.REACT_APP_KC_SERVER_URL,
  realm: process.env.REACT_APP_KC_REALM,
  clientId: process.env.REACT_APP_KC_CLIENT_ID,
});

export default keycloak;
