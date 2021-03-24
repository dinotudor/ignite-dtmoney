import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import total from '../../assets/total.svg';
import { Container } from './styles';

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas:</p>
          <img src={income} alt="Entradas"/>
        </header>
        <strong>$1000</strong>
      </div>
      <div>
        <header>
          <p>Saidas:</p>
          <img src={outcome} alt="Saidas"/>
        </header>
        <strong>- $100</strong>
      </div>
      <div>
        <header>
          <p>Total:</p>
          <img src={total} alt="Total"/>
        </header>
        <strong>$900</strong>
      </div>
    </Container>
  );
}
