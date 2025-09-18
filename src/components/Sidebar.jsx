import React from 'react'
export default function Sidebar() {
  return (
    <aside className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4 shadow-sm" aria-label="보조 메뉴">
      <ul className="space-y-2">
        <li><button type="button" className="w-full justify-start px-3 py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800">전체 상품</button></li>
        <li><button type="button" className="w-full justify-start px-3 py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800">카테고리</button></li>
        <li><button type="button" className="w-full justify-start px-3 py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800">입출고 내역</button></li>
      </ul>
    </aside>
  )
}
