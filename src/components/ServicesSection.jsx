import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LiaMoneyBillAltSolid, LiaMapMarkerAltSolid, LiaCitySolid } from "react-icons/lia";

const services = [
  {
    title: "80 рублей в сутки",
    description: "Во всех городах кроме МСК, СПб, Новосибирска, Екатеринбурга, Казани.",
    link: "/connect",
    icon: <LiaMoneyBillAltSolid size={80} color="black" />,
  },
  {
    title: "Фиксированно с заказа",
    description: "7 рублей с заказа во всех городах России, кроме крупных мегаполисов.",
    link: "/connect",
    icon: <LiaMapMarkerAltSolid size={80} color="black" />,
  },
  {
    title: "3% с заказа (МСК, СПб)",
    description: "3% с заказа в крупных городах, помощь с документами и бухгалтерией.",
    link: "/connect",
    icon: <LiaCitySolid size={80} color="black" />,
  },
];

const ServicesSection = () => {
  // Состояние для отслеживания видимости
  const [isVisible, setIsVisible] = useState(false);

  // Обработчик для отслеживания видимости блока
  const handleScroll = () => {
    const section = document.getElementById("services");
    if (!section) return;
    const rect = section.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-black mb-8">Тарифы и условия</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className=" flex flex-col justify-between w-full max-w-[350px] h-[450px] mx-auto p-6 bg-gradient-to-br from-yellow-400 to-yellow-400 rounded-3xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-[1.05]"
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: 1,
                y: isVisible ? 0 : 50,
              }}
              transition={{
                opacity: { duration: 0.5 },
                y: { duration: 0.5, delay: index * 0.2 },
              }}
            >
              <div className="flex flex-col items-center mb-5">
                <h3 className="text-2xl font-semibold text-black mb-10">{service.title}</h3>
                <p className="text-black mb-4 text-center">{service.description}</p>
                <div className="mt-5 transition-all duration-300 ease-in-out hover:scale-110">
                  {service.icon}
                </div>
              </div>
              <div className="mt-auto">
                <a
                  href={service.link}
                  className="block w-40 mx-auto bg-black text-white py-3 rounded-full font-semibold text-lg hover:bg-black hover:text-white hover:scale-110 transition-all"
                >
                  Подключиться
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
