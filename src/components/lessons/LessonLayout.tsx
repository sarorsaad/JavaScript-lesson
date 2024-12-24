'use client'

import { FC } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const VideoPlayer = dynamic(() => import('../video/VideoPlayer'), { ssr: false })
const QuizComponent = dynamic(() => import('../quiz/QuizComponent'), { ssr: false })

interface LessonLayoutProps {
  title: string
  description: string
  hasQuiz?: boolean
  hasVideo?: boolean
  lang: string
  category: string
  slug: string
  content?: string
}

const LessonLayout: FC<LessonLayoutProps> = ({
  title,
  description,
  hasQuiz,
  hasVideo,
  lang,
  category,
  slug,
  content = ''
}) => {
  const isArabic = lang === 'ar'
  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight

  return (
    <div className={`max-w-4xl mx-auto px-4 py-8 ${isArabic ? 'rtl' : 'ltr'}`}>
      <Link
        href={`/${lang}/lessons/${category}`}
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
      >
        <ArrowIcon className="w-4 h-4 mr-2" />
        <span>{isArabic ? 'العودة إلى الدروس' : 'Back to Lessons'}</span>
      </Link>

      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-gray-600 mb-8">{description}</p>

      {hasVideo && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {isArabic ? 'فيديو الدرس' : 'Lesson Video'}
          </h2>
          <VideoPlayer
            videoUrl={`/api/lessons/${category}/${slug}/video`}
            lang={lang}
          />
        </div>
      )}

      <div 
        className="prose max-w-none mb-8"
        dangerouslySetInnerHTML={{ __html: content }}
      />

      {hasQuiz && (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">
            {isArabic ? 'اختبار قصير' : 'Quiz'}
          </h2>
          <QuizComponent
            category={category}
            slug={slug}
            lang={lang}
          />
        </div>
      )}
    </div>
  )
}

export default LessonLayout
