'use client'

import { FC } from 'react'
import dynamic from 'next/dynamic'

const VideoPlayer = dynamic(() => import('../video/VideoPlayer'))
const QuizComponent = dynamic(() => import('../quiz/QuizComponent'))
const LessonLayout = dynamic(() => import('./LessonLayout'))

interface ClientLessonWrapperProps {
  title: string
  description: string
  hasQuiz: boolean
  hasVideo: boolean
  lang: string
  category: string
  slug: string
  content: string
}

const ClientLessonWrapper: FC<ClientLessonWrapperProps> = ({
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
      VideoPlayer={VideoPlayer}
      QuizComponent={QuizComponent}
    />
  )
}

export default ClientLessonWrapper
