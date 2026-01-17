import { sql } from "@vercel/postgres";

export async function createTableIfNotExists() {
  await sql`
    CREATE TABLE IF NOT EXISTS entries (
      id SERIAL PRIMARY KEY,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      sleep_tension INT,
      emotional_state TEXT,
      dream_report TEXT,
      threat_presence BOOLEAN,
      physical_symptom TEXT
    );
  `;
}