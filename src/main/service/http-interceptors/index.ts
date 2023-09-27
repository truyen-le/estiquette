import { HttpClient } from "@data/protocols/http";
import { IAuthentication } from "@domain/usecases/auth/IAuthentication";
import {
  OnError,
  OnRequest,
  OnResponse,
  onRequestWithAccessToken,
  onResponseError,
  onResponseSuccess,
} from "@infra/http/interceptors";
import {
  AuthenticationTypes,
  HttpInterceptorTypes,
  InfraTypes,
} from "../types";
import { ContainerModule } from "inversify";

export const httpInterceptorModule = new ContainerModule((bind, unbind) => {
  bind<OnRequest>(HttpInterceptorTypes.onRequestWithToken).toFactory(
    (context) =>
      onRequestWithAccessToken(
        context.container.get<IAuthentication>(
          String(AuthenticationTypes.authentication)
        )
      )
  );
  bind<OnResponse>(HttpInterceptorTypes.onSuccess).toFactory((_) =>
    onResponseSuccess()
  );
  bind<OnError>(HttpInterceptorTypes.onTokenError).toFactory((context) =>
    onResponseError(
      context.container.get<IAuthentication>(
        AuthenticationTypes.authentication
      ),
      context.container.get<HttpClient>(InfraTypes.http)
    )
  );
});
