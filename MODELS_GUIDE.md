# Руководство по добавлению новых моделей

## Как добавить новую модель AI

Система полностью расширяемая - вы можете добавлять сколько угодно моделей.

### Шаг 1: Добавить конфигурацию модели

В файле `src/components/PromptsLibrary.jsx` найдите массив `models` и добавьте новый объект:

```jsx
const models = [
  // ... существующие модели
  {
    id: 'ваша-модель',              // Уникальный идентификатор
    name: 'Ваша Модель',             // Название (отображается на вкладке)
    description: 'Краткое описание', // Подпись под названием
    icon: YourIcon,                  // Иконка из lucide-react
    gradient: 'from-color to-color', // Градиент для активной вкладки
    categories: [                    // Категории для этой модели
      { id: 'all', name: 'Все промпты', icon: Sparkles },
      { id: 'category1', name: 'Категория 1', icon: SomeIcon },
      // ... другие категории
    ],
    hasImages: false,                // true если нужны превью изображений
    promptCount: 20,                 // Количество промптов (для статистики)
    headerText: 'Описание для header...'
  }
]
```

### Шаг 2: Добавить промпты

В том же файле, в массиве `prompts`, добавьте промпты для вашей модели:

```jsx
const prompts = [
  // ... существующие промпты

  // ===== ВАША МОДЕЛЬ =====
  {
    model: 'ваша-модель',           // ID модели (должен совпадать)
    category: 'category1',           // ID категории
    title: 'Название промпта',
    prompt: 'Текст промпта для бота',
    description: 'Краткое описание что делает',
    popular: true,                   // (опционально) показать в "Популярные"
    image: 'example.jpg'            // (опционально) если hasImages: true
  },
  // ... другие промпты
]
```

### Шаг 3: Импортировать иконку (если нужна новая)

В начале файла добавьте импорт иконки из lucide-react:

```jsx
import {
  // ... существующие импорты
  YourNewIcon
} from 'lucide-react'
```

Доступные иконки: https://lucide.dev/icons/

## Примеры конфигураций

### Модель для работы с изображениями

```jsx
{
  id: 'midjourney',
  name: 'Midjourney',
  description: 'Генерация изображений',
  icon: Image,
  gradient: 'from-violet-600 to-purple-600',
  categories: [
    { id: 'all', name: 'Все промпты', icon: Sparkles },
    { id: 'photo', name: 'Фотореализм', icon: Camera },
    { id: 'art', name: 'Арт', icon: Palette },
    { id: 'design', name: 'Дизайн', icon: Wand2 },
  ],
  hasImages: true,
  promptCount: 30,
  headerText: 'Промпты для генерации изображений в Midjourney'
}
```

### Модель для текстовых задач

```jsx
{
  id: 'claude-sonnet',
  name: 'Claude Sonnet',
  description: 'Аналитика и код',
  icon: MessageSquare,
  gradient: 'from-orange-600 to-red-600',
  categories: [
    { id: 'all', name: 'Все промпты', icon: Sparkles },
    { id: 'analysis', name: 'Анализ', icon: BookOpen },
    { id: 'code', name: 'Код', icon: Code },
    { id: 'writing', name: 'Тексты', icon: FileText },
  ],
  hasImages: false,
  promptCount: 25,
  headerText: 'Промпты для работы с Claude Sonnet'
}
```

### Модель для аудио

```jsx
{
  id: 'whisper',
  name: 'Whisper',
  description: 'Транскрибация аудио',
  icon: Mic,
  gradient: 'from-green-600 to-teal-600',
  categories: [
    { id: 'all', name: 'Все промпты', icon: Sparkles },
    { id: 'transcribe', name: 'Транскрибация', icon: FileText },
    { id: 'translate', name: 'Перевод аудио', icon: Languages },
  ],
  hasImages: false,
  promptCount: 15,
  headerText: 'Промпты для работы с аудио через Whisper'
}
```

## Цветовые градиенты

