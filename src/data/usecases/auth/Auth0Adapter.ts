import {
  GetAccessTokenSilently,
  LoginWithPopup,
  LoginWithRedirect,
  Logout,
} from "@domain/models/auth";
import { IAuth0Adapter } from "@domain/usecases/auth";
import { injectable } from "inversify";

@injectable()
export class Auth0AdapterUsecase implements IAuth0Adapter {
  initialize: (params: IAuth0Adapter.InitializeParams) => void = ({
    getAccessTokenSilently,
    loginWithRedirect,
    loginWithPopup,
    logout,
  }) => {
    this.getAccessTokenSilently = getAccessTokenSilently;
    this.loginWithRedirect = loginWithRedirect;
    this.loginWithPopup = loginWithPopup;
    this.logout = logout;
  };

  getAccessTokenSilently?: GetAccessTokenSilently;
  loginWithRedirect?: LoginWithRedirect;
  loginWithPopup?: LoginWithPopup;
  logout?: Logout;
}
