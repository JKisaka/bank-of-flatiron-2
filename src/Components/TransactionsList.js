import React from "react";
import Transaction from "./Transaction";

function TransactionList({ transaction }) { // Use object destructuring to access transactions
  const list = transaction.map((item) => (
    <Transaction
      key={item.id}
      date={item.date}
      description={item.description}
      category={item.category}
      amount={item.amount}
    />
  ));

  return <div>{list}</div>;
}

export default TransactionList;