Используйте Tailwind градиенты:

- `from-purple-600 to-pink-600` - фиолетово-розовый
- `from-blue-600 to-cyan-600` - сине-голубой
- `from-orange-600 to-red-600` - оранжево-красный
- `from-green-600 to-teal-600` - зелено-бирюзовый
- `from-violet-600 to-purple-600` - фиолетовый
- `from-yellow-600 to-orange-600` - желто-оранжевый
- `from-indigo-600 to-blue-600` - индиго-синий

## Адаптивность

Вкладки моделей автоматически адаптируются:

- **Desktop**: все вкладки в одну строку
- **Mobile**: вкладки переносятся (flex-wrap)
- Неограниченное количество моделей поддерживается

## Популярные промпты

Чтобы промпт появился в секции "Популярные промпты":

```jsx
{
  model: 'ваша-модель',
  category: 'some-category',
  title: 'Промпт',
  prompt: '...',
  description: '...',
  popular: true  // <- добавьте этот флаг
}
```

Будут показываться только популярные промпты выбранной модели.

## Счетчик промптов

Свойство `promptCount` используется для документации и опциональной статистики.
Убедитесь что оно соответствует реальному количеству промптов для модели.

## Изображения

Если `hasImages: true`:
- Карточки промптов будут показывать изображения-превью
- Разместите изображения в `/public/examples/`
- Укажите имя файла в поле `image` промпта

Если `hasImages: false`:
- Карточки будут без изображений (более компактные)
- Идеально для текстовых промптов

## Проверка

После добавления модели:

1. ✅ Проверьте что вкладка появилась в UI
2. ✅ Переключитесь на новую модель
3. ✅ Убедитесь что категории правильные
4. ✅ Проверьте что промпты отфильтрованы
5. ✅ Проверьте работу поиска
6. ✅ Проверьте популярные промпты

## Troubleshooting

**Q: Вкладка не появляется?**
A: Проверьте что объект модели добавлен в массив `models`

**Q: Промпты не показываются?**
A: Убедитесь что `model` в промптах совпадает с `id` модели

**Q: Категории не работают?**
A: Проверьте что `category` в промптах совпадает с `id` категории

**Q: Градиент не применяется?**
A: Убедитесь что используете формат Tailwind: `from-{color} to-{color}`

**Q: Иконка не отображается?**
A: Проверьте импорт иконки из lucide-react

## Лимиты

- ✅ Неограниченное количество моделей
- ✅ Неограниченное количество категорий на модель
- ✅ Неограниченное количество промптов на модель
- ✅ Автоматическая адаптивность под количество вкладок

## Пример: Добавление 3-й модели

```jsx
// 1. Импортируем иконку
import { Brain } from 'lucide-react'

// 2. Добавляем в models
const models = [
  // ... nana-banana
  // ... gpt-5
  {
    id: 'stable-diffusion',
    name: 'Stable Diffusion',
    description: 'AI арт',
    icon: Brain,
    gradient: 'from-pink-600 to-rose-600',
    categories: [
      { id: 'all', name: 'Все промпты', icon: Sparkles },
      { id: 'realistic', name: 'Реализм', icon: Camera },
      { id: 'fantasy', name: 'Фэнтези', icon: Wand2 },
      { id: 'abstract', name: 'Абстракция', icon: Palette },
    ],
    hasImages: true,
    promptCount: 40,
    headerText: 'Промпты для создания AI-арта в Stable Diffusion'
  }
]

// 3. Добавляем промпты
const prompts = [
  // ... существующие
  {
    model: 'stable-diffusion',
    category: 'realistic',
    title: 'Фотореалистичный портрет',
    prompt: 'professional portrait photography, detailed face, studio lighting, 8k',
    description: 'Реалистичный портрет студийного качества',
    popular: true,
    image: 'sd-portrait.jpg'
  },
  // ... больше промптов
]
```

Готово! Модель автоматически появится в UI.
