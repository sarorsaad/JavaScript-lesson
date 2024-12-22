import React from 'react';
import LessonLayout from '@/components/lessons/LessonLayout';
import { LessonMeta } from '@/types/lesson';

const lessonMeta: LessonMeta = {
  title: 'ما هو React؟',
  description: 'تعرف على React، ميزاته الرئيسية، وسبب شعبيته في بناء واجهات المستخدم.',
  language: 'ar',
  category: 'react',
  level: 'beginner',
  order: 1,
};

export default function ReactIntroductionLesson() {
  return (
    <LessonLayout meta={lessonMeta}>
      <section className="mb-8" dir="rtl">
        <h2 className="text-2xl font-bold mb-4">التعريف</h2>
        <p className="mb-4">React هي مكتبة JavaScript لبناء واجهات المستخدم (User Interfaces)</p>
      </section>

      <section className="mb-8" dir="rtl">
        <h2 className="text-2xl font-bold mb-4">الميزات الرئيسية</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">١. مبني على المكونات</h3>
          <p className="mb-2">يمكنك بناء عناصر واجهة المستخدم المعزولة والقابلة لإعادة الاستخدام</p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">٢. تصريحي</h3>
          <p className="mb-2">تصف كيف يجب أن تبدو واجهة المستخدم في كل حالة</p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">٣. تعلم مرة واحدة، اكتب في أي مكان</h3>
          <p className="mb-2">يمكن استخدامه للويب، والموبايل (React Native)، وتطبيقات سطح المكتب</p>
        </div>
      </section>

      <section className="mb-8" dir="rtl">
        <h2 className="text-2xl font-bold mb-4">لماذا React؟</h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">١. الشعبية</h3>
          <p className="mb-2">أكثر مكتبة JavaScript شعبية لبناء واجهات المستخدم</p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">٢. دعم المجتمع</h3>
          <ul className="list-disc list-inside mb-2">
            <li>مجتمع كبير من المطورين</li>
            <li>نظام بيئي كبير من المكتبات والأدوات</li>
            <li>وثائق وموارد شاملة</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">٣. الأداء</h3>
          <ul className="list-disc list-inside mb-2">
            <li>DOM افتراضي للتحديثات الفعالة</li>
            <li>عرض محسّن</li>
            <li>تجربة مستخدم أفضل</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">٤. المرونة</h3>
          <ul className="list-disc list-inside mb-2">
            <li>يمكن استخدامه مع أي مكتبة أو إطار عمل آخر</li>
            <li>يعمل بشكل جيد مع الكود الموجود</li>
          </ul>
        </div>
      </section>
    </LessonLayout>
  );
}
