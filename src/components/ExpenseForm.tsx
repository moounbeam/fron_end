import React, { useState, type FormEvent } from "react";
import type { Expense } from "../App";

interface ExpenseFormProps {
  onAddExpense: (expense: Expense) => void;
}

export default function ExpenseForm({ onAddExpense }: ExpenseFormProps) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !category || !amount) return;

    const newExpense: Expense = {
      id: Date.now(),
      name,
      category,
      amount: parseFloat(amount),
      date: new Date().toLocaleDateString(),
    };

    onAddExpense(newExpense);

    // reset input
    setName("");
    setCategory("");
    setAmount("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-2xl p-4 max-w-md mx-auto mb-6"
    >
      <input
        type="text"
        placeholder="Nama pengeluaran"
        className="w-full border p-2 mb-2 rounded-md"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <select
        className="w-full border p-2 mb-2 rounded-md"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Pilih kategori</option>
        <option>Makanan 🍜</option>
        <option>Transportasi 🚗</option>
        <option>Belanja 🛍️</option>
        <option>Hiburan 🎮</option>
        <option>Lainnya 💡</option>
      </select>

      <input
        type="number"
        placeholder="Jumlah (Rp)"
        className="w-full border p-2 mb-2 rounded-md"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button className="w-full bg-orange-500 text-white rounded-md py-2 hover:bg-orange-600 transition">
        Tambah Pengeluaran
      </button>
    </form>
  );
}
