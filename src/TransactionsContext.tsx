import { useEffect, useState, createContext, ReactNode } from 'react';
import { api } from './services/api';

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
  createTransaction: (transaction: TransactionInput) => void;
}

export const TransactionsContext = createContext<TransactionContextData>(
  {} as TransactionContextData,
);

export function TransactionsProvider({ children }: TransctionProviderProps ) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, []);

  function createTransaction(transaction: TransactionInput) {
    api.post('transactions', transaction);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction}}>
      { children }
    </TransactionsContext.Provider>
  )
}
