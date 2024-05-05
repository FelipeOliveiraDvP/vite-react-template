import { z } from 'zod';
import { UserRequestSchema } from './users.schemas';
import { BaseQuery, PaginatedResult } from '@/types';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface UserQuery extends BaseQuery {
  roleId?: string | null;
  isActive?: boolean | null;
}

export type UserPaginatedResult = PaginatedResult<User>;

export type UserRequest = z.infer<typeof UserRequestSchema>;

export interface UserRole {
  id: string;
  name: string;
}

export type UserRolePaginatedResult = PaginatedResult<UserRole>;
