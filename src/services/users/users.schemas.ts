import { z } from 'zod';
import { ZOD_INVALID_EMAIL_MESSAGE, ZOD_INVALID_MESSAGE, ZOD_REQUIRED_MESSAGE } from '@/constants';

export const UserRequestSchema = z.object({
  id: z.optional(z.string()),
  name: z.string({ required_error: ZOD_REQUIRED_MESSAGE }),
  email: z
    .string({ required_error: ZOD_REQUIRED_MESSAGE })
    .email({ message: ZOD_INVALID_EMAIL_MESSAGE }),
  roleId: z.string({ required_error: ZOD_REQUIRED_MESSAGE }).uuid({ message: ZOD_INVALID_MESSAGE }),
});
