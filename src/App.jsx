import React from 'react'
import Header from './components/Header.jsx'
import Sidebar from './components/Sidebar.jsx'
import DashboardCards from './components/DashboardCards.jsx'
import InventoryTable from './components/InventoryTable.jsx'
import ProductForm from './components/ProductForm.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <Header />
      <div className="flex-1">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-6">
          <Sidebar />
          <main className="space-y-8">
            <section aria-labelledby="dashboard-heading">
              <h2 id="dashboard-heading" className="text-base font-semibold text-gray-700 dark:text-gray-300 mb-3">대시보드</h2>
              <DashboardCards />
            </section>

            <section aria-labelledby="inventory-heading">
              <h2 id="inventory-heading" className="text-base font-semibold text-gray-700 dark:text-gray-300 mb-3">재고 테이블</h2>
              <InventoryTable />
            </section>

            <section aria-labelledby="product-form-heading">
              <h2 id="product-form-heading" className="text-base font-semibold text-gray-700 dark:text-gray-300 mb-3">상품 추가</h2>
              <ProductForm />
            </section>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  )
}
