import { Container, Text, VStack, Heading, Table, Thead, Tbody, Tr, Th, Td, IconButton } from "@chakra-ui/react";
import { FaDatabase, FaUser, FaMoneyBill, FaPiggyBank, FaChartLine, FaExchangeAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">
          Projeto Financeiro
        </Heading>
        <Text fontSize="lg">Estrutura do Banco de Dados</Text>

        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Entidade</Th>
              <Th>Descrição</Th>
              <Th>Ações</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>usuario</Td>
              <Td>Armazena informações dos usuários</Td>
              <Td>
                <IconButton aria-label="Usuário" icon={<FaUser />} size="sm" />
              </Td>
            </Tr>
            <Tr>
              <Td>categoria</Td>
              <Td>Armazena categorias de transações</Td>
              <Td>
                <IconButton aria-label="Categoria" icon={<FaDatabase />} size="sm" />
              </Td>
            </Tr>
            <Tr>
              <Td>conta</Td>
              <Td>Armazena informações das contas</Td>
              <Td>
                <IconButton aria-label="Conta" icon={<FaMoneyBill />} size="sm" />
              </Td>
            </Tr>
            <Tr>
              <Td>economia</Td>
              <Td>Armazena informações de economias</Td>
              <Td>
                <IconButton aria-label="Economia" icon={<FaPiggyBank />} size="sm" />
              </Td>
            </Tr>
            <Tr>
              <Td>investimento</Td>
              <Td>Armazena informações de investimentos</Td>
              <Td>
                <IconButton aria-label="Investimento" icon={<FaChartLine />} size="sm" />
              </Td>
            </Tr>
            <Tr>
              <Td>transacao</Td>
              <Td>Armazena informações de transações</Td>
              <Td>
                <IconButton aria-label="Transação" icon={<FaExchangeAlt />} size="sm" />
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </VStack>
    </Container>
  );
};

export default Index;
