import {
  GetAccessTokenSilently,
  LoginWithPopup,
  LoginWithRedirect,
  Logout,
} from "@domain/models/auth";

export interface IAuth0Adapter {
  initialize: (params: IAuth0Adapter.InitializeParams) => void;
  getAccessTokenSilently?: GetAccessTokenSilently;
  loginWithRedirect?: LoginWithRedirect;
  loginWithPopup?: LoginWithPopup;
  logout?: Logout;
}

export namespace IAuth0Adapter {
  export type InitializeParams = {
    getAccessTokenSilently: GetAccessTokenSilently;
    loginWithRedirect: LoginWithRedirect;
    loginWithPopup: LoginWithPopup;
    logout: Logout;
  };
}
