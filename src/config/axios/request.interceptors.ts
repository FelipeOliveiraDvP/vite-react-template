import { InternalAxiosRequestConfig } from 'axios';
import { getAuthToken } from '@/context/auth/helpers';

export function onRequest(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig {
  const token = getAuthToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
}
