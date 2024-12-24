import * as React from 'react'
import dynamic from 'next/dynamic'
import type { ReactNode } from 'react'

const Navbar = dynamic(() => import('@/components/navigation/Navbar'), { ssr: true })

interface LayoutContentProps {
  children: ReactNode
  lang: 'en' | 'ar'
}

const LayoutContent = React.forwardRef<HTMLDivElement, LayoutContentProps>(({ children, lang }, ref) => {
  return (
    <div ref={ref} className={`min-h-screen ${lang === 'ar' ? 'rtl' : 'ltr'}`}>
      <Navbar lang={lang} />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-gray-100 py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">
            {lang === 'ar' ? 'جميع الحقوق محفوظة © أكاديمية سرور' : '© Saror Academy. All rights reserved.'}
          </p>
        </div>
      </footer>
    </div>
  )
})

LayoutContent.displayName = 'LayoutContent'

export default LayoutContent
