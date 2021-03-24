import logo from '../../assets/logo.svg';
import { Container, Content } from '../Header/style';

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="logo DTmoney"/>
        <button>
          Nova transação
        </button>
      </Content>
    </Container>
  )
}
