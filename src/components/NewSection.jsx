import React, { useState, useEffect } from 'react';
import Modal from './Modal';

export default function NewSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const news = [
    { id: 1, title: 'Новость 1', text: 'Описание новости 1' },
    { id: 2, title: 'Новость 2', text: 'Описание новости 2' },
    { id: 3, title: 'Новость 3', text: 'Описание новости 3' },
    { id: 4, title: 'Новость 4', text: 'Описание новости 4' },
    { id: 5, title: 'Новость 5', text: 'Описание новости 5' },
    { id: 6, title: 'Новость 6', text: 'Описание новости 6' },
  ];

  return (
    <section id="fleet" className="bg-white py-16 px-4">
    <div className="relative p-8">
      <div className="grid grid-cols-3 gap-4">
        {news.map((item) => (
          <div key={item.id} className="p-4 bg-gray-100 rounded-lg shadow-md cursor-pointer" onClick={() => setIsModalOpen(true)}>
            <h3 className="text-lg font-bold">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.text}</p>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="bg-white p-6 rounded-lg shadow-lg relative">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-2 right-2 text-gray-500">✖</button>
            <h2 className="text-xl font-bold">Подробнее</h2>
            <p>Здесь будет полный текст новости.</p>
          </div>
        </div>
      )}
    </div>
    </section>
  );
}
