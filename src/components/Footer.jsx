import React from 'react'
import { Heart, Mail, MessageCircle } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">AI Ассистент</h3>
            <p className="text-gray-400 text-sm">
              Современный инструмент для решения повседневных задач с помощью искусственного интеллекта.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#use-cases" className="hover:text-white transition-colors">
                  Возможности
                </a>
              </li>
              <li>
                <a href="https://t.me/your_ones_ai_bot" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Открыть бота
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Контакты</h3>
            <div className="space-y-3">
              <a
                href="https://t.me/YOUR_SUPPORT_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Поддержка в Telegram</span>
              </a>
              <a
                href="mailto:support@example.com"
                className="flex items-center gap-2 text-sm hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            {new Date().getFullYear()} AI Ассистент. Все права защищены.
          </p>
          <p className="text-sm text-gray-400 flex items-center gap-1">
            Сделано с <Heart className="w-4 h-4 text-red-500" /> для людей
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
