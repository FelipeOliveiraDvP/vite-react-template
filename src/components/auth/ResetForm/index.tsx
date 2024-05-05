import { Link } from 'react-router-dom';
import { Anchor, Button, Card, PasswordInput, Stack, Text, Title } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import {
  ResetPasswordRequest,
  ResetPasswordRequestSchema,
  useResetPassword,
} from '@/services/auth';

const { VITE_DESCRIPTION } = import.meta.env;

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
    try {
      await mutation.mutateAsync(values);
    } catch (error) {
      form.setErrors(error as {});
    }
  }

  return (
    <Card>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          <Title order={1}>Alterar Senha</Title>
          <Text>{VITE_DESCRIPTION}</Text>
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
