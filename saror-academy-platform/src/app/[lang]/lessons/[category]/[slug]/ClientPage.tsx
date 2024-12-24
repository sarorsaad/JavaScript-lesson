'use client'

import { FC } from 'react'
import dynamic from 'next/dynamic'

const VideoPlayer = dynamic(() => import('@/components/video/VideoPlayer'))
const QuizComponent = dynamic(() => import('@/components/quiz/QuizComponent'))
const LessonLayout = dynamic(() => import('@/components/lessons/LessonLayout'))

interface ClientPageProps {
  title: string
  description: string
  hasQuiz: boolean
  hasVideo: boolean
  lang: string
  category: string
  slug: string
  content: string
}

const ClientPage: FC<ClientPageProps> = ({
  title,
  description,
  hasQuiz,
  hasVideo,
  lang,
  category,
  slug,
  content
}) => {
  return (
    <LessonLayout
      title={title}
      description={description}
      hasQuiz={hasQuiz}
      hasVideo={hasVideo}
      lang={lang}
      category={category}
      slug={slug}
      content={content}
    />
  )
}

export default ClientPage
