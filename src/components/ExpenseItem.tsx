import React from "react";
import { type Expense } from "../App";

interface ExpenseItemProps {
  expense: Expense;
}

export default function ExpenseItem({ expense }: ExpenseItemProps) {
  return (
    <div className="bg-white shadow-sm rounded-xl p-3 border border-orange-200">
      <p className="font-semibold text-lg">{expense.name}</p>
      <p className="text-sm text-gray-600">{expense.category}</p>
      <p className="text-sm text-gray-800 mt-1">
        Jumlah:{" "}
        <span className="font-semibold">
          Rp {expense.amount.toLocaleString("id-ID")}
        </span>
      </p>
      <p className="text-xs text-gray-400 text-right">{expense.date}</p>
    </div>
  );
}
