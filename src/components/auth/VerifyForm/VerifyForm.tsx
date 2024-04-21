import { Link } from 'react-router-dom';
import { Anchor, Button, Card, PinInput, Stack, Text, Title } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { VerifyCodeRequest, VerifyCodeRequestSchema, useVerifyCode } from '@/services/auth';

export function VerifyForm() {
  const form = useForm<VerifyCodeRequest>({
    mode: 'uncontrolled',
    initialValues: {
      code: '',
    },
    validate: zodResolver(VerifyCodeRequestSchema),
  });

  const mutation = useVerifyCode();

  async function handleSubmit(values: VerifyCodeRequest) {
    await mutation.mutateAsync(values);
  }

  return (
    <Card w={400}>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          <Title order={1}>Verificação do código</Title>
          <Text>Gerenciamento esportivo</Text>
          <PinInput {...form.getInputProps('code')} size="xl" type="number" />
          <Button type="submit" loading={mutation.isPending}>
            Enviar
          </Button>
          <Anchor component={Link} to="/">
            Ir para o login
          </Anchor>
        </Stack>
        <Text mt="lg">
          <Anchor component={Link} to="/esqueci-minha-senha">
            Clique aqui
          </Anchor>{' '}
          para enviar o código novamente.
        </Text>
      </form>
    </Card>
  );
}
