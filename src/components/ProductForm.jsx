import React from 'react'
export default function ProductForm() {
  return (
    <form className="grid md:grid-cols-2 gap-4" aria-labelledby="product-form-heading">
      <div className="space-y-1">
        <label htmlFor="sku" className="text-sm font-medium text-gray-700">SKU</label>
        <input
          id="sku"
          name="sku"
          type="text"
          placeholder="예: SKU-001"
          className="block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
        />
      </div>
      <div className="space-y-1">
        <label htmlFor="name" className="text-sm font-medium text-gray-700">상품명</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="예: USB-C 케이블"
          className="block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
        />
      </div>
      <div className="space-y-1">
        <label htmlFor="category" className="text-sm font-medium text-gray-700">카테고리</label>
        <select
          id="category"
          name="category"
          className="block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
        >
          <option>액세서리</option>
          <option>주변기기</option>
          <option>소모품</option>
        </select>
      </div>
      <div className="space-y-1">
        <div className="grid grid-cols-2 gap-3" role="group" aria-label="수량 입력">
          <div className="space-y-1">
            <label htmlFor="stock" className="text-sm font-medium text-gray-700">재고</label>
            <input
              id="stock"
              name="stock"
              type="number"
              min="0"
              defaultValue="0"
              className="block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="safety" className="text-sm font-medium text-gray-700">안전재고</label>
            <input
              id="safety"
              name="safety"
              type="number"
              min="0"
              defaultValue="0"
              className="block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
        </div>
      </div>
      <div className="md:col-span-2 flex justify-end gap-2">
        <button type="submit" className="px-4 py-2 rounded-md bg-primary-600 text-white hover:bg-primary-700 transition">추가</button>
        <button type="reset" className="px-4 py-2 rounded-md bg-white text-gray-700 border border-gray-200 hover:bg-gray-50">초기화</button>
      </div>
    </form>
  )
}
