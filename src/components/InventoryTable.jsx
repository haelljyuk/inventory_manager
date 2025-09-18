import React from 'react'
export default function InventoryTable() {
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <caption className="sr-only">상품 재고 목록</caption>
          <thead className="bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200">
            <tr>
              <th scope="col" className="px-4 py-2 font-semibold text-left">SKU</th>
              <th scope="col" className="px-4 py-2 font-semibold text-left">상품명</th>
              <th scope="col" className="px-4 py-2 font-semibold text-left">카테고리</th>
              <th scope="col" className="px-4 py-2 font-semibold text-left">재고</th>
              <th scope="col" className="px-4 py-2 font-semibold text-left">안전재고</th>
              <th scope="col" className="px-4 py-2 font-semibold text-left">상태</th>
              <th scope="col" className="px-4 py-2 font-semibold text-left">작업</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
            <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
              <td className="px-4 py-2">—</td>
              <td className="px-4 py-2">—</td>
              <td className="px-4 py-2">—</td>
              <td className="px-4 py-2">0</td>
              <td className="px-4 py-2">0</td>
              <td className="px-4 py-2">대기</td>
              <td className="px-4 py-2 space-x-2">
                <button type="button" className="bg-white dark:bg-gray-900 text-sky-700 dark:text-sky-400 border border-sky-200 dark:border-gray-700 hover:bg-sky-50 dark:hover:bg-gray-800 px-3 py-1.5 rounded-md">수정</button>
                <button type="button" className="px-3 py-1.5 rounded-md bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-white">삭제</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
