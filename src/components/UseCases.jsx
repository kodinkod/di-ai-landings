import React from 'react'
import {
  Image,
  MessageSquare,
  Sparkles,
  ScanText,
  ArrowRight
} from 'lucide-react'

const UseCases = () => {
  const useCases = [
    {
      id: 'image-generation',
      icon: Image,
      title: 'Генерация изображений',
      description: 'Создавайте уникальные изображения по текстовому описанию',
      examples: [
        'Иллюстрации для статей и постов',
        'Логотипы и графические элементы',
        'Концепт-арт и визуализация идей',
      ],
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50',
      telegramCommand: '/generate',
    },
    {
      id: 'avatar-styling',
      icon: Sparkles,
      title: 'Стилизация аватарок',
      description: 'Превратите фото в стиль Гибли или Дисней',
      examples: [
        'Аватарки в стиле Studio Ghibli',
        'Портреты в стиле Disney',
        'Уникальные стилизованные фото',
      ],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      telegramCommand: '/style',
    },
    {
      id: 'ocr',
      icon: ScanText,
      title: 'Текст с фотографии',
      description: 'Распознавайте и извлекайте текст из изображений',
      examples: [
        'Сканирование документов',
        'Извлечение текста из скриншотов',
        'Перевод текста с фото',
      ],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      telegramCommand: '/ocr',
    },
    {
      id: 'conversation',
      icon: MessageSquare,
      title: 'Умные диалоги',
      description: 'Общайтесь на любые темы и получайте развернутые ответы',
      examples: [
        'Помощь в обучении',
        'Консультации и рекомендации',
        'Brainstorming идей',
      ],
      color: 'from-violet-500 to-purple-500',
      bgColor: 'bg-violet-50',
      telegramCommand: '/chat',
    },
  ]

  const handleUseCaseClick = (telegramCommand) => {
    // Замените на ваш Telegram бот URL
    window.open(`https://t.me/your_ones_ai_bot?start=${telegramCommand}`, '_blank')
  }

  return (
    <section id="use-cases" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Что можно делать с <span className="gradient-text">AI-ассистентом</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Выберите сценарий использования и сразу начните работать в Telegram
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon
            return (
              <div
                key={useCase.id}
                className="group relative glass-effect rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${useCase.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {useCase.description}
                </p>

                {/* Examples */}
                <ul className="space-y-2 mb-4">
                  {useCase.examples.map((example, i) => (
                    <li key={i} className="text-xs text-gray-500 flex items-start gap-2">
                      <span className="text-blue-500 mt-0.5">•</span>
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={() => handleUseCaseClick(useCase.telegramCommand)}
                  className="w-full mt-auto py-2.5 px-4 bg-gray-100 hover:bg-gray-900 text-gray-900 hover:text-white rounded-lg font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 group/btn"
                >
                  Попробовать
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                {/* Placeholder для картинок результатов */}
                <div className={`absolute -top-2 -right-2 w-20 h-20 ${useCase.bgColor} rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-2xl`}>
                  {/* МЕСТО ДЛЯ ПРИМЕРОВ КАРТИНОК */}
                  📸
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Не нашли нужный сценарий? Просто начните диалог в боте
          </p>
          <button
            onClick={() => window.open('https://t.me/your_ones_ai_bot', '_blank')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Открыть бота
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default UseCases
