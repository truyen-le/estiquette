import {
  UnimplementMethodError,
  UninitializeMethodError,
} from "@domain/errors";
import { Auth } from "@domain/models/auth";
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
  login: (params: IAuthentication.Params) => Promise<Auth> = async ({
    email,
    password,
  }) => {
    const getAccessTokenSilently = this.auth0Adapter.getAccessTokenSilently;
    if (!getAccessTokenSilently) throw UninitializeMethodError;
    const accessToken = await getAccessTokenSilently();
    return { accessToken };
  };
  logout: () => Promise<void> = async () => {
    const logout = this.auth0Adapter.logout;
    if (!logout) throw UninitializeMethodError;
    await logout();
  };
}
