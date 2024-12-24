'use client'

import Link from 'next/link'

interface HomePageClientProps {
  lang: string
}

export default function HomePageClient({ lang }: HomePageClientProps) {
  const isArabic = lang === 'ar'
  
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">
        {isArabic ? 'مرحباً بكم في أكاديمية سرور' : 'Welcome to Saror Academy'}
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link 
          href={`/${lang}/lessons/javascript`}
          className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
        >
          <h2 className="text-2xl font-semibold mb-2">JavaScript</h2>
          <p>{isArabic ? 'تعلم أساسيات JavaScript' : 'Learn JavaScript fundamentals'}</p>
        </Link>
        
        <Link 
          href={`/${lang}/lessons/react`}
          className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
        >
          <h2 className="text-2xl font-semibold mb-2">React</h2>
          <p>{isArabic ? 'ابدأ رحلتك مع React' : 'Start your React journey'}</p>
        </Link>
        
        <Link 
          href={`/${lang}/lessons/nodejs`}
          className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
        >
          <h2 className="text-2xl font-semibold mb-2">Node.js</h2>
          <p>{isArabic ? 'اكتشف تطوير الخادم مع Node.js' : 'Discover server-side development with Node.js'}</p>
        </Link>
      </div>
    </main>
  )
}
