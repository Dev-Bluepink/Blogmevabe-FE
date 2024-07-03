import React from "react";

const BottomMenu = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white text-white">
      <div className="flex justify-around p-2 border-t border-[#E5E5E5]">
        <a href="#" className="flex flex-col items-center">
          <svg
            width="21"
            height="28"
            viewBox="0 0 21 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.061 0C11.357 0.0300429 11.6374 0.0600858 11.9334 0.10515C15.8125 0.706009 18.5855 2.74893 20.1745 6.20386C21.1871 8.397 21.2494 10.6953 20.564 13.0086C19.972 15.0215 19.0373 16.8841 17.9623 18.6867C16.0773 21.8412 13.8184 24.7554 11.357 27.5043C10.7806 28.1502 10.2042 28.1502 9.62776 27.5043C6.83918 24.3648 4.28428 21.0601 2.29022 17.3948C1.37108 15.7124 0.576569 13.985 0.218261 12.1073C-0.498357 8.41202 0.592148 5.27253 3.3963 2.68884C5.06322 1.17167 7.07286 0.330472 9.33176 0.0600858C9.53428 0.0450644 9.73681 0.0150215 9.92375 0C10.2976 0 10.6871 0 11.061 0ZM10.4534 15.2318C13.3199 15.2768 15.719 13.0086 15.7657 10.1996C15.8125 7.39056 13.4757 5.07725 10.5313 5.03219C7.66485 4.98712 5.28132 7.24034 5.219 10.0494C5.15669 12.8734 7.49348 15.1867 10.4534 15.2318Z"
              fill="#494949"
            />
          </svg>

          <span className="text-xs text-[#A7A7A7]">Khu vực</span>
        </a>
        <a href="/" className="flex flex-col items-center">
          <svg
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_336_777)" fillRule="evenodd">
              <path
                d="M14.101 0C14.3624 0 14.6238 0 14.8989 0C15.7519 0.165164 16.3434 0.71571 16.9212 1.30755C20.5118 4.91362 24.1024 8.50593 27.7068 12.0982C28.2983 12.6901 28.8486 13.2957 29 14.1628C29 14.383 29 14.617 29 14.8372C28.9862 14.8647 28.9587 14.906 28.9587 14.9336C28.6698 16.3099 27.6518 17.1495 26.2623 17.1633C26.1385 17.1633 26.0284 17.1633 25.8908 17.1633C25.8908 17.3284 25.8908 17.4385 25.8908 17.5486C25.8908 20.2738 25.8908 22.9991 25.8908 25.738C25.8908 27.6649 24.5564 29 22.6304 29C21.1997 29 19.7552 29 18.3244 29C17.5953 29 17.2789 28.6834 17.2789 27.9402C17.2789 25.7655 17.2789 23.5909 17.2789 21.43C17.2789 20.4803 16.6873 19.9022 15.7381 19.8885C14.9264 19.8885 14.1148 19.8885 13.3031 19.8885C12.2713 19.8885 11.7073 20.4528 11.7073 21.485C11.7073 23.6597 11.7073 25.8344 11.7073 27.9953C11.7073 28.6559 11.3771 28.9862 10.7167 28.9862C9.25849 28.9862 7.78648 28.9862 6.32823 28.9862C6.05309 28.9862 5.77794 28.9587 5.51656 28.9037C4.05831 28.5596 3.10906 27.3346 3.10906 25.8068C3.10906 23.0403 3.10906 20.2738 3.10906 17.5074C3.10906 17.3972 3.10906 17.2871 3.10906 17.1908C3.05403 17.177 3.04028 17.1633 3.02652 17.1633C2.88895 17.1633 2.73762 17.1633 2.60005 17.1495C1.62329 17.1082 0.866654 16.6678 0.371397 15.8282C-0.275187 14.7684 -0.0688303 13.4746 0.880411 12.5249C4.60859 8.79497 8.33677 5.06502 12.0649 1.32131C12.6565 0.729473 13.2481 0.165164 14.101 0Z"
                fill="#494949"
              />
            </g>
            <defs>
              <clipPath id="clip0_336_777">
                <rect width="29" height="29" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <span className="text-xs text-[#A7A7A7]">Home</span>
        </a>
        <a href="/notification" className="flex flex-col items-center">
          <svg
            width="25"
            height="26"
            viewBox="0 0 18 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2_96)">
              <path
                d="M8.65683 22C8.23617 21.8535 7.78229 21.7746 7.39484 21.5605C6.47602 21.0758 5.93358 20.2869 5.70111 19.25C7.90406 19.25 10.0959 19.25 12.2989 19.25C12.2325 19.667 12.0775 20.0277 11.8672 20.377C11.3026 21.2674 10.5055 21.7971 9.47602 21.9662C9.44281 21.9662 9.4096 21.9887 9.37639 22C9.13285 22 8.8893 22 8.65683 22Z"
                fill="#494949"
              />
              <path
                d="M8.10334 1.89343C8.10334 1.57786 8.10334 1.26229 8.10334 0.957983C8.10334 0.417 8.47973 0.0112618 8.97788 -8.67012e-06C9.48711 -0.0112792 9.88563 0.383188 9.90777 0.935442C9.91884 1.19466 9.91884 1.46516 9.90777 1.73565C9.90777 1.85962 9.94098 1.91598 10.0738 1.94979C12.6864 2.50204 14.3801 4.09118 15.0997 6.70593C15.2436 7.23565 15.2768 7.81044 15.2989 8.3627C15.3321 9.24179 15.2878 10.1209 15.3211 11C15.3764 12.7356 16.0406 14.1895 17.2915 15.3617C17.6236 15.666 17.9115 15.9928 17.9779 16.4549C18.1218 17.4016 17.524 18.2131 16.583 18.3258C16.4834 18.3371 16.3838 18.3371 16.2842 18.3371C11.4244 18.3371 6.5646 18.3371 1.70482 18.3371C0.940983 18.3371 0.376408 17.9877 0.121795 17.3453C-0.143888 16.6916 0.0110939 15.9928 0.564599 15.4969C1.28416 14.8545 1.84873 14.0994 2.22512 13.1977C2.52401 12.4764 2.69006 11.7326 2.70113 10.9436C2.7122 10.0645 2.70113 9.18544 2.70113 8.30634C2.7122 5.09425 4.89301 2.46823 7.99264 1.92725C8.02585 1.91598 8.04799 1.9047 8.10334 1.89343Z"
                fill="#494949"
              />
            </g>
            <defs>
              <clipPath id="clip0_2_96">
                <rect width="18" height="22" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <span className="text-xs text-[#A7A7A7]">Thông báo</span>
        </a>
      </div>
    </div>
  );
};

export default BottomMenu;
