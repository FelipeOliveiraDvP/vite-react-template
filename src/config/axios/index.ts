import axios, { AxiosInstance } from 'axios';
import { onRequest } from './request.interceptors';
import { onErrorResponse, onResponse } from './response.interceptors';

const { VITE_API_URL } = import.meta.env;

const axiosInstance = axios.create({
  baseURL: VITE_API_URL,
});

function setupInterceptors(instance: AxiosInstance): AxiosInstance {
  instance.interceptors.request.use(onRequest, onErrorResponse);
  instance.interceptors.response.use(onResponse, onErrorResponse);

  return instance;
}

export default setupInterceptors(axiosInstance);
