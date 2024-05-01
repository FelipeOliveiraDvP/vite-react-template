import { Link } from 'react-router-dom';
import { Anchor, Button, Card, PasswordInput, Stack, Text, TextInput, Title } from '@mantine/core';
import { zodResolver } from 'mantine-form-zod-resolver';
import { useForm } from '@mantine/form';
import { LoginRequest, LoginRequestSchema, useLogin } from '@/services/auth';

export function LoginForm() {
  const form = useForm<LoginRequest>({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      password: '',
    },
    validate: zodResolver(LoginRequestSchema),
  });

  const mutation = useLogin();

  async function handleSubmit(values: LoginRequest) {
    await mutation.mutateAsync(values);
  }

  return (
    <Card>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          <Title order={1}>Login</Title>
          <Text>Gerenciamento esportivo</Text>
          <TextInput
            {...form.getInputProps('email')}
            label="E-mail"
            placeholder="exemplo@email.com"
            withAsterisk
          />
          <PasswordInput
            {...form.getInputProps('password')}
            label="Senha"
            placeholder="Digite sua senha..."
            withAsterisk
          />
          <Button type="submit" loading={mutation.isPending}>
            Login
          </Button>
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
      </form>
    </Card>
  );
}
