import { Button, Group, Select, TextInput } from '@mantine/core';
import { RiSearch2Line } from 'react-icons/ri';
import { PRIMARY_COLOR } from '@/theme';

export function UsersFilters() {
  return (
    <Group justify="end">
      <Select placeholder="Tipo de usuário" />
      <Select placeholder="Condomínio" />
      <Select placeholder="Situação" />
      <TextInput
        placeholder="Pesquise por nome"
        rightSection={<RiSearch2Line color={PRIMARY_COLOR} />}
      />
      <Button variant="outline">Limpar Filtros</Button>
    </Group>
  );
}
