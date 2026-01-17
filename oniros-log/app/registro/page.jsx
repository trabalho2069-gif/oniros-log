import { useState } from "react";

export default function Registro() {
  const [form, setForm] = useState({});

  async function submit() {
    await fetch("/api/entries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    alert("Registro salvo com sucesso.");
  }

  return (
    <main>
      <h2>Registro Onírico Diário</h2>

      <label>Tensão corporal pré-sono (0–10)</label>
      <input
        type="number"
        min="0"
        max="10"
        onChange={e =>
          setForm({ ...form, sleep_tension: Number(e.target.value) })
        }
      />

      <label>Estado emocional predominante</label>
      <input
        onChange={e =>
          setForm({ ...form, emotional_state: e.target.value })
        }
      />

      <label>Relato onírico (descritivo, sem interpretação)</label>
      <textarea
        onChange={e =>
          setForm({ ...form, dream_report: e.target.value })
        }
      />

      <label>Presença de figuras ameaçadoras</label>
      <select
        onChange={e =>
          setForm({
            ...form,
            threat_presence: e.target.value === "true"
          })
        }
      >
        <option value="">Selecione</option>
        <option value="true">Sim</option>
        <option value="false">Não</option>
      </select>

      <label>Sintoma físico percebido ao despertar</label>
      <input
        onChange={e =>
          setForm({ ...form, physical_symptom: e.target.value })
        }
      />

      <button onClick={submit}>Salvar Registro</button>
    </main>
  );
}