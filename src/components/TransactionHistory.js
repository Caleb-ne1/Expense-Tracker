import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';
export const TransactionHistory = () => {
  const {transactions} = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <hr />
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
    </>
  )
}

export default TransactionHistory;
