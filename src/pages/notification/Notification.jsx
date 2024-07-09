import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AuthConsumer from "../../components/AuthContext";

export default function Notification() {
  const { isAuthenticated } = AuthConsumer();
  const navigate = useNavigate();
  const { feedName } = useParams();
  if (feedName == "home" && !isAuthenticated) {
    return navigate("/login");
  }
  useEffect(() => {
    document.title = `Donghanhcungcon | notification`;
  }, [feedName]);

  const notificationItems = [
    {
      id: 1,
      image: "https://via.placeholder.com/300",
      avatar: "https://via.placeholder.com/150",
      name: "Hồ Lê",
      content: "đã nhắc bạn tới một bình luận",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/300",
      avatar: "https://via.placeholder.com/150",
      name: "Hồ Lê",
      content: "đã nhắc bạn tới một bình luận",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/300",
      avatar: "https://via.placeholder.com/150",
      name: "Hồ Lê",
      content: "đã nhắc bạn tới một bình luận",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/300",
      avatar: "https://via.placeholder.com/150",
      name: "Hồ Lê",
      content: "đã nhắc bạn tới một bình luận",
    },
    {
      id: 5,
      image: "https://via.placeholder.com/300",
      avatar: "https://via.placeholder.com/150",
      name: "Hồ Lê",
      content: "đã nhắc bạn tới một bình luận",
    },
    {
      id: 6,
      image: "https://via.placeholder.com/300",
      avatar: "https://via.placeholder.com/150",
      name: "Hồ Lê",
      content: "đã nhắc bạn tới một bình luận",
    },
    {
      id: 7,
      image: "https://via.placeholder.com/300",
      avatar: "https://via.placeholder.com/150",
      name: "Hồ Lê",
      content: "đã nhắc bạn tới một bình luận",
    },
    {
      id: 8,
      image: "https://via.placeholder.com/300",
      avatar: "https://via.placeholder.com/150",
      name: "Hồ Lê",
      content: "đã nhắc bạn tới một bình luận",
    },
    {
      id: 9,
      image: "https://via.placeholder.com/300",
      avatar: "https://via.placeholder.com/150",
      name: "Hồ Lê",
      content: "đã nhắc bạn tới một bình luận",
    },
    {
      id: 10,
      image: "https://via.placeholder.com/300",
      avatar: "https://via.placeholder.com/150",
      name: "Hồ Lê",
      content: "đã nhắc bạn tới một bình luận",
    },
  ];

  return (
    <div
      id="main-content"
      className="
         md:ml-56
        flex w-full flex-col flex-1 p-2 space-y-3 rounded-lg p-0.5 bg-white md:p-3"
    >
      <div className="flex flex-col mx-0 space-y-2 md:space-y-3 flex-1 md:mt-0 ">
        <div className="flex flex-col md:flex-row">
          <div className="w-full   px-0 md:px-2">
            {notificationItems.map((item) => (
              <div
                key={item.id}
                className="bg-[#F8F8F8] p-2 md:p-4 rounded-lg w-full  mb-2 border-[1px] border-[#A7A7A7]"
              >
                <div className="flex justify-between items-center text-[#7AC0F8]">
                  <div className="flex items-center">
                    <img
                      src={item.avatar}
                      alt=""
                      className="w-8 h-8 rounded-full"
                    />
                    <p className="ml-2 text-sm font-bold">{item.name}</p>
                    <p className="ml-2 text-sm text-gray-500">{item.content}</p>
                  </div>
                  <div>
                    <svg
                      width="18"
                      height="4"
                      viewBox="0 0 18 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2" cy="2" r="2" fill="#D9D9D9" />
                      <circle cx="9" cy="2" r="2" fill="#D9D9D9" />
                      <circle cx="16" cy="2" r="2" fill="#D9D9D9" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
