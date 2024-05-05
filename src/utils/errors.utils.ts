import { isAxiosError } from 'axios';
import { ErrorResult } from '@/types';

export function getErrorMessage<T>(error: T, fallback?: string) {
  if (!isAxiosError(error)) return fallback || 'Algum erro ocorreu.';

  const errorResponse = error.response?.data as ErrorResult;

  if ('message' in errorResponse) return errorResponse.message;

  return 'Algum erro ocorreu.';
}

export function getFormErrors<T>(error: T) {
  if (!isAxiosError(error) || !error.response) return {};

  const { errors } = error.response?.data as ErrorResult;

  if (!errors) return {};

  return Object.entries(errors)
    .map(([field, fieldErrors]) => ({
      [field]: (fieldErrors as string[])[0],
    }))
    .reduce((result, item) => {
      const key = Object.keys(item)[0];
      const value = item[key];

      result[key] = value;
      return result;
    }, {});
}
