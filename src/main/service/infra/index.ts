import { LocalStorage } from "@data/protocols/cache";
import { HttpClient } from "@data/protocols/http";
import { LocalStorageAdapter } from "@infra/cache";
import { AxiosHttpClient } from "@infra/http";
import { InfraTypes } from "../types";
import { ContainerModule } from "inversify";

export const infraModule = new ContainerModule((bind, unbind) => {
  bind<LocalStorage>(InfraTypes.caches).to(LocalStorageAdapter);
  bind<HttpClient>(InfraTypes.http).to(AxiosHttpClient);
});
