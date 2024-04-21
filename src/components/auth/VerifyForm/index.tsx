import { Anchor, Button, Card, PinInput, Stack, Text, Title } from '@mantine/core';
import { Link } from 'react-router-dom';

export function VerifyForm() {
  return (
    <Card w={400}>
      <Stack>
        <Title order={1}>Verificação do código</Title>
        <Text>Gerenciamento esportivo</Text>
        <PinInput size="xl" type="number" />
        <Button>Enviar</Button>
        <Anchor>Ir para o login</Anchor>
      </Stack>
      <Text mt="lg">
        <Anchor component={Link} to="/esqueci-minha-senha">
          Clique aqui
        </Anchor>{' '}
        para enviar o código novamente.
      </Text>
    </Card>
  );
}
