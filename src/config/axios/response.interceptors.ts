import { AxiosError, AxiosResponse, isAxiosError } from 'axios';
import { removeAuthToken } from '@/context/auth/helpers';

export function onResponse(response: AxiosResponse): AxiosResponse {
  return response.data;
}

export function onErrorResponse(error: AxiosError | Error): Promise<AxiosError> {
  if (isAxiosError(error)) {
    switch (error.status) {
      case 401:
        removeAuthToken();
        window.location.href = '/';
        break;
    }
  }

  return Promise.reject(error);
}
