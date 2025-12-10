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
  Search,
  Zap,
  FileText,
  Code,
  Languages,
  BookOpen,
  Lightbulb,
  MessageSquare
} from 'lucide-react'

const PromptsLibrary = () => {
  // Конфигурация моделей - добавляйте новые модели здесь
  const models = [
    {
      id: 'nana-banana',
      name: 'Nana Banana',
      description: 'Обработка фото',
      icon: Camera,
      gradient: 'from-purple-600 to-pink-600',
      categories: [
        { id: 'all', name: 'Все промпты', icon: Sparkles },
        { id: 'style', name: 'Стилизация', icon: Palette },
        { id: 'appearance', name: 'Внешность', icon: User },
        { id: 'clothes', name: 'Одежда', icon: Shirt },
        { id: 'background', name: 'Фон и локация', icon: ImageIcon },
        { id: 'weather', name: 'Погода и свет', icon: Sun },
        { id: 'creative', name: 'Креативное', icon: Wand2 },
        { id: 'practical', name: 'Практичное', icon: Camera },
      ],
      hasImages: true,
      promptCount: 42,
      headerText: 'Более 40 готовых промптов для обработки фото. Копируйте и пробуйте в боте!'
    },
    {
      id: 'gpt-5',
      name: 'GPT-5',
      description: 'Текстовые задачи',
      icon: Zap,
      gradient: 'from-blue-600 to-cyan-600',
      categories: [
        { id: 'all', name: 'Все промпты', icon: Sparkles },
        { id: 'writing', name: 'Написание текстов', icon: FileText },
        { id: 'analysis', name: 'Анализ и резюме', icon: BookOpen },
        { id: 'code', name: 'Программирование', icon: Code },
        { id: 'translate', name: 'Перевод', icon: Languages },
        { id: 'education', name: 'Обучение', icon: Lightbulb },
        { id: 'creative-text', name: 'Творчество', icon: Wand2 },
      ],
      hasImages: false,
      promptCount: 36,
      headerText: 'Более 35 готовых промптов для работы с текстом. Копируйте и используйте в боте!'
    },
    // Добавляйте новые модели здесь:
    // {
    //   id: 'claude-sonnet',
    //   name: 'Claude Sonnet',
    //   description: 'Аналитика',
    //   icon: MessageSquare,
    //   gradient: 'from-orange-600 to-red-600',
    //   categories: [...],
    //   hasImages: false,
    //   promptCount: 20,
    //   headerText: '...'
    // }
  ]

  const [selectedModel, setSelectedModel] = useState(models[0].id)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [copiedPrompt, setCopiedPrompt] = useState(null)

  const currentModel = models.find(m => m.id === selectedModel)
  const categories = currentModel.categories

  const prompts = [
    // ===== NANA BANANA ПРОМПТЫ (Обработка фото) =====
    // СТИЛИЗАЦИЯ
    {
      model: 'nana-banana',
      category: 'style',
      title: 'Стиль Studio Ghibli',
      prompt: 'переделай фото в стиле студии Гибли',
      description: 'Превратите фото в кадр из аниме Миядзаки',
      popular: true,
      image: 'ghibli-style.jpg'
    },
    {
      model: 'nana-banana',
      category: 'style',
      title: 'Стиль Disney/Pixar',
      prompt: 'сделай фото в стиле мультфильмов Pixar',
      description: '3D мультяшный стиль как в мультиках Disney',
      popular: true,
      image: 'pixar-style.jpg'
    },
    {
      model: 'nana-banana',
      category: 'style',
      title: 'Аниме персонаж',
      prompt: 'преврати меня в аниме персонажа',
      description: 'Классический аниме стиль',
      image: 'anime-style.jpg'
    },
    {
      model: 'nana-banana',
      category: 'style',
      title: 'Комикс Marvel',
      prompt: 'сделай в стиле комиксов Marvel',
      description: 'Превратите фото в обложку комикса',
      image: 'marvel-style.jpg'
    },
    {
      model: 'nana-banana',
      category: 'style',
      title: 'Картина маслом',
      prompt: 'преврати фото в картину маслом',
      description: 'Художественная живопись маслом',
      image: 'oil-painting.jpg'
    },
    {
      model: 'nana-banana',
      category: 'style',
      title: 'Акварельный портрет',
      prompt: 'нарисуй акварелью',
      description: 'Нежная акварельная техника',
      image: 'watercolor.jpg'
    },
    {
      model: 'nana-banana',
      category: 'style',
      title: 'Поп-арт',
      prompt: 'сделай в стиле поп-арт как Энди Уорхол',
      description: 'Яркий поп-арт с контрастными цветами',
      image: 'pop-art.jpg'
    },
    {
      model: 'nana-banana',
      category: 'style',
      title: 'Винтажное фото',
      prompt: 'сделай винтажное фото из 80х',
      description: 'Ретро стиль 70-80х годов',
      image: 'vintage.jpg'
    },

    // ВНЕШНОСТЬ
    {
      model: 'nana-banana',
      category: 'appearance',
      title: 'Профессиональная ретушь',
      prompt: 'сделай профессиональную ретушь лица',
      description: 'Улучшение кожи, света, естественная красота',
      popular: true,
      image: 'retouch.jpg'
    },
    {
      model: 'nana-banana',
      category: 'appearance',
      title: 'Добавить улыбку',
      prompt: 'добавь естественную улыбку на лицо',
      description: 'Сделайте выражение лица более радостным',
      image: 'smile.jpg'
    },
    {
      model: 'nana-banana',
      category: 'appearance',
      title: 'Изменить прическу',
      prompt: 'измени прическу на длинные волосы',
      description: 'Попробуйте новую прическу',
      image: 'hairstyle.jpg'
    },
    {
      model: 'nana-banana',
      category: 'appearance',
      title: 'Изменить цвет волос',
      prompt: 'перекрась волосы в блонд',
      description: 'Экспериментируйте с цветом волос',
      image: 'hair-color.jpg'
    },
    {
      model: 'nana-banana',
      category: 'appearance',
      title: 'Добавить бороду',
      prompt: 'добавь стильную бороду',
      description: 'Посмотрите как будете выглядеть с бородой',
      image: 'beard.jpg'
    },
    {
      model: 'nana-banana',
      category: 'appearance',
      title: 'Омолодить на 10 лет',
      prompt: 'сделай моложе на 10 лет',
      description: 'Как вы выглядели раньше',
      image: 'younger.jpg'
    },
    {
      model: 'nana-banana',
      category: 'appearance',
      title: 'Профессиональный макияж',
      prompt: 'добавь профессиональный вечерний макияж',
      description: 'Макияж как у визажиста',
      image: 'makeup.jpg'
    },

    // ОДЕЖДА
    {
      model: 'nana-banana',
      category: 'clothes',
      title: 'Деловой костюм',
      prompt: 'переодень в деловой костюм',
      description: 'Строгий бизнес стиль',
      image: 'business-suit.jpg'
    },
    {
      model: 'nana-banana',
      category: 'clothes',
      title: 'Кэжуал стиль',
      prompt: 'одень в стильную повседневную одежду',
      description: 'Модный casual образ',
      image: 'casual.jpg'
    },
    {
      model: 'nana-banana',
      category: 'clothes',
      title: 'Вечернее платье',
      prompt: 'одень в красное вечернее платье',
      description: 'Элегантный вечерний наряд',
      image: 'evening-dress.jpg'
    },
    {
      model: 'nana-banana',
      category: 'clothes',
      title: 'Спортивная форма',
      prompt: 'переодень в спортивную форму',
      description: 'Спортивный образ',
      image: 'sportswear.jpg'
    },
    {
      model: 'nana-banana',
      category: 'clothes',
      title: 'Кожаная куртка',
      prompt: 'добавь черную кожаную куртку',
      description: 'Рокерский стиль',
      image: 'leather-jacket.jpg'
    },

    // ФОН И ЛОКАЦИЯ
    {
      model: 'nana-banana',
      category: 'background',
      title: 'Удалить фон',
      prompt: 'убери весь фон, оставь только меня',
      description: 'Прозрачный или белый фон',
      popular: true,
      image: 'remove-bg.jpg'
    },
    {
      model: 'nana-banana',
      category: 'background',
      title: 'Размыть фон',
      prompt: 'размой фон как на профессиональном портрете',
      description: 'Эффект боке, фокус на лице',
      image: 'blur-bg.jpg'
    },
    {
      model: 'nana-banana',
      category: 'background',
      title: 'Пляж на закате',
      prompt: 'перенеси меня на пляж на закате',
      description: 'Смена локации на тропический пляж',
      image: 'beach.jpg'
    },
    {
      model: 'nana-banana',
      category: 'background',
      title: 'Горы',
      prompt: 'поставь на фон красивые горы',
      description: 'Горный пейзаж на заднем плане',
      image: 'mountains.jpg'
    },
    {
      model: 'nana-banana',
      category: 'background',
      title: 'Город ночью',
      prompt: 'перенеси в ночной город с огнями',
      description: 'Городской пейзаж с подсветкой',
      image: 'night-city.jpg'
    },

    // ПОГОДА И СВЕТ
    {
      model: 'nana-banana',
      category: 'weather',
      title: 'Солнечный день',
      prompt: 'сделай солнечную погоду с ярким светом',
      description: 'Яркое солнце, теплые тона',
      image: 'sunny.jpg'
    },
    {
      model: 'nana-banana',
      category: 'weather',
      title: 'Золотой час',
      prompt: 'добавь освещение золотого часа',
      description: 'Теплый закатный свет',
      popular: true,
      image: 'golden-hour.jpg'
    },
    {
      model: 'nana-banana',
      category: 'weather',
      title: 'Снег',
      prompt: 'добавь падающий снег',
      description: 'Зимняя атмосфера со снегом',
      image: 'snow.jpg'
    },
    {
      model: 'nana-banana',
      category: 'weather',
      title: 'Дождь',
      prompt: 'добавь дождь и мокрые поверхности',
      description: 'Дождливая погода',
      image: 'rain.jpg'
    },
    {
      model: 'nana-banana',
      category: 'weather',
      title: 'Туман',
      prompt: 'окутай туманом',
      description: 'Мистическая туманная атмосфера',
      image: 'fog.jpg'
    },
    {
      model: 'nana-banana',
      category: 'weather',
      title: 'Ночь',
      prompt: 'преврати день в ночь',
      description: 'Ночное освещение',
      image: 'night.jpg'
    },

    // КРЕАТИВНОЕ
    {
      model: 'nana-banana',
      category: 'creative',
      title: 'Черно-белое',
      prompt: 'сделай стильное черно-белое фото',
      description: 'Классическая ч/б фотография',
      image: 'bw.jpg'
    },
    {
      model: 'nana-banana',
      category: 'creative',
      title: 'Кинематографичность',
      prompt: 'сделай как кадр из фильма',
      description: 'Кинематографический вид',
      image: 'cinematic.jpg'
    },
    {
      model: 'nana-banana',
      category: 'creative',
      title: 'HDR эффект',
      prompt: 'примени HDR эффект',
      description: 'Яркие насыщенные цвета',
      image: 'hdr.jpg'
    },
    {
      model: 'nana-banana',
      category: 'creative',
      title: 'Двойная экспозиция',
      prompt: 'создай двойную экспозицию с природой',
      description: 'Художественное наложение',
      image: 'double-exposure.jpg'
    },
    {
      model: 'nana-banana',
      category: 'creative',
      title: 'Неоновые цвета',
      prompt: 'добавь неоновое освещение',
      description: 'Яркие неоновые оттенки',
      image: 'neon.jpg'
    },

    // ПРАКТИЧНОЕ
    {
      model: 'nana-banana',
      category: 'practical',
      title: 'Фото на документы',
      prompt: 'сделай фото на паспорт',
      description: 'Официальное фото для документов',
      image: 'id-photo.jpg'
    },
    {
      model: 'nana-banana',
      category: 'practical',
      title: 'Улучшить качество',
      prompt: 'улучши качество и четкость фото',
      description: 'Повышение разрешения и детализации',
      image: 'enhance.jpg'
    },
    {
      model: 'nana-banana',
      category: 'practical',
      title: 'Восстановить старое фото',
      prompt: 'восстанови старую поврежденную фотографию',
      description: 'Ремонт старых семейных фото',
      popular: true,
      image: 'restore.jpg'
    },
    {
      model: 'nana-banana',
      category: 'practical',
      title: 'Удалить людей с фона',
      prompt: 'убери всех людей с заднего плана',
      description: 'Очистка фона от посторонних',
      image: 'remove-people.jpg'
    },
    {
      model: 'nana-banana',
      category: 'practical',
      title: 'Удалить объект',
      prompt: 'удали [объект] с фото',
      description: 'Убрать ненужные предметы',
      image: 'remove-object.jpg'
    },
    {
      model: 'nana-banana',
      category: 'practical',
      title: 'Раскрасить ЧБ фото',
      prompt: 'раскрась черно-белую фотографию',
      description: 'Добавить цвет в старые фото',
      image: 'colorize.jpg'
    },

    // ===== GPT-5 ПРОМПТЫ (Текстовые задачи) =====
    // НАПИСАНИЕ ТЕКСТОВ
    {
      model: 'gpt-5',
      category: 'writing',
      title: 'Написать пост для соцсетей',
      prompt: 'Напиши привлекательный пост для Instagram на тему [тема]. Сделай его эмоциональным и с призывом к действию.',
      description: 'Создание вирусного контента для соцсетей',
      popular: true,
    },
    {
      model: 'gpt-5',
      category: 'writing',
      title: 'Деловое письмо',
      prompt: 'Составь профессиональное деловое письмо для [получатель] на тему [тема]. Используй вежливый и официальный тон.',
      description: 'Официальная деловая переписка',
    },
    {
      model: 'gpt-5',
      category: 'writing',
      title: 'Описание товара',
      prompt: 'Напиши продающее описание для товара: [название товара]. Подчеркни преимущества и выгоды для покупателя.',
      description: 'Копирайтинг для интернет-магазинов',
    },
    {
      model: 'gpt-5',
      category: 'writing',
      title: 'Резюме и сопроводительное письмо',
      prompt: 'Помоги составить профессиональное резюме для позиции [должность]. Добавь сопроводительное письмо.',
      description: 'Создание CV и cover letter',
    },
    {
      model: 'gpt-5',
      category: 'writing',
      title: 'Статья для блога',
      prompt: 'Напиши SEO-оптимизированную статью на тему [тема]. Объем 1500 слов, структурируй по разделам.',
      description: 'Контент для блога и сайта',
    },
    {
      model: 'gpt-5',
      category: 'writing',
      title: 'Email рассылка',
      prompt: 'Создай текст для email-рассылки о [продукт/акция]. Сделай цепляющую тему письма.',
      description: 'Email-маркетинг и рассылки',
    },

    // АНАЛИЗ И РЕЗЮМЕ
    {
      model: 'gpt-5',
      category: 'analysis',
      title: 'Краткое резюме текста',
      prompt: 'Прочитай этот текст и сделай краткое резюме ключевых мыслей в 3-5 пунктах: [текст]',
      description: 'Выжимка главного из большого текста',
      popular: true,
    },
    {
      model: 'gpt-5',
      category: 'analysis',
      title: 'Анализ конкурентов',
      prompt: 'Проанализируй сайт конкурента [URL] и составь список их сильных и слабых сторон.',
      description: 'Конкурентный анализ',
    },
    {
      model: 'gpt-5',
      category: 'analysis',
      title: 'Проверка фактов',
      prompt: 'Проверь достоверность этого утверждения и приведи источники: [утверждение]',
      description: 'Фактчекинг информации',
    },
    {
      model: 'gpt-5',
      category: 'analysis',
      title: 'Анализ данных',
      prompt: 'Проанализируй эти данные и сделай выводы: [данные]',
      description: 'Интерпретация данных и графиков',
    },
    {
      model: 'gpt-5',
      category: 'analysis',
      title: 'SWOT анализ',
      prompt: 'Проведи SWOT анализ для бизнеса [описание бизнеса]',
      description: 'Стратегический анализ бизнеса',
    },

    // ПРОГРАММИРОВАНИЕ
    {
      model: 'gpt-5',
      category: 'code',
      title: 'Написать функцию',
      prompt: 'Напиши функцию на [язык программирования], которая [описание функциональности]',
      description: 'Генерация кода по описанию',
      popular: true,
    },
    {
      model: 'gpt-5',
      category: 'code',
      title: 'Найти и исправить баг',
      prompt: 'Вот мой код: [код]. Найди ошибки и предложи исправления.',
      description: 'Отладка и исправление кода',
    },
    {
      model: 'gpt-5',
      category: 'code',
      title: 'Оптимизировать код',
      prompt: 'Оптимизируй этот код для лучшей производительности: [код]',
      description: 'Рефакторинг и оптимизация',
    },
    {
      model: 'gpt-5',
      category: 'code',
      title: 'Объяснить код',
      prompt: 'Объясни подробно, что делает этот код: [код]',
      description: 'Разбор и понимание чужого кода',
    },
    {
      model: 'gpt-5',
      category: 'code',
      title: 'Написать регулярное выражение',
      prompt: 'Создай регулярное выражение для [задача, например "поиск email"]',
      description: 'Генерация RegEx паттернов',
    },
    {
      model: 'gpt-5',
      category: 'code',
      title: 'SQL запрос',
      prompt: 'Напиши SQL запрос для [описание задачи]',
      description: 'Составление SQL запросов',
    },

    // ПЕРЕВОД
    {
      model: 'gpt-5',
      category: 'translate',
      title: 'Перевод с сохранением стиля',
      prompt: 'Переведи этот текст с [язык] на [язык], сохранив стиль и тон: [текст]',
      description: 'Качественный перевод с контекстом',
      popular: true,
    },
    {
      model: 'gpt-5',
      category: 'translate',
      title: 'Технический перевод',
      prompt: 'Переведи эту техническую документацию на [язык]: [текст]',
      description: 'Перевод технических текстов',
    },
    {
      model: 'gpt-5',
      category: 'translate',
      title: 'Локализация интерфейса',
      prompt: 'Переведи и адаптируй эти UI тексты для [страна/язык]: [тексты]',
      description: 'Локализация приложений',
    },
    {
      model: 'gpt-5',
      category: 'translate',
      title: 'Проверка перевода',
      prompt: 'Проверь этот перевод на правильность и естественность: оригинал [текст1], перевод [текст2]',
      description: 'Вычитка переводов',
    },

    // ОБУЧЕНИЕ
    {
      model: 'gpt-5',
      category: 'education',
      title: 'Объяснить простыми словами',
      prompt: 'Объясни [сложная концепция] простым языком, как для ребенка',
      description: 'Упрощенное объяснение сложных тем',
    },
    {
      model: 'gpt-5',
      category: 'education',
      title: 'Создать план обучения',
      prompt: 'Составь пошаговый план изучения [навык/тема] для начинающих',
      description: 'Образовательные программы',
    },
    {
      model: 'gpt-5',
      category: 'education',
      title: 'Помощь с домашним заданием',
      prompt: 'Помоги решить эту задачу и объясни решение: [задача]',
      description: 'Репетитор по разным предметам',
    },
    {
      model: 'gpt-5',
      category: 'education',
      title: 'Подготовка к экзамену',
      prompt: 'Создай набор вопросов для подготовки к экзамену по [предмет]',
      description: 'Тесты и тренировочные задания',
    },
    {
      model: 'gpt-5',
      category: 'education',
      title: 'Объяснить ошибку',
      prompt: 'Я сделал ошибку: [описание]. Объясни, в чем я неправ и как правильно.',
      description: 'Разбор ошибок и исправление',
    },

    // ТВОРЧЕСТВО
    {
      model: 'gpt-5',
      category: 'creative-text',
      title: 'Придумать название',
      prompt: 'Придумай 10 креативных названий для [продукт/компания/проект]',
      description: 'Нейминг и брендинг',
    },
    {
      model: 'gpt-5',
      category: 'creative-text',
      title: 'Написать историю',
      prompt: 'Напиши короткую историю на тему [тема] в стиле [жанр]',
      description: 'Креативное письмо и рассказы',
    },
    {
      model: 'gpt-5',
      category: 'creative-text',
      title: 'Сгенерировать идеи',
      prompt: 'Предложи 20 креативных идей для [цель/проект]',
      description: 'Брайншторминг и идеи',
    },
    {
      model: 'gpt-5',
      category: 'creative-text',
      title: 'Написать стихотворение',
      prompt: 'Напиши стихотворение на тему [тема] в стиле [автор/стиль]',
      description: 'Поэзия и рифмы',
    },
    {
      model: 'gpt-5',
      category: 'creative-text',
      title: 'Придумать слоган',
      prompt: 'Создай запоминающийся слоган для [бренд/продукт]',
      description: 'Рекламные слоганы',
    },
    {
      model: 'gpt-5',
      category: 'creative-text',
      title: 'Сценарий видео',
      prompt: 'Напиши сценарий для короткого видео (1-2 минуты) на тему [тема]',
      description: 'Сценарии для YouTube и TikTok',
    },
  ]

  const handleCopyPrompt = (prompt) => {
    navigator.clipboard.writeText(prompt)
    setCopiedPrompt(prompt)
    setTimeout(() => setCopiedPrompt(null), 2000)
  }

  const handleTryBot = () => {
    window.open('https://t.me/your_ones_ai_bot', '_blank')
  }

  const filteredPrompts = prompts.filter(p => {
    const matchesModel = p.model === selectedModel
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         p.prompt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         p.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesModel && matchesCategory && matchesSearch
  })

  const handleModelChange = (model) => {
    setSelectedModel(model)
    setSelectedCategory('all')
    setSearchQuery('')
  }

  return (
    <section id="prompts-library" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact header with title */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Библиотека <span className="gradient-text">промптов</span>
            </h2>
          </div>

          {/* Compact scrollable model tabs */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-medium text-gray-600 whitespace-nowrap">Выберите модель:</span>
            <div className="flex-1 overflow-x-auto scrollbar-hide">
              <div className="flex gap-2 pb-2">
                {models.map((model) => {
                  const ModelIcon = model.icon
                  return (
                    <button
                      key={model.id}
                      onClick={() => handleModelChange(model.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 whitespace-nowrap ${
                        selectedModel === model.id
                          ? `bg-gradient-to-r ${model.gradient} text-white shadow-md`
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <ModelIcon className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm">{model.name}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Instructions block */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-2xl p-6 border border-blue-100">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Left: What you get */}
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-600" />
                  Что вы получите
                </h3>
                <p className="text-sm text-gray-700">
                  {currentModel.hasImages
                    ? 'Профессиональная обработка фото: стилизация, ретушь, изменение фона, погоды и многое другое'
                    : 'Помощь с текстовыми задачами: написание, анализ, программирование, перевод и обучение'
                  }
                </p>
              </div>

              {/* Right: How to use */}
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Copy className="w-4 h-4 text-purple-600" />
                  Как использовать
                </h3>
                <p className="text-sm text-gray-700">
                  {currentModel.hasImages
                    ? 'Отправьте фото в бота → Скопируйте промпт → Получите результат за секунды'
                    : 'Скопируйте промпт → Отправьте в бота → Получите готовый текст'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>

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
              {/* Image Placeholder - только для моделей с hasImages: true */}
              {currentModel.hasImages && (
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
              )}

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
