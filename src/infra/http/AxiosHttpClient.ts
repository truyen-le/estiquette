import axios, { AxiosResponse } from "axios";
import { HttpRequest, HttpResponse, HttpClient } from "@data/protocols/http";
import { injectable } from "inversify";
import { HttpInterceptorTypes, serviceContainer } from "@main/service";
import { OnError, OnRequest, OnResponse } from "./interceptors";

const authAxios = axios.create();

// authAxios.interceptors.request.use(
//   serviceContainer.get<OnRequest>(HttpInterceptorTypes.onRequestWithToken)
// );

// authAxios.interceptors.response.use(
//   serviceContainer.get<OnResponse>(HttpInterceptorTypes.onSuccess),
//   serviceContainer.get<OnError>(HttpInterceptorTypes.onTokenError)
// );

@injectable()
export class AxiosHttpClient implements HttpClient {
  async request(
    data: HttpRequest,
    isAuth: boolean = true
  ): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse;
    try {
      axiosResponse = await (isAuth ? authAxios : axios).request({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers,
      });
    } catch (error) {
      axiosResponse = error.response;
    }
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    };
  }
}

export { authAxios };
