import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className='pb-2 shadow fixed top-0 left-0 right-0 mb-3 z-40 bg-white'>

        </div>
        {children}</body>
    </html>
  )
}
