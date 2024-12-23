import { Navbar } from '@/components/navigation/Navbar'

export default function LangLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <div dir={lang === 'ar' ? 'rtl' : 'ltr'} 
         className="min-h-screen" lang={lang}>
      <Navbar lang={lang} />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  )
}
