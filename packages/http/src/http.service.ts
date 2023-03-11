import { AxiosInstance, AxiosRequestConfig } from 'axios';

export class HttpService {
  private instance: AxiosInstance;

  async request<T>(config: AxiosRequestConfig): Promise<T> {
    return this.instance.request(config);
  }
}
