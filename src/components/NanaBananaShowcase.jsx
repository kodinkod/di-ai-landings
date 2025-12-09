import React from 'react'
import {
  Palette,
  Cloud,
  Camera,
  Wand2,
  Shirt,
  ArrowRight
} from 'lucide-react'

const NanaBananaShowcase = () => {
  const showcaseCases = [
    {
      id: 'styling',
      icon: Palette,
      title: 'Стилизация фото',
      description: 'Превратите обычное фото в произведение искусства',
      imagePlaceholder: 'styling-example.jpg',
      telegramCommand: '/style',
    },
    {
      id: 'weather',
      icon: Cloud,
      title: 'Замена погоды',
      description: 'Измените погоду на фотографии: сделайте солнце, снег или дождь',
      imagePlaceholder: 'weather-example.jpg',
      telegramCommand: '/weather',
    },
    {
      id: 'id-photo',
      icon: Camera,
      title: 'Фото на документы',
      description: 'Создайте идеальное фото для паспорта или визы',
      imagePlaceholder: 'id-photo-example.jpg',
      telegramCommand: '/idphoto',
    },
    {
      id: 'retouch',
      icon: Wand2,
      title: 'Ретушь фото',
      description: 'Профессиональная ретушь портретов и селфи',
      imagePlaceholder: 'retouch-example.jpg',
      telegramCommand: '/retouch',
    },
    {
      id: 'outfit',
      icon: Shirt,
      title: 'Примерка одежды',
      description: 'Попробуйте новый образ - переоденьте человека на фото',
      imagePlaceholder: 'outfit-example.jpg',
      telegramCommand: '/outfit',
    },
  ]

  const handleShowcaseClick = (telegramCommand) => {
    window.open(`https://t.me/YOUR_BOT_USERNAME?start=${telegramCommand}`, '_blank')
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
            Преобразите ваши <span className="gradient-text">фотографии</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Профессиональная обработка изображений с помощью AI
          </p>
        </div>

        {/* Showcase Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseCases.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={item.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image Placeholder - ЗДЕСЬ ВСТАВИТЕ ВАШИ КАРТИНКИ */}
                <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  {/* Placeholder для изображения */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <Icon className="w-16 h-16 text-gray-400 mb-4" />
                    <p className="text-gray-500 text-sm px-4 text-center">
                      Вставьте изображение:<br />
                      <code className="text-xs bg-gray-200 px-2 py-1 rounded">
                        /public/examples/{item.imagePlaceholder}
                      </code>
                    </p>
                  </div>

                  {/* Замените этот блок на ваше изображение: */}
                  {/*
                  <img
                    src={`/examples/${item.imagePlaceholder}`}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  */}

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => handleShowcaseClick(item.telegramCommand)}
                    className="w-full mt-4 py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 group/btn shadow-lg hover:shadow-xl"
                  >
                    Попробовать сейчас
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Info */}
        <div className="mt-16 text-center">
          <div className="glass-effect rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Как это работает?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold mb-3">
                  1
                </div>
                <p className="text-gray-700">
                  <span className="font-semibold">Отправьте фото</span> в бота
                </p>
              </div>
              <div>
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 font-bold mb-3">
                  2
                </div>
                <p className="text-gray-700">
                  <span className="font-semibold">Выберите эффект</span> из списка
                </p>
              </div>
              <div>
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mb-3">
                  3
                </div>
                <p className="text-gray-700">
                  <span className="font-semibold">Получите результат</span> за секунды
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NanaBananaShowcase
