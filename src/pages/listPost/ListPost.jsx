import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AuthConsumer from "../../components/AuthContext";

export default function ListPost() {
  const { isAuthenticated } = AuthConsumer();
  const navigate = useNavigate();
  const { feedName } = useParams();
  if (feedName == "home" && !isAuthenticated) {
    return navigate("/login");
  }
  useEffect(() => {
    document.title = `Donghanhcungcon | listPost`;
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
      flex w-full flex-row flex-1 rounded-lg bg-white py-3"
    >
      <div className="flex flex-col mx-0 space-y-2 md:space-y-3 flex-1 mt-2 md:mt-0 ">
        <div className="">
          <div className="flex flex-col md:flex-row">
            {/* Phần bên trái */}
            <div className="flex flex-col md:flex-row">
              <div className="w-full pl-2  px-3 md:px-8">
                <div className="flex flex-col space-y-2 list-none px-2 rounded-lg w-full bg-[#F8F8F8]">
                  <div className="flex flex-row items-center space-x-2 list-none px-4 rounded-lg border-gray-300  mt-4">
                    <img
                      src="https://via.placeholder.com/400"
                      alt=""
                      className="w-6 w-6 rounded-full"
                    />
                    <select
                      name="category"
                      id="category"
                      className="px-2 py-1 rounded-full border border-gray-300 w-full text-center bg-[#EBEBEB]"
                    >
                      <option value="1" className="text-center">
                        Thể loại 1
                      </option>
                      <option value="2" className="text-center">
                        Thể loại 2
                      </option>
                      <option value="3" className="text-center">
                        Thể loại 3
                      </option>
                    </select>
                  </div>
                  <div className="flex flex-row items-center space-x-2 list-none px-4 rounded-lg border-gray-300 ">
                    <input
                      type="text"
                      className="p-2 bg-[#F8F8F8] border-gray-300 w-full border-b-2"
                      placeholder="Tiêu đề"
                    />
                  </div>
                  <div className="flex flex-col justify-between items-center space-y-2 list-none p-4 rounded-lg border-gray-300 ">
                    <textarea
                      type="text"
                      className="p-2 rounded-lg border-gray-300 w-full h-40 bg-[#EBEBEB]"
                      placeholder="Nội dung"
                    />

                    <div className="flex flex-row items-center space-x-2 justify-end w-full">
                      <button>
                        <svg
                          width="27"
                          height="27"
                          viewBox="0 0 27 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.6875 6.75C1.6875 6.07867 1.95418 5.43484 2.42889 4.96014C2.90359 4.48543 3.54742 4.21875 4.21875 4.21875H22.7812C23.4526 4.21875 24.0964 4.48543 24.5711 4.96014C25.0458 5.43484 25.3125 6.07867 25.3125 6.75V20.25C25.3125 20.9213 25.0458 21.5652 24.5711 22.0399C24.0964 22.5146 23.4526 22.7812 22.7812 22.7812H4.21875C3.54742 22.7812 2.90359 22.5146 2.42889 22.0399C1.95418 21.5652 1.6875 20.9213 1.6875 20.25V6.75ZM3.375 18.0675V20.25C3.375 20.7157 3.753 21.0938 4.21875 21.0938H22.7812C23.005 21.0938 23.2196 21.0049 23.3779 20.8466C23.5361 20.6884 23.625 20.4738 23.625 20.25V18.0675L20.5987 15.0424C20.2823 14.7264 19.8534 14.5489 19.4062 14.5489C18.9591 14.5489 18.5302 14.7264 18.2138 15.0424L17.2238 16.0312L18.315 17.1225C18.3979 17.1997 18.4644 17.2929 18.5105 17.3964C18.5566 17.4999 18.5814 17.6116 18.5834 17.7249C18.5854 17.8382 18.5646 17.9507 18.5221 18.0558C18.4797 18.1609 18.4165 18.2563 18.3364 18.3364C18.2563 18.4165 18.1609 18.4797 18.0558 18.5221C17.9507 18.5646 17.8382 18.5854 17.7249 18.5834C17.6116 18.5814 17.4999 18.5566 17.3964 18.5105C17.2929 18.4644 17.1997 18.3979 17.1225 18.315L11.3175 12.5111C11.0011 12.1951 10.5722 12.0176 10.125 12.0176C9.67781 12.0176 9.24891 12.1951 8.9325 12.5111L3.375 18.0686V18.0675ZM14.7656 9.28125C14.7656 8.94559 14.899 8.62367 15.1363 8.38632C15.3737 8.14897 15.6956 8.01562 16.0312 8.01562C16.3669 8.01562 16.6888 8.14897 16.9262 8.38632C17.1635 8.62367 17.2969 8.94559 17.2969 9.28125C17.2969 9.61691 17.1635 9.93883 16.9262 10.1762C16.6888 10.4135 16.3669 10.5469 16.0312 10.5469C15.6956 10.5469 15.3737 10.4135 15.1363 10.1762C14.899 9.93883 14.7656 9.61691 14.7656 9.28125ZM13.689 8.884C13.797 8.669 14.084 8.25 14.625 8.25C15.165 8.25 15.453 8.669 15.561 8.884C15.691 9.144 15.75 9.452 15.75 9.75C15.75 10.048 15.691 10.355 15.561 10.616C15.453 10.831 15.166 11.25 14.625 11.25C14.085 11.25 13.797 10.831 13.689 10.616C13.5607 10.3456 13.496 10.0493 13.5 9.75C13.5 9.452 13.559 9.145 13.689 8.884ZM15.712 15.712C15.7857 15.6433 15.8448 15.5605 15.8858 15.4685C15.9268 15.3765 15.9488 15.2772 15.9506 15.1765C15.9524 15.0758 15.9338 14.9758 15.8961 14.8824C15.8584 14.789 15.8023 14.7042 15.731 14.633C15.6598 14.5617 15.575 14.5056 15.4816 14.4679C15.3882 14.4302 15.2882 14.4116 15.1875 14.4134C15.0868 14.4152 14.9875 14.4372 14.8955 14.4782C14.8035 14.5192 14.7207 14.5783 14.652 14.652C14.3038 15.0003 13.8903 15.2766 13.4353 15.4652C12.9803 15.6537 12.4925 15.7507 12 15.7507C11.5075 15.7507 11.0197 15.6537 10.5647 15.4652C10.1097 15.2766 9.69623 15.0003 9.348 14.652C9.20582 14.5195 9.01778 14.4474 8.82348 14.4508C8.62918 14.4543 8.44379 14.533 8.30638 14.6704C8.16897 14.8078 8.09025 14.9932 8.08683 15.1875C8.0834 15.3818 8.15552 15.5698 8.288 15.712C9.27254 16.6964 10.6078 17.2494 12 17.2494C13.3922 17.2494 14.7275 16.6964 15.712 15.712Z"
                            fill="#A8A8A8"
                          />
                        </svg>
                      </button>
                      <button>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 2.25C6.615 2.25 2.25 6.615 2.25 12C2.25 17.385 6.615 21.75 12 21.75C17.385 21.75 21.75 17.385 21.75 12C21.75 6.615 17.385 2.25 12 2.25ZM9.375 8.25C8.835 8.25 8.547 8.669 8.439 8.884C8.3107 9.15445 8.24604 9.45069 8.25 9.75C8.25 10.048 8.309 10.355 8.439 10.616C8.547 10.831 8.834 11.25 9.375 11.25C9.915 11.25 10.203 10.831 10.311 10.616C10.441 10.356 10.5 10.048 10.5 9.75C10.5 9.452 10.441 9.145 10.311 8.884C10.203 8.669 9.916 8.25 9.375 8.25ZM13.689 8.884C13.797 8.669 14.084 8.25 14.625 8.25C15.165 8.25 15.453 8.669 15.561 8.884C15.691 9.144 15.75 9.452 15.75 9.75C15.75 10.048 15.691 10.355 15.561 10.616C15.453 10.831 15.166 11.25 14.625 11.25C14.085 11.25 13.797 10.831 13.689 10.616C13.5607 10.3456 13.496 10.0493 13.5 9.75C13.5 9.452 13.559 9.145 13.689 8.884ZM15.712 15.712C15.7857 15.6433 15.8448 15.5605 15.8858 15.4685C15.9268 15.3765 15.9488 15.2772 15.9506 15.1765C15.9524 15.0758 15.9338 14.9758 15.8961 14.8824C15.8584 14.789 15.8023 14.7042 15.731 14.633C15.6598 14.5617 15.575 14.5056 15.4816 14.4679C15.3882 14.4302 15.2882 14.4116 15.1875 14.4134C15.0868 14.4152 14.9875 14.4372 14.8955 14.4782C14.8035 14.5192 14.7207 14.5783 14.652 14.652C14.3038 15.0003 13.8903 15.2766 13.4353 15.4652C12.9803 15.6537 12.4925 15.7507 12 15.7507C11.5075 15.7507 11.0197 15.6537 10.5647 15.4652C10.1097 15.2766 9.69623 15.0003 9.348 14.652C9.20582 14.5195 9.01778 14.4474 8.82348 14.4508C8.62918 14.4543 8.44379 14.533 8.30638 14.6704C8.16897 14.8078 8.09025 14.9932 8.08683 15.1875C8.0834 15.3818 8.15552 15.5698 8.288 15.712C9.27254 16.6964 10.6078 17.2494 12 17.2494C13.3922 17.2494 14.7275 16.6964 15.712 15.712Z"
                            fill="#A8A8A8"
                          />
                        </svg>
                      </button>
                      <button className="bg-[#7AC0F8] text-white px-5 rounded-3xl">
                        Đăng
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="text-white mt-4 border-b-[1px] border-[#A7A7A7] pb-2 mb-2"
                  style={{
                    color: "#A7A7A7",
                    fontSize: "0.725rem",
                  }}
                >
                  3 tháng đầu thai kì / Bài đăng
                </div>
                {postItems.map((item) => (
                  <div
                    key={item.id}
                    className="border p-2 mb-2 rounded-lg w-full hover:bg-[#F8F8F8] "
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
                        <div className="flex items-center ">
                          <img
                            src={item.avatar}
                            alt=""
                            className="w-8 h-8 rounded-full"
                          />
                          <p className="ml-2 text-sm font-bold">{item.name}</p>
                        </div>
                        <div>
                          <h5 className="text-sm font-bold text-[#474747]">
                            Tiểu đường thai kỳ nên ăn gì vào bữa sáng? Thực đơn
                            1 tuần cho mẹ bầu
                          </h5>
                          <p className="text-sm text-gray-500">
                            {item.content}
                          </p>
                        </div>
                        <div className="flex flex-row justify-between items-center w-full mt-2">
                          <div className="flex flex-row items-center space-x-2">
                            <Counter />
                            <Comments comment={3} />
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
                                <path stroke="#A8A8A8" strokeMiterlimit="10" />
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
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Ads /> */}
    </div>
  );
}

function Counter() {
  const [number, setNumber] = useState(0);

  const increaseNumber = () => setNumber((prevNumber) => prevNumber + 1);
  const decreaseNumber = () => setNumber((prevNumber) => prevNumber - 1);

  const activeLike = number == 0 ? "#7AC0F8" : "#A8A8A8";
  const activeDislike = number == 0 ? "#F8ADD2" : "#A8A8A8";
  return (
    <div className="flex justify-between bg-[#F5F5F5] rounded-2xl px-2">
      <button
        className="flex  items-center bg-[#CCEDFF]
         rounded-2xl px-2  active:bg-[#CCEDFF] active:text-white"
        onClick={increaseNumber}
      >
        <svg
          width="12"
          height="13"
          viewBox="0 0 12 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.63757 13C3.46799 12.9212 3.42476 12.7824 3.42476 12.6152C3.42809 10.458 3.42809 8.29767 3.42809 6.14047C3.42809 6.08685 3.42809 6.03324 3.42809 5.96385C3.36492 5.96385 3.31171 5.96385 3.25852 5.96385C2.30091 5.96385 1.3433 5.96385 0.389022 5.96385C0.325846 5.96385 0.262671 5.9607 0.20282 5.94493C0.0199439 5.89762 -0.0598558 5.70209 0.0432193 5.54755C0.0731446 5.5034 0.11637 5.4624 0.156271 5.42455C2.00498 3.66788 3.85369 1.91121 5.70573 0.154537C5.92186 -0.0504604 6.05486 -0.0504613 6.27098 0.151382C8.12967 1.90805 9.98503 3.66473 11.8404 5.4214C11.8803 5.45924 11.9235 5.50024 11.9534 5.5444C12.0565 5.69578 11.98 5.89132 11.7972 5.94178C11.7373 5.95755 11.6741 5.9607 11.611 5.9607C10.66 5.9607 9.70573 5.9607 8.75477 5.9607C8.70157 5.9607 8.64837 5.9607 8.58187 5.9607C8.58187 6.02693 8.58187 6.08054 8.58187 6.13416C8.58187 8.30082 8.58187 10.4675 8.5852 12.6342C8.5852 12.8045 8.53532 12.9306 8.36575 13C6.78636 13 5.21363 13 3.63757 13Z"
            fill={activeLike}
          />
        </svg>
      </button>
      <span className="flex justify-center items-center mx-2">{number}</span>
      <button
        className="flex justify-center items-center  bg-[#FFDAEC] rounded-2xl px-2"
        onClick={decreaseNumber}
      >
        <svg
          width="12"
          height="13"
          viewBox="0 0 12 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_33_553)">
            <path
              d="M8.36243 0C8.532 0.0788452 8.57523 0.217613 8.57523 0.384765C8.5719 2.54197 8.5719 4.70233 8.5719 6.85953C8.5719 6.91315 8.5719 6.96676 8.5719 7.03615C8.63508 7.03615 8.68828 7.03615 8.74148 7.03615C9.69908 7.03615 10.6567 7.03615 11.611 7.03615C11.6741 7.03615 11.7373 7.0393 11.7972 7.05507C11.98 7.10238 12.0598 7.29791 11.9568 7.45245C11.9268 7.4966 11.8836 7.5376 11.8437 7.57545C9.99501 9.33212 8.1463 11.0888 6.29426 12.8455C6.07814 13.0505 5.94514 13.0505 5.72901 12.8486C3.87032 11.0919 2.01496 9.33527 0.1596 7.5786C0.1197 7.54076 0.0764743 7.49976 0.0465491 7.4556C-0.0565266 7.30422 0.0199489 7.10868 0.202825 7.05822C0.262675 7.04245 0.325851 7.0393 0.389026 7.0393C1.33998 7.0393 2.29426 7.0393 3.24522 7.0393C3.29842 7.0393 3.35162 7.0393 3.41812 7.0393C3.41812 6.97307 3.41812 6.91946 3.41812 6.86584C3.41812 4.69918 3.41812 2.53251 3.4148 0.365842C3.4148 0.195536 3.46467 0.0693838 3.63425 0C5.21363 0 6.78637 0 8.36243 0Z"
              fill={activeDislike}
            />
          </g>
          <defs>
            <clipPath id="clip0_33_553">
              <rect width="12" height="13" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
  );
}

function Comments({ comment }) {
  const commentsNumber = comment;

  return (
    <div className="flex justify-between items-center rounded-2xl bg-[#F5F5F5] px-2">
      <span className="mr-2">
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_33_442)">
            <path
              d="M15 7.49557C14.9823 11.1413 12.341 14.2815 8.76325 14.8936C7.0053 15.1863 5.35336 14.8936 3.79859 14.0243C3.71025 13.9799 3.63958 13.971 3.55124 14.0065C2.70318 14.317 1.84629 14.6274 0.998234 14.9379C0.706714 15.0444 0.441697 15.0266 0.220849 14.8049C-0.00883321 14.5742 -0.0265011 14.3081 0.0883399 14.0065C0.397527 13.1549 0.706714 12.3122 1.0159 11.4607C1.05124 11.3631 1.0424 11.2833 0.998234 11.1946C-1.43109 6.93673 0.812721 1.55234 5.53004 0.266121C9.75265 -0.887043 14.1078 1.88055 14.8498 6.20048C14.9205 6.62626 14.947 7.06092 15 7.49557Z"
              fill="#A8A8A8"
            />
          </g>
          <defs>
            <clipPath id="clip0_33_442">
              <rect width="15" height="15" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </span>
      <p>{commentsNumber} </p>
    </div>
  );
}
