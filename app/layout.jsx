import './globals.css'
import { siteData } from '@/data/portfolio'

export const metadata = {
  title: `${siteData.name} — ${siteData.tagline}`,
  description: siteData.heroDescription,
  keywords: 'Flutter Developer, Full Stack Developer, Django, Python, MSc IT, Ahmedabad',
  openGraph: {
    title: siteData.name,
    description: siteData.heroDescription,
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className="bg-surface-950 text-cream font-body overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
