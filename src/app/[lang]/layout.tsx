import { Navbar } from '@/components/navigation/Navbar'
import { Inter, Noto_Sans_Arabic } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const notoSansArabic = Noto_Sans_Arabic({ 
  subsets: ['arabic'],
  variable: '--font-noto-sans-arabic',
})

export default function LangLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <div dir={lang === 'ar' ? 'rtl' : 'ltr'} 
         className={`${lang === 'ar' ? notoSansArabic.variable : inter.className} min-h-screen`}>
      <Navbar lang={lang} />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  )
}
