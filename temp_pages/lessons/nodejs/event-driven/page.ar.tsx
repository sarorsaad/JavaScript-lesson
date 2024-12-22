import { FC } from 'react';
import LessonLayout from '@/components/lessons/LessonLayout';
import CodeBlock from '@/components/lessons/CodeBlock';

const NodeJSEventDrivenArabic: FC = () => {
  return (
    <LessonLayout
      title="البرمجة المعتمدة على الأحداث في Node.js"
      description="تعلم عن البرمجة المعتمدة على الأحداث وفئة EventEmitter في Node.js"
    >
      <section className="space-y-6 text-right" dir="rtl">
        <h2 className="text-2xl font-bold">البرمجة المعتمدة على الأحداث</h2>
        <p>
          يستخدم Node.js هيكلية معتمدة على الأحداث حيث تقوم بعض الكائنات
          (تسمى &quot;مصدري الأحداث&quot;) بإصدار أحداث مسماة تؤدي إلى استدعاء المستمعين
          (دوال رد الفعل).
        </p>

        <h3 className="text-xl font-semibold">فئة EventEmitter</h3>
        <CodeBlock
          code={`const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// إضافة مستمع للحدث
myEmitter.on('userLoggedIn', (userId) => {
    console.log(\`المستخدم \${userId} قام بتسجيل الدخول\`);
});

// إصدار حدث
myEmitter.emit('userLoggedIn', 123);`}
          language="javascript"
        />

        <h3 className="text-xl font-semibold">مستمعون متعددون</h3>
        <CodeBlock
          code={`// يمكنك إضافة عدة مستمعين لنفس الحدث
myEmitter.on('userAction', (action) => {
    console.log(\`قام المستخدم بإجراء: \${action}\`);
});

myEmitter.on('userAction', (action) => {
    // تسجيل في التحليلات
    console.log(\`تحليلات: تتبع إجراء المستخدم \${action}\`);
});

// سيتم استدعاء كلا المستمعين
myEmitter.emit('userAction', 'نقر');`}
          language="javascript"
        />

        <h3 className="text-xl font-semibold">أحداث الخطأ</h3>
        <CodeBlock
          code={`// معالجة خاصة لأحداث الخطأ
myEmitter.on('error', (err) => {
    console.error('حدث خطأ:', err.message);
});

// إصدار حدث خطأ
myEmitter.emit('error', new Error('حدث خطأ ما'));`}
          language="javascript"
        />

        <div className="bg-yellow-50 p-4 rounded-lg mt-6">
          <h4 className="text-lg font-semibold text-yellow-800">أفضل الممارسات</h4>
          <ul className="list-disc pr-6 space-y-2 text-yellow-700">
            <li>معالجة أحداث الخطأ دائماً لمنع الانهيار</li>
            <li>إزالة المستمعين عند عدم الحاجة إليهم</li>
            <li>استخدام أسماء ذات معنى للأحداث</li>
            <li>النظر في استخدام مستمعي الأحداث العامة للتصحيح</li>
          </ul>
        </div>
      </section>
    </LessonLayout>
  );
};

export default NodeJSEventDrivenArabic;
