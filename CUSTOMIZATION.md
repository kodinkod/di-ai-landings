# Руководство по кастомизации

## Что нужно изменить перед запуском

### 1. Telegram Bot URL (ОБЯЗАТЕЛЬНО)

Замените `YOUR_BOT_USERNAME` на имя вашего бота во всех файлах:

**src/components/Hero.jsx** (строки 6, 8):
\`\`\`javascript
window.open('https://t.me/your_actual_bot_name', '_blank')
\`\`\`

**src/components/UseCases.jsx** (строки 126, 165):
\`\`\`javascript
window.open(\`https://t.me/your_actual_bot_name?start=\${telegramCommand}\`, '_blank')
window.open('https://t.me/your_actual_bot_name', '_blank')
\`\`\`

**src/components/CTA.jsx** (строка 7):
\`\`\`javascript
window.open('https://t.me/your_actual_bot_name', '_blank')
\`\`\`

**src/components/Footer.jsx** (строки 22, 36):
\`\`\`javascript
<a href="https://t.me/your_actual_bot_name">
<a href="https://t.me/your_support_username">
\`\`\`

### 2. Добавьте ваш логотип/персонажа

**Место: src/components/Hero.jsx** (примерно строка 78-85)

Найдите комментарий `{/* ВСТАВЬТЕ СЮДА ВАШ ЛОГОТИП/ПЕРСОНАЖА */}`

Вариант 1 - Изображение:
\`\`\`jsx
<img
  src="/logo.png"
  alt="AI Assistant"
  className="w-full h-full object-contain"
/>
\`\`\`

Вариант 2 - SVG:
\`\`\`jsx
<svg viewBox="0 0 200 200" className="w-full h-full">
  {/* ваш SVG код */}
</svg>
\`\`\`

Вариант 3 - Компонент:
\`\`\`jsx
<YourCharacterComponent />
\`\`\`

### 3. Добавьте примеры результатов

**Место: src/components/UseCases.jsx** (строка 158)

Замените placeholder на реальные изображения:

\`\`\`jsx
<div className="absolute -top-2 -right-2 w-20 h-20 rounded-lg overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
  <img
    src={\`/examples/\${useCase.id}.png\`}
    alt={\`\${useCase.title} example\`}
    className="w-full h-full object-cover"
  />
</div>
\`\`\`

Разместите изображения в папке `public/examples/`:
- `image-generation.png`
- `document-analysis.png`
- `data-processing.png`
- и т.д.

### 4. Настройте мета-теги

**Место: index.html**

\`\`\`html
<title>Ваш AI Бот - Описание</title>
<meta name="description" content="Ваше уникальное описание" />
<link rel="icon" type="image/svg+xml" href="/your-favicon.svg" />

<!-- Open Graph для соцсетей -->
<meta property="og:title" content="Ваш AI Бот" />
<meta property="og:description" content="Описание" />
<meta property="og:image" content="/og-image.png" />
<meta property="og:url" content="https://yourdomain.com" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Ваш AI Бот" />
<meta name="twitter:description" content="Описание" />
<meta name="twitter:image" content="/twitter-image.png" />
\`\`\`

### 5. Настройте контакты

**Место: src/components/Footer.jsx**

\`\`\`jsx
<a href="https://t.me/your_support">
  Поддержка в Telegram
</a>
<a href="mailto:your-email@domain.com">
  Email
</a>
\`\`\`

### 6. Кастомизируйте кейсы использования

**Место: src/components/UseCases.jsx** (массив useCases)

Измените существующие или добавьте новые кейсы:

\`\`\`javascript
{
  id: 'your-use-case',
  icon: YourIcon, // из lucide-react
  title: 'Название',
  description: 'Описание',
  examples: [
    'Пример 1',
    'Пример 2',
    'Пример 3',
  ],
  color: 'from-color-500 to-color-500',
  bgColor: 'bg-color-50',
  telegramCommand: '/command',
}
\`\`\`

### 7. Настройте цветовую схему

**Место: tailwind.config.js**

Измените градиенты:
\`\`\`javascript
// В components используйте:
className="bg-gradient-to-r from-your-color-600 to-another-color-600"
\`\`\`

Или добавьте свои цвета:
\`\`\`javascript
colors: {
  brand: {
    50: '#...',
    100: '#...',
    // и так далее
  },
}
\`\`\`

## Опциональные улучшения

### Добавить анимированный фон

В `src/components/Hero.jsx` можно добавить кастомные фоновые элементы.

### Добавить видео демонстрации

\`\`\`jsx
<video autoPlay loop muted className="rounded-xl shadow-xl">
  <source src="/demo.mp4" type="video/mp4" />
</video>
\`\`\`

### Добавить отзывы пользователей

Создайте новый компонент `Testimonials.jsx` и добавьте в `App.jsx`.

### Добавить FAQ секцию

Создайте компонент `FAQ.jsx` с часто задаваемыми вопросами.

### Добавить счетчик пользователей

В `src/components/Features.jsx` можно добавить реальную статистику через API.

## Тестирование

После внесения изменений:

1. Запустите dev-сервер: `npm run dev`
2. Проверьте все ссылки на Telegram
3. Проверьте адаптивность на разных устройствах
4. Протестируйте все кнопки CTA
5. Проверьте загрузку изображений

## Деплой

После кастомизации:

\`\`\`bash
npm run build
\`\`\`

Затем загрузите содержимое папки `dist/` на ваш хостинг.
