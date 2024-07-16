
import './App.css';
import Header  from './components/header';
import  Balance  from './components/balance';
import  { IncomeExpenses } from './components/IncomeExpenses';
import  TransactionHistory  from './components/TransactionHistory';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
    <div className="App">
        <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionHistory />
        <AddTransaction />
      </div>
    </div>
    </GlobalProvider>
  );
}

export default App;
