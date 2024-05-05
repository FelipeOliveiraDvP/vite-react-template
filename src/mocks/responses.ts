import { LoginResponse } from '@/services/auth';
import { ErrorResult } from '@/types';

export const loginSuccess: LoginResponse = {
  token: `
    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
    eyJzdWIiOiI4ZmUzNjk1OS1mNWUyLTRlYTAtNGEx
    NS0wOGRjNWU0ZDM2MTUiLCJuYW1lIjoiRXhlbXBsbyBB
    ZG1pbmlzdHJhZG9yIiwiUm9sZUlkIjoiZTU1NDEzN2QtNDNkMi00
    ZDc2LWEzMTUtZjRjNTc3MGI1MjJmIiwiUm9sZSI6Ik1hc3Rl
    ciIsIm1hbmFnZV91c2VycyI6InRydWUiLCJtYW5hZ2VfYXVkaX
    RfbW9kdWxlcyI6InRydWUiLCJtYW5hZ2VfY25hZXMiOiJ0cnVlIi
    wibWFuYWdlX2NvbXBhbmllcyI6InRydWUiLCJtYW5hZ2Vfc2VzaV9
    jb21wYW5pZXMiOiJ0cnVlIiwibWFuYWdlX3JlcXVpcmVtZW50cyI6
    InRydWUiLCJtYW5hZ2VfdGFncyI6InRydWUiLCJtYW5hZ2Vfc2Vyd
    mljZXMiOiJ0cnVlIiwibWFuYWdlX3Byb2R1Y3RzIjoidHJ1ZSIsIm
    1hbmFnZV90ZWNobmljYWxfY29tcGV0ZW5jZSI6InRydWUiLCJtYW5
    hZ2VfY29uc29saWRhdGlvbl9ncm91cHMiOiJ0cnVlIiwibWFuYWdl
    X3JlcG9ydCI6InRydWUiLCJtYW5hZ2VfZGVtYW5kcyI6InRydWUiL
    CJ2aWV3X3VzZXJzIjoidHJ1ZSIsInZpZXdfYXVkaXRfbW9kdWxlcy
    I6InRydWUiLCJ2aWV3X2NuYWVzIjoidHJ1ZSIsInZpZXdfY29tcGF
    uaWVzIjoidHJ1ZSIsInZpZXdfc2VzaV9jb21wYW5pZXMiOiJ0cnVl
    Iiwidmlld19jb25zb2xpZGF0aW9uX2dyb3VwcyI6InRydWUiLCJ2a
    WV3X2RlbWFuZHMiOiJ0cnVlIiwidmlld19yZXF1aXJlbWVudHMiOi
    J0cnVlIiwidmlld19zZXJ2aWNlcyI6InRydWUiLCJ2aWV3X3RhZ3M
    iOiJ0cnVlIiwidmlld19wcm9kdWN0cyI6InRydWUiLCJ2aWV3X3Rl
    Y2huaWNhbF9jb21wZXRlbmNlIjoidHJ1ZSIsImV4cCI6MTcxNTc5N
    jQ3MywiaXNzIjoiUFJPSkVUT19CQVNFIiwiYXVkIjoiUFJPSkVUT1
    9CQVNFIn0.klYTaZGKSO8hNFggELrfvUp6eI7xYcxcmu3RuHcD3281
  `,
};

export const loginError: ErrorResult = {
  message: 'Usuário ou senha inválidos.',
  errors: {
    email: ['Informe um e-mail válido'],
    password: ['Verifique sua senha'],
  },
};

export const recoveryError: ErrorResult = {
  message: 'Ocorreu um erro ao recuperar a senha',
  errors: {
    email: ['Informe um e-mail válido'],
  },
};

export const verifyError: ErrorResult = {
  message: 'Ocorreu um erro ao verificar o código',
  errors: {
    code: ['O código informado não é válido'],
  },
};

export const resetError: ErrorResult = {
  message: 'Ocorreu um erro ao alterar a senha',
  errors: {
    password: ['Informe uma senha válida'],
    password_confirm: ['As senhas não são iguais'],
  },
};
