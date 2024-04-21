import { Link } from 'react-router-dom';
import { Anchor, Button, Card, PasswordInput, Stack, Text, Title } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import {
  ResetPasswordRequest,
  ResetPasswordRequestSchema,
  useResetPassword,
} from '@/services/auth';

export function ResetForm() {
  const form = useForm<ResetPasswordRequest>({
    mode: 'uncontrolled',
    initialValues: {
      password: '',
      password_confirm: '',
    },
    validate: zodResolver(ResetPasswordRequestSchema),
  });

  const mutation = useResetPassword();

  async function handleSubmit(values: ResetPasswordRequest) {
    await mutation.mutateAsync(values);
  }

  return (
    <Card w={400}>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          <Title order={1}>Alterar Senha</Title>
          <Text>Gerenciamento esportivo</Text>
          <PasswordInput
            {...form.getInputProps('password')}
            label="Nova Senha"
            placeholder="Digite sua senha..."
            withAsterisk
          />
          <PasswordInput
            {...form.getInputProps('password_confirm')}
            label="Confirmar Senha"
            placeholder="Digite sua senha..."
            withAsterisk
          />
          <Button type="submit" loading={mutation.isPending}>
            Alterar senha
          </Button>
          <Anchor component={Link} to="/">
            Ir para o login
          </Anchor>
        </Stack>
      </form>
    </Card>
  );
}
