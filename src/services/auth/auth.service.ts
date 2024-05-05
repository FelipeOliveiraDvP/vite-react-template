import axios from '@/config/axios';
import {
  AuthResponse,
  LoginRequest,
  RecoveryRequest,
  ResetPasswordRequest,
  VerifyCodeRequest,
} from './auth.types';
import { AUTH_CONTROLLER } from './auth.constants';

export default {
  async login(data: LoginRequest): Promise<AuthResponse> {
    const result = (await axios.post(`${AUTH_CONTROLLER}/login`, data)) as unknown;

    return result as AuthResponse;
  },

  async refresh(): Promise<AuthResponse> {
    const result = (await axios.post(`${AUTH_CONTROLLER}/refresh`)) as unknown;

    return result as AuthResponse;
  },

  async recovery(data: RecoveryRequest): Promise<unknown> {
    const result = (await axios.post(`${AUTH_CONTROLLER}/recovery`, data)) as unknown;

    return result;
  },

  async verifyCode(data: VerifyCodeRequest): Promise<unknown> {
    const result = (await axios.post(`${AUTH_CONTROLLER}/verify`, data)) as unknown;

    return result;
  },

  async resetPassword(data: ResetPasswordRequest): Promise<AuthResponse> {
    const result = (await axios.post(`${AUTH_CONTROLLER}/reset`, data)) as unknown;

    return result as AuthResponse;
  },
};
