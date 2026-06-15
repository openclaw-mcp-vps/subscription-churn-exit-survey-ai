import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ChurnShield AI — Exit Surveys That Save Subscriptions',
  description: 'AI-powered exit surveys that adapt to user behavior and deliver personalized retention offers. Reduce churn and keep more subscribers.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="26094215-899d-4dd7-9cf6-ad6aa7a291cd"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
