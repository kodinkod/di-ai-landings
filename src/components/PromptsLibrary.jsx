import React, { useState } from 'react'
import {
  Palette,
  Sparkles,
  User,
  Shirt,
  Image as ImageIcon,
  Sun,
  Wand2,
  Camera,
  Filter,
  Copy,
  Check,
  Search
} from 'lucide-react'

const PromptsLibrary = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [copiedPrompt, setCopiedPrompt] = useState(null)

  const categories = [
    { id: 'all', name: 'Все промпты', icon: Sparkles },
    { id: 'style', name: 'Стилизация', icon: Palette },
    { id: 'appearance', name: 'Внешность', icon: User },
    { id: 'clothes', name: 'Одежда', icon: Shirt },
    { id: 'background', name: 'Фон и локация', icon: ImageIcon },
    { id: 'weather', name: 'Погода и свет', icon: Sun },
    { id: 'creative', name: 'Креативное', icon: Wand2 },
    { id: 'practical', name: 'Практичное', icon: Camera },
  ]

  const prompts = [
    // СТИЛИЗАЦИЯ
    {
      category: 'style',
      title: 'Стиль Studio Ghibli',
      prompt: 'переделай фото в стиле студии Гибли',
      description: 'Превратите фото в кадр из аниме Миядзаки',
      popular: true,
      image: 'ghibli-style.jpg'
    },
    {
      category: 'style',
      title: 'Стиль Disney/Pixar',
      prompt: 'сделай фото в стиле мультфильмов Pixar',
      description: '3D мультяшный стиль как в мультиках Disney',
      popular: true,
      image: 'pixar-style.jpg'
    },
    {
      category: 'style',
      title: 'Аниме персонаж',
      prompt: 'преврати меня в аниме персонажа',
      description: 'Классический аниме стиль',
      image: 'anime-style.jpg'
    },
    {
      category: 'style',
      title: 'Комикс Marvel',
      prompt: 'сделай в стиле комиксов Marvel',
      description: 'Превратите фото в обложку комикса',
      image: 'marvel-style.jpg'
    },
    {
      category: 'style',
      title: 'Картина маслом',
      prompt: 'преврати фото в картину маслом',
      description: 'Художественная живопись маслом',
      image: 'oil-painting.jpg'
    },
    {
      category: 'style',
      title: 'Акварельный портрет',
      prompt: 'нарисуй акварелью',
      description: 'Нежная акварельная техника',
      image: 'watercolor.jpg'
    },
    {
      category: 'style',
      title: 'Поп-арт',
      prompt: 'сделай в стиле поп-арт как Энди Уорхол',
      description: 'Яркий поп-арт с контрастными цветами',
      image: 'pop-art.jpg'
    },
    {
      category: 'style',
      title: 'Винтажное фото',
      prompt: 'сделай винтажное фото из 80х',
      description: 'Ретро стиль 70-80х годов',
      image: 'vintage.jpg'
    },

    // ВНЕШНОСТЬ
    {
      category: 'appearance',
      title: 'Профессиональная ретушь',
      prompt: 'сделай профессиональную ретушь лица',
      description: 'Улучшение кожи, света, естественная красота',
      popular: true,
      image: 'retouch.jpg'
    },
    {
      category: 'appearance',
      title: 'Добавить улыбку',
      prompt: 'добавь естественную улыбку на лицо',
      description: 'Сделайте выражение лица более радостным',
      image: 'smile.jpg'
    },
    {
      category: 'appearance',
      title: 'Изменить прическу',
      prompt: 'измени прическу на длинные волосы',
      description: 'Попробуйте новую прическу',
      image: 'hairstyle.jpg'
    },
    {
      category: 'appearance',
      title: 'Изменить цвет волос',
      prompt: 'перекрась волосы в блонд',
      description: 'Экспериментируйте с цветом волос',
      image: 'hair-color.jpg'
    },
    {
      category: 'appearance',
      title: 'Добавить бороду',
      prompt: 'добавь стильную бороду',
      description: 'Посмотрите как будете выглядеть с бородой',
      image: 'beard.jpg'
    },
    {
      category: 'appearance',
      title: 'Омолодить на 10 лет',
      prompt: 'сделай моложе на 10 лет',
      description: 'Как вы выглядели раньше',
      image: 'younger.jpg'
    },
    {
      category: 'appearance',
      title: 'Профессиональный макияж',
      prompt: 'добавь профессиональный вечерний макияж',
      description: 'Макияж как у визажиста',
      image: 'makeup.jpg'
    },

    // ОДЕЖДА
    {
      category: 'clothes',
      title: 'Деловой костюм',
      prompt: 'переодень в деловой костюм',
      description: 'Строгий бизнес стиль',
      image: 'business-suit.jpg'
    },
    {
      category: 'clothes',
      title: 'Кэжуал стиль',
      prompt: 'одень в стильную повседневную одежду',
      description: 'Модный casual образ',
      image: 'casual.jpg'
    },
    {
      category: 'clothes',
      title: 'Вечернее платье',
      prompt: 'одень в красное вечернее платье',
      description: 'Элегантный вечерний наряд',
      image: 'evening-dress.jpg'
    },
    {
      category: 'clothes',
      title: 'Спортивная форма',
      prompt: 'переодень в спортивную форму',
      description: 'Спортивный образ',
      image: 'sportswear.jpg'
    },
    {
      category: 'clothes',
      title: 'Кожаная куртка',
      prompt: 'добавь черную кожаную куртку',
      description: 'Рокерский стиль',
      image: 'leather-jacket.jpg'
    },

    // ФОН И ЛОКАЦИЯ
    {
      category: 'background',
      title: 'Удалить фон',
      prompt: 'убери весь фон, оставь только меня',
      description: 'Прозрачный или белый фон',
      popular: true,
      image: 'remove-bg.jpg'
    },
    {
      category: 'background',
      title: 'Размыть фон',
      prompt: 'размой фон как на профессиональном портрете',
      description: 'Эффект боке, фокус на лице',
      image: 'blur-bg.jpg'
    },
    {
      category: 'background',
      title: 'Пляж на закате',
      prompt: 'перенеси меня на пляж на закате',
      description: 'Смена локации на тропический пляж',
      image: 'beach.jpg'
    },
    {
      category: 'background',
      title: 'Горы',
      prompt: 'поставь на фон красивые горы',
      description: 'Горный пейзаж на заднем плане',
      image: 'mountains.jpg'
    },
    {
      category: 'background',
      title: 'Город ночью',
      prompt: 'перенеси в ночной город с огнями',
      description: 'Городской пейзаж с подсветкой',
      image: 'night-city.jpg'
    },

    // ПОГОДА И СВЕТ
    {
      category: 'weather',
      title: 'Солнечный день',
      prompt: 'сделай солнечную погоду с ярким светом',
      description: 'Яркое солнце, теплые тона',
      image: 'sunny.jpg'
    },
    {
      category: 'weather',
      title: 'Золотой час',
      prompt: 'добавь освещение золотого часа',
      description: 'Теплый закатный свет',
      popular: true,
      image: 'golden-hour.jpg'
    },
    {
      category: 'weather',
      title: 'Снег',
      prompt: 'добавь падающий снег',
      description: 'Зимняя атмосфера со снегом',
      image: 'snow.jpg'
    },
    {
      category: 'weather',
      title: 'Дождь',
      prompt: 'добавь дождь и мокрые поверхности',
      description: 'Дождливая погода',
      image: 'rain.jpg'
    },
    {
      category: 'weather',
      title: 'Туман',
      prompt: 'окутай туманом',
      description: 'Мистическая туманная атмосфера',
      image: 'fog.jpg'
    },
    {
      category: 'weather',
      title: 'Ночь',
      prompt: 'преврати день в ночь',
      description: 'Ночное освещение',
      image: 'night.jpg'
    },

    // КРЕАТИВНОЕ
    {
      category: 'creative',
      title: 'Черно-белое',
      prompt: 'сделай стильное черно-белое фото',
      description: 'Классическая ч/б фотография',
      image: 'bw.jpg'
    },
    {
      category: 'creative',
      title: 'Кинематографичность',
      prompt: 'сделай как кадр из фильма',
      description: 'Кинематографический вид',
      image: 'cinematic.jpg'
    },
    {
      category: 'creative',
      title: 'HDR эффект',
      prompt: 'примени HDR эффект',
      description: 'Яркие насыщенные цвета',
      image: 'hdr.jpg'
    },
    {
      category: 'creative',
      title: 'Двойная экспозиция',
      prompt: 'создай двойную экспозицию с природой',
      description: 'Художественное наложение',
      image: 'double-exposure.jpg'
    },
    {
      category: 'creative',
      title: 'Неоновые цвета',
      prompt: 'добавь неоновое освещение',
      description: 'Яркие неоновые оттенки',
      image: 'neon.jpg'
    },

    // ПРАКТИЧНОЕ
    {
      category: 'practical',
      title: 'Фото на документы',
      prompt: 'сделай фото на паспорт',
      description: 'Официальное фото для документов',
      image: 'id-photo.jpg'
    },
    {
      category: 'practical',
      title: 'Улучшить качество',
      prompt: 'улучши качество и четкость фото',
      description: 'Повышение разрешения и детализации',
      image: 'enhance.jpg'
    },
    {
      category: 'practical',
      title: 'Восстановить старое фото',
      prompt: 'восстанови старую поврежденную фотографию',
      description: 'Ремонт старых семейных фото',
      popular: true,
      image: 'restore.jpg'
    },
    {
      category: 'practical',
      title: 'Удалить людей с фона',
      prompt: 'убери всех людей с заднего плана',
      description: 'Очистка фона от посторонних',
      image: 'remove-people.jpg'
    },
    {
      category: 'practical',
      title: 'Удалить объект',
      prompt: 'удали [объект] с фото',
      description: 'Убрать ненужные предметы',
      image: 'remove-object.jpg'
    },
    {
      category: 'practical',
      title: 'Раскрасить ЧБ фото',
      prompt: 'раскрась черно-белую фотографию',
      description: 'Добавить цвет в старые фото',
      image: 'colorize.jpg'
    },
  ]

  const handleCopyPrompt = (prompt) => {
    navigator.clipboard.writeText(prompt)
    setCopiedPrompt(prompt)
    setTimeout(() => setCopiedPrompt(null), 2000)
  }

  const handleTryBot = () => {
    window.open('https://t.me/YOUR_BOT_USERNAME', '_blank')
  }

  const filteredPrompts = prompts.filter(p => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         p.prompt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         p.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const popularPrompts = prompts.filter(p => p.popular)

  return (
    <section id="prompts-library" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Библиотека <span className="gradient-text">промптов</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Более 40 готовых промптов для обработки фото. Копируйте и пробуйте в боте!
          </p>
        </div>

        {/* Popular Prompts */}
        {selectedCategory === 'all' && !searchQuery && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-yellow-500" />
              Популярные промпты
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {popularPrompts.map((p, i) => (
                <div key={i} className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border-2 border-yellow-200">
                  <h4 className="font-bold text-lg mb-2">{p.title}</h4>
                  <p className="text-sm text-gray-600 mb-3">{p.description}</p>
                  <div className="bg-white rounded-lg p-3 mb-3">
                    <code className="text-sm text-gray-800">"{p.prompt}"</code>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleCopyPrompt(p.prompt)}
                      className="flex-1 py-2 px-3 bg-white hover:bg-gray-50 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
                    >
                      {copiedPrompt === p.prompt ? (
                        <><Check className="w-4 h-4 text-green-600" /> Скопировано</>
                      ) : (
                        <><Copy className="w-4 h-4" /> Копировать</>
                      )}
                    </button>
                    <button
                      onClick={handleTryBot}
                      className="py-2 px-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg text-sm font-medium transition-colors"
                    >
                      Попробовать
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Поиск промптов..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex gap-3 pb-4 min-w-max">
            {categories.map((cat) => {
              const Icon = cat.icon
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {cat.name}
                </button>
              )
            })}
          </div>
        </div>

        {/* Prompts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrompts.map((p, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center p-4">
                  <Filter className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-xs text-gray-500">
                    Место для примера<br />
                    /public/examples/{p.image}
                  </p>
                </div>
                {/* Раскомментируйте когда добавите изображения:
                <img
                  src={`/examples/${p.image}`}
                  alt={p.title}
                  className="w-full h-full object-cover"
                />
                */}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{p.description}</p>

                {/* Prompt */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-3 mb-4">
                  <code className="text-sm text-gray-800 break-words">"{p.prompt}"</code>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handleCopyPrompt(p.prompt)}
                    className="flex-1 py-2 px-3 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    {copiedPrompt === p.prompt ? (
                      <><Check className="w-4 h-4 text-green-600" /> Скопировано</>
                    ) : (
                      <><Copy className="w-4 h-4" /> Копировать</>
                    )}
                  </button>
                  <button
                    onClick={handleTryBot}
                    className="py-2 px-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    Попробовать
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No results */}
        {filteredPrompts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Промпты не найдены</p>
            <button
              onClick={() => {
                setSearchQuery('')
                setSelectedCategory('all')
              }}
              className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
            >
              Сбросить фильтры
            </button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Готовы попробовать?
          </h3>
          <p className="text-xl mb-8 text-blue-100">
            Откройте бота, отправьте фото и любой промпт из списка
          </p>
          <button
            onClick={handleTryBot}
            className="px-10 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
          >
            Открыть бота в Telegram
            <Sparkles className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default PromptsLibrary
