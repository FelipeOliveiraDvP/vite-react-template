import {
  ActionIcon,
  Checkbox,
  Grid,
  Group,
  Paper,
  Stack,
  TextInput,
  Title,
  Tooltip,
} from '@mantine/core';
import { Link } from 'react-router-dom';
import { RiArrowLeftLine, RiQuestionLine } from 'react-icons/ri';

export function UsersResidentPage() {
  return (
    <Paper>
      <Stack>
        <Group>
          <ActionIcon component={Link} to="/app/usuarios">
            <RiArrowLeftLine />
          </ActionIcon>
          <Title order={1}>Condômino</Title>
        </Group>
        <Group>
          <Checkbox label="Assinado a ficha Par-Q?" styles={{ label: { fontWeight: 500 } }} />
          <Tooltip
            label="A ficha precisa ser verificada manualmente. Caso esteja correta, marcar a caixa de seleção."
            position="bottom"
          >
            <ActionIcon color="gray">
              <RiQuestionLine />
            </ActionIcon>
          </Tooltip>
        </Group>
        <Grid>
          <Grid.Col span={12}>
            <TextInput label="Nome" placeholder="Nome do usuário" withAsterisk />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <TextInput label="E-mail" placeholder="E-mail do usuário" withAsterisk />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <TextInput label="Telefone" placeholder="Telefone do usuário" withAsterisk />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 10 }}>
            <TextInput label="Nome do condomínio" placeholder="Nome do condomínio" withAsterisk />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 2 }}>
            <TextInput label="CEP" placeholder="00000-000" withAsterisk />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 10 }}>
            <TextInput label="Rua" placeholder="Logradouro" withAsterisk />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 2 }}>
            <TextInput label="Número" placeholder="Número" withAsterisk />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <TextInput label="Apartamento" placeholder="Apartamento" withAsterisk />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <TextInput label="Bloco" placeholder="Bloco" withAsterisk />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 4 }}>
            <TextInput label="Bairro" placeholder="Bairro" withAsterisk />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 4 }}>
            <TextInput label="Cidade" placeholder="Cidade" withAsterisk />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 4 }}>
            <TextInput label="Estado" placeholder="Estado" withAsterisk />
          </Grid.Col>
        </Grid>
      </Stack>
    </Paper>
  );
}
