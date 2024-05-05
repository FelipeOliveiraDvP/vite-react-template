import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { UserQuery } from './users.types';
import { USERS_QUERY_KEY, USERS_ROLES_QUERY_KEY } from './users.constants';
import { useNotification } from '@/hooks';
import { BaseQuery } from '@/types';
import { getErrorMessage, getFormErrors } from '@/utils';
import usersService from './users.service';

export function useUsers(params?: UserQuery) {
  return useQuery({
    queryKey: [USERS_QUERY_KEY, { ...params }],
    queryFn: () => usersService.list(params),
  });
}

export function useCreateUser() {
  const client = useQueryClient();
  const notification = useNotification();

  return useMutation({
    mutationFn: usersService.create,
    onSuccess() {
      client.invalidateQueries({ queryKey: [USERS_QUERY_KEY] });
      notification.success('Usuário cadastrado com sucesso');
    },
    onError(error) {
      notification.error(getErrorMessage(error));
      return Promise.reject(getFormErrors(error));
    },
  });
}

export function useEditUser() {
  const client = useQueryClient();
  const notification = useNotification();

  return useMutation({
    mutationFn: usersService.edit,
    onSuccess() {
      client.invalidateQueries({ queryKey: [USERS_QUERY_KEY] });
      notification.success('Usuário atualizado com sucesso');
    },
    onError(error) {
      notification.error(getErrorMessage(error));
      return Promise.reject(getFormErrors(error));
    },
  });
}

export function useToggleUser() {
  const client = useQueryClient();
  const notification = useNotification();

  return useMutation({
    mutationFn: usersService.edit,
    onSuccess(data) {
      const status = data.deletedAt !== null ? 'inativado' : 'ativado';

      client.invalidateQueries({ queryKey: [USERS_QUERY_KEY] });
      notification.success(`Usuário ${status} com sucesso`);
    },
    onError(error) {
      notification.error(getErrorMessage(error));
      return Promise.reject(getFormErrors(error));
    },
  });
}

export function useUserRoles(params?: BaseQuery) {
  return useQuery({
    queryKey: [USERS_ROLES_QUERY_KEY, { ...params }],
    queryFn: () => usersService.listRoles(params),
  });
}
