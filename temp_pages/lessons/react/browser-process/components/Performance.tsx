'use client';

import React from 'react';

export default function Performance() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Performance Optimization</h2>
      
      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-blue-800">Browser Optimizations</h3>
          <ul className="space-y-3">
            <li>
              <strong className="text-blue-700">Minimize Reflows</strong>
              <p className="text-gray-600">Batch DOM updates to reduce layout calculations</p>
              <p className="text-gray-600 font-arabic" dir="rtl">تجميع تحديثات DOM لتقليل حسابات التخطيط</p>
            </li>
            <li>
              <strong className="text-blue-700">Use RequestAnimationFrame</strong>
              <p className="text-gray-600">Sync updates with browser&apos;s render cycle</p>
              <p className="text-gray-600 font-arabic" dir="rtl">مزامنة التحديثات مع دورة عرض المتصفح</p>
            </li>
            <li>
              <strong className="text-blue-700">GPU Acceleration</strong>
              <p className="text-gray-600">Use transform and opacity for animations</p>
              <p className="text-gray-600 font-arabic" dir="rtl">استخدام التحويل والشفافية للرسوم المتحركة</p>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-blue-800">React Optimizations</h3>
          <ul className="space-y-3">
            <li>
              <strong className="text-blue-700">React.memo()</strong>
              <p className="text-gray-600">Prevent unnecessary re-renders</p>
              <p className="text-gray-600 font-arabic" dir="rtl">منع إعادة العرض غير الضرورية</p>
            </li>
            <li>
              <strong className="text-blue-700">useCallback &amp; useMemo</strong>
              <p className="text-gray-600">Cache functions and computed values</p>
              <p className="text-gray-600 font-arabic" dir="rtl">تخزين الدوال والقيم المحسوبة</p>
            </li>
            <li>
              <strong className="text-blue-700">Code Splitting</strong>
              <p className="text-gray-600">Load components only when needed</p>
              <p className="text-gray-600 font-arabic" dir="rtl">تحميل المكونات عند الحاجة فقط</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
