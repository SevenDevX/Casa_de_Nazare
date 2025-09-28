import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Casa de Nazaré - Acolhimento e Serviços Sociais",
  description:
    "Casa de Nazaré oferece serviços de psicoterapia, fonoaudiologia, psicopedagogia e atividades culturais para a comunidade desde 2000.",
  generator: "v0.app",
  manifest: "/manifest.json",
  themeColor: "#C23B2D",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Casa de Nazaré",
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/icons/icon-16x16.jpg", sizes: "16x16", type: "image/jpeg" },
      { url: "/icons/icon-32x32.jpg", sizes: "32x32", type: "image/jpeg" },
    ],
    apple: [{ url: "/icons/icon-192x192.jpg", sizes: "192x192", type: "image/jpeg" }],
  },
  other: {
    "msapplication-TileColor": "#C23B2D",
    "msapplication-config": "/browserconfig.xml",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
