import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

// Struktur data pengeluaran
export interface Expense {
  id: number;
  name: string;
  category: string;
  amount: number;
  date: string;
}

export default function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const addExpense = (newExpense: Expense) => {
    setExpenses((prev) => [...prev, newExpense]);
  };

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-orange-200 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">💰 BudgetBuddy</h1>

      <ExpenseForm onAddExpense={addExpense} />

      <h2 className="text-xl font-semibold text-center my-4">
        Total Pengeluaran: Rp {total.toLocaleString("id-ID")}
      </h2>

      <ExpenseList expenses={expenses} />
    </div>
  );
}
