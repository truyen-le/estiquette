// src/auth/auth0-provider-with-history.js

import React from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import { AppState, Auth0Provider, User } from "@auth0/auth0-react";
import { getAuth0Config } from "./getAuth0Config";

type Auth0HistoryProviderProps = {
  children: React.ReactNode;
};

const Auth0HistoryProvider = ({ children }: Auth0HistoryProviderProps) => {
  const { domain, clientId, audience } = getAuth0Config();

  const naivigate = useNavigate();
  const navigation = useNavigation();

  const onRedirectCallback: (appState?: AppState, user?: User) => void = (
    appState
  ) => {
    naivigate(appState?.returnTo || navigation.location?.pathname || "/");
    console.log(appState?.returnTo || navigation.location?.pathname);
  };

  const providerConfig = {
    domain: domain,
    clientId: clientId,
    onRedirectCallback,
    authorizationParams: {
      redirect_uri: window.location.origin,
      ...(audience ? { audience: audience } : null),
    },
  };

  return <Auth0Provider {...providerConfig}>{children}</Auth0Provider>;
};

export default Auth0HistoryProvider;
