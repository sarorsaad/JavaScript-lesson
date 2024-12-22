import { FC } from 'react';
import LessonLayout from '@/components/lessons/LessonLayout';
import CodeBlock from '@/components/lessons/CodeBlock';

const NodeJSGettingStartedArabic: FC = () => {
  return (
    <LessonLayout
      title="البدء مع Node.js"
      description="تعلم كيفية إعداد Node.js وإنشاء مشروعك الأول"
    >
      <section className="space-y-6 text-right" dir="rtl">
        <h2 className="text-2xl font-bold">دليل التثبيت</h2>
        <p>
          للبدء في التطوير باستخدام Node.js، ستحتاج إلى تثبيته على نظامك.
          يأتي Node.js مع npm (مدير حزم Node) الذي يساعدك في إدارة تبعيات المشروع.
        </p>

        <h3 className="text-xl font-semibold">الخطوة 1: التحميل والتثبيت</h3>
        <ul className="list-disc pr-6 space-y-2">
          <li>قم بزيارة <a href="https://nodejs.org" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">nodejs.org</a></li>
          <li>قم بتحميل نسخة LTS (الدعم طويل المدى)</li>
          <li>اتبع تعليمات التثبيت الخاصة بنظام التشغيل لديك</li>
        </ul>

        <h3 className="text-xl font-semibold">الخطوة 2: التحقق من التثبيت</h3>
        <CodeBlock
          code={`# التحقق من إصدار Node.js
node --version

# التحقق من إصدار npm
npm --version`}
          language="bash"
        />

        <h3 className="text-xl font-semibold">الخطوة 3: إنشاء مشروعك الأول</h3>
        <CodeBlock
          code={`# إنشاء مجلد جديد
mkdir my-node-project
cd my-node-project

# تهيئة مشروع Node.js جديد
npm init

# اتبع التعليمات لإنشاء ملف package.json`}
          language="bash"
        />

        <h3 className="text-xl font-semibold">الخطوة 4: إنشاء أول سكريبت</h3>
        <CodeBlock
          code={`// index.js
console.log('مرحباً بك في Node.js!');

// للتشغيل استخدم:
// node index.js`}
          language="javascript"
        />

        <div className="bg-blue-50 p-4 rounded-lg mt-6">
          <h4 className="text-lg font-semibold text-blue-800">نصائح احترافية</h4>
          <ul className="list-disc pr-6 space-y-2 text-blue-700">
            <li>استخدم نظام التحكم في الإصدارات (git) لمشاريعك</li>
            <li>قم بإنشاء ملف .gitignore لاستثناء مجلد node_modules</li>
            <li>وثّق مشروعك باستخدام ملف README.md</li>
            <li>اتبع الإصدارات الدلالية لحزمك</li>
          </ul>
        </div>
      </section>
    </LessonLayout>
  );
};

export default NodeJSGettingStartedArabic;
