import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MultiCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const items = [
    {
      id: 1,
      image: "https://via.placeholder.com/300",
      avatar: "https://via.placeholder.com/150",
      name: "Hồ Lê",
      content: "Chồng 1997 vợ 1997 sinh con năm nào...",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/300",
      avatar: "https://via.placeholder.com/150",
      name: "Hồ Lê",
      content: "Trẻ sơ sinh thở nhanh và mạnh khi ngủ là...",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/300",
      avatar: "https://via.placeholder.com/150",
      name: "Hồ Lê",
      content: "Hết kinh bao nhiêu ngày thì rụng trứng...",
    },
  ];

  return (
    <div className=" mx-auto p-4">
      <div className="grid grid-cols-3 gap-4">
        {items.map((item) => (
          <div key={item.id} className="p-4">
            <div
              className="h-64 bg-cover bg-center rounded-lg relative"
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            >
              {/* chữ cách trên 50% */}
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiCarousel;
