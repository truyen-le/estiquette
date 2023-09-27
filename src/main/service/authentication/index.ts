import { IAuth0Adapter, IAuthentication } from "@domain/usecases/auth";
import {
  Auth0AdapterUsecase,
  AuthenticationUsecase,
} from "@data/usecases/auth";
import { AuthenticationTypes } from "../types";
import { ContainerModule } from "inversify";

export const authenticationModule = new ContainerModule((bind, unbind) => {
  bind<IAuth0Adapter>(AuthenticationTypes.auth0Adapter)
    .to(Auth0AdapterUsecase)
    .inSingletonScope();
  bind<IAuthentication>(AuthenticationTypes.authentication).to(
    AuthenticationUsecase
  );
});
