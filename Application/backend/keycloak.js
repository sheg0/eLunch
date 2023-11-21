const session = require('express-session');
const Keycloak = require('keycloak-connect');

const kcConfig = {
    clientId: 'eLunch',
    bearerOnly: true,
    serverUrl: 'http://localhost:8080',
    realm: 'eLunch',
    realmPublicKey: process.env.KC_PUBLIC_KEY
};

const memoryStore = new session.MemoryStore();
const keycloak = new Keycloak( {store: memoryStore}, kcConfig );

module.exports = keycloak;