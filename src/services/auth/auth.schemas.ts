import { z } from 'zod';
import {
  ZOD_PASS_LENGTH_MESSAGE,
  ZOD_REQUIRED_MESSAGE,
  ZOD_INVALID_EMAIL_MESSAGE,
  ZOD_PASS_CONFIRM_MESSAGE,
} from '@/constants';

export const EmailSchema = z
  .string({ required_error: ZOD_REQUIRED_MESSAGE })
  .email({ message: ZOD_INVALID_EMAIL_MESSAGE });

export const PasswordSchema = z
  .string({ required_error: ZOD_REQUIRED_MESSAGE })
  .min(8, ZOD_PASS_LENGTH_MESSAGE);

export const LoginRequestSchema = z.object({
  email: EmailSchema,
  password: PasswordSchema,
});

export const LoginResponseSchema = z.object({
  token: z.string(),
});

export const RecoveryRequestSchema = z.object({
  email: EmailSchema,
});

export const VerifyCodeRequestSchema = z.object({
  code: z.string().length(4, {
    message: ZOD_REQUIRED_MESSAGE,
  }),
});

export const ResetPasswordRequestSchema = z
  .object({
    password: PasswordSchema,
    password_confirm: PasswordSchema,
  })
  .refine((data) => data.password === data.password_confirm, {
    message: ZOD_PASS_CONFIRM_MESSAGE,
    path: ['password_confirm'],
  });

export const AuthUserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: EmailSchema,
  role: z.object({
    id: z.string(),
    name: z.string(),
  }),
});

export type LoginRequest = z.infer<typeof LoginRequestSchema>;
export type LoginResponse = z.infer<typeof LoginResponseSchema>;
export type RecoveryRequest = z.infer<typeof RecoveryRequestSchema>;
export type VerifyCodeRequest = z.infer<typeof VerifyCodeRequestSchema>;
export type ResetPasswordRequest = z.infer<typeof ResetPasswordRequestSchema>;
export type AuthUser = z.infer<typeof AuthUserSchema>;
