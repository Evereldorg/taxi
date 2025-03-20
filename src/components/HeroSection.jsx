// src/components/HeroSection.jsx

import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-primary text-white" id="hero">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/assets/IMG_2432.mp4" type="video/mp4" />
      </video>
      <motion.div
        className="text-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold mb-4">Центр подключения водителей</h1>
        <p className="text-xl">Стань частью нашей команды и начни зарабатывать сегодня!</p>
        <p>
        </p>
        <a
          href="#services"
          className="inline-block bg-black text-white py-3 px-8 text-lg font-semibold rounded-full transition duration-300 ease-in-out hover:bg-gray-800 hover:scale-105"
        >
          Подключиться
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
