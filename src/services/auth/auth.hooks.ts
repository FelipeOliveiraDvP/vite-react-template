import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { useAuthContext } from '@/context/auth';
import { setAuthToken } from '@/context/auth/helpers';
import { getErrorMessage, getFormErrors } from '@/utils';
import { useNotification } from '@/hooks';
import authService from './auth.service';

const { VITE_HOME } = import.meta.env;

export function useLogin() {
  const navigate = useNavigate();
  const { onLogin } = useAuthContext();
  const { error: showError } = useNotification();

  return useMutation({
    mutationFn: authService.login,
    onSuccess(data) {
      onLogin && onLogin(data, () => navigate(VITE_HOME || '/app/usuarios'));
    },
    onError(error) {
      showError(getErrorMessage(error));
      return Promise.reject(getFormErrors(error));
    },
  });
}

export function useRecovery() {
  const navigate = useNavigate();
  const { error: showError } = useNotification();

  return useMutation({
    mutationFn: authService.recovery,
    onSuccess() {
      navigate('/verificar');
    },
    onError(error) {
      showError(getErrorMessage(error));
      return Promise.reject(getFormErrors(error));
    },
  });
}

export function useVerifyCode() {
  const navigate = useNavigate();
  const { error: showError } = useNotification();

  return useMutation({
    mutationFn: authService.verifyCode,
    onSuccess() {
      navigate('/alterar-senha');
    },
    onError(error) {
      showError(getErrorMessage(error));
      return Promise.reject(getFormErrors(error));
    },
  });
}

export function useResetPassword() {
  const navigate = useNavigate();
  const { user, onLogin } = useAuthContext();
  const { error: showError, success } = useNotification();

  return useMutation({
    mutationFn: authService.resetPassword,
    onSuccess(data) {
      if (!user) {
        onLogin && onLogin(data, () => navigate(VITE_HOME || '/app/usuarios'));
        return;
      }

      setAuthToken(data.token);
      success('Senha alterada com sucesso.');
    },
    onError(error) {
      showError(getErrorMessage(error));
      return Promise.reject(getFormErrors(error));
    },
  });
}
