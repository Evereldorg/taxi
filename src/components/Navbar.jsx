import React from 'react';
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Логотип слева */}
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="Логотип" className="h-10" />
          <span className="text-xl font-bold text-gray-900">Центр подключения водителей</span>
        </div>

        {/* Навигация */}
        <div className="hidden md:flex space-x-6">
          {["about", "fleet", "services", "contact"].map((section) => (
            <Link
              key={section}
              to={section} // Используем to вместо href
              spy={true}  // Следит за активной секцией
              smooth={true}  // Плавная прокрутка
              offset={-20}  // Поднимаем немного, чтобы не скрывались элементы под Navbar
              duration={500}  // Длительность прокрутки
              className="text-gray-700 hover:text-yellow-500 transition-all duration-1 ease-in-out"
            >
              {section === "about" ? "О нас" :
               section === "fleet" ? "Услуги" : 
               section === "services" ? "Тарифы" :  
               section === "contact" ? "Контакты" : ""}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;