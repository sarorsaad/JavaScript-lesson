'use client';

import React from 'react';
// Removed unused import

export default function BrowserArchitecture() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Browser Architecture</h2>
      
      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-blue-800">Main Components</h3>
          <ul className="space-y-3">
            <li>
              <strong className="text-blue-700">User Interface</strong>
              <p className="text-gray-600">Address bar, buttons, menus</p>
              <p className="text-gray-600 font-arabic" dir="rtl">شريط العنوان، الأزرار، القوائم</p>
            </li>
            <li>
              <strong className="text-blue-700">Browser Engine</strong>
              <p className="text-gray-600">Manages actions between UI and rendering engine</p>
              <p className="text-gray-600 font-arabic" dir="rtl">يدير الإجراءات بين واجهة المستخدم ومحرك العرض</p>
            </li>
            <li>
              <strong className="text-blue-700">Rendering Engine</strong>
              <p className="text-gray-600">Responsible for displaying content</p>
              <p className="text-gray-600 font-arabic" dir="rtl">مسؤول عن عرض المحتوى</p>
            </li>
            <li>
              <strong className="text-blue-700">JavaScript Engine (V8)</strong>
              <p className="text-gray-600">Executes JavaScript code</p>
              <p className="text-gray-600 font-arabic" dir="rtl">ينفذ كود جافا سكريبت</p>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-blue-800">Process Flow</h3>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded">
              <p className="text-gray-800">1. Parse HTML → DOM Tree</p>
              <p className="text-gray-800 font-arabic" dir="rtl">١. تحليل HTML → شجرة DOM</p>
            </div>
            <div className="p-4 bg-blue-50 rounded">
              <p className="text-gray-800">2. Parse CSS → CSSOM Tree</p>
              <p className="text-gray-800 font-arabic" dir="rtl">٢. تحليل CSS → شجرة CSSOM</p>
            </div>
            <div className="p-4 bg-blue-50 rounded">
              <p className="text-gray-800">3. Combine → Render Tree</p>
              <p className="text-gray-800 font-arabic" dir="rtl">٣. الدمج → شجرة العرض</p>
            </div>
            <div className="p-4 bg-blue-50 rounded">
              <p className="text-gray-800">4. Layout → Paint → Composite</p>
              <p className="text-gray-800 font-arabic" dir="rtl">٤. التخطيط → الرسم → التركيب</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
