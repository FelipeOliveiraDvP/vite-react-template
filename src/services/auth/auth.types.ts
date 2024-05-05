import { z } from 'zod';
import {
  LoginRequestSchema,
  RecoveryRequestSchema,
  ResetPasswordRequestSchema,
  VerifyCodeRequestSchema,
} from './auth.schemas';

export interface AuthResponse {
  token: string;
}

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: {
    id: string;
    name: string;
  };
}

export type LoginRequest = z.infer<typeof LoginRequestSchema>;
export type RecoveryRequest = z.infer<typeof RecoveryRequestSchema>;
export type VerifyCodeRequest = z.infer<typeof VerifyCodeRequestSchema>;
export type ResetPasswordRequest = z.infer<typeof ResetPasswordRequestSchema>;
