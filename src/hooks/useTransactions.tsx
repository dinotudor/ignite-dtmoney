import { useEffect, useState, createContext, ReactNode, useContext } from 'react';
import { api } from '../services/api';

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: Date;
}

interface TransctionProviderProps {
  children: ReactNode;
}

/* interface TransactionInput {
  title: string;
  amount: number;
  category: string;
  type: string;
} */

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>; // Alternate to type above

interface TransactionContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionContextData>(
  {} as TransactionContextData,
);

export function TransactionsProvider({ children }: TransctionProviderProps ) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('transactions', {
      ...transactionInput,
      createdAt: new Date(),
    });
    const { transaction } = response.data;

    setTransactions([
      ...transactions,
      transaction,
    ])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction}}>
      { children }
    </TransactionsContext.Provider>
  )
}

export function useTransactions () {
  const context = useContext(TransactionsContext);
  return  context;
}
