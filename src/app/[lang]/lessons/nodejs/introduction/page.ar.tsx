import { FC } from 'react';
import LessonLayout from '@/components/lessons/LessonLayout';
import CodeBlock from '@/components/lessons/CodeBlock';

const NodeJSIntroductionArabic: FC = () => {
  return (
    <LessonLayout
      title="مقدمة في Node.js"
      description="تعرف على Node.js وميزاته وكيفية البدء في برمجة جافا سكريبت على جانب الخادم"
    >
      <section className="space-y-6 text-right" dir="rtl">
        <h2 className="text-2xl font-bold">ما هو Node.js؟</h2>
        <p>
          Node.js هو بيئة تشغيل تتيح لك تنفيذ كود جافا سكريبت خارج متصفح الويب.
          يمكنك من بناء تطبيقات شبكية قابلة للتطوير وتشغيل جافا سكريبت على جانب الخادم.
        </p>

        <h3 className="text-xl font-semibold">الميزات الرئيسية</h3>
        <ul className="list-disc pr-6 space-y-2">
          <li>نموذج مدفوع بالأحداث، مع معالجة غير متزامنة للإدخال/الإخراج</li>
          <li>مبني على محرك V8 جافا سكريبت من كروم</li>
          <li>نظام بيئي غني مع npm (مدير حزم Node)</li>
          <li>توافق عبر المنصات المختلفة</li>
        </ul>

        <h3 className="text-xl font-semibold">البدء مع Node.js</h3>
        <CodeBlock
          code={`// مرحباً بالعالم في Node.js
console.log('مرحباً من Node.js!');

// إنشاء خادم HTTP بسيط
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('مرحباً بالعالم\\n');
});


server.listen(3000, () => {
  console.log('الخادم يعمل على http://localhost:3000/');
});`}
          language="javascript"
        />

        <h3 className="text-xl font-semibold">الاستخدامات الشائعة</h3>
        <ul className="list-disc pr-6 space-y-2">
          <li>خوادم الويب وواجهات برمجة التطبيقات</li>
          <li>تطبيقات الوقت الفعلي</li>
          <li>أدوات سطر الأوامر</li>
          <li>هندسة الخدمات المصغرة</li>
        </ul>
      </section>
    </LessonLayout>
  );
};

export default NodeJSIntroductionArabic;
