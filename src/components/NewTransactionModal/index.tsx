import close from '../../assets/close.svg';
import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import Modal from 'react-modal';
import { Container, TransactionTypeContainer } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <button
          type="button"
          onClick={onRequestClose}
          className="react-modal-close"
        >
          <img src={close} alt="Close modal" />
        </button>
        <h2>Cadastrar transação</h2>
        <input
          placeholder="Título"
        />
        <TransactionTypeContainer>
          <button>
            <img src={income} alt="entradas"/>
            <span>Entrada</span>
          </button>
          <button>
            <img src={outcome} alt="saída"/>
            <span>Saída</span>
          </button>
        </TransactionTypeContainer>
        <input
          type="number"
          placeholder="Valor"
        />
        <input
          placeholder="categoria"
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
