import React from "react";
import { motion } from "framer-motion";
import { LiaCarSideSolid, LiaShipSolid, LiaHelicopterSolid, LiaGlassCheersSolid, LiaGlobeSolid } from "react-icons/lia";

const FleetSection = () => {
  return (
    <section id="fleet" className="bg-white py-16 px-4">
      {/* Текст над мини-блоками */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-10">
          Центр подключения водителей – комфорт и качество в каждой поездке
        </h2>
        <p className="text-lg text-gray-900 max-w-5xl mx-auto">
          Мы предлагаем профессиональные услуги такси во всех тарифах: Эконом, Комфорт, Комфорт+, Бизнес, Премьер, Элит, Минивэн. Независимо от выбранного класса, наши водители обеспечивают высокий уровень сервиса, а автомобили – чистоту и комфорт.
        </p>
        <p className="text-lg text-gray-900 max-w-5xl mx-auto mt-6">
          Но мы не просто таксопарк – мы создаем премиальный сервис перевозок, предлагая клиентам услуги, которые делают поездки удобными, статусными и незабываемыми.
        </p>
      </div>

      {/* Мини-блоки с карточками */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 justify-center">
        {/* Карточка 1 */}
        <div className="flip-card relative group w-full max-w-[320px] h-[450px] mx-auto transform hover:scale-105 transition-all duration-300">
          <div className="flip-card-inner w-full h-full bg-white rounded-lg shadow-lg transition-transform duration-300">
            {/* Лицевая сторона карточки */}
            <div className="flip-card-front w-full h-full p-8 flex flex-col justify-center items-center text-center bg-gradient-to-r from-gray-100 to-gray-100 rounded-lg shadow-xl">
              <h3 className="text-2xl font-semibold">VIP-трансферы</h3>
              {/* Иконка внутри карточки */}
              <div className="flex justify-center mt-4">
                <LiaCarSideSolid size={100} color="#FBBF24" />
              </div>
            </div>
            {/* Оборотная сторона карточки */}
            <div className="flip-card-back w-full h-full p-8 bg-yellow-500 text-white rounded-lg flex items-center justify-center transform rotate-y-180">
              <p className="text-xl text-white leading-relaxed font-semibold text-justify">
                Организуем встречу в аэропорту, на вокзале или даже на границе с максимальным комфортом. Ваш личный водитель встретит вас с табличкой, поможет с багажом и доставит в нужное место без задержек.
              </p>
            </div>
          </div>
        </div>

        {/* Карточка 2 */}
        <div className="flip-card relative group w-full max-w-[320px] h-[450px] mx-auto transform hover:scale-105 transition-all duration-300">
          <div className="flip-card-inner w-full h-full bg-white rounded-lg shadow-lg transition-transform duration-300">
            {/* Лицевая сторона карточки */}
            <div className="flip-card-front w-full h-full p-8 flex flex-col justify-center items-center text-center bg-gradient-to-r from-gray-100 to-gray-100 rounded-lg shadow-xl">
              <h3 className="text-2xl font-semibold text-black">Эксклюзивные экскурсионные туры</h3>
              {/* Иконка внутри карточки */}
              <div className="flex justify-center mt-4">
                <LiaShipSolid size={100} color="#FBBF24" />
              </div>
            </div>
            {/* Оборотная сторона карточки */}
            <div className="flip-card-back w-full h-full p-8 bg-yellow-500 text-white rounded-lg flex items-center justify-center transform rotate-y-180">
              <p className="text-xl text-center leading-relaxed shadow-xl bg-black bg-opacity-60 p-4 rounded-xl">
                Роскошные прогулки на катерах по знаменитым водным артериям города, где каждый маршрут создан с учетом ваших пожеланий.
              </p>
            </div>
          </div>
        </div>

        {/* Карточка 3 */}
        <div className="flip-card relative group w-full max-w-[320px] h-[450px] mx-auto transform hover:scale-105 transition-all duration-300">
          <div className="flip-card-inner w-full h-full bg-white rounded-lg shadow-lg transition-transform duration-300">
            {/* Лицевая сторона карточки */}
            <div className="flip-card-front w-full h-full p-8 flex flex-col justify-center items-center text-center bg-gradient-to-r from-gray-100 to-gray-100 rounded-lg shadow-xl">
              <h3 className="text-2xl font-semibold text-black">Полеты на вертолете</h3>
              {/* Иконка внутри карточки */}
              <div className="flex justify-center mt-4">
                <LiaHelicopterSolid size={100} color="#FBBF24" />
              </div>
            </div>
            {/* Оборотная сторона карточки */}
            <div className="flip-card-back w-full h-full p-8 bg-yellow-500 text-white rounded-lg flex items-center justify-center transform rotate-y-180">
              <p className="text-xl text-center leading-relaxed">
                Уникальная возможность увидеть северную столицу с высоты птичьего полета. Откройте для себя захватывающие виды города, Финского залива и исторических достопримечательностей.
              </p>
            </div>
          </div>
        </div>

        {/* Карточка 4 */}
        <div className="flip-card relative group w-full max-w-[320px] h-[450px] mx-auto transform hover:scale-105 transition-all duration-300">
          <div className="flip-card-inner w-full h-full bg-white rounded-lg shadow-lg transition-transform duration-300">
            {/* Лицевая сторона карточки */}
            <div className="flip-card-front w-full h-full p-8 flex flex-col justify-center items-center text-center bg-gradient-to-r from-gray-100 to-gray-100 rounded-lg shadow-xl">
              <h3 className="text-2xl font-semibold text-black">Выездные мероприятия</h3>
              {/* Иконка внутри карточки */}
              <div className="flex justify-center mt-4">
                <LiaGlassCheersSolid size={100} color="#FBBF24" />
              </div>
            </div>
            {/* Оборотная сторона карточки */}
            <div className="flip-card-back w-full h-full p-8 bg-yellow-500 text-white rounded-lg flex items-center justify-center transform rotate-y-180">
              <p className="text-xl text-center leading-relaxed shadow-xl bg-black bg-opacity-60 p-4 rounded-xl">
                Сделаем любое событие незабываемым, предоставляя элегантные автомобили, водителей в форме и безупречный сервис.
              </p>
            </div>
          </div>
        </div>

        {/* Карточка 5 */}
        <div className="flip-card relative group w-full max-w-[320px] h-[450px] mx-auto transform hover:scale-105 transition-all duration-300">
          <div className="flip-card-inner w-full h-full bg-white rounded-lg shadow-lg transition-transform duration-300">
            {/* Лицевая сторона карточки */}
            <div className="flip-card-front w-full h-full p-8 flex flex-col justify-center items-center text-center bg-gradient-to-r from-gray-100 to-gray-100 rounded-lg shadow-xl">
              <h3 className="text-2xl font-semibold text-black">Обслуживание ПМЭФ</h3>
              {/* Иконка внутри карточки */}
              <div className="flex justify-center mt-4">
                <LiaGlobeSolid size={100} color="#FBBF24" />
              </div>
            </div>
            {/* Оборотная сторона карточки */}
            <div className="flip-card-back w-full h-full p-8 bg-yellow-500 text-white rounded-lg flex items-center justify-center transform rotate-y-180">
              <p className="text-xl text-center leading-relaxed shadow-xl bg-black bg-opacity-60 p-4 rounded-xl">
                Мы активно работаем на этом знаковом мероприятии, обеспечивая транспортное сопровождение делегатов, участников и гостей.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
