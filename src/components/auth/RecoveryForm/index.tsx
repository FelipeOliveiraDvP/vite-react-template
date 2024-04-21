import { Anchor, Button, Card, Stack, Text, TextInput, Title } from '@mantine/core';
import { Link } from 'react-router-dom';

export function RecoveryForm() {
  return (
    <Card w={400}>
      <Stack>
        <Title order={1}>Recuperar Senha</Title>
        <Text>Gerenciamento esportivo</Text>
        <TextInput label="E-mail" placeholder="exemplo@email.com" withAsterisk />
        <Button>Enviar e-mail de recuperação</Button>
        <Anchor component={Link} to="/">
          Ir para o login
        </Anchor>
      </Stack>
    </Card>
  );
}
