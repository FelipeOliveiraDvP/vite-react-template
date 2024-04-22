import { useDisclosure } from '@mantine/hooks';
import { Button, Drawer, Group, Select, Stack, TextInput } from '@mantine/core';
import { RiFilterLine, RiSearch2Line } from 'react-icons/ri';
import { PRIMARY_COLOR } from '@/theme';

export function UsersFilters() {
  const [opened, { open, close }] = useDisclosure(false);

  const filters = (
    <>
      <Select placeholder="Tipo de usuário" />
      <Select placeholder="Condomínio" />
      <Select placeholder="Situação" />
      <TextInput
        placeholder="Pesquise por nome"
        rightSection={<RiSearch2Line color={PRIMARY_COLOR} />}
      />
      <Button variant="outline">Limpar Filtros</Button>
    </>
  );

  return (
    <>
      <Group justify="end" visibleFrom="md">
        {filters}
      </Group>

      <Button variant="outline" onClick={open} leftSection={<RiFilterLine />} hiddenFrom="sm">
        Exibir Filtros
      </Button>

      <Drawer opened={opened} onClose={close} title="Filtros">
        <Stack>{filters}</Stack>
      </Drawer>
    </>
  );
}
