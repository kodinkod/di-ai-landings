import React from 'react'
import { ScanText, ArrowRight, CheckCircle2 } from 'lucide-react'

const OCRShowcase = () => {
  const handleOCRClick = () => {
    window.open('https://t.me/your_ones_ai_bot?start=/ocr', '_blank')
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Visual Example */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Main Image Placeholder - ВСТАВЬТЕ СЮДА ИЗОБРАЖЕНИЕ С ТЕКСТОМ */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-cyan-100">
                <div className="aspect-[4/3] flex flex-col items-center justify-center p-8">
                  <ScanText className="w-24 h-24 text-blue-400 mb-6" />
                  <div className="text-center space-y-3">
                    <p className="text-gray-600 font-medium">
                      Вставьте изображение с текстом:
                    </p>
                    <code className="block text-xs bg-white px-4 py-2 rounded-lg text-gray-700">
                      /public/examples/ocr-example.jpg
                    </code>
                    <p className="text-sm text-gray-500 pt-4">
                      Пример: фото документа, чек,<br />
                      скриншот или рукописный текст
                    </p>
                  </div>

                  {/* Замените этот блок на ваше изображение: */}
                  {/*
                  <img
                    src="/examples/ocr-example.jpg"
                    alt="OCR Example"
                    className="w-full h-full object-cover"
                  />
                  */}
                </div>

                {/* Scan line animation */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50 animate-scan"></div>
                </div>
              </div>

              {/* Extracted Text Preview - РЕЗУЛЬТАТ OCR */}
              <div className="mt-6 glass-effect rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="font-semibold text-gray-900">Распознанный текст:</span>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm text-gray-700 border border-gray-200">
                  {/* ЗДЕСЬ БУДЕТ ПРИМЕР РАСПОЗНАННОГО ТЕКСТА */}
                  <p className="text-gray-400 italic">
                    Здесь появится распознанный текст<br />
                    из вашего примера изображения
                  </p>
                  {/* Раскомментируйте и вставьте реальный пример:
                  <p>
                    Пример распознанного текста<br />
                    из вашего изображения...
                  </p>
                  */}
                </div>
              </div>
            </div>
          </div>

          {/* Right - Description */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-6">
              <ScanText className="w-4 h-4" />
              <span>OCR - Оптическое распознавание</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Извлекайте текст из <span className="gradient-text">любых фото</span>
            </h2>

            <p className="text-xl text-gray-600 mb-8">
              Просто отправьте фото с текстом в бота, и получите весь текст
              в удобном формате для копирования
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {[
                'Распознавание печатного текста',
                'Работа с рукописными заметками',
                'Извлечение текста из документов',
                'Поддержка множества языков',
                'Автоматический перевод текста',
                'Сохранение в удобном формате',
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleOCRClick}
                className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                Попробовать OCR
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Use Cases */}
            <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-3">Полезно для:</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>📄 Оцифровки бумажных документов</li>
                <li>📸 Извлечения текста из скриншотов</li>
                <li>📝 Перевода вывесок и меню</li>
                <li>✍️ Распознавания рукописных заметок</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(calc(100vh));
          }
        }
        .animate-scan {
          animation: scan 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default OCRShowcase
