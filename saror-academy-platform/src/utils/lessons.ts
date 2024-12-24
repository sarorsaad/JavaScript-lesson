interface Lesson {
  slug: string
  title: string
  titleAr: string
  description: string
  descriptionAr: string
  category: string
  hasQuiz?: boolean
  hasVideo?: boolean
  content?: string
  contentAr?: string
}

const lessons: Lesson[] = [
  {
    slug: 'introduction',
    title: 'Introduction to JavaScript',
    titleAr: 'مقدمة في جافا سكريبت',
    description: 'Learn the basics of JavaScript programming',
    descriptionAr: 'تعلم أساسيات برمجة جافا سكريبت',
    category: 'javascript',
    hasQuiz: true,
    content: '<h2>Welcome to JavaScript!</h2><p>JavaScript is a versatile programming language that powers the modern web. In this lesson, you will learn the fundamentals of JavaScript programming and understand why it\'s essential for web development.</p><h3>What is JavaScript?</h3><p>JavaScript is a high-level, interpreted programming language that enables interactive web pages. It\'s an essential part of web applications, allowing you to create dynamic content, control multimedia, animate images, and much more.</p>',
    contentAr: '<h2>مرحباً بك في جافا سكريبت!</h2><p>جافا سكريبت هي لغة برمجة متعددة الاستخدامات تدعم الويب الحديث. في هذا الدرس، ستتعلم أساسيات برمجة جافا سكريبت وتفهم لماذا هي ضرورية لتطوير الويب.</p><h3>ما هو جافا سكريبت؟</h3><p>جافا سكريبت هي لغة برمجة عالية المستوى ومفسرة تمكن صفحات الويب التفاعلية. إنها جزء أساسي من تطبيقات الويب، حيث تتيح لك إنشاء محتوى ديناميكي والتحكم في الوسائط المتعددة وتحريك الصور والكثير.</p>'
  },
  {
    slug: 'variables-datatypes',
    title: 'Variables and Data Types',
    titleAr: 'المتغيرات وأنواع البيانات',
    description: 'Understanding variables and data types in JavaScript',
    descriptionAr: 'فهم المتغيرات وأنواع البيانات في جافا سكريبت',
    category: 'javascript',
    hasQuiz: true,
    content: '<h2>Variables and Data Types in JavaScript</h2><p>Variables are containers for storing data values. JavaScript provides several data types to handle different kinds of values.</p><h3>Declaring Variables</h3><p>Use <code>let</code>, <code>const</code>, or <code>var</code> to declare variables. Each has its own scope and usage.</p><h3>Basic Data Types</h3><ul><li>String: Text values</li><li>Number: Numeric values</li><li>Boolean: true/false</li><li>Undefined: Variable without a value</li><li>Null: Intentional absence of value</li></ul>',
    contentAr: '<h2>المتغيرات وأنواع البيانات في جافا سكريبت</h2><p>المتغيرات هي حاويات لتخزين قيم البيانات. يوفر جافا سكريبت العديد من أنواع البيانات للتعامل مع مختلف أنواع القيم.</p><h3>إعلان المتغيرات</h3><p>استخدم <code>let</code> أو <code>const</code> أو <code>var</code> للإعلان عن المتغيرات. لكل منها نطاقه واستخدامه الخاص.</p><h3>أنواع البيانات الأساسية</h3><ul><li>النص: قيم نصية</li><li>الرقم: قيم رقمية</li><li>المنطقي: صح/خطأ</li><li>غير معرف: متغير بدون قيمة</li><li>فارغ: غياب متعمد للقيمة</li></ul>'
  },
  {
    slug: 'functions',
    title: 'Functions',
    titleAr: 'الدوال',
    description: 'Working with functions in JavaScript',
    descriptionAr: 'العمل مع الدوال في جافا سكريبت',
    category: 'javascript',
    hasQuiz: true,
    content: '<h2>Functions in JavaScript</h2><p>Functions are reusable blocks of code that perform specific tasks. They help organize code and make it more maintainable.</p><h3>Function Declaration</h3><pre><code>function greet(name) {\n  return "Hello, " + name;\n}</code></pre><h3>Arrow Functions</h3><p>ES6 introduced arrow functions, providing a more concise syntax:</p><pre><code>const greet = (name) => {\n  return "Hello, " + name;\n};</code></pre>',
    contentAr: '<h2>الدوال في جافا سكريبت</h2><p>الدوال هي كتل برمجية قابلة لإعادة الاستخدام تؤدي مهام محددة. تساعد في تنظيم الكود وجعله أكثر قابلية للصيانة.</p><h3>إعلان الدالة</h3><pre><code>function تحية(اسم) {\n  return "مرحباً، " + اسم;\n}</code></pre><h3>دوال السهم</h3><p>قدم ES6 دوال السهم، مما يوفر صيغة أكثر إيجازاً:</p><pre><code>const تحية = (اسم) => {\n  return "مرحباً، " + اسم;\n};</code></pre>'
  },
  {
    slug: 'objects',
    title: 'Objects',
    titleAr: 'الكائنات',
    description: 'Understanding JavaScript objects',
    descriptionAr: 'فهم الكائنات في جافا سكريبت',
    category: 'javascript',
    hasQuiz: true
  },
  {
    slug: 'dom-manipulation',
    title: 'DOM Manipulation',
    titleAr: 'التعامل مع DOM',
    description: 'Learn how to manipulate the DOM with JavaScript',
    descriptionAr: 'تعلم كيفية التعامل مع DOM باستخدام جافا سكريبت',
    category: 'javascript',
    hasQuiz: true
  },
  // React lessons
  {
    slug: 'introduction',
    title: 'Introduction to React',
    titleAr: 'مقدمة في رياكت',
    description: 'Get started with React development',
    descriptionAr: 'ابدأ مع تطوير رياكت',
    category: 'react',
    hasQuiz: true,
    hasVideo: true
  },
  {
    slug: 'components',
    title: 'React Components',
    titleAr: 'مكونات رياكت',
    description: 'Understanding React components',
    descriptionAr: 'فهم مكونات رياكت',
    category: 'react',
    hasQuiz: true
  },
  // Node.js lessons
  {
    slug: 'introduction',
    title: 'Introduction to Node.js',
    titleAr: 'مقدمة في نود جي اس',
    description: 'Get started with Node.js development',
    descriptionAr: 'ابدأ مع تطوير نود جي اس',
    category: 'nodejs',
    hasQuiz: true
  }
]

export const getLessonsByCategory = (category: string): Lesson[] => {
  if (!category || !Array.isArray(lessons)) return []
  return lessons.filter(lesson => {
    if (!lesson || typeof lesson.category !== 'string') return false
    return lesson.category === category
  })
}

export const getLesson = (category: string, slug: string): Lesson | undefined => {
  if (!category || !slug || !Array.isArray(lessons)) return undefined
  
  const lesson = lessons.find(lesson => {
    if (!lesson || typeof lesson.category !== 'string' || typeof lesson.slug !== 'string') return false
    return lesson.category === category && lesson.slug === slug
  })

  if (!lesson) return undefined

  // Ensure all required properties have default values
  return {
    ...lesson,
    title: lesson.title || '',
    titleAr: lesson.titleAr || '',
    description: lesson.description || '',
    descriptionAr: lesson.descriptionAr || '',
    content: lesson.content || '',
    contentAr: lesson.contentAr || '',
    hasQuiz: !!lesson.hasQuiz,
    hasVideo: !!lesson.hasVideo,
    category: lesson.category,
    slug: lesson.slug
  }
}

export default lessons
