import './globals.css'

export const metadata = {
  title: 'CASA',
  description: 'CASA Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
