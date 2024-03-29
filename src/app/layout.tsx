import type { Metadata } from 'next'
import './globals.css'
import { cn } from '@/lib/utils'
import localFont from 'next/font/local'

const pretendard = localFont({ src: './PretendardVariable.woff2' })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={pretendard.className}>
        <div className="mx-auto min-h-screen max-w-screen-mobile bg-white">
          {children}
        </div>
      </body>
    </html>
  )
}
