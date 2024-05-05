import { AuthResponse } from '@/services/auth';
import { ErrorResult } from '@/types';

export const loginSuccess: AuthResponse = {
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGVtYWlsLmNvbSIsImlkIjoiM2ZhODVmNjQtNTcxNy00NTYyLWIzZmMtMmM5NjNmNjZhZmE2IiwibmFtZSI6IkFkbWluaXN0cmFkb3IiLCJyb2xlIjp7ImlkIjoiM2ZhODVmNjQtNTcxNy00NTYyLWIzZmMtMmM5NjNmNjZhZmE2IiwibmFtZSI6IkFkbWluaXN0cmFkb3IifX0.B6_7MZh16tGII_gqkUOTxK9Dz48Goge9zAkOH_-vo_w',
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
