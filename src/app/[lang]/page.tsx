import { Card } from '@/components/ui/card'
import Link from 'next/link'

export default function LangHome({ params: { lang } }: { params: { lang: string } }) {
  const categories = [
    { id: 'javascript', title: lang === 'ar' ? 'جافا سكريبت' : 'JavaScript' },
    { id: 'react', title: lang === 'ar' ? 'رياكت' : 'React' },
    { id: 'nodejs', title: lang === 'ar' ? 'نود جي إس' : 'Node.js' }
  ]

  return (
    <div className="grid gap-6">
      <h1 className="text-4xl font-bold">
        {lang === 'ar' ? 'مرحباً بكم في أكاديمية سرور' : 'Welcome to Saror Academy'}
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Link key={category.id} href={`/${lang}/lessons/${category.id}`}>
            <Card className="p-6 hover:bg-gray-50 transition-colors">
              <h2 className="text-2xl font-semibold">{category.title}</h2>
              <p className="mt-2 text-gray-600">
                {lang === 'ar' 
                  ? 'استكشف الدروس والتمارين' 
                  : 'Explore lessons and exercises'}
              </p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
