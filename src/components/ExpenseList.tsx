import React from "react";
import { type Expense } from "../App";
import ExpenseItem from "./ExpenseItem";

interface ExpenseListProps {
  expenses: Expense[];
}

export default function ExpenseList({ expenses }: ExpenseListProps) {
  if (expenses.length === 0) {
    return <p className="text-center text-gray-600">Belum ada pengeluaran.</p>;
  }

  return (
    <div className="max-w-md mx-auto space-y-3">
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </div>
  );
}
