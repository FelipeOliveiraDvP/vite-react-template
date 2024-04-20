import axios from '@/config/axios';
import {
  LoginRequest,
  LoginResponse,
  RecoveryRequest,
  ResetPasswordRequest,
  VerifyCodeRequest,
} from './auth.schemas';

export default {
  async login(data: LoginRequest): Promise<LoginResponse> {
    const result = (await axios.post('/login', data)) as unknown;

    return result as LoginResponse;
  },

  async recovery(data: RecoveryRequest): Promise<unknown> {
    const result = (await axios.post('/recovery', data)) as unknown;

    return result;
  },

  async verifyCode(data: VerifyCodeRequest): Promise<unknown> {
    const result = (await axios.post('/verify', data)) as unknown;

    return result;
  },

  async resetPassword(data: ResetPasswordRequest): Promise<LoginResponse> {
    const result = (await axios.post('/reset', data)) as unknown;

    return result as LoginResponse;
  },
};
