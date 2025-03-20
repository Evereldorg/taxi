import React, { useState, useEffect } from 'react';
import Modal from './Modal';

const NewSection = () => {
  const [news, setNews] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentNews, setCurrentNews] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      const vkNews = [{ id: 1, title: "Новость из ВКонтакте", content: "Текст новости", date: "2025-03-01" }];
      const tgNews = [{ id: 2, title: "Новость из Telegram", content: "Текст новости", date: "2025-03-02" }];
      setNews([...vkNews, ...tgNews]);
    };
    fetchNews();
  }, []);

  const openModal = (newsItem) => {
    setCurrentNews(newsItem);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="bg-white py-20" id="news">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary mb-10">Новости</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {news.map((newsItem) => (
            <div
              key={newsItem.id}
              className="bg-gray-100 p-6 rounded-lg shadow-lg cursor-pointer"
              onClick={() => openModal(newsItem)}
            >
              <h3 className="text-xl font-semibold">{newsItem.title}</h3>
              <p>{newsItem.content.substring(0, 100)}...</p>
            </div>
          ))}
        </div>
      </div>

      {/* Фон с блюром, если модальное окно открыто */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 backdrop-blur-sm z-40"></div>
      )}

      {/* Модальное окно */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="modal-content">
          <h2 className="text-xl font-semibold mb-4">{currentNews?.title}</h2>
          <p>{currentNews?.content}</p>
          <span className="text-sm text-gray-500">{currentNews?.date}</span>
          <button className="mt-4 bg-yellow-400 text-black py-2 px-4 rounded-lg" onClick={closeModal}>
            Закрыть
          </button>
        </div>
      </Modal>
    </section>
  );
};

export default NewSection;
