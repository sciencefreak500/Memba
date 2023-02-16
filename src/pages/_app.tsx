import '@/styles/globals.css'
import React, { useState } from 'react'
import type { AppProps } from 'next/app'

const DarkModeToggle = ({ children }: any) => {
  const [isDarkMode, setIsDarkMode] = useState(true)

  return (
    <div
      className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'
        } min-h-screen font-sans`}
    >
      {children}
    </div>
  )
}


export default function App({ Component, pageProps }: AppProps) {
  return (
    <DarkModeToggle>
      <Component {...pageProps} />
    </DarkModeToggle>
  )
}
