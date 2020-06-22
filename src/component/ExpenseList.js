import React, { useContext } from 'react';
import {GlobalContext} from '../context/GlobalState'
import ExpenseTransaction from './ExpenseTransaction';

const ExpenseList = () => {
    const {expenseTransactions} = useContext(GlobalContext)
    console.log(expenseTransactions)
    return (
        <div className="transactions transactions-expense">
            <h2>Expenses</h2>
            <ul className="transaction-list">
                {expenseTransactions.map(expenseTransaction => (
                     <ExpenseTransaction  key={expenseTransaction.id} expenseTransactions={expenseTransaction}/>

                ))}
               
            </ul>
        </div>

    )
}
export default ExpenseList;
