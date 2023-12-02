const session = require("express-session");
const Keycloak = require("keycloak-connect");
require("dotenv").config();

const kcConfig = {
  clientId: process.env.KC_CLIENT_ID,
  bearerOnly: true,
  serverUrl: process.env.KC_SERVER_URL,
  realm: process.env.KC_REALM,
  realmPublicKey: process.env.KC_PUBLIC_KEY,
};

const memoryStore = new session.MemoryStore();
const keycloak = new Keycloak({ store: memoryStore }, kcConfig);

module.exports = keycloak;
