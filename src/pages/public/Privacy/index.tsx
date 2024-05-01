import { Anchor, ScrollArea, Stack, Text, Title } from '@mantine/core';
import { Link } from 'react-router-dom';

const { VITE_APP_TITLE } = import.meta.env;

export default function PrivacyPage() {
  return (
    <ScrollArea h="100vh" p="md">
      <Stack gap="md">
        <Title order={1}>Política de Privacidade do Aplicativo {VITE_APP_TITLE}</Title>
        <Text size="sm">Data de vigência: 17/11/2023</Text>

        <Title order={2}>Não coleta de informações pessoais</Title>
        <Text>
          Nosso Aplicativo foi desenvolvido para não coletar informações pessoais dos usuários. Não
          solicitamos, armazenamos ou processamos quaisquer dados pessoais, como nome, endereço de
          e-mail, número de telefone ou informações de localização. O objetivo do nosso Aplicativo é
          fornecer um serviço útil e funcional sem a necessidade de coletar dados pessoais.
        </Text>

        <Title order={2}>Dados de uso anônimos</Title>
        <Text>
          Para melhorar nosso Aplicativo e garantir a qualidade do serviço, podemos coletar dados de
          uso anônimos, como informações sobre a frequência de uso, funcionalidades acessadas, erros
          encontrados e preferências do usuário. Esses dados são coletados de forma agregada e não
          identificam nenhum usuário individualmente.
        </Text>

        <Title order={2}>Compartilhamento de informações</Title>
        <Text>
          Não compartilhamos informações pessoais com terceiros, uma vez que não coletamos tais
          informações por meio do nosso Aplicativo. Além disso, não utilizamos os dados de uso
          anônimos coletados para identificar ou rastrear usuários individualmente. Esses dados são
          usados apenas para fins de análise e melhoria do Aplicativo.
        </Text>

        <Title order={2}>Segurança das informações</Title>
        <Text>
          Embora não coletemos informações pessoais, adotamos medidas de segurança adequadas para
          proteger os dados de uso anônimos coletados por meio do nosso Aplicativo. Implementamos
          práticas e controles de segurança para proteger essas informações contra acesso não
          autorizado, uso indevido ou divulgação.
        </Text>

        <Title order={2}>Alterações nesta Política de Privacidade</Title>
        <Text>
          Podemos atualizar esta Política de Privacidade de tempos em tempos. Recomendamos que você
          revise periodicamente as alterações. Seu uso contínuo do Aplicativo após a publicação de
          alterações nesta Política de Privacidade será considerado como aceitação dessas
          alterações.
        </Text>

        <Title order={2}>Contato</Title>
        <Text>
          Se você tiver alguma dúvida, preocupação ou solicitação relacionada a esta Política de
          Privacidade, entre em contato conosco por [inserir informações de contato].
        </Text>

        <Text>
          Esta Política de Privacidade é parte integrante dos Termos de Uso do
          {import.meta.env.VITE_APP_TITLE} e se aplica ao uso do Aplicativo por você. Ao utilizar
          nosso Aplicativo, você concorda com o uso das informações de acordo com esta Política de
          Privacidade.
        </Text>

        <Anchor component={Link} to="/">
          Voltar para o login
        </Anchor>
      </Stack>
    </ScrollArea>
  );
}
