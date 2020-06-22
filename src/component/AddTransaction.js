import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


const AddTransaction = () => {
    ///add income
    const {addIncome} = useContext(GlobalContext)
    
    

    const [income,setIncome] = useState({
        incomeText: "",
        incomeAmount: 0,
    })
    const {incomeText,incomeAmount} = income
    const onChangeIncome = e => {
        setIncome({...income,[e.target.name]: e.target.value});
 
        

    }
    const onSubmitIncome = (e)=> {
        e.preventDefault();
        if(incomeText !== ""){
            const newIncomeTransaction = {
                id: Math.floor(Math.random() * 10000),
                incomeText,
                incomeAmount: incomeAmount * 1,
            }
            addIncome(newIncomeTransaction);
            setIncome({
                incomeText: "",
                incomeAmount: 0
            })

        }
       
    
    }

    
    //add expense
    const {addExpense} = useContext(GlobalContext)

    const [expense,setExpense] = useState({
        expenseText: "",
        expenseAmount: 0
    })
    const {expenseText,expenseAmount} = expense

    const onChangeExpense = e => {
        setExpense({...expense,[e.target.name]: e.target.value})
    }
    const onSubmitExpense = (e) => {
        e.preventDefault();
        if(expenseText !== ""){
            const newExpenseTransaction = {
                id: Math.floor(Math.random() * 10000),
                expenseText,
                expenseAmount: expenseAmount * 1,
            }
            addExpense(newExpenseTransaction);
            setExpense({
                expenseText: "",
                expenseAmount: 0
            })

        }
        
    }
    return (
        <div className="form-wrapper">
            <form onSubmit={onSubmitIncome}>
                <div className="input-group income">
                    <input value={incomeText} name="incomeText" type="text" placeholder="Details" autoComplete="off" onChange={onChangeIncome}/><br/>
                    <input value={incomeAmount} name="incomeAmount" type="number" placeholder="Amount" autoComplete="off" onChange={onChangeIncome}/><br/>
                    <input type="submit" value="ADD" />
                </div>

            </form>
            <form onSubmit={onSubmitExpense}>
                <div className="input-group expense">
                    <input value={expenseText} name="expenseText" type="text" placeholder="Details" autoComplete="off" onChange={onChangeExpense}/><br/>
                    <input value={expenseAmount} name="expenseAmount" type="number" placeholder="Amount" autoComplete="off" onChange={onChangeExpense}/><br/>
                    <input type="submit" value="ADD" />
                </div>

            </form>
        </div>

    )
}
export default AddTransaction;
