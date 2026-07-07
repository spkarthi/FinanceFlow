import { useState } from 'react'

function App() {
  return (
    <div className="min-h-screen bg-neutral-50 p-8">
      {/* Header */}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-neutral-900 mb-2">FinanceFlow</h1>
        <p className="text-lg text-neutral-600 mb-12">Design System & Color Palette Demo (Tailwind Utility Classes)</p>

        {/* Primary Color Palette */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-neutral-800 mb-6">Primary Palette (Purple)</h2>
        <div className="grid grid-cols-5 gap-4 mb-6">
          <button className="bg-primary-50 text-primary-900 px-4 py-2 rounded font-semibold hover:opacity-80">50</button>
          <button className="bg-primary-200 text-primary-900 px-4 py-2 rounded font-semibold hover:opacity-80">200</button>
          <button className="bg-primary-500 text-white px-4 py-2 rounded font-semibold hover:opacity-80">500</button>
          <button className="bg-primary-700 text-white px-4 py-2 rounded font-semibold hover:opacity-80">700</button>
          <button className="bg-primary-900 text-white px-4 py-2 rounded font-semibold hover:opacity-80">900</button>
        </div>
      </div>

        {/* Income Color Palette */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-800 mb-6">Income Palette (Green)</h2>
          <div className="flex gap-4 items-center">
            <div className="bg-income-100 text-income-900 px-6 py-3 rounded-lg">
              <p className="font-semibold">+$2,500.00</p>
              <p className="text-sm text-income-700">Monthly Income</p>
            </div>
            <button className="bg-income-500 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90">
              Add Income
            </button>
          </div>
        </div>

        {/* Expense Color Palette */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-800 mb-6">Expense Palette (Red)</h2>
          <div className="flex gap-4 items-center">
            <div className="bg-expense-100 text-expense-900 px-6 py-3 rounded-lg">
              <p className="font-semibold">-$1,200.00</p>
              <p className="text-sm text-expense-700">Monthly Expenses</p>
            </div>
            <button className="bg-expense-500 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90">
              Add Expense
            </button>
          </div>
        </div>

        {/* Neutral Colors */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-800 mb-6">Neutral Colors & Typography</h2>
          <div className="bg-white border border-neutral-200 rounded-lg p-6 space-y-4">
            <p className="text-sm text-neutral-500">Small text (neutral-500)</p>
            <p className="text-base text-neutral-600">Base text (neutral-600)</p>
            <p className="text-lg font-semibold text-neutral-700">Semibold (neutral-700)</p>
            <p className="text-xl font-bold text-neutral-900">Bold heading (neutral-900)</p>
          </div>
        </div>

        {/* Combined Demo */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-800 mb-6">Action Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary-600 text-white font-semibold py-2 px-6 rounded-lg hover:opacity-90">
              Primary Action
            </button>
            <button className="bg-income-500 text-white font-semibold py-2 px-6 rounded-lg hover:opacity-90">
              Income Action
            </button>
            <button className="bg-expense-500 text-white font-semibold py-2 px-6 rounded-lg hover:opacity-90">
              Expense Action
            </button>
            <button className="bg-neutral-200 hover:bg-neutral-300 text-neutral-800 font-semibold py-2 px-6 rounded-lg">
              Secondary
            </button>
          </div>
        </div>

        {/* Balance Card Example */}
        <div className="bg-white border border-neutral-200 rounded-lg p-8 max-w-md">
          <p className="text-neutral-600 text-sm font-semibold mb-2">TOTAL BALANCE</p>
          <p className="text-4xl font-bold text-primary-600 mb-6">$1,300.00</p>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-neutral-600">Income:</span>
              <span className="text-income-600 font-semibold">+$2,500</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-neutral-600">Expenses:</span>
              <span className="text-expense-600 font-semibold">-$1,200</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
