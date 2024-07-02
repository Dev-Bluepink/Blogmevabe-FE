import React from "react";

const BottomMenu = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-800 text-white">
      <div className="flex justify-around p-2">
        <a href="#" className="flex flex-col items-center">
          <svg
            width="25"
            height="26"
            viewBox="0 0 25 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.0878 19.0481H8.88829C8.37572 19.0481 7.95972 18.6321 7.95972 18.1195C7.95972 17.607 8.37572 17.191 8.88829 17.191H16.0878C16.6004 17.191 17.0164 17.607 17.0164 18.1195C17.0164 18.6321 16.6004 19.0481 16.0878 19.0481ZM21.4624 5.76705C21.013 5.37086 20.5016 4.92267 19.8925 4.35933C19.6164 4.13648 19.3143 3.88143 18.9936 3.61152C17.186 2.08743 14.7098 0 12.4528 0C10.2217 0 7.90524 1.97105 6.04438 3.55457C5.70019 3.84676 5.37829 4.12162 5.05019 4.38781C4.47324 4.92267 3.96191 5.3721 3.51124 5.76952C0.555905 8.37076 0 9.05295 0 15.1209C0 26 3.146 26 12.4874 26C21.8276 26 24.9749 26 24.9749 15.1209C24.9749 9.05171 24.419 8.36952 21.4624 5.76705Z"
              fill="#CFD7ED"
            />
          </svg>

          <span className="text-xs">Khu vực</span>
        </a>
        <a href="/" className="flex flex-col items-center">
          <svg
            width="25"
            height="26"
            viewBox="0 0 25 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.0878 19.0481H8.88829C8.37572 19.0481 7.95972 18.6321 7.95972 18.1195C7.95972 17.607 8.37572 17.191 8.88829 17.191H16.0878C16.6004 17.191 17.0164 17.607 17.0164 18.1195C17.0164 18.6321 16.6004 19.0481 16.0878 19.0481ZM21.4624 5.76705C21.013 5.37086 20.5016 4.92267 19.8925 4.35933C19.6164 4.13648 19.3143 3.88143 18.9936 3.61152C17.186 2.08743 14.7098 0 12.4528 0C10.2217 0 7.90524 1.97105 6.04438 3.55457C5.70019 3.84676 5.37829 4.12162 5.05019 4.38781C4.47324 4.92267 3.96191 5.3721 3.51124 5.76952C0.555905 8.37076 0 9.05295 0 15.1209C0 26 3.146 26 12.4874 26C21.8276 26 24.9749 26 24.9749 15.1209C24.9749 9.05171 24.419 8.36952 21.4624 5.76705Z"
              fill="#CFD7ED"
            />
          </svg>

          <span className="text-xs">Home</span>
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
                fill="#CFD7ED"
              />
              <path
                d="M8.10334 1.89343C8.10334 1.57786 8.10334 1.26229 8.10334 0.957983C8.10334 0.417 8.47973 0.0112618 8.97788 -8.67012e-06C9.48711 -0.0112792 9.88563 0.383188 9.90777 0.935442C9.91884 1.19466 9.91884 1.46516 9.90777 1.73565C9.90777 1.85962 9.94098 1.91598 10.0738 1.94979C12.6864 2.50204 14.3801 4.09118 15.0997 6.70593C15.2436 7.23565 15.2768 7.81044 15.2989 8.3627C15.3321 9.24179 15.2878 10.1209 15.3211 11C15.3764 12.7356 16.0406 14.1895 17.2915 15.3617C17.6236 15.666 17.9115 15.9928 17.9779 16.4549C18.1218 17.4016 17.524 18.2131 16.583 18.3258C16.4834 18.3371 16.3838 18.3371 16.2842 18.3371C11.4244 18.3371 6.5646 18.3371 1.70482 18.3371C0.940983 18.3371 0.376408 17.9877 0.121795 17.3453C-0.143888 16.6916 0.0110939 15.9928 0.564599 15.4969C1.28416 14.8545 1.84873 14.0994 2.22512 13.1977C2.52401 12.4764 2.69006 11.7326 2.70113 10.9436C2.7122 10.0645 2.70113 9.18544 2.70113 8.30634C2.7122 5.09425 4.89301 2.46823 7.99264 1.92725C8.02585 1.91598 8.04799 1.9047 8.10334 1.89343Z"
                fill="#CFD7ED"
              />
            </g>
            <defs>
              <clipPath id="clip0_2_96">
                <rect width="18" height="22" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <span className="text-xs">Thông báo</span>
        </a>
      </div>
    </div>
  );
};

export default BottomMenu;
