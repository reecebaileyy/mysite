import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Reece Bailey',
  description: 'Made with love <3',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-dark-blue'>{children}</body>
    </html>
  )
}
