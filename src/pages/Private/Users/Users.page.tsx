import { Button, Group, Paper, Stack, Text, Title } from '@mantine/core';
import { RiAddLine } from 'react-icons/ri';
import { UsersFilters } from '@/components/users/UsersFilters/UsersFilters';
import { UsersList } from '@/components/users/UsersList/UsersList';

export function UsersPage() {
  return (
    <Stack>
      <UsersFilters />
      <Paper>
        <Stack>
          <Group justify="space-between">
            <Stack gap={0}>
              <Title order={1}>Usuários</Title>
              <Text>Gerencie todos os usuários da plataforma ou crie novos</Text>
            </Stack>
            <Button leftSection={<RiAddLine />}>Novo Usuário</Button>
          </Group>
          <UsersList />
        </Stack>
      </Paper>
    </Stack>
  );
}
