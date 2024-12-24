import { FC } from 'react'
import dynamic from 'next/dynamic'
import { getLessonsByCategory } from '@/utils/lessons'

const CategoryPageClient = dynamic(() => import('./CategoryPageClient'), {
  ssr: true
})

export function generateStaticParams() {
  try {
    const categories = ['javascript', 'react', 'nodejs']
    const languages = ['en', 'ar']
    const params = []

    for (const lang of languages) {
      for (const category of categories) {
        if (!category) continue
        params.push({ 
          lang: lang || 'en',
          category 
        })
      }
    }

    return params
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

interface CategoryPageProps {
  params: {
    lang: 'en' | 'ar'
    category: 'javascript' | 'react' | 'nodejs'
  }
}

const CategoryPage: FC<CategoryPageProps> = ({ params }) => {
  const { lang, category } = params || {}
  
  // Add defensive checks
  if (!lang || !category) {
    return null
  }
  
  const isArabic = lang === 'ar'
  const lessons = getLessonsByCategory(category) || []

  const categoryTitles: Record<string, { en: string; ar: string }> = {
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

  const title = categoryTitles[category]?.[lang] || category

  return <CategoryPageClient lang={lang} category={category} lessons={lessons} />
}

export default CategoryPage
