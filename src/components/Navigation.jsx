import React from 'react'
import { Home, BookOpen } from 'lucide-react'

const Navigation = ({ currentTab, onTabChange }) => {
  return (
    <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="text-2xl">🤖</div>
            <span className="font-bold text-xl gradient-text">AI Ассистент</span>
          </div>

          {/* Tabs */}
          <div className="flex gap-2">
            <button
              onClick={() => onTabChange('home')}
              className={`flex items-center gap-2 px-6 py-2 rounded-lg font-medium transition-all ${
                currentTab === 'home'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Home className="w-5 h-5" />
              <span className="hidden sm:inline">Главная</span>
            </button>

            <button
              onClick={() => onTabChange('prompts')}
              className={`flex items-center gap-2 px-6 py-2 rounded-lg font-medium transition-all ${
                currentTab === 'prompts'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <BookOpen className="w-5 h-5" />
              <span className="hidden sm:inline">Библиотека промптов</span>
              <span className="sm:hidden">Промпты</span>
              <span className="ml-1 px-2 py-0.5 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-full">
                40+
              </span>
            </button>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => window.open('https://t.me/your_ones_ai_bot', '_blank')}
            className="hidden md:block px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
          >
            Открыть бота
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
