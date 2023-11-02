import React, { useState, useEffect } from "react";
import TransactionList from "./Components/TransactionsList";
import TransactionForm from "./Components/TransactionForm";
import SearchBar from "./Components/SearchBar";
import "./App.css";

function App() {
  const [transaction, setTransaction] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (searchTerm) => {
    const filteredTransaction = transaction.filter((transaction) =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setTransaction(filteredTransaction);
  };

  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then((response) => response.json())
      .then((data) => setTransaction(data));
  }, []);

  return (
    <div className="app-container">
      <h1>Bank of Flatiron</h1>
      <SearchBar onSearch={handleSearch} setSearchTerm={setSearchTerm} />
      <TransactionForm />
      <TransactionList transaction={transaction} />
    </div>
  );
}

export default App;