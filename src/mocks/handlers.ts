import { http, HttpResponse } from 'msw';
import { LoginRequest } from '@/services/auth';

const { VITE_API_URL } = import.meta.env;

export const handlers = [
  http.post(`${VITE_API_URL}/auth/login`, async ({ request }) => {
    const { email, password } = (await request.json()) as LoginRequest;

    // TODO: Return a static JWT token with the encoded user.
    if (email === 'admin@email.com' && password === 'asdf1234') {
      return HttpResponse.json(
        {
          token: '',
        },
        { status: 200 }
      );
    }

    return HttpResponse.json(
      {
        message: 'Usuário ou senha inválidos',
      },
      { status: 401 }
    );
  }),
  // TODO: Implement /auth/recovery handler.
  // TODO: Implement /auth/verify handler.
  // TODO: Implement /auth/reset handler.
];
