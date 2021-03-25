import logo from '../../assets/logo.svg';
import { Container, Content } from '../Header/style';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal}: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logo} alt="logo DTmoney"/>
        <button type="button" onClick={onOpenNewTransactionModal} >
          Nova transação
        </button>
      </Content>
    </Container>
  )
}
