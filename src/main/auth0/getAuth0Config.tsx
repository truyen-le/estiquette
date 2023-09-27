import { apiConfig, auth0Config } from "src/config/.env";

export const getAuth0Config = () => {
  const domain = String(auth0Config.domain);
  const clientId = String(auth0Config.clientId);

  const audience =
    auth0Config.audience && auth0Config.audience !== apiConfig.baseDomain
      ? String(auth0Config.audience)
      : null;

  return {
    domain: domain,
    clientId: clientId,
    ...(audience ? { audience } : null),
  };
};
