import React, { useContext } from 'react';
import {GlobalContext} from '../context/GlobalState'

const Balance = () => {
    const  {incomeTransactions,expenseTransactions} = useContext(GlobalContext);
    const incomeAmounts = incomeTransactions.map(
        incomeTransactions => incomeTransactions.incomeAmount
    )
    const expenseAmounts = expenseTransactions.map(
        expenseTransactions => expenseTransactions.expenseAmount
    )
     const totalIncome = incomeAmounts.reduce((acc,item) => (acc += item),0).toFixed(0)
     const totalExpense = expenseAmounts.reduce((acc,item) => (acc += item),0).toFixed(0)

    return (
        <div className="balance">
            <h2>Balance</h2>
            <h2>${(totalIncome - totalExpense).toFixed(0)}</h2>
            <div className="income-expense">
                <div className="plus">
                    <h3>Income</h3>
                    <p>+${totalIncome}</p>
                </div>
                <div className="minus">
                    <h3>Expense</h3>
                    <p>-${totalExpense}</p>
                </div>
            </div>
        </div>
    )
}
export default Balance;
