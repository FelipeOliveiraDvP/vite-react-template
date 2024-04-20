import { z } from 'zod';
import {
  ZOD_PASS_LENGTH_MESSAGE,
  ZOD_REQUIRED_MESSAGE,
  ZOD_INVALID_EMAIL_MESSAGE,
  ZOD_INVALID_TYPE_MESSAGE,
  ZOD_PASS_CONFIRM_MESSAGE,
} from '@/constants';

export const EmailSchema = z
  .string({ required_error: ZOD_REQUIRED_MESSAGE })
  .email({ message: ZOD_INVALID_EMAIL_MESSAGE });

export const PasswordSchema = z
  .string({ required_error: ZOD_REQUIRED_MESSAGE })
  .min(8, ZOD_PASS_LENGTH_MESSAGE);

export const LoginSchema = z.object({
  email: EmailSchema,
  password: PasswordSchema,
});

export const RecoverySchema = z.object({
  email: EmailSchema,
});

export const PinCodeSchema = z.object({
  code: z.coerce
    .number({ required_error: ZOD_REQUIRED_MESSAGE, invalid_type_error: ZOD_INVALID_TYPE_MESSAGE })
    .int({ message: ZOD_INVALID_TYPE_MESSAGE })
    .gte(1000, { message: ZOD_INVALID_TYPE_MESSAGE })
    .lte(9999, { message: ZOD_INVALID_TYPE_MESSAGE }),
});

export const ResetPasswordSchema = z
  .object({
    password: PasswordSchema,
    password_confirm: PasswordSchema,
  })
  .refine((data) => data.password === data.password_confirm, {
    message: ZOD_PASS_CONFIRM_MESSAGE,
    path: ['password_confirm'],
  });
