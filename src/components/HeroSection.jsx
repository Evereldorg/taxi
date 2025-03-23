"use client";
import React from "react";
import videoBg from "../assets/IMG_2432.mp4";
import { FaMoneyBillAlt, FaMapMarkerAlt, FaCity, FaTools } from "react-icons/fa"; // Подключаем иконки из react-icons/fa

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen bg-black text-white">
      <video autoPlay loop muted className="absolute w-full h-full object-cover">
        <source src={videoBg} type="video/mp4" />
      </video>

      {/* Блок с информацией слева */}
      <div className="bg-black/80 p-8 rounded-2xl shadow-lg w-full max-w-lg absolute left-4 top-1/2 transform -translate-y-1/2 flex flex-col items-start px-6">
        {/* Заголовок */}
        <h2 className="text-3xl font-bold text-white mb-6 text-left whitespace-nowrap overflow-hidden text-ellipsis">
          Центр подключения водителей
        </h2>

        {/* Краткая информация */}
        <p className="text-lg text-gray-300 mb-6 text-left">
          Мы предлагаем водителям лучшие условия для работы. Присоединяйтесь к нам, чтобы получить стабильный доход, удобный график и множество бонусов. Мы ценим каждого водителя и предлагаем:
        </p>

        {/* Список преимуществ с иконками */}
        <ul className="text-gray-200 mb-6 list-disc pl-6 space-y-2">
          <li className="flex items-center"><FaMoneyBillAlt className="mr-2 text-yellow-500" size={20} /> Высокие тарифы и стабильный доход</li>
          <li className="flex items-center"><FaMapMarkerAlt className="mr-2 text-yellow-500" size={20} /> Подключение без скрытых комиссий</li>
          <li className="flex items-center"><FaCity className="mr-2 text-yellow-500" size={20} /> Поддержка в крупных городах и регионах</li>
          <li className="flex items-center"><FaTools className="mr-2 text-yellow-500" size={20} /> Оперативная помощь и обучение</li>
        </ul>

        {/* Кнопка подключиться по центру */}
        <button className="self-center px-8 py-4 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 hover:scale-105 transition-all">
          Подключиться
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
