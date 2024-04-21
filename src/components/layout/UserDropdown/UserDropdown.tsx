import { Link, useNavigate } from 'react-router-dom';
import { Avatar, Button, Group, Menu, Text, rem } from '@mantine/core';
import { RiUser3Line, RiArrowDownSLine, RiLogoutCircleLine, RiUserLine } from 'react-icons/ri';
import { useAuthContext } from '@/context/auth';

export function UserDropdown() {
  const { user, onLogout } = useAuthContext();
  const navigate = useNavigate();

  function handleLogout() {
    onLogout && onLogout(() => navigate('/'));
  }

  return (
    <Menu width={200}>
      <Menu.Target>
        <Button variant="transparent">
          <Group gap="xs">
            <Avatar
              radius="xl"
              size={rem(32)}
              styles={(theme) => ({
                root: {
                  background: theme.primaryColor,
                },
                placeholder: {
                  color: theme.white,
                },
              })}
            >
              <RiUser3Line />
            </Avatar>
            <Text c="black">{user?.name || 'Bem vindo'}</Text>
            <RiArrowDownSLine color="black" size={18} />
          </Group>
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item component={Link} to="/app/minha-conta" leftSection={<RiUserLine />}>
          Minha conta
        </Menu.Item>
        <Menu.Item color="red" leftSection={<RiLogoutCircleLine />} onClick={handleLogout}>
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
