import { Link } from 'react-router-dom';
import { Anchor, Center, Stack, Text, Title } from '@mantine/core';
import { useAuthContext } from '@/context/auth';

const { VITE_APP_HOME } = import.meta.env;

export default function NotFoundPage() {
  const { user } = useAuthContext();

  return (
    <Center>
      <Stack>
        <Title order={1}>Página não encontrada</Title>
        <Text>
          A página que você está tentando acessar não existe ou foi movida para outro endereço.
        </Text>
        <Anchor component={Link} to={user && VITE_APP_HOME ? VITE_APP_HOME : '/'}>
          Voltar para a página inicial
        </Anchor>
      </Stack>
    </Center>
  );
}
