// app/page.jsx
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>ONIROS-LOG</h1>
      <p>
        Sistema de registro longitudinal de estados oníricos e fisiológicos.
      </p>

      <Link href="/registro">
        <button>Iniciar Registro</button>
      </Link>

      <p style={{ marginTop: 20, fontSize: 12 }}>
        Ferramenta de observação. Não diagnóstica. Não terapêutica.
      </p>
    </main>
  );
}