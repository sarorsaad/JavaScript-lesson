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
      {/* Progress Indicator */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-muted-foreground">
            {isArabic 
              ? `السؤال ${currentQuestion + 1} من ${questions.length}`
              : `Question ${currentQuestion + 1} of ${questions.length}`
            }
          </span>
          <span className="text-sm text-muted-foreground">
            {Math.round((currentQuestion + 1) / questions.length * 100)}%
          </span>
        </div>
        <div className="w-full bg-secondary/20 h-2 rounded-full overflow-hidden">
          <div 
            className="bg-secondary h-full rounded-full transition-all duration-300 ease-out"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-4">
        {isArabic ? question.textAr : question.text}
      </h3>
      
      <RadioGroup
        value={answers[question.id]}
        onValueChange={(value) => handleAnswer(question.id, value)}
        className="space-y-4"
      >
        {question.options.map((option) => {
          const isAnswered = answers[question.id] !== undefined;
          const isSelected = answers[question.id] === option.id;
          const isCorrect = question.correctOption === option.id;
          
          return (
            <div 
              key={option.id} 
              className={`flex items-center space-x-2 p-3 rounded-lg transition-colors
                ${isAnswered && isSelected
                  ? isCorrect
                    ? 'bg-green-50 dark:bg-green-950/20'
                    : 'bg-red-50 dark:bg-red-950/20'
                  : 'hover:bg-secondary/10'
                }
              `}
            >
              <RadioGroupItem value={option.id} id={option.id} />
              <Label 
                htmlFor={option.id}
                className={`${
                  isAnswered && isSelected
                    ? isCorrect
                      ? 'text-green-700 dark:text-green-300'
                      : 'text-red-700 dark:text-red-300'
                    : ''
                }`}
              >
                {isArabic ? option.textAr : option.text}
              </Label>
              {isAnswered && isSelected && (
                <span className="ms-auto">
                  {isCorrect 
                    ? (isArabic ? '✓ صحيح' : '✓ Correct')
                    : (isArabic ? '✗ خطأ' : '✗ Incorrect')
                  }
                </span>
              )}
            </div>
          );
        })}
      </RadioGroup>

      <div className="mt-8 flex justify-between">
        <Button
          variant="outline"
          onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
          disabled={currentQuestion === 0}
          className="min-w-[100px]"
        >
          {isArabic ? 'السابق' : 'Previous'}
        </Button>
        
        {currentQuestion === questions.length - 1 ? (
          <Button 
            onClick={handleSubmit}
            className="min-w-[100px]"
          >
            {isArabic ? 'إرسال' : 'Submit'}
          </Button>
        ) : (
          <Button
            onClick={() => setCurrentQuestion(prev => Math.min(questions.length - 1, prev + 1))}
            className="min-w-[100px]"
          >
            {isArabic ? 'التالي' : 'Next'}
          </Button>
        )}
      </div>
    </Card>
  )
}

export default QuizComponent
