import {
  AppState,
  GetTokenSilentlyOptions,
  LogoutOptions,
  PopupConfigOptions,
  PopupLoginOptions,
  RedirectLoginOptions,
} from "@auth0/auth0-react";
import { GetTokenSilentlyVerboseResponse } from "@auth0/auth0-spa-js";

export type LoginWithRedirect = (
  options?: RedirectLoginOptions<AppState>
) => Promise<void>;

export type LoginWithPopup = (
  options?: PopupLoginOptions,
  config?: PopupConfigOptions
) => Promise<void>;

export type GetAccessTokenSilently = {
  (
    options: GetTokenSilentlyOptions & { detailedResponse: true }
  ): Promise<GetTokenSilentlyVerboseResponse>;
  (options?: GetTokenSilentlyOptions): Promise<string>;
  (options: GetTokenSilentlyOptions): Promise<
    GetTokenSilentlyVerboseResponse | string
  >;
};

export type Logout = (options?: LogoutOptions) => Promise<void>;
