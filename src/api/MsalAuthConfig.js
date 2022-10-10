// Configuración de los objetos al crearse la instancia MSAL
export const msalConfig  = {
  auth: {
    clientId: process.env.VITE_APP_CLIENT_ID, // La ! le asegura a typescript que el valor no es null
    authority: process.env.VITE_APP_AUTHORITY,
    redirectUri: process.env.VITE_APP_REDIRECT_TO,
  },
  cache: {
    cacheLocation: "sessionStorage", // Donde se almacenará el cache
    storeAuthStateInCookie: false, // Se puede en "true" si tienes problemas con IE11 o Edge
  },
}

//  Son lo ambitos por los cuales puede conectarse el usuario.
//  Por defecto, MSAL.js agrega ambitos OIDC (openid, profile, email) a cualquier solicitud de inicio de sesión
export const loginRequest = {
  scopes: ["User.Read"], // (Este User.Read está en el Service Principal en API Permission)
  // extraQueryParameters: {domain_hint: 'a4305987-cf78-4f93-9d64-bf18af65397b'}
};

export const graphConfig = {
  graphMeEndpoint: import.meta.env.VITE_APP_GRAPH_ENDPOINT
};
