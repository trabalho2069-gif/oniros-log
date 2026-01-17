"use client";
import { useState } from "react";

export default function Registro() {
  const [form, setForm] = useState({});

  async function submit() {
    await fetch("/api/entries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    alert("Registro salvo");
  }

  return (
    <main>
      <h2>Registro Onírico</h2>

      <input
        type="number"
        placeholder="Tensão corporal (0–10)"
        onChange={e => setForm({ ...form, sleep_tension: Number(e.target.value) })}
      />

      <button onClick={submit}>Salvar</button>
    </main>
  );
}
