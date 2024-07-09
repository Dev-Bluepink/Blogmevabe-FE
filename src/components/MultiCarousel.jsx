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
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // New state for window width
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize(); // Call on initial render

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const calculateItemsPerView = () => {
    if (windowWidth >= 1024) {
      return 3; // Show 3 images on large screens
    } else if (windowWidth >= 768) {
      return 2; // Show 2 images on medium screens
    } else {
      return 1; // Show 1 image on small screens
    }
  };
  return (
    <div className="relative hidden md:block">
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 mr-4"
          style={{ transform: `translateX(-${(currentIndex * 100) / 3}%)` }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-1/3   bg-cover bg-center rounded-lg relative mr-2
             
             "
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/weloveschool-212d8.appspot.com/o/Rectangle%2025.png?alt=media&token=41b291d2-fd83-48c4-83f1-3bda042295a1"
                alt=""
                // className="w-full h-full "
                width={
                  calculateItemsPerView() === 1
                    ? "100%"
                    : calculateItemsPerView() === 2
                    ? "50%"
                    : "33.33%"
                }
                className="w-full h-full rounded-2xl"
              />
              <div className="absolute bottom-5 ml-4">
                <p className="text-xl font-bold text-white">{item.content}</p>
                <div className="flex items-center mt-1">
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
