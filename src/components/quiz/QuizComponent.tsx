'use client'

import { FC, useState } from 'react'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'

interface Question {
  id: string
  text: string
  textAr: string
  options: {
    id: string
    text: string
    textAr: string
  }[]
  correctOption: string
}

interface QuizComponentProps {
  category: string
  slug: string
  lang: string
}

// This would typically come from an API
const mockQuestions: Question[] = [
  {
    id: '1',
    text: 'What is JavaScript?',
    textAr: 'ما هو جافا سكريبت؟',
    options: [
      {
        id: 'a',
        text: 'A programming language',
        textAr: 'لغة برمجة'
      },
      {
        id: 'b',
        text: 'A markup language',
        textAr: 'لغة توصيف'
      },
      {
        id: 'c',
        text: 'A styling language',
        textAr: 'لغة تنسيق'
      }
    ],
    correctOption: 'a'
  }
]

const QuizComponent: FC<QuizComponentProps> = ({ category, slug, lang }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [showResults, setShowResults] = useState(false)

  const isArabic = lang === 'ar'
  const questions = mockQuestions // Would fetch based on category and slug

  const handleAnswer = (questionId: string, optionId: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: optionId
    }))
  }

  const calculateScore = () => {
    let correct = 0
    Object.entries(answers).forEach(([questionId, answer]) => {
      const question = questions.find(q => q.id === questionId)
      if (question && question.correctOption === answer) {
        correct++
      }
    })
    return (correct / questions.length) * 100
  }

  const handleSubmit = () => {
    setShowResults(true)
  }

  if (showResults) {
    const score = calculateScore()
    return (
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">
          {isArabic ? 'النتيجة' : 'Results'}
        </h3>
        <p className="text-lg">
          {isArabic
            ? `لقد حصلت على ${score}٪`
            : `You scored ${score}%`}
        </p>
        <Button
          onClick={() => {
            setShowResults(false)
            setAnswers({})
          }}
          className="mt-4"
        >
          {isArabic ? 'حاول مرة أخرى' : 'Try Again'}
        </Button>
      </Card>
    )
  }

  const question = questions[currentQuestion]

  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-4">
        {isArabic ? question.textAr : question.text}
      </h3>
      
      <RadioGroup
        value={answers[question.id]}
        onValueChange={(value) => handleAnswer(question.id, value)}
        className="space-y-4"
      >
        {question.options.map((option) => (
          <div key={option.id} className="flex items-center space-x-2">
            <RadioGroupItem value={option.id} id={option.id} />
            <Label htmlFor={option.id}>
              {isArabic ? option.textAr : option.text}
            </Label>
          </div>
        ))}
      </RadioGroup>

      <div className="mt-6 flex justify-between">
        <Button
          variant="outline"
          onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
          disabled={currentQuestion === 0}
        >
          {isArabic ? 'السابق' : 'Previous'}
        </Button>
        
        {currentQuestion === questions.length - 1 ? (
          <Button onClick={handleSubmit}>
            {isArabic ? 'إرسال' : 'Submit'}
          </Button>
        ) : (
          <Button
            onClick={() => setCurrentQuestion(prev => Math.min(questions.length - 1, prev + 1))}
          >
            {isArabic ? 'التالي' : 'Next'}
          </Button>
        )}
      </div>
    </Card>
  )
}

export default QuizComponent
