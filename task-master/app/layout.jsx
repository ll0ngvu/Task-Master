'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Task Master',
  description: 'A minimal task manager',
}

export default function RootLayout({ children }) {

  const [isDark, setIsDark] = useState(false);

  // Function to update the theme color meta tag
  const updateThemeColor = () => {
    const themeColor = isDark ? '#000000' : '#ffffff';
    document.querySelector('meta[name="theme-color"]').setAttribute('content', themeColor);
  };

  // Effect to update the theme color whenever the theme state changes
  useEffect(() => {
    updateThemeColor();
  }, [isDark]);

  // Toggle theme (you can replace this with your actual theme toggle logic)
  const toggleTheme = () => {
    setIsDark(!isDark);
  };


  return (
    <html lang="en">

      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        {/* Top Bar Colour for browsers in mobile devices */}
        {/* <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" /> */}

        {/* Single theme-color meta tag to be updated dynamically */}
        <meta name="theme-color" content="#ffffff" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="./public/logo.png" sizes="any" />

      </Head>

      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
