import './App.css'
import { useState } from 'react'
function App() {
  //**
  //* State variables to store user input and output
  const [balance, setBalance] = useState(0);
  const [rate, setRate] = useState(0);
  const [term, setTerm] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState();
  //**
  //* Function to handle input changes
  const handleBalanceChange = (e) => {
    setBalance(e.target.value);
  };
  const handleRateChange = (e) => {
    setRate(e.target.value);
  };
  const handleTermChange = (e) => {
    setTerm(e.target.value);
  };
  //**  
  //* Function to calculate monthly payment
  //* Formula: M = P[r(1 + r)^n] / [(1 + r)^n – 1]
  
  function calculateMonthlyPayment(balance, rate, term) {
    const monthlyRate = rate / 100 / 12;
    const numberOfPayments = term * 12;
    const monthlyPayment = (balance * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
    return monthlyPayment.toFixed(2);
  }
  //**
  //* Function to handle button click
  const handleClick = () => {
    const payment = calculateMonthlyPayment(balance, rate, term);
    setMonthlyPayment(`$${payment} is your payment`);
  }
   
//**
  //* Function to handle form submission
  return (
    <>
    <div className='container'>
    <h1>Mortgage Calculator</h1>
    <form>
      <label htmlFor="balance">Balance</label>
    <input data-testid="balance" className='input' value={balance} onChange={handleBalanceChange} type="number" placeholder="Balance" />
    <label htmlFor="rate">Rate</label>    
    <input data-testid= "rate" value={rate} className ="input"onChange={handleRateChange} type="number" placeholder="Rate" />
    <label htmlFor="term">Term</label>
    <select data-testid="term" value={term} className='select' onChange={handleTermChange} placeholder="Term">
      <option value="15">15 Years</option>
      <option value="30">30 Years</option>
    </select>
    <button data-testid="submit" className='submit' type="button" onClick={handleClick} >Calculate</button>
    </form>
    <div data-testid="output" className='output'>{monthlyPayment}</div>
      
    </div>
    </>
  )
}

export default App
