import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
    const sign = transaction.amount < 0? '-' : '+'

    const { deleteTransaction } = useContext(GlobalContext)
  return (
    <li className={transaction.amount < 0? 'minus' : 'plus'}>
        {transaction.text} <span>{sign}Ksh{Math.abs(transaction.amount)}</span>
        <button className="btnDel" onClick={() => deleteTransaction(transaction.id)}>x</button>
    </li>
  )
}
