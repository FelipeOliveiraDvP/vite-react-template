import { http, delay, HttpResponse } from 'msw';
import {
  LoginRequest,
  RecoveryRequest,
  ResetPasswordRequest,
  VerifyCodeRequest,
} from '@/services/auth';
import { loginError, loginSuccess, recoveryError, resetError, verifyError } from './responses';

const { VITE_API_URL } = import.meta.env;

export const handlers = [
  http.post(`${VITE_API_URL}/auth/login`, async ({ request }) => {
    const { email, password } = (await request.json()) as LoginRequest;

    await delay(400);

    if (email === 'admin@email.com' && password === 'asdf1234') {
      return HttpResponse.json(loginSuccess, { status: 200 });
    }

    return HttpResponse.json(loginError, { status: 401 });
  }),
  http.post(`${VITE_API_URL}/auth/refresh`, async () =>
    HttpResponse.json(loginSuccess, { status: 200 })
  ),
  http.post(`${VITE_API_URL}/auth/recovery`, async ({ request }) => {
    const { email } = (await request.json()) as RecoveryRequest;

    await delay(400);

    if (email === 'admin@email.com') {
      return HttpResponse.json(undefined, { status: 204 });
    }

    return HttpResponse.json(recoveryError, { status: 400 });
  }),
  http.post(`${VITE_API_URL}/auth/verify`, async ({ request }) => {
    const { code } = (await request.json()) as VerifyCodeRequest;

    await delay(400);

    if (code === '1234') {
      return HttpResponse.json(undefined, { status: 204 });
    }

    return HttpResponse.json(verifyError, { status: 400 });
  }),
  http.post(`${VITE_API_URL}/auth/reset`, async ({ request }) => {
    const { password, password_confirm } = (await request.json()) as ResetPasswordRequest;

    await delay(400);

    if (password === 'asdf1234' && password === password_confirm) {
      return HttpResponse.json(loginSuccess, { status: 200 });
    }

    return HttpResponse.json(resetError, { status: 400 });
  }),
];
