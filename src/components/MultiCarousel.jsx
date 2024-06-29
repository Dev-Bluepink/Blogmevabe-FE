import React, { useState, useEffect } from "react";

const MultiCarousel = () => {
  const items = [
    {
      id: 1,
      image:
        "https://firebasestorage.googleapis.com/v0/b/weloveschool-212d8.appspot.com/o/z5578863238987_b222508a6437215998fd3e60bd42e4ad.jpg?alt=media&token=7d54b91b-a786-49b6-ad05-8232e18b0b41",
      avatar: "https://via.placeholder.com/150",
      name: "Hồ Lê",
      content: "Chồng 1997 vợ 1997 sinh con năm nào...",
    },
    {
      id: 2,
      image:
        "https://firebasestorage.googleapis.com/v0/b/weloveschool-212d8.appspot.com/o/z5578863239018_63801e3c4d29e3bd1faaf4db71114030.jpg?alt=media&token=91b310b3-fdf1-4a0b-b9bc-1716e5e8adba",
      avatar: "https://via.placeholder.com/150",
      name: "Hồ Lê",
      content: "Trẻ sơ sinh thở nhanh và mạnh khi ngủ là...",
    },
    {
      id: 3,
      image:
        "https://firebasestorage.googleapis.com/v0/b/weloveschool-212d8.appspot.com/o/z5578863258511_373c25e106e4688a3fbc4c5ea2184767.jpg?alt=media&token=be4db9fc-5712-4ea1-b311-ff3d016a7fee",
      avatar: "https://via.placeholder.com/150",
      name: "Hồ Lê",
      content: "Hết kinh bao nhiêu ngày thì rụng trứng...",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/250",
      avatar: "https://via.placeholder.com/150",
      name: "Hồ Lê",
      content: "Một nội dung khác...",
    },
    {
      id: 5,
      image: "https://via.placeholder.com/250",
      avatar: "https://via.placeholder.com/150",
      name: "Hồ Lê",
      content: "Một nội dung khác...",
    },
    {
      id: 6,
      image: "https://via.placeholder.com/250",
      avatar: "https://via.placeholder.com/150",
      name: "Hồ Lê",
      content: "Một nội dung khác...",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? Math.ceil(items.length / 3) - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === Math.ceil(items.length / 3) - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative mx-auto ">
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${(currentIndex * 100) / 3}%)` }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-1/3 h-64 bg-cover bg-center rounded-lg relative mr-4"
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            >
              <div className="absolute bottom-10 ml-4">
                <p className="text-sm font-bold text-white">{item.content}</p>
                <div className="flex items-center mt-4">
                  <img
                    src={item.avatar}
                    alt=""
                    className="w-8 h-8 rounded-full"
                  />
                  <p className="ml-2 text-sm text-white">{item.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-500 bg-opacity-50 text-white"
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-500 bg-opacity-50 text-white"
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </div>
  );
};

export default MultiCarousel;
