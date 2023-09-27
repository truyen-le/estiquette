import {
  UnimplementMethodError,
  UninitializeMethodError,
} from "@domain/errors";
import { IAuth0Adapter } from "@domain/usecases/auth";
import { IAuthentication } from "@domain/usecases/auth/IAuthentication";
import { AuthenticationTypes } from "@main/service";
import { inject, injectable } from "inversify";

@injectable()
export class AuthenticationUsecase implements IAuthentication {
  @inject(AuthenticationTypes.auth0Adapter)
  auth0Adapter: IAuth0Adapter;

  isAuthenticated: () => boolean = () => {
    throw UnimplementMethodError;
  };
  getAccessToken: () => Promise<string> = async () => {
    const getAccessTokenSilently = this.auth0Adapter.getAccessTokenSilently;
    if (!getAccessTokenSilently) throw UninitializeMethodError;
    const accessToken = await getAccessTokenSilently();
    return accessToken;
  };
  loginWithPopUp: () => Promise<void> = async () => {
    const loginWithRedirect = this.auth0Adapter.loginWithRedirect;
    if (!loginWithRedirect) throw UninitializeMethodError;
    await loginWithRedirect();
  };
  loginWithCredentials: (
    params: IAuthentication.Params
  ) => Promise<void> = async ({ email, password }) => {
    throw UnimplementMethodError;
  };
  logout: () => Promise<void> = async () => {
    const logout = this.auth0Adapter.logout;
    if (!logout) throw UninitializeMethodError;
    await logout();
  };
}
