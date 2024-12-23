import { Navbar } from '@/components/navigation/Navbar'

type Props = {
  children: React.ReactNode
  params: {
    lang: string
  }
}

export default function RootLayout(props: Props) {
  const currentLang = props.params.lang as 'en' | 'ar'
  
  return (
    <div dir={currentLang === 'ar' ? 'rtl' : 'ltr'} 
         className="min-h-screen" lang={currentLang}>
      <Navbar lang={currentLang} />
      <main className="container mx-auto px-4 py-8">
        {props.children}
      </main>
    </div>
  )
}
