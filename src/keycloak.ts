import Keycloak from 'keycloak-js';

// Setup Keycloak instance as needed
// Pass initialization options as required or leave blank to load from 'keycloak.json'
const keycloak = Keycloak({
  url: 'https://xkeycloak.effigo.in/auth/',
  realm: 'demo',
  clientId: 'web-reactjs',
});

export default keycloak;
