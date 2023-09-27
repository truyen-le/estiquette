import { HttpClient, HttpMethod, HttpStatusCode } from "@data/protocols/http";
import { IAuthentication } from "@domain/usecases/auth/IAuthentication";
import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";

export const onRequestWithAccessToken =
  (authentication: IAuthentication) =>
  async (config: InternalAxiosRequestConfig) => {
    const accessToken = await authentication.getAccessToken();
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  };

export const onResponseSuccess = () => (response: AxiosResponse) => {
  return response;
};

export const onResponseError =
  (authentication: IAuthentication, httpClient: HttpClient) =>
  async (error: AxiosError) => {
    const originalRequest = error.config;
    if (error.response?.status === HttpStatusCode.unauthorized) {
      const accessToken = await authentication.getAccessToken();
      if (originalRequest) {
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
      }
      return httpClient.request({
        url: originalRequest?.url ?? "",
        method: (originalRequest?.method ?? "GET") as HttpMethod,
        headers: originalRequest?.headers,
      });
    }
    return Promise.reject(error);
  };
