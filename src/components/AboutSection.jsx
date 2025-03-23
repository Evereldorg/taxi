import React from 'react';
import { FaRocket, FaHandHoldingUsd, FaHeadset, FaFileAlt, FaCar, FaUserCheck } from "react-icons/fa";

const services = [
  { id: 1, icon: <FaRocket size={40} className="text-yellow-400" />, title: "Мгновенное подключение", description: "Начните зарабатывать уже сегодня." },
  { id: 2, icon: <FaHandHoldingUsd size={40} className="text-green-400" />, title: "Честные и своевременные выплаты", description: "Без задержек и скрытых комиссий." },
  { id: 3, icon: <FaHeadset size={40} className="text-blue-500" />, title: "Круглосуточная поддержка", description: "Мы всегда рядом, чтобы помочь в любой ситуации." },
  { id: 4, icon: <FaFileAlt size={40} className="text-gray-700" />, title: "Помощь с документами", description: "Консультируем по ИП, самозанятости, путевым листам и ОСГОП." },
  { id: 5, icon: <FaCar size={40} className="text-red-500" />, title: "Подбор автомобилей (СПб)", description: "Подберем машину под нужный тариф." },
  { id: 6, icon: <FaUserCheck size={40} className="text-teal-500" />, title: "Подбор водителей для арендодателей", description: "Найдем надежного водителя для вашего авто." },
];

export default function AboutSection() {
  return (
    <section id="about" className="flex flex-col items-center justify-center py-12 bg-gray-100">
      <h2 className="text-4xl font-bold text-gray-900 mb-10">
        О нас
      </h2>
      <p className="text-lg text-gray-900 max-w-5xl mx-auto mb-8">
        <strong>Центр подключения водителей</strong> – таксопарк, созданный водителями для водителей.
      </p>
      <p className="text-lg text-gray-900 max-w-5xl mx-auto mb-4">
        Мы знаем, каково это – работать в такси. С какими сложностями сталкиваются водители: задержки выплат, отсутствие поддержки, сложные условия работы. Именно поэтому в 2022 году мы решили создать свой таксопарк – такой, в котором водители чувствуют себя уверенно, работают на выгодных условиях и всегда могут рассчитывать на помощь.
      </p>

      <h3 className="text-3xl font-semibold text-gray-900 mt-6 mb-6">
        Почему именно мы?
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white p-6 rounded-3xl shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="text-gray-700 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
      <p className="text-lg text-gray-900 max-w-5xl mx-auto mt-10">
        Мы не просто подключаем – мы помогаем водителям строить стабильный и выгодный бизнес. Наша миссия – создать комфортные условия, где каждый водитель сможет зарабатывать достойные деньги и чувствовать себя защищенным.
      </p>

      <p className="text-2xl font-bold text-yellow-400 mt-6">
        Присоединяйтесь к Центру подключения водителей прямо сейчас!
      </p>
    </section>
  );
}
