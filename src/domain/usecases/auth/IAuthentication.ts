import { Auth } from "@domain/models/auth/auth";

export interface IAuthentication {
  isAuthenticated: () => boolean;
  getAccessToken: () => Promise<string>;
  login:(
    params: IAuthentication.Params
  )=> Promise<IAuthentication.Model>
  logout: () => Promise<void>;
}

export namespace IAuthentication {
  export type Params = {
    email: string;
    password: string;
  };

  export type Model = Auth;
}
