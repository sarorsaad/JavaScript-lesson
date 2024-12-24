'use client'

import { FC } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

interface LessonLayoutProps {
  title: string
  description: string
  objectives?: string[]
  prerequisites?: string[]
  outcomes?: string[]
  hasQuiz?: boolean
  hasVideo?: boolean
  lang: string
  category: string
  slug: string
  content?: string
  VideoPlayer?: React.ComponentType<{ videoUrl: string; lang: string }>
  QuizComponent?: React.ComponentType<{ category: string; slug: string; lang: string }>
}

const LessonLayout: FC<LessonLayoutProps> = ({
  title,
  description,
  objectives = [],
  prerequisites = [],
  outcomes = [],
  hasQuiz,
  hasVideo,
  lang,
  category,
  slug,
  content = '',
  VideoPlayer,
  QuizComponent
}) => {
  const isArabic = lang === 'ar'
  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight

  return (
    <div 
      className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 ${isArabic ? 'rtl' : 'ltr'}`}
      role="main"
      aria-label={isArabic ? `درس ${title}` : `Lesson: ${title}`}
    >
      <nav 
        className="mb-6 sm:mb-8"
        aria-label={isArabic ? 'التنقل في الدروس' : 'Lesson navigation'}
      >
        <Link
          href={`/${lang}/lessons/${category}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded text-sm sm:text-base transition-colors"
          aria-label={isArabic ? 'العودة إلى قائمة الدروس' : 'Return to lessons list'}
        >
          <ArrowIcon className="w-4 h-4 mr-2" aria-hidden="true" />
          <span>{isArabic ? 'العودة إلى الدروس' : 'Back to Lessons'}</span>
        </Link>
      </nav>

      <header className="mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">{title}</h1>
        <p className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300">{description}</p>
      </header>

      {prerequisites.length > 0 && (
        <section 
          className="mb-6 sm:mb-8 lg:mb-12"
          aria-labelledby="prerequisites-heading"
        >
          <h2 
            id="prerequisites-heading" 
            className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4"
          >
            {isArabic ? 'المتطلبات الأساسية' : 'Prerequisites'}
          </h2>
          <ul 
            className="list-disc list-inside space-y-1.5 sm:space-y-2" 
            role="list"
          >
            {prerequisites.map((prereq, index) => (
              <li 
                key={index} 
                className="text-sm sm:text-base text-gray-700 dark:text-gray-300"
              >
                {prereq}
              </li>
            ))}
          </ul>
        </section>
      )}

      {objectives.length > 0 && (
        <section 
          className="mb-6 sm:mb-8 lg:mb-12"
          aria-labelledby="objectives-heading"
        >
          <h2 
            id="objectives-heading" 
            className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4"
          >
            {isArabic ? 'أهداف التعلم' : 'Learning Objectives'}
          </h2>
          <ul 
            className="list-disc list-inside space-y-1.5 sm:space-y-2" 
            role="list"
          >
            {objectives.map((objective, index) => (
              <li 
                key={index} 
                className="text-sm sm:text-base text-gray-700 dark:text-gray-300"
              >
                {objective}
              </li>
            ))}
          </ul>
        </section>
      )}

      {hasVideo && (
        <section 
          className="mb-6 sm:mb-8 lg:mb-12"
          aria-labelledby="video-heading"
        >
          <h2 
            id="video-heading" 
            className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4"
          >
            {isArabic ? 'فيديو الدرس' : 'Lesson Video'}
          </h2>
          <div className="rounded-lg overflow-hidden shadow-lg">
            {VideoPlayer && (
              <VideoPlayer
                videoUrl={`/api/lessons/${category}/${slug}/video`}
                lang={lang}
              />
            )}
          </div>
        </section>
      )}

      <section 
        className="prose dark:prose-invert max-w-none prose-sm sm:prose-base lg:prose-lg mb-6 sm:mb-8 lg:mb-12"
        aria-label={isArabic ? 'محتوى الدرس' : 'Lesson content'}
        dangerouslySetInnerHTML={{ __html: content }}
      />

      {outcomes.length > 0 && (
        <section 
          className="mb-6 sm:mb-8 lg:mb-12"
          aria-labelledby="outcomes-heading"
        >
          <h2 
            id="outcomes-heading" 
            className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4"
          >
            {isArabic ? 'مخرجات التعلم' : 'Learning Outcomes'}
          </h2>
          <ul 
            className="list-disc list-inside space-y-1.5 sm:space-y-2" 
            role="list"
          >
            {outcomes.map((outcome, index) => (
              <li 
                key={index} 
                className="text-sm sm:text-base text-gray-700 dark:text-gray-300"
              >
                {outcome}
              </li>
            ))}
          </ul>
        </section>
      )}


      {hasQuiz && (
        <section 
          className="mt-8 sm:mt-12 lg:mt-16"
          aria-labelledby="quiz-heading"
        >
          <h2 
            id="quiz-heading" 
            className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4"
          >
            {isArabic ? 'اختبار قصير' : 'Quiz'}
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
            {QuizComponent && (
              <QuizComponent
                category={category}
                slug={slug}
                lang={lang}
              />
            )}
          </div>
        </section>
      )}
    </div>
  )
}

export default LessonLayout
