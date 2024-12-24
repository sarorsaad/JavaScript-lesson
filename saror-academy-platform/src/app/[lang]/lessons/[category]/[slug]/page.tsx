import { FC } from 'react'
import { getLesson, getLessonsByCategory } from '@/utils/lessons'
import { notFound } from 'next/navigation'
import dynamic from 'next/dynamic'

// Import client components with no SSR to prevent hydration issues
const ClientPage = dynamic(() => import('./ClientPage'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent" />
    </div>
  )
})

export function generateStaticParams() {
  try {
    const categories = ['javascript', 'react', 'nodejs']
    const languages = ['en', 'ar']
    const params = []
    
    for (const lang of languages) {
      for (const category of categories) {
        const lessons = getLessonsByCategory(category)
        if (!Array.isArray(lessons)) continue
        
        for (const lesson of lessons) {
          if (!lesson?.slug) continue
          params.push({ 
            lang: lang || 'en', 
            category, 
            slug: lesson.slug 
          })
        }
      }
    }
    
    return params
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

interface LessonPageProps {
  params: {
    lang: string
    category: string
    slug: string
  }
}

const LessonPage: FC<LessonPageProps> = ({ params }) => {
  const { lang, category, slug } = params || {}
  
  // Add defensive checks for required parameters
  if (!lang || !category || !slug) {
    return null
  }
  
  const lesson = getLesson(category, slug)
  const isArabic = lang === 'ar'

  if (!lesson) {
    notFound()
  }
  
  // Ensure all required properties have default values
  const {
    title = '',
    titleAr = '',
    description = '',
    descriptionAr = '',
    content = '',
    contentAr = '',
    hasQuiz = false,
    hasVideo = false
  } = lesson

  return (
    <ClientPage
      title={isArabic ? titleAr : title}
      description={isArabic ? descriptionAr : description}
      hasQuiz={hasQuiz}
      hasVideo={hasVideo}
      lang={lang}
      category={category}
      slug={slug}
      content={isArabic ? contentAr : content}
    />
  )
}

export default LessonPage
