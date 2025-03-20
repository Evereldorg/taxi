// src/components/AboutSection.jsx
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          О нас
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
          <strong>Центр подключения водителей</strong> – таксопарк, созданный водителями для водителей.
        </p>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
          Мы знаем, каково это – работать в такси. С какими сложностями сталкиваются водители: задержки выплат, отсутствие поддержки, сложные условия работы. Именно поэтому в 2022 году мы решили создать свой таксопарк – такой, в котором водители чувствуют себя уверенно, работают на выгодных условиях и всегда могут рассчитывать на помощь.
        </p>

        <h3 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
          Почему выбирают нас?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <p className="text-lg font-semibold text-gray-900">🚀 Мгновенное подключение</p>
            <p className="text-gray-700">Начните зарабатывать уже сегодня.</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <p className="text-lg font-semibold text-gray-900">💰 Честные и своевременные выплаты</p>
            <p className="text-gray-700">Без задержек и скрытых комиссий.</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <p className="text-lg font-semibold text-gray-900">📞 Круглосуточная поддержка</p>
            <p className="text-gray-700">Мы всегда рядом, чтобы помочь в любой ситуации.</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <p className="text-lg font-semibold text-gray-900">📄 Помощь с документами</p>
            <p className="text-gray-700">Консультируем по ИП, самозанятости, путевым листам и ОСГОП.</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <p className="text-lg font-semibold text-gray-900">🚗 Подбор автомобилей (СПб)</p>
            <p className="text-gray-700">Подберем машину под нужный тариф.</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <p className="text-lg font-semibold text-gray-900">👨‍✈️ Подбор водителей для арендодателей</p>
            <p className="text-gray-700">Найдем надежного водителя для вашего авто.</p>
          </div>
        </div>

        <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-10">
          Мы не просто подключаем – мы помогаем водителям строить стабильный и выгодный бизнес. Наша миссия – создать комфортные условия, где каждый водитель сможет зарабатывать достойные деньги и чувствовать себя защищенным.
        </p>

        <p className="text-xl font-bold text-yellow-500 mt-6">
          Присоединяйтесь к Центру подключения водителей прямо сейчас!
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
