import React from 'react'
import {
  Image,
  FileText,
  BarChart3,
  MessageSquare,
  Code,
  Languages,
  Calendar,
  Brain,
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
      id: 'document-analysis',
      icon: FileText,
      title: 'Анализ документов',
      description: 'Обрабатывайте и извлекайте информацию из документов',
      examples: [
        'Резюмирование больших текстов',
        'Извлечение ключевых данных',
        'Перевод и форматирование',
      ],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      telegramCommand: '/analyze',
    },
    {
      id: 'data-processing',
      icon: BarChart3,
      title: 'Обработка данных',
      description: 'Анализируйте данные и получайте визуализации',
      examples: [
        'Создание графиков и диаграмм',
        'Статистический анализ',
        'Обработка таблиц и CSV',
      ],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      telegramCommand: '/data',
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
      color: 'from-purple-500 to-violet-500',
      bgColor: 'bg-purple-50',
      telegramCommand: '/chat',
    },
    {
      id: 'code-help',
      icon: Code,
      title: 'Помощь с кодом',
      description: 'Пишите, проверяйте и оптимизируйте код',
      examples: [
        'Генерация кода на разных языках',
        'Поиск и исправление ошибок',
        'Рефакторинг и оптимизация',
      ],
      color: 'from-orange-500 to-amber-500',
      bgColor: 'bg-orange-50',
      telegramCommand: '/code',
    },
    {
      id: 'translation',
      icon: Languages,
      title: 'Перевод текстов',
      description: 'Переводите между языками с учетом контекста',
      examples: [
        'Перевод статей и документов',
        'Локализация контента',
        'Изучение иностранных языков',
      ],
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-indigo-50',
      telegramCommand: '/translate',
    },
    {
      id: 'planning',
      icon: Calendar,
      title: 'Планирование задач',
      description: 'Организуйте свой день и управляйте задачами',
      examples: [
        'Создание расписаний',
        'Декомпозиция проектов',
        'Напоминания и трекинг',
      ],
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'bg-teal-50',
      telegramCommand: '/plan',
    },
    {
      id: 'learning',
      icon: Brain,
      title: 'Обучение и знания',
      description: 'Изучайте новые темы и получайте объяснения',
      examples: [
        'Объяснение сложных концепций',
        'Генерация учебных материалов',
        'Подготовка к экзаменам',
      ],
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-50',
      telegramCommand: '/learn',
    },
  ]

  const handleUseCaseClick = (telegramCommand) => {
    // Замените на ваш Telegram бот URL
    window.open(`https://t.me/YOUR_BOT_USERNAME?start=${telegramCommand}`, '_blank')
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
            onClick={() => window.open('https://t.me/YOUR_BOT_USERNAME', '_blank')}
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
