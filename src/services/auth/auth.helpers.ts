import { LoginRequest, LoginResponse } from './auth.schemas';

export function fakeLogin(data: LoginRequest): Promise<LoginResponse> {
  const { email, password } = data;

  if (email !== 'admin@email.com' && password !== 'asdf1234') {
    return Promise.reject(new Error('Usuário ou senha inválidos!'));
  }

  return Promise.resolve({
    token:
      'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjEiLCJuYW1lIjoiQWRtaW5pc3RyYWRvciIsImVtYWlsIjoiYWRtaW5AZW1haWwuY29tIiwicm9sZSI6eyJpZCI6IjEiLCJuYW1lIjoiQWRtaW5pc3RyYWRvciJ9fQ.UMttIUunjoJmL_t5E-MQHzsvwW9qxxwUA1qIKRLhX1I',
  });
}
