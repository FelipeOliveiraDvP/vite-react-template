import { AxiosError } from 'axios';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '@/context/auth';
import { getFormErrors } from '@/utils';
import authService from './auth.service';
import { setAuthToken } from '@/context/auth/helpers';

const { VITE_APP_HOME } = import.meta.env;

export function useLogin() {
  const navigate = useNavigate();
  const { onLogin } = useAuthContext();

  return useMutation({
    mutationFn: authService.login,
    onSuccess(data) {
      onLogin && onLogin(data, () => navigate(VITE_APP_HOME));
    },
    onError(error) {
      return Promise.reject(getFormErrors(error as AxiosError));
    },
  });
}

export function useRecovery() {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: authService.recovery,
    onSuccess() {
      navigate('/verificar');
    },
    onError(error) {
      return Promise.reject(getFormErrors(error as AxiosError));
    },
  });
}

export function useVerifyCode() {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: authService.verifyCode,
    onSuccess() {
      navigate('/alterar-senha');
    },
    onError(error) {
      return Promise.reject(getFormErrors(error as AxiosError));
    },
  });
}

export function useResetPassword() {
  const navigate = useNavigate();
  const { user, onLogin } = useAuthContext();

  return useMutation({
    mutationFn: authService.resetPassword,
    onSuccess(data) {
      if (!user) {
        onLogin && onLogin(data, () => navigate(VITE_APP_HOME));
        return;
      }

      setAuthToken(data.token);
    },
    onError(error) {
      return Promise.reject(getFormErrors(error as AxiosError));
    },
  });
}
