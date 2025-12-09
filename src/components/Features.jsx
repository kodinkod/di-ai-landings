import React from 'react'
import {
  Zap,
  Shield,
  Clock,
  Smartphone,
  TrendingUp,
  Users
} from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: 'Мгновенные ответы',
      description: 'Получайте результаты за секунды без ожидания',
    },
    {
      icon: Shield,
      title: 'Безопасность данных',
      description: 'Ваши данные защищены и не передаются третьим лицам',
    },
    {
      icon: Clock,
      title: 'Работает 24/7',
      description: 'Доступен в любое время дня и ночи без выходных',
    },
    {
      icon: Smartphone,
      title: 'Прямо в Telegram',
      description: 'Не нужно устанавливать приложения - работает в привычном мессенджере',
    },
    {
      icon: TrendingUp,
      title: 'Постоянное обновление',
      description: 'Регулярно добавляем новые возможности и улучшения',
    },
    {
      icon: Users,
      title: 'Простота использования',
      description: 'Интуитивный интерфейс - начните работать сразу',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Почему выбирают <span className="gradient-text">наш AI-ассистент</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мощные возможности искусственного интеллекта в удобном интерфейсе
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 glass-effect rounded-3xl p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">95%</div>
              <div className="text-gray-600">Точность результатов</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">&lt;3s</div>
              <div className="text-gray-600">Среднее время ответа</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">10+</div>
              <div className="text-gray-600">Активных инструментов</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">100%</div>
              <div className="text-gray-600">Бесплатный старт</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
