import { InternalAxiosRequestConfig } from 'axios';

export function onRequest(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig {
  // TODO: Add Bearer token on request.
  return config;
}
