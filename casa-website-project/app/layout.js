import './globals.css'

export const metadata = {
  title: 'CASCA',
  description: 'CASCA Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
