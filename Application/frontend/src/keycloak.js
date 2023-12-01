import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:8080/",
  realm: "eLunch",
  clientId: "eLunch",
});

export default keycloak;
