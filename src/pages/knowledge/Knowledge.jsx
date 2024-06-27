import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AuthConsumer from "../../components/AuthContext";

export default function Knowledge() {
  const { isAuthenticated } = AuthConsumer();
  const navigate = useNavigate();
  const { feedName } = useParams();
  if (feedName == "home" && !isAuthenticated) {
    return navigate("/login");
  }
  useEffect(() => {
    document.title = `Mebe | ${feedName}`;
  }, [feedName]);

  const postItems = [
    {
      id: 1,
      image: "https://via.placeholder.com/400",
      avatar: "https://via.placeholder.com/150",
      name: "Hồ Lê",
      title:
        "Tiểu đường thai kỳ nên ăn gì vào bữa sáng? Thực đơn 1 tuần cho mẹ bầu",
      content:
        "Đái tháo đường trong thai kỳ (tiểu đường thai kỳ) là tình trạng rối loạn chuyển hóa đường trong cơ thể khi mang thai. Tình trạng này thường được phát phát hiện từ...",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/400",
      avatar: "https://via.placeholder.com/150",
      name: "Hồ Lê",
      title:
        "Tiểu đường thai kỳ nên ăn gì vào bữa sáng? Thực đơn 1 tuần cho mẹ bầu",
      content:
        "Đái tháo đường trong thai kỳ (tiểu đường thai kỳ) là tình trạng rối loạn chuyển hóa đường trong cơ thể khi mang thai. Tình trạng này thường được phát phát hiện từ...",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/400",
      avatar: "https://via.placeholder.com/150",
      name: "Hồ Lê",
      title:
        "Tiểu đường thai kỳ nên ăn gì vào bữa sáng? Thực đơn 1 tuần cho mẹ bầu",
      content:
        "Đái tháo đường trong thai kỳ (tiểu đường thai kỳ) là tình trạng rối loạn chuyển hóa đường trong cơ thể khi mang thai. Tình trạng này thường được phát phát hiện từ...",
    },
  ];

  return (
    <div
      id="main-content"
      className="
         md:ml-56
        flex w-full flex-col flex-1 p-2 space-y-3 rounded-lg p-0.5 bg-theme-cultured md:bg-white md:p-3"
    >
      <div className="flex flex-col mx-0 space-y-2 md:space-y-3 flex-1 mt-2 md:mt-0 md:mx-48">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/3  p-2 md:p-2">
            <div
              className="text-white mt-4 border-b-[1px] border-[#A7A7A7] pb-2 mb-2"
              style={{
                color: "#A7A7A7",
                fontSize: "0.725rem",
              }}
            >
              Post
            </div>
            {postItems.map((item) => (
              <div
                key={item.id}
                className="bg-[#F8F8F8] p-4 rounded-lg w-full m-2"
              >
                <div className="flex flex-col md:flex-row justify-start items-start text-[#7AC0F8]">
                  <div className="flex items-center mb-4 md:mb-0">
                    <img
                      src={item.image}
                      alt=""
                      className="w-32 h-32 rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col w-full mx-0 md:mx-6">
                    <div className="flex items-center mb-4">
                      <img
                        src={item.avatar}
                        alt=""
                        className="w-8 h-8 rounded-full"
                      />
                      <p className="ml-2 text-sm font-bold">{item.name}</p>
                    </div>
                    <div>
                      <h5 className="text-lg font-bold text-[#474747]">
                        Tiểu đường thai kỳ nên ăn gì vào bữa sáng? Thực đơn 1
                        tuần cho mẹ bầu
                      </h5>
                      <p className="text-sm text-gray-500">{item.content}</p>
                    </div>
                    <span className="mt-3">
                      <svg
                        width="10"
                        height="13"
                        viewBox="0 0 10 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_61_148)">
                          <path
                            d="M0.9649 12.758C0.882054 12.758 0.799208 12.758 0.716362 12.758C0.453204 12.666 0.302132 12.4773 0.258272 12.2062C0.243652 12.1288 0.248526 12.0514 0.248526 11.9739C0.248526 8.4408 0.253399 4.91251 0.243652 1.37937C0.243652 0.740503 0.774841 0.237152 1.384 0.237152C3.80603 0.241992 6.23293 0.237152 8.65496 0.237152C9.28361 0.237152 9.75145 0.701784 9.75145 1.32613C9.75145 4.89315 9.75145 8.46016 9.75145 12.032C9.75145 12.366 9.64424 12.6273 9.30798 12.7532C9.22513 12.7532 9.14229 12.7532 9.05944 12.7532C8.86938 12.6273 8.66958 12.5208 8.49414 12.3756C7.48049 11.5287 6.4766 10.672 5.46782 9.82017C5.18517 9.57818 4.85866 9.57818 4.57601 9.81533C3.56724 10.6623 2.56334 11.5093 1.55944 12.3611C1.37913 12.5257 1.19882 12.6806 0.9649 12.758Z"
                            stroke="#A8A8A8"
                            strokeMiterlimit="10"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_61_148">
                            <rect width="10" height="13" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full md:w-1/3 px-4 hidden md:block">
            <div className="flex flex-col space-y-2 list-none  p-4 rounded-lg bg-[#F8F8F8] mt-10">
              <h2 className="font-family-nunito text-[#7AC0F8]">
                Đề xuất chủ đề
              </h2>
              <form action="" className="flex flex-col space-y-2">
                <div className="flex flex-row items-center space-x-2">
                  <label
                    htmlFor="category"
                    className="text-sm font-bold w-[60px]
                                "
                  >
                    Thể loại
                  </label>
                  <input
                    type="text"
                    name="category"
                    id="category"
                    className="p-2 rounded-lg border border-gray-300 w-full"
                    placeholder="Tìm chủ đề"
                  />
                </div>
                <div className="flex flex-row items-center space-x-2">
                  <label
                    htmlFor="category"
                    className="text-sm font-bold w-[60px]"
                  >
                    Chủ đề
                  </label>
                  <input
                    type="text"
                    className="p-2 rounded-lg border border-gray-300 w-full"
                    placeholder="Tìm chủ đề"
                  />
                </div>
                <div className="flex flex-row items-center space-x-2 justify-end w-full">
                  <button className="bg-[#F8BBD9] text-white px-2 rounded-2xl">
                    Đề xuất
                  </button>
                </div>
              </form>
            </div>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/weloveschool-212d8.appspot.com/o/asd1.png?alt=media&token=5229bcab-5620-4393-aabb-b52eb3ba7369"
              alt=""
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
