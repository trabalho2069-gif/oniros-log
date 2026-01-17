import "../styles/globals.css";

export const metadata = {
  title: "ONIROS-LOG",
  description: "Registro longitudinal de estados oníricos e fisiológicos"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
