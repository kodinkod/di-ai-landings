import React, { useState } from 'react'
import {
  Palette,
  Cloud,
  Camera,
  Wand2,
  Shirt,
  Copy,
  Check,
  X,
  Sparkles,
  ArrowRight
} from 'lucide-react'

const NanaBananaShowcase = ({ onViewAllPrompts }) => {
  const [selectedCase, setSelectedCase] = useState(null)
  const [copiedPrompt, setCopiedPrompt] = useState(false)

  const showcaseCases = [
    {
      id: 'styling',
      icon: Palette,
      title: 'Стилизация Гибли',
      description: 'Превратите фото в кадр из аниме Миядзаки',
      prompt: 'переделай фото в стиле студии Гибли',
      promptVariants: [
        'переделай фото в стиле студии Гибли',
        'сделай фото в стиле Disney',
        'преобразуй в аниме стиль',
      ],
      imagePlaceholder: 'ghibli-style.jpg',
      instructions: [
        'Отправьте фото в бота',
        'Напишите промпт из списка',
        'Получите стилизованное фото за несколько секунд',
      ],
    },
    {
      id: 'remove-bg',
      icon: Camera,
      title: 'Удаление фона',
      description: 'Прозрачный или белый фон для резюме и товаров',
      prompt: 'убери весь фон, оставь только меня',
      promptVariants: [
        'убери весь фон, оставь только меня',
        'сделай белый фон',
        'удали фон, сделай прозрачным',
      ],
      imagePlaceholder: 'remove-bg.jpg',
      instructions: [
        'Отправьте фото человека или товара',
        'Напишите промпт для удаления фона',
        'Получите фото с чистым фоном',
      ],
    },
    {
      id: 'restore',
      icon: Wand2,
      title: 'Восстановление фото',
      description: 'Верните жизнь старым семейным фотографиям',
      prompt: 'восстанови старую поврежденную фотографию',
      promptVariants: [
        'восстанови старую поврежденную фотографию',
        'улучши качество старого фото',
        'сделай четким размытое фото',
      ],
      imagePlaceholder: 'restore-old.jpg',
      instructions: [
        'Отправьте старое или поврежденное фото',
        'Используйте промпт для восстановления',
        'Получите улучшенное фото',
      ],
    },
  ]

  const handleCopyPrompt = (prompt) => {
    navigator.clipboard.writeText(prompt)
    setCopiedPrompt(true)
    setTimeout(() => setCopiedPrompt(false), 2000)
  }

  const handleTryPrompt = (item) => {
    setSelectedCase(item)
  }

  const closeModal = () => {
    setSelectedCase(null)
    setCopiedPrompt(false)
  }

  const handleOpenBot = () => {
    window.open('https://t.me/YOUR_BOT_USERNAME', '_blank')
  }

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-purple-700 text-sm font-medium mb-6">
            <Wand2 className="w-4 h-4" />
            <span>Нана Банана - Магия обработки фото</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Преобразите фото с помощью <span className="gradient-text">промптов</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Просто отправьте фото и промпт в бота - AI сделает всё сам
          </p>
        </div>

        {/* Showcase Grid - 2 columns for wider cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {showcaseCases.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={item.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image Placeholder - Широкий формат для До/После */}
                <div className="relative h-80 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  {/* Placeholder для изображения ДО/ПОСЛЕ */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <Icon className="w-16 h-16 text-gray-400 mb-4 mx-auto" />
                      <p className="text-gray-500 text-sm mb-2">
                        Вставьте изображение До/После:
                      </p>
                      <code className="text-xs bg-gray-200 px-3 py-1 rounded">
                        /public/examples/{item.imagePlaceholder}
                      </code>
                      <p className="text-xs text-gray-400 mt-3">
                        Рекомендуется: сплит-скрин До/После
                      </p>
                    </div>
                  </div>

                  {/* Замените этот блок на ваше изображение: */}
                  {/*
                  <img
                    src={`/examples/${item.imagePlaceholder}`}
                    alt={`${item.title} - До и После`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  */}

                  {/* Badge с промптом */}
                  <div className="absolute top-4 left-4 right-4">
                    <div className="bg-black/70 backdrop-blur-sm rounded-lg px-4 py-2 text-white text-sm font-mono">
                      "{item.prompt}"
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Prompt Preview */}
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-4 h-4 text-purple-600" />
                      <span className="text-sm font-semibold text-gray-700">
                        Примеры промптов:
                      </span>
                    </div>
                    <div className="space-y-1">
                      {item.promptVariants.slice(0, 2).map((variant, i) => (
                        <div key={i} className="text-xs text-gray-600 font-mono">
                          • {variant}
                        </div>
                      ))}
                      <div className="text-xs text-purple-600 font-medium">
                        + еще варианты...
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => handleTryPrompt(item)}
                    className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                  >
                    Попробовать промпты
                    <Sparkles className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA to library */}
        <div className="mt-16 text-center">
          <div className="glass-effect rounded-2xl p-12 max-w-3xl mx-auto">
            {/* Big CTA Button */}
            <button
              onClick={onViewAllPrompts}
              className="px-12 py-5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-2xl font-bold text-2xl transition-all duration-200 shadow-2xl hover:shadow-3xl hover:scale-105 inline-flex items-center gap-3"
            >
              Смотреть все 40+ промптов
              <ArrowRight className="w-6 h-6" />
            </button>

            {/* Concise instructions below */}
            <div className="mt-6 text-gray-600 space-y-1">
              <p className="text-sm">Откройте бота → Отправьте фото → Напишите промпт → Получите результат</p>
              <p className="text-xs text-gray-500">Стилизация, ретушь, изменение погоды, одежды и многое другое</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal with prompts */}
      {selectedCase && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-t-3xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {React.createElement(selectedCase.icon, { className: "w-8 h-8" })}
                  <h3 className="text-2xl font-bold">{selectedCase.title}</h3>
                </div>
                <button
                  onClick={closeModal}
                  className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="mt-2 text-purple-100">{selectedCase.description}</p>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Instructions */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-lg">📝</span>
                  Как использовать:
                </h4>
                <ol className="space-y-2">
                  {selectedCase.instructions.map((instruction, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center text-purple-700 text-sm font-bold">
                        {i + 1}
                      </span>
                      <span className="text-gray-700">{instruction}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Prompts List */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-purple-600" />
                  Готовые промпты:
                </h4>
                <div className="space-y-3">
                  {selectedCase.promptVariants.map((variant, i) => (
                    <div
                      key={i}
                      className="group bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border-2 border-transparent hover:border-purple-300 transition-all"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <code className="text-gray-800 font-mono text-sm block mb-2">
                            "{variant}"
                          </code>
                        </div>
                        <button
                          onClick={() => handleCopyPrompt(variant)}
                          className="flex-shrink-0 p-2 bg-white hover:bg-purple-100 rounded-lg transition-colors"
                          title="Копировать промпт"
                        >
                          {copiedPrompt ? (
                            <Check className="w-5 h-5 text-green-600" />
                          ) : (
                            <Copy className="w-5 h-5 text-gray-600" />
                          )}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tip */}
              <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-4">
                <p className="text-sm text-blue-900">
                  <span className="font-semibold">💡 Совет:</span> Вы можете изменять промпты под свои нужды - добавляйте детали, цвета, стили!
                </p>
              </div>

              {/* CTA to Bot */}
              <button
                onClick={handleOpenBot}
                className="w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl font-bold text-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                Открыть бота и попробовать
                <Sparkles className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default NanaBananaShowcase
