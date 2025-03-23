// src/components/HeroSection.jsx

import React from "react";
import { motion } from "framer-motion";

import videoBg from '../assets/IMG_2432.mp4';

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
        <source src={videoBg} type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 flex items-center">
        <div className="bg-white/80 p-6 rounded-xl max-w-md ml-12">
          <h1 className="text-3xl font-bold">Центр подключения водителей</h1>
          <p className="mt-2">Мы предоставляем комфортные условия для работы водителей и высокий уровень сервиса для пассажиров.</p>
          <button className="mt-4 px-6 py-2 bg-yellow-500 text-black rounded-lg font-bold">Подключиться</button>
        </div>
      </div>
    </div>
  );
}
