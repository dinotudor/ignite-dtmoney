import { Container } from "./styles";

export function TransactionTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento site</td>
            <td className="deposit">$12.000</td>
            <td>Desenvolvimento</td>
            <td>12/12/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- $5.000</td>
            <td>Casa</td>
            <td>3/12/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
