import React from 'react'

export default function Header() {
  function toggleDarkMode() {
    const root = document.documentElement
    if (root.classList.contains('dark')) {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
  }

  React.useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark') document.documentElement.classList.add('dark')
  }, [])

  return (
    <header className="sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 text-gray-900 dark:text-white/90 backdrop-blur border-b border-gray-200 dark:border-gray-800" role="banner">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <h1 className="text-lg font-semibold">재고 관리</h1>
        <nav aria-label="주요 메뉴" className="flex items-center gap-4">
          <ul className="flex items-center gap-6 text-sm">
            <li><a className="text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-white transition" href="#dashboard-heading">대시보드</a></li>
            <li><a className="text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-white transition" href="#inventory-heading">재고</a></li>
            <li><a className="text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-white transition" href="#product-form-heading">상품 추가</a></li>
          </ul>
          <button type="button" onClick={toggleDarkMode} className="px-3 py-1.5 rounded-md bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-white transition text-sm">
            다크 모드
          </button>
        </nav>
      </div>
    </header>
  )
}
