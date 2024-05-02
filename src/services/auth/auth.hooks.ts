import { useMutation } from '@tanstack/react-query';
import { notifications } from '@mantine/notifications';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '@/context/auth';
import { setAuthToken } from '@/context/auth/helpers';
import { getFormErrors } from '@/utils';
import authService from './auth.service';

const { VITE_HOME } = import.meta.env;

export function useLogin() {
  const navigate = useNavigate();
  const { onLogin } = useAuthContext();

  return useMutation({
    mutationFn: authService.login,
    onSuccess(data) {
      onLogin && onLogin(data, () => navigate(VITE_HOME || '/app/usuarios'));
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
        onLogin && onLogin(data, () => navigate(VITE_HOME || '/app/usuarios'));
        return;
      }

      setAuthToken(data.token);
      notifications.show({
        message: 'Senha alterada com sucesso.',
        color: 'green',
      });
    },
    onError(error) {
      return Promise.reject(getFormErrors(error as AxiosError));
    },
  });
}
