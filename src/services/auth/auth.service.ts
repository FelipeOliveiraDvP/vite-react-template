import axios from '@/config/axios';
import {
  LoginRequest,
  LoginResponse,
  RecoveryRequest,
  ResetPasswordRequest,
  VerifyCodeRequest,
} from './auth.schemas';
import { AUTH_CONTROLLER } from './auth.constants';

export default {
  async login(data: LoginRequest): Promise<LoginResponse> {
    const result = (await axios.post(`${AUTH_CONTROLLER}/login`, data)) as unknown;

    return result as LoginResponse;
  },

  async refresh(): Promise<LoginResponse> {
    const result = (await axios.post(`${AUTH_CONTROLLER}/refresh`)) as unknown;

    return result as LoginResponse;
  },

  async recovery(data: RecoveryRequest): Promise<unknown> {
    const result = (await axios.post(`${AUTH_CONTROLLER}/recovery`, data)) as unknown;

    return result;
  },

  async verifyCode(data: VerifyCodeRequest): Promise<unknown> {
    const result = (await axios.post(`${AUTH_CONTROLLER}/verify`, data)) as unknown;

    return result;
  },

  async resetPassword(data: ResetPasswordRequest): Promise<LoginResponse> {
    const result = (await axios.post(`${AUTH_CONTROLLER}/reset`, data)) as unknown;

    return result as LoginResponse;
  },
};
