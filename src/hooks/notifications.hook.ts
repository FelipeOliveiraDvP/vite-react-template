import { notifications } from '@mantine/notifications';

export function useNotification() {
  function success(message: string) {
    notifications.show({
      message,
      color: 'green',
    });
  }

  function error(message: string) {
    notifications.show({
      message,
      color: 'red',
    });
  }

  return { success, error };
}
