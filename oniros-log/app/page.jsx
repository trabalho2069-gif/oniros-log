import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>ONIROS-LOG</h1>
      <p>Sistema de registro longitudinal de estados oníricos.</p>

      <Link href="/registro">
        Iniciar Registro
      </Link>
    </main>
  );
}
