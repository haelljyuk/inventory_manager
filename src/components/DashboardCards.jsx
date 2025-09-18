import React from 'react'
export default function DashboardCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <article className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm" aria-label="총 상품 수">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500">총 상품</h3>
        <p className="mt-2 text-2xl font-semibold text-gray-900">0</p>
      </article>
      <article className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm" aria-label="재고 부족 수">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500">재고 부족</h3>
        <p className="mt-2 text-2xl font-semibold text-gray-900">0</p>
      </article>
      <article className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm" aria-label="오늘 입고 수">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500">오늘 입고</h3>
        <p className="mt-2 text-2xl font-semibold text-gray-900">0</p>
      </article>
    </div>
  )
}
