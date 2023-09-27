import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";

export * from "./AuthenticationInterceptors";

export type OnRequest = (
  config: InternalAxiosRequestConfig
) => Promise<InternalAxiosRequestConfig<any>>;

export type OnResponse = (response: AxiosResponse) => AxiosResponse<any, any>;

export type OnError = (error: AxiosError) => Promise<any>;