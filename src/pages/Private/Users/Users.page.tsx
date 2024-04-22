import { Button, Group, Paper, Stack, Text, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { RiAddLine } from 'react-icons/ri';
import { UsersFilters } from '@/components/users/UsersFilters/UsersFilters';
import { UsersList } from '@/components/users/UsersList/UsersList';
import { UsersModal } from '@/components/users/UsersModal/UsersModal';

export function UsersPage() {
  const [opened, { open, close }] = useDisclosure(false);

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
            <Button leftSection={<RiAddLine />} onClick={open}>
              Novo Usuário
            </Button>
          </Group>
          <UsersList />
        </Stack>
      </Paper>
      <UsersModal opened={opened} onClose={close} title="Novo usuário" />
    </Stack>
  );
}
