// src/components/ContactSection.jsx
import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Связаться с нами
        </h2>
        <p className="text-lg text-gray-900 max-w-5xl mx-auto mb-8">
          Центр подключения водителей работает полностью онлайн. Это позволяет нам:
        </p>
        <ul className="text-lg text-gray-900 max-w-5xl mx-auto mb-8 text-left list-disc list-inside">
          <li>Экономить на аренде и направлять эти средства на улучшение сервиса для наших водителей.</li>
          <li>Работать быстрее и удобнее, без необходимости личного визита – все вопросы решаются дистанционно.</li>
          <li>Следовать мировым трендам, ведь онлайн-формат – это будущее, уже доказавшее свою эффективность.</li>
        </ul>
        <p className="text-lg font-semibold text-gray-900">
          Связаться с нами можно во всех мессенджерах по следующим номерам:
        </p>
        <p className="text-xl font-bold text-yellow-500 mt-2">
          +7 921 993-00-06
        </p>
        <p className="text-xl font-bold text-yellow-500 mt-2">
          +7 965 016 71 88
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
