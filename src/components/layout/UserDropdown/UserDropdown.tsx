import { Avatar, Button, Group, Menu, Text } from '@mantine/core';
import { RiUser3Line, RiArrowDownSLine } from 'react-icons/ri';

export function UserDropdown() {
  return (
    <Menu width={200}>
      <Menu.Target>
        <Button variant="transparent">
          <Group>
            <Avatar color="primary">
              <RiUser3Line />
            </Avatar>
            <Text>Nome do usuário</Text>
            <RiArrowDownSLine />
          </Group>
        </Button>
      </Menu.Target>
    </Menu>
  );
}
