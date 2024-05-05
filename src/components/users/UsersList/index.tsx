import { ActionIcon, Center, Checkbox, Pagination, Switch, Table } from '@mantine/core';
import { RiDeleteBin7Line, RiEyeLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export function UsersList() {
  return (
    <Table.ScrollContainer minWidth={300}>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Nome</Table.Th>
            <Table.Th>Telefone</Table.Th>
            <Table.Th>E-mail</Table.Th>
            <Table.Th>Tipo</Table.Th>
            <Table.Th>Nome do Condomínio</Table.Th>
            <Table.Th>Ficha-Par-Q</Table.Th>
            <Table.Th>Situação</Table.Th>
            <Table.Th></Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Table.Tr>
            <Table.Td>Nome Exemplo</Table.Td>
            <Table.Td>(11) 99999-5555</Table.Td>
            <Table.Td>nome.exemplo@email.com</Table.Td>
            <Table.Td>Condômino</Table.Td>
            <Table.Td>Condomínio Exemplo</Table.Td>
            <Table.Td>
              <Checkbox checked />
            </Table.Td>
            <Table.Td>
              <Switch label="Ativo" />
            </Table.Td>
            <Table.Td>
              <ActionIcon.Group>
                <ActionIcon component={Link} to="/app/usuarios/123">
                  <RiEyeLine />
                </ActionIcon>
                <ActionIcon>
                  <RiDeleteBin7Line />
                </ActionIcon>
              </ActionIcon.Group>
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>Administrador</Table.Td>
            <Table.Td>(11) 99999-5555</Table.Td>
            <Table.Td>admin@email.com</Table.Td>
            <Table.Td>Administrador</Table.Td>
            <Table.Td></Table.Td>
            <Table.Td>
              <Checkbox />
            </Table.Td>
            <Table.Td>
              <Switch label="Ativo" />
            </Table.Td>
            <Table.Td>
              <ActionIcon.Group>
                <ActionIcon variant="subtle">
                  <RiEyeLine />
                </ActionIcon>
                <ActionIcon variant="subtle">
                  <RiDeleteBin7Line />
                </ActionIcon>
              </ActionIcon.Group>
            </Table.Td>
          </Table.Tr>
        </Table.Tbody>
        <Table.Caption>
          <Center>
            <Pagination total={30} />
          </Center>
        </Table.Caption>
      </Table>
    </Table.ScrollContainer>
  );
}
