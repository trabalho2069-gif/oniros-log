// app/layout.jsx
import '../styles/globals.css'

export const metadata = {
  title: 'ONIROS-LOG',
  description: 'Sistema de registro longitudinal de estados oníricos e fisiológicos',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body style={{ 
        fontFamily: 'system-ui, sans-serif', 
        padding: 20,
        maxWidth: 600,
        margin: '0 auto'
      }}>
        {children}
      </body>
    </html>
  )
}