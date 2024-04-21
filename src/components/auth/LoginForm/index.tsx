import { Link } from 'react-router-dom';
import { Anchor, Button, Card, PasswordInput, Stack, Text, TextInput, Title } from '@mantine/core';

export function LoginForm() {
  return (
    <Card w={400}>
      <Stack>
        <Title order={1}>Login</Title>
        <Text>Gerenciamento esportivo</Text>
        <TextInput label="E-mail" placeholder="exemplo@email.com" withAsterisk />
        <PasswordInput label="Senha" placeholder="Digite sua senha..." withAsterisk />
        <Button>Login</Button>
        <Anchor component={Link} to="/esqueci-minha-senha">
          Esqueceu a senha?
        </Anchor>
      </Stack>
      <Text mt="lg">
        Ao acessar e utilizar a plataforma, você concorda com a nossa{' '}
        <Anchor component={Link} to="/politica-de-privacidade">
          política de privacidade
        </Anchor>
      </Text>
    </Card>
  );
}
