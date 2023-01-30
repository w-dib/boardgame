import Navbar from '@/components/Navbar'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className='pb-2 shadow sticky'>
        <Navbar/>
        </div>
        {children}</body>
    </html>
  )
}
