import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'
import BrowserTheme from '@/app/components/browserTheme'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Task Master',
  description: 'A minimal task manager',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">

      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

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
