import React from "react";
import { motion } from "framer-motion";
import Modal from "./Modal";
import { useState } from "react";

const services = [
  {
    title: "💰 80 рублей в сутки",
    description: "Во всех городах кроме МСК, СПб, Новосибирска, Екатеринбурга, Казани.",
    link: "/connect",
  },
  {
    title: "📌 Фиксированно с заказа",
    description: "7 рублей с заказа во всех городах России, кроме крупных мегаполисов.",
    link: "/connect",
  },
  {
    title: "🏙 3% с заказа (МСК, СПб)",
    description: "3% с заказа в крупных городах, помощь с документами и бухгалтерией.",
    link: "/connect",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Тарифы и условия</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col justify-between transition-all w-full max-w-[320px] h-[400px] mx-auto duration-300 ease-in-out hover:scale-105 hover:shadow-lg p-4 bg-white rounded-lg shadow-md">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-700 mb-5">{service.description}</p>
              </div>
              <div className="mt-auto">
                <a href={service.link} className="block w-32 mx-auto bg-yellow-500 text-white py-2 rounded-full hover:bg-yellow-600 transition">
                  Подключиться
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;