import axios from '@/config/axios';
import {
  User,
  UserPaginatedResult,
  UserQuery,
  UserRequest,
  UserRolePaginatedResult,
} from './users.types';
import { USERS_CONTROLLER } from './users.constants';
import { BaseQuery } from '@/types';

export default {
  async list(params?: UserQuery): Promise<UserPaginatedResult> {
    const result = (await axios.get(`${USERS_CONTROLLER}`, { params })) as unknown;

    return result as UserPaginatedResult;
  },

  async create(obj: UserRequest): Promise<User> {
    const result = (await axios.post(`${USERS_CONTROLLER}`, obj)) as unknown;

    return result as User;
  },

  async edit(obj: UserRequest): Promise<User> {
    const result = (await axios.post(`${USERS_CONTROLLER}/${obj.id}`, obj)) as unknown;

    return result as User;
  },

  async toggle(id: string): Promise<User> {
    const result = (await axios.patch(`${USERS_CONTROLLER}/${id}/toggle`)) as unknown;

    return result as User;
  },

  async listRoles(params?: BaseQuery): Promise<UserRolePaginatedResult> {
    const result = (await axios.get(`${USERS_CONTROLLER}/roles`, { params })) as unknown;

    return result as UserRolePaginatedResult;
  },
};
