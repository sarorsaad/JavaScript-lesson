'use client'

import { FC } from 'react'
import Link from 'next/link'

interface CategoryPageClientProps {
  lang: string
  category: string
  lessons: Array<{
    slug: string
    title: string
    titleAr: string
    description: string
    descriptionAr: string
  }>
}

const CategoryPageClient: FC<CategoryPageClientProps> = ({ lang, category, lessons }) => {
  const isArabic = lang === 'ar'
  
  type CategoryKey = 'javascript' | 'react' | 'nodejs'
  type LangKey = 'en' | 'ar'
  
  const categoryTitles: Record<CategoryKey, Record<LangKey, string>> = {
    javascript: {
      en: 'JavaScript Lessons',
      ar: 'دروس جافا سكريبت'
    },
    react: {
      en: 'React Lessons',
      ar: 'دروس رياكت'
    },
    nodejs: {
      en: 'Node.js Lessons',
      ar: 'دروس نود جي اس'
    }
  }

  const title = categoryTitles[category as CategoryKey]?.[lang as LangKey] || category

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">{title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lessons.map((lesson) => (
          <Link
            key={lesson.slug}
            href={`/${lang}/lessons/${category}/${lesson.slug}`}
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">
              {isArabic ? lesson.titleAr : lesson.title}
            </h2>
            <p className="text-gray-600">
              {isArabic ? lesson.descriptionAr : lesson.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CategoryPageClient
