import { Link } from 'react-router-dom';
import { Anchor, Button, Card, Stack, Text, TextInput, Title } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { RecoveryRequest, RecoveryRequestSchema, useRecovery } from '@/services/auth';

export function RecoveryForm() {
  const form = useForm<RecoveryRequest>({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
    },
    validate: zodResolver(RecoveryRequestSchema),
  });

  const mutation = useRecovery();

  async function handleSubmit(values: RecoveryRequest) {
    await mutation.mutateAsync(values);
  }

  return (
    <Card w={400}>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          <Title order={1}>Recuperar Senha</Title>
          <Text>Gerenciamento esportivo</Text>
          <TextInput
            {...form.getInputProps('email')}
            label="E-mail"
            placeholder="exemplo@email.com"
            withAsterisk
          />
          <Button type="submit" loading={mutation.isPending}>
            Enviar e-mail de recuperação
          </Button>
          <Anchor component={Link} to="/">
            Ir para o login
          </Anchor>
        </Stack>
      </form>
    </Card>
  );
}
