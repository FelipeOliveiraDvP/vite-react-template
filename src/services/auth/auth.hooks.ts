import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '@/context/auth';
import authService from './auth.service';

const { VITE_APP_HOME } = import.meta.env;

export function useLogin() {
  const navigate = useNavigate();
  const { onLogin } = useAuthContext();

  return useMutation({
    mutationFn: authService.login,
    onSuccess(data) {
      onLogin && onLogin(data, () => navigate(VITE_APP_HOME));
    },
    onError() {
      // TODO: Handle error feedback
    },
  });
}

export function useRecovery() {
  return useMutation({
    mutationFn: authService.recovery,
    onSuccess() {
      // TODO: Notify user.
    },
    onError() {
      // TODO: Handle error feedback
    },
  });
}

export function useVerifyCode() {
  return useMutation({
    mutationFn: authService.verifyCode,
    onSuccess() {
      // TODO: Redirect to public reset page.
    },
    onError() {
      // TODO: Handle error feedback
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
      }
      // TODO: Update localStorage token, and if user is not logged, handle login.
    },
    onError() {
      // TODO: Handle error feedback
    },
  });
}
