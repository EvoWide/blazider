import axios, { AxiosInstance } from 'axios';

export function createAxiosInstance(options?): AxiosInstance {
  const instance = axios.create();

  //TODO: add interceptors, or specific options

  return instance;
}
