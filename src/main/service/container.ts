import { Container } from "inversify";
import { authenticationModule } from "./authentication";
import { infraModule } from "./infra";
import { httpInterceptorModule } from "./http-interceptors";

const serviceContainer = new Container();
serviceContainer.load(infraModule);
serviceContainer.load(authenticationModule);
serviceContainer.load(httpInterceptorModule);

export { serviceContainer };
