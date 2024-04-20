import { AxiosError, AxiosResponse, isAxiosError } from 'axios';

export function onResponse(response: AxiosResponse): AxiosResponse {
  return response.data;
}

export function onErrorResponse(error: AxiosError | Error): Promise<AxiosError> {
  if (isAxiosError(error)) {
    // TODO: Handle http errors.
  }

  return Promise.reject(error);
}
