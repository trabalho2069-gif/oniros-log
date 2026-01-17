// app/api/entries/route.js
import { sql } from "@vercel/postgres";
import { createTableIfNotExists } from "../../../lib/db";

export async function POST(request) {
  await createTableIfNotExists();

  try {
    const {
      sleep_tension,
      emotional_state,
      dream_report,
      threat_presence,
      physical_symptom
    } = await request.json();

    await sql`
      INSERT INTO entries (
        sleep_tension,
        emotional_state,
        dream_report,
        threat_presence,
        physical_symptom
      )
      VALUES (
        ${sleep_tension},
        ${emotional_state},
        ${dream_report},
        ${threat_presence},
        ${physical_symptom}
      );
    `;

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function GET(request) {
  await createTableIfNotExists();

  try {
    const { rows } = await sql`
      SELECT * FROM entries
      ORDER BY created_at DESC
    `;

    return new Response(JSON.stringify(rows), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}