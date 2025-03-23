import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const ContactSection = () => {
  // Состояние для отслеживания номера, который сейчас показывается
  const [copiedNumber, setCopiedNumber] = useState(null);
  const [showCopiedMessage, setShowCopiedMessage] = useState(false);

  // Функция для копирования номера и отображения сообщения
  const copyToClipboard = (number) => {
    navigator.clipboard.writeText(number);
    setCopiedNumber(number); // Устанавливаем номер для уведомления
    setShowCopiedMessage(true); // Показываем сообщение

    // Через 1 секунду скрываем сообщение и возвращаем номер
    setTimeout(() => {
      setShowCopiedMessage(false);
    }, 1000); // 1 секунда для исчезновения
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Связаться с нами
        </h2>
        <p className="text-lg text-gray-900 max-w-3xl mx-auto mb-8">
          Центр подключения водителей работает полностью онлайн. Это позволяет нам:
        </p>
        <ul className="text-lg text-gray-900 max-w-3xl mx-auto mb-8 text-left list-disc list-inside">
          <li>Экономить на аренде и направлять эти средства на улучшение сервиса для наших водителей.</li>
          <li>Работать быстрее и удобнее, без необходимости личного визита – все вопросы решаются дистанционно.</li>
          <li>Следовать мировым трендам, ведь онлайн-формат – это будущее, уже доказавшее свою эффективность.</li>
        </ul>
        <p className="text-lg font-semibold text-gray-900">
          Связаться с нами можно во всех мессенджерах по следующим номерам:
        </p>
        <div className="flex justify-center items-center gap-4 mt-4">
          {["+7 921 993-00-06", "+7 965 016 71 88"].map((number) => (
            <div 
              key={number} 
              className=" flex items-center gap-2 cursor-pointer p-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
              onClick={() => copyToClipboard(number)}
            >
              {/* Если сообщение скопировано, показываем его вместо номера */}
              {showCopiedMessage && copiedNumber === number ? (
                <p className="text-xl font-bold text-yellow-500 w-full text-center">Скопировано</p>
              ) : (
                <p className="text-xl font-bold text-yellow-500 w-full text-center">{number}</p>
              )}
              <FaWhatsapp className="text-green-500 text-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;