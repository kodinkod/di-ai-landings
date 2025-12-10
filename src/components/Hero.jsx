import React from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'

const Hero = () => {
  const handleTelegramClick = () => {
    // Замените на ваш Telegram бот URL
    window.open('https://t.me/your_ones_ai_bot', '_blank')
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>AI со всем нужным</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Ваш умный{' '}
              <span className="gradient-text">помощник</span>
              <br />
              на каждый день
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl">
              Генерируйте изображения, анализируйте документы, обрабатывайте данные
              и решайте повседневные задачи в одном месте
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={handleTelegramClick}
                className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Открыть в Telegram
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => document.getElementById('use-cases').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 rounded-xl font-semibold text-lg transition-all duration-200 border-2 border-gray-200 hover:border-gray-300"
              >
                Смотреть возможности
              </button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-gray-900">10+</div>
                <div className="text-sm text-gray-600">Инструментов</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Доступность</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">∞</div>
                <div className="text-sm text-gray-600">Возможностей</div>
              </div>
            </div>
          </div>

          <img src="public/examples/logo-main.png" alt="Character" className="w-512 h-512 object-contain" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
