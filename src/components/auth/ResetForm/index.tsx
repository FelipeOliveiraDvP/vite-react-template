import { Link } from 'react-router-dom';
import { Anchor, Button, Card, PasswordInput, Stack, Text, Title } from '@mantine/core';

export function ResetForm() {
  return (
    <Card w={400}>
      <Stack>
        <Title order={1}>Alterar Senha</Title>
        <Text>Gerenciamento esportivo</Text>
        <PasswordInput label="Nova Senha" placeholder="Digite sua senha..." withAsterisk />
        <PasswordInput label="Confirmar Senha" placeholder="Digite sua senha..." withAsterisk />
        <Button>Alterar senha</Button>
        <Anchor component={Link} to="/">
          Ir para o login
        </Anchor>
      </Stack>
    </Card>
  );
}
