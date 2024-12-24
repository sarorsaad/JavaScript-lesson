'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

interface NavbarProps {
  lang: 'en' | 'ar'
}

const Navbar = React.forwardRef<HTMLDivElement, NavbarProps>(({ lang }, ref) => {
  const pathname = usePathname()
  const isArabic = lang === 'ar'
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navLinks = [
    { href: `/lessons/javascript`, label: isArabic ? 'جافا سكريبت' : 'JavaScript' },
    { href: `/lessons/react`, label: isArabic ? 'رياكت' : 'React' },
    { href: `/lessons/nodejs`, label: isArabic ? 'نود جي اس' : 'Node.js' },
  ]

  return (
    <nav ref={ref} className="bg-background border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className={`flex ${isArabic ? 'space-x-reverse' : 'space-x-8'}`}>
            <Link
              href={`/${lang}`}
              className={`flex items-center font-heading text-lg text-foreground hover:text-brand-primary transition-colors ${
                isArabic ? 'font-arabic' : ''
              }`}
            >
              {isArabic ? 'أكاديمية سرور' : 'Saror Academy'}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center ${isArabic ? 'space-x-reverse' : 'space-x-4'}`}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={`/${lang}${link.href}`}
                className={`text-foreground hover:text-brand-primary transition-colors ${
                  isArabic ? 'font-arabic' : ''
                } ${pathname?.includes(link.href) ? 'text-brand-primary font-medium' : ''}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={`/${isArabic ? 'en' : 'ar'}${pathname}`}
              className={`text-foreground hover:text-brand-primary transition-colors ${
                isArabic ? 'font-arabic' : ''
              }`}
            >
              {isArabic ? 'English' : 'العربية'}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-foreground hover:text-brand-primary transition-colors"
            aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden ${
            isOpen ? 'max-h-64' : 'max-h-0'
          } overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <div className={`flex flex-col py-2 ${isArabic ? 'space-y-reverse space-y-4' : 'space-y-4'}`}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={`/${lang}${link.href}`}
                className={`px-2 py-1 text-foreground hover:text-brand-primary transition-colors ${
                  isArabic ? 'font-arabic text-right' : ''
                } ${pathname?.includes(link.href) ? 'text-brand-primary font-medium' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={`/${isArabic ? 'en' : 'ar'}${pathname}`}
              className={`px-2 py-1 text-foreground hover:text-brand-primary transition-colors ${
                isArabic ? 'font-arabic text-right' : ''
              }`}
              onClick={() => setIsOpen(false)}
            >
              {isArabic ? 'English' : 'العربية'}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
})

Navbar.displayName = 'Navbar'

export default Navbar
