import React from "react"; // Импорт React
import { motion } from "framer-motion";
import { FaTelegramPlane, FaVk } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex justify-center space-x-8">
        <a href="https://t.me/c/1748875415/15042" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <FaTelegramPlane className="text-blue-500 text-2xl" />
          </div>
          <span>Telegram</span>
        </a>
        <a href="https://vk.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <FaVk className="text-blue-700 text-2xl" />
          </div>
          <span>ВКонтакте</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;