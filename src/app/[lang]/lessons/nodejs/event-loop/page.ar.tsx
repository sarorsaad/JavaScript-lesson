import { FC } from 'react';
import LessonLayout from '@/components/lessons/LessonLayout';
import CodeBlock from '@/components/lessons/CodeBlock';

const NodeJSEventLoopArabic: FC = () => {
  return (
    <LessonLayout
      title="حلقة الأحداث في Node.js"
      description="فهم حلقة الأحداث والبرمجة غير المتزامنة في Node.js"
    >
      <section className="space-y-6 text-right" dir="rtl">
        <h2 className="text-2xl font-bold">هيكلية حلقة الأحداث</h2>
        <p>
          حلقة الأحداث هي مفهوم أساسي في Node.js يمكّن من إجراء عمليات الإدخال/الإخراج
          غير المتزامنة على الرغم من أن JavaScript أحادي المسار. تتعامل مع العمليات
          المتعددة بكفاءة من خلال هيكليتها المعتمدة على الأحداث.
        </p>

        <h3 className="text-xl font-semibold">المكونات الرئيسية</h3>
        <ul className="list-disc pr-6 space-y-2">
          <li>مكدس الاستدعاء - ينفذ الكود المتزامن</li>
          <li>واجهات برمجة Node - تتعامل مع العمليات غير المتزامنة</li>
          <li>قائمة انتظار الاستدعاءات - تخزن العمليات المكتملة</li>
          <li>حلقة الأحداث - تدير تدفق التنفيذ</li>
        </ul>

        <h3 className="text-xl font-semibold">مثال على الإدخال/الإخراج غير المتزامن</h3>
        <CodeBlock
          code={`// مثال على قراءة ملف بشكل غير متزامن
const fs = require('fs');

console.log('بدء قراءة الملف...');
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('محتويات الملف:', data);
});
console.log('متابعة المهام الأخرى...');`}
          language="javascript"
        />

        <h3 className="text-xl font-semibold">نظام الوحدات</h3>
        <p>
          يستخدم Node.js نظام وحدات CommonJS لتنظيم وإعادة استخدام الكود. يتم التعامل
          مع كل ملف كوحدة منفصلة لها نطاقها الخاص.
        </p>

        <CodeBlock
          code={`// math.js - تعريف الوحدة
module.exports = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b
};

// main.js - استخدام الوحدة
const math = require('./math');
console.log(math.add(5, 3));  // النتيجة: 8`}
          language="javascript"
        />
      </section>
    </LessonLayout>
  );
};

export default NodeJSEventLoopArabic;
