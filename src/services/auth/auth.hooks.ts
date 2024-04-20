import { useMutation } from '@tanstack/react-query';
import authService from './auth.service';

export function useLogin() {
  return useMutation({
    mutationFn: authService.login,
    onSuccess() {
      // TODO: Handle user login.
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
  return useMutation({
    mutationFn: authService.resetPassword,
    onSuccess() {
      // TODO: Update localStorage token, and if user is not logged, handle login.
    },
    onError() {
      // TODO: Handle error feedback
    },
  });
}
