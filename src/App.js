import React from 'react';
import Header from './component/Header';
import Balance from './component/Balance';
import AddTransaction from './component/AddTransaction';
import IncomeList from './component/Incomelist';
import ExpenseList from './component/ExpenseList';
import { GlobalContextProvider } from './context/GlobalState';
//import css
import './App.css'





function App() {
  return (
    <GlobalContextProvider>
    <div className="container">
      <div className="app-wrapper">
        <Header />
        <Balance />
        <AddTransaction />
        <IncomeList />
        <ExpenseList />
        
      </div>
    </div>
    </GlobalContextProvider>

  );
}
export default App;