import { Auth } from "@domain/models/auth/auth";

export interface IAuthentication {
  isAuthenticated: () => boolean;
  getAccessToken: () => Promise<string>;
  loginWithPopUp: () => Promise<void>;
  loginWithCredentials: (
    params: IAuthentication.Params
  ) => Promise<void>;
  logout: () => Promise<void>;
}

export namespace IAuthentication {
  export type Params = {
    email: string;
    password: string;
  };

  export type Model = Auth;
}
