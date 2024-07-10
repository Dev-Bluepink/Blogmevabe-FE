import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AuthConsumer from "../../components/AuthContext";
import MultiCarousel from "../../components/MultiCarousel";

export default function DetailKnowledge() {
  const { isAuthenticated } = AuthConsumer();
  const navigate = useNavigate();
  const { feedName } = useParams();
  if (feedName == "home" && !isAuthenticated) {
    return navigate("/login");
  }
  useEffect(() => {
    document.title = `Donghanhcungcon | knowledge`;
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
        "Đái tháo đường trong thai kỳ (tiểu đường thai kỳ) là tình trạng rối loạn chuyển hóa đường trong cơ thể khi mang thai. Tình trạng này thường được phát ...",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/400",
      avatar: "https://via.placeholder.com/150",
      name: "Hồ Lê",
      title:
        "Tiểu đường thai kỳ nên ăn gì vào bữa sáng? Thực đơn 1 tuần cho mẹ bầu",
      content:
        "Đái tháo đường trong thai kỳ (tiểu đường thai kỳ) là tình trạng rối loạn chuyển hóa đường trong cơ thể khi mang thai. Tình trạng này thường được ...",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/400",
      avatar: "https://via.placeholder.com/150",
      name: "Hồ Lê",
      title:
        "Tiểu đường thai kỳ nên ăn gì vào bữa sáng? Thực đơn 1 tuần cho mẹ bầu",
      content:
        "Đái tháo đường trong thai kỳ (tiểu đường thai kỳ) là tình trạng rối loạn chuyển hóa đường trong cơ thể khi mang thai. Tình trạng này thường được phát ...",
    },
  ];

  return (
    <div
      id="main-content"
      className="
             md:ml-56
            flex w-full flex-col flex-1 p-2 space-y-3 rounded-lg p-0.5 bg-theme-cultured md:bg-white md:p-3"
    >
      <div className="flex flex-col mx-5 space-y-2 md:space-y-3 flex-1 md:mt-0">
        <div className="flex flex-col md:flex-row">
          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <img
                src="https://via.placeholder.com/150"
                alt=""
                className="w-8 h-8 rounded-full"
              />
              <div className="flex flex-col">
                {" "}
                <p className="text-sm font-semibold text-[#7AC0F8] flex flex-row items-center">
                  Hồ Lê
                </p>
                <span className="text-xs font-semibold text-[#555555]">
                  2 ngày trước
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold text-[#333333]">
            Tác hại của việc cho trẻ học tiếng Hàn sớm
          </h3>

          <img
            src="https://firebasestorage.googleapis.com/v0/b/weloveschool-212d8.appspot.com/o/Group%205.png?alt=media&token=13d36076-89a6-4ac7-8679-05b60a94f7ba"
            alt=""
            className="w-full rounded-lg"
          />
          <p className="text-base font-normal text-[#555555]">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32
          </p>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/weloveschool-212d8.appspot.com/o/image%2031.png?alt=media&token=b86bfcfe-a28f-4836-aa58-3ce3968c1a49"
            alt=""
            className="w-full rounded-lg"
          />
          <p className="text-base font-normal text-[#555555]">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32
          </p>
          <div className="flex float-right justify-end">
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
              <button className="flex items-center space-x-2 border border-[#F8BBD9] rounded-full px-3 py-1">
                <svg
                  width="10"
                  height="13"
                  viewBox="0 0 10 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.721248 12.5208C0.638402 12.5208 0.555556 12.5208 0.47271 12.5208C0.209552 12.4289 0.0584795 12.2401 0.0146199 11.9691C-1.36158e-08 11.8917 0.00487329 11.8142 0.00487329 11.7368C0.00487329 8.20365 0.00974659 4.67535 0 1.14222C0 0.503351 0.531189 0 1.14035 0C3.56238 0.00483991 5.98928 0 8.41131 0C9.03996 0 9.5078 0.464631 9.5078 1.08898C9.5078 4.65599 9.5078 8.22301 9.5078 11.7949C9.5078 12.1288 9.40058 12.3902 9.06433 12.516C8.98148 12.516 8.89864 12.516 8.81579 12.516C8.62573 12.3902 8.42593 12.2837 8.25049 12.1385C7.23684 11.2915 6.23294 10.4348 5.22417 9.58302C4.94152 9.34103 4.61501 9.34103 4.33236 9.57818C3.32359 10.4252 2.31969 11.2722 1.31579 12.124C1.13548 12.2885 0.955166 12.4434 0.721248 12.5208Z"
                    fill="#F8BBD9"
                  />
                </svg>

                <span className="text-xs text-[#F8BBD9]">Lưu bài viết</span>
              </button>
              <button className="flex items-center space-x-2 border border-[#7AC0F8] rounded-full px-3 py-1">
                <svg
                  width="14"
                  height="13"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_543_1262)">
                    <path
                      d="M0 12.6538C0 12.4314 0 12.209 0 11.9866C0.00802083 11.9377 0.0200521 11.8892 0.0229688 11.8402C0.0813021 10.8148 0.279271 9.82285 0.612865 8.86531C1.85974 5.28706 4.81177 2.78929 8.25417 2.39584C8.42844 2.37602 8.60307 2.36025 8.78427 2.34206C8.78427 2.07639 8.78172 1.82932 8.785 1.58225C8.78792 1.35014 8.785 1.11682 8.80578 0.886333C8.87943 0.0662765 9.52984 -0.256409 10.1321 0.225597C10.224 0.299192 10.3086 0.385322 10.3892 0.474283C11.4209 1.61622 12.4505 2.76057 13.4823 3.90291C13.689 4.13219 13.8461 4.39341 13.9293 4.70558C13.9559 4.80627 13.977 4.90857 14.0004 5.01007C14.0004 5.16171 14.0004 5.31335 14.0004 5.46498C13.9934 5.47752 13.9818 5.48925 13.9799 5.50259C13.9256 5.93041 13.739 6.27857 13.4666 6.57982C12.441 7.71488 11.4184 8.85318 10.3914 9.98662C10.2823 10.1067 10.1624 10.2211 10.0315 10.3093C9.51016 10.6603 8.96401 10.4072 8.83714 9.7444C8.78755 9.48601 8.79412 9.21306 8.78609 8.94618C8.77807 8.68051 8.78427 8.41403 8.78427 8.14432C8.69203 8.14432 8.61474 8.13664 8.53927 8.14553C8.18198 8.1884 7.82286 8.22155 7.46813 8.28423C5.73016 8.59115 4.165 9.34731 2.76865 10.5329C2.00813 11.1787 1.34458 11.9316 0.763802 12.7759C0.535573 13.1079 0.183021 13.0634 0.0236979 12.689C0.0182292 12.6761 0.00802083 12.6655 0 12.6538Z"
                      fill="#7AC0F8"
                      fillOpacity="0.972549"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_543_1262">
                      <rect width="14" height="13" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <span className="text-xs  text-[#7AC0F8]">Chia sẽ</span>
              </button>
            </div>
          </div>
          <div
            className="text-white mt-4 border-b-[1px] border-[#A7A7A7] pb-2 mb-2"
            style={{
              color: "#A7A7A7",
              fontSize: "0.725rem",
            }}
          >
            {" "}
            Kiến thức liên quan
          </div>
          <MultiCarousel items={postItems} />
        </div>
      </div>
    </div>
  );
}
