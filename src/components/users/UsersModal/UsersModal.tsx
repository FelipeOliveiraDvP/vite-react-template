import { Button, Divider, Group, Modal, ModalProps, Select, Stack, TextInput } from '@mantine/core';

export function UsersModal({ ...props }: ModalProps) {
  return (
    <Modal {...props}>
      <Stack>
        <TextInput label="Nome" placeholder="Adicione o nome do usuário" withAsterisk />
        <TextInput label="E-mail" placeholder="Adicione o e-mail do usuário" withAsterisk />
        <TextInput label="Telefone" placeholder="Adicione o telefone do usuário" withAsterisk />
        <Select label="Tipo de usuário" placeholder="Selecione o tipo de usuário" withAsterisk />
        <Divider />
        <Group justify="flex-end">
          <Button variant="outline">Cancelar</Button>
          <Button>Salvar</Button>
        </Group>
      </Stack>
    </Modal>
  );
}
