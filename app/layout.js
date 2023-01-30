import Navbar from '@/components/Navbar'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className='pb-2 shadow sticky mb-3'>
        <Navbar/>
        </div>
        {children}</body>
    </html>
  )
}
