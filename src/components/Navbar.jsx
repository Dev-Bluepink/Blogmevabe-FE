import { useQuery } from "@tanstack/react-query";
import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import avatar from "../assets/avatar.png";
import axios from "axios";
import donghanhmevabe from "../assets/logodonghanhmevabe.png";
import threads from "../assets/threads.png";
import AuthConsumer from "../components/AuthContext.jsx";
import Svg from "../components/Svg.jsx";
import useClickOutside from "../hooks/useClickOutside";
import Modal from "./Modal";
import { NewThread } from "./NewThread";


import SideBarComponent from "./ThreadsSidebar";
export function Navbar() {
  const { isAuthenticated, user, logout } = AuthConsumer();
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const visit = [
    {
      id: 1,
      name: "Hà Nội",
    },
    {
      id: 2,
      name: "Hồ Chí Minh",
    },
    {
      id: 3,
      name: "Hải Phòng",
    },
    {
      id: 4,
      name: "Huế",
    },
    {
      id: 5,
      name: "Đà Nẵng",
    },
  ];

  const kienthuc = [
    {
      id: 1,
      name: "Sức khỏe mẹ & bé",
    },
    {
      id: 2,
      name: "Sự phát triển của bé",
    },
    {
      id: 3,
      name: "Gia đình",
    },
    {
      id: 4,
      name: "Đàn ông chăm con",
    },
  ];

  return (
    <nav
      className="sticky top-0 z-50 flex 
        justify-between
      md:justify-center
       items-center
     
     h-16 p-0 md:p-5 border-b border-neutral-200 bg-white shadow-md"
    >
      <div
        className="
        flex justify-center min-h-max bg-[#FFFFFF]"
      >
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black transition-opacity duration-300 ${
            menuOpen ? "opacity-50 z-40" : "opacity-0 z-0"
          }`}
          style={{ pointerEvents: menuOpen ? "auto" : "none" }}
          onClick={toggleMenu}
        ></div>
        <div className="flex items-center md:space-x-6">
          <button
            onClick={toggleMenu}
            className="md:hidden flex items-center mx-4 p-2 rounded-full bg-theme-cultured"
          >
            <svg
              width="19"
              height="14"
              viewBox="0 0 19 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="15" height="2" rx="1" fill="#494949" />
              <rect y="6" width="15" height="2" rx="1" fill="#494949" />
              <rect y="12" width="15" height="2" rx="1" fill="#494949" />
            </svg>
          </button>
          <Link
            to="/"
            className="flex relative items-center space-x-3 cursor-pointer group"
          >
            <img
              src={donghanhmevabe}
              className="object-cover w-32 h-8"
              alt="threadit-logo"
            />
          </Link>
        </div>
        <div className="relative flex items-center">
          <input
            type="search"
            name="search"
            id="search"
            className="py-2 pr-10 pl-4 w-[30rem] bg-neutral-100 focus:outline-none rounded-3xl"
            placeholder="Tìm kiếm"
          />
          <span className="absolute right-3 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.9 14.32a8 8 0 111.414-1.414l4.3 4.3a1 1 0 01-1.415 1.415l-4.3-4.3zM8 14a6 6 0 100-12 6 6 0 000 12z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>

        <div className="flex items-center md:space-x-6">
          {isAuthenticated && (
            <>
              <NavLink
                to="/saved"
                className={({ isActive }) =>
                  `${isActive && "text-theme-orange"}`
                }
                title="saved"
              >
                <svg
                  className="hidden w-6 h-6 md:block"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {/* Icon SVG content */}
                </svg>
              </NavLink>
              <NavLink
                to="/inbox"
                className={({ isActive }) =>
                  `${isActive && "text-theme-orange"}`
                }
                title="inbox"
              >
                <svg
                  className="hidden w-6 h-6 md:block"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {/* Icon SVG content */}
                </svg>
              </NavLink>
              <Link
                to={`/u/${user.username}`}
                className="hidden md:flex items-center space-x-2 bg-theme-cultured rounded-3xl pr-3 py-0.5"
              >
                <img
                  loading="lazy"
                  width="auto"
                  height="100%"
                  src={user.avatar || avatar}
                  className="object-cover w-10 h-10 rounded-full duration-500 cursor-pointer hover:scale-125 md:block"
                />
                <div className="text-sm font-semibold md:block">
                  <p className="text-gray-700">{user.username}</p>
                  <p className="text-gray-500 truncate">
                    karma: {user.karma.user_karma}
                  </p>
                </div>
              </Link>
              <button
                onClick={logout}
                className="hidden flex-col items-center md:flex"
              >
                <svg
                  className="w-6 h-6 duration-300 rotate-180 md:block hover:scale-110"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {/* Icon SVG content */}
                </svg>
                <span className="text-sm font-semibold">Logout</span>
              </button>
            </>
          )}
        </div>
        {!isAuthenticated && (
          <div className="flex items-center md:space-x-6">
            <Link to="/notification">
              <div className="hidden flex justify-end items-center w-48 cursor-pointer md:flex">
                <span
                  className="mr-2"
                  style={{
                    backgroundColor: "#F6F6F6",
                    padding: "0.5rem",
                    borderRadius: "50%",
                  }}
                >
                  <svg
                    width="17"
                    height="20"
                    viewBox="0 0 17 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <svg
                      width="18"
                      height="22"
                      viewBox="0 0 18 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_168_1319)">
                        <path
                          d="M8.65665 22C8.23598 21.8535 7.78211 21.7746 7.39465 21.5605C6.47584 21.0758 5.9334 20.2869 5.70093 19.25C7.90388 19.25 10.0958 19.25 12.2987 19.25C12.2323 19.667 12.0773 20.0277 11.867 20.377C11.3024 21.2674 10.5054 21.7971 9.47584 21.9662C9.44263 21.9662 9.40942 21.9887 9.3762 22C9.13266 22 8.88912 22 8.65665 22Z"
                          fill="#7AC0F8"
                        />
                        <path
                          d="M8.10322 1.89343C8.10322 1.57786 8.10322 1.26229 8.10322 0.957983C8.10322 0.417 8.47961 0.0112618 8.97776 -8.67012e-06C9.48699 -0.0112792 9.88551 0.383188 9.90765 0.935442C9.91872 1.19466 9.91872 1.46516 9.90765 1.73565C9.90765 1.85962 9.94086 1.91598 10.0737 1.94979C12.6862 2.50204 14.38 4.09118 15.0995 6.70593C15.2434 7.23565 15.2767 7.81044 15.2988 8.3627C15.332 9.24179 15.2877 10.1209 15.3209 11C15.3763 12.7356 16.0405 14.1895 17.2914 15.3617C17.6235 15.666 17.9113 15.9928 17.9778 16.4549C18.1217 17.4016 17.5239 18.2131 16.5829 18.3258C16.4833 18.3371 16.3837 18.3371 16.284 18.3371C11.4243 18.3371 6.56448 18.3371 1.7047 18.3371C0.940861 18.3371 0.376285 17.9877 0.121673 17.3453C-0.14401 16.6916 0.0109718 15.9928 0.564477 15.4969C1.28403 14.8545 1.84861 14.0994 2.22499 13.1977C2.52389 12.4764 2.68994 11.7326 2.70101 10.9436C2.71208 10.0645 2.70101 9.18544 2.70101 8.30634C2.71208 5.09425 4.89289 2.46823 7.99252 1.92725C8.02573 1.91598 8.04787 1.9047 8.10322 1.89343Z"
                          fill="#7AC0F8"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_168_1319">
                          <rect width="18" height="22" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </svg>
                </span>
              </div>
            </Link>
            <div className="flex items-center space-x-4 mr-2 md:mr-0">
              <div className="flex items-center space-x-2 cursor-pointer rounded-full p-2 bg-[#F6F6F6]  md:hidden">
                <button onClick={toggleSearch}>
                  <svg
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_390_3707)">
                      <path
                        d="M8.01636 0C8.3936 0.0549133 8.77085 0.0960983 9.14809 0.178468C12.1122 0.823699 14.443 3.30853 14.9415 6.34248C15.3053 8.60766 14.7798 10.6532 13.3921 12.4653C13.3517 12.5202 13.3247 12.5614 13.2978 12.6026C13.8232 13.1517 14.3352 13.7146 14.8607 14.2637C15.8038 15.2659 16.7469 16.2543 17.69 17.2565C18.1077 17.6958 18.1077 18.3273 17.7035 18.7117C17.2993 19.1098 16.693 19.0824 16.2753 18.6431C14.8472 17.1329 13.4191 15.6091 11.9909 14.099C11.9505 14.0578 11.9101 14.0029 11.8696 13.948C11.7214 14.0441 11.6002 14.1264 11.4655 14.2088C7.11366 16.9408 1.34719 14.4697 0.215457 9.39017C-0.619872 5.7659 1.21246 2.08671 4.56725 0.617775C5.30827 0.288295 6.07624 0.0960983 6.88462 0.0274566C6.93851 0.0274566 6.97893 0.0137283 7.01935 0C7.35618 0 7.693 0 8.01636 0ZM7.53133 13.3439C10.6167 13.3302 13.0957 10.7905 13.0822 7.6604C13.0688 4.51662 10.5762 1.99061 7.50438 2.00434C4.43252 2.01806 1.95348 4.5578 1.96695 7.68786C1.98043 10.8042 4.47294 13.3439 7.53133 13.3439Z"
                        fill="#494949"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_390_3707">
                        <rect width="18" height="19" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
              <Link to="/u/profile/thong-tin">
                <img
                  src={avatar}
                  alt="avatar"
                  className="w-8 h-8 rounded-full"
                />
              </Link>
            </div>
            {/* <Link
            to="/login"
            className="hidden font-semibold cursor-pointer md:flex group bg-[#7AC0F8] px-4 p-2 rounded-2xl hover:bg-[#F8BBD9] hover:text-white"
          >
            <span className="font-family-mulish text-white"> Đăng Nhập</span>
          </Link> */}
          </div>
        )}

        <div
          className={`md:hidden ${
            menuOpen ? "block" : "hidden"
          } absolute top-0 left-0 w-full h-screen bg-white shadow-md z-50 transition-transform duration-300 transform`}
        >
          <div className="flex flex-col items-start space-y-4  bg-white pb-4 border-b-2 border-neutral-200">
            <div className="flex justify-between w-full border-b p-4 border-neutral-200">
              <Link to="/" className="flex items-center space-x-3">
                <img
                  src={donghanhmevabe}
                  alt="threadit-logo"
                  className="object-cover w-30 h-10"
                />
              </Link>
              <button onClick={toggleMenu} className="self-end p-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25C6.615 2.25 2.25 6.615 2.25 12C2.25 17.385 6.615 21.75 12 21.75C17.385 21.75 21.75 17.385 21.75 12C21.75 6.615 17.385 2.25 12 2.25ZM10.28 9.22C10.2113 9.14631 10.1285 9.08721 10.0365 9.04622C9.94454 9.00523 9.84522 8.98318 9.74452 8.98141C9.64382 8.97963 9.54379 8.99816 9.4504 9.03588C9.35701 9.0736 9.27218 9.12974 9.20096 9.20096C9.12974 9.27218 9.0736 9.35701 9.03588 9.4504C8.99816 9.54379 8.97963 9.64382 8.98141 9.74452C8.98318 9.84522 9.00523 9.94454 9.04622 10.0365C9.08721 10.1285 9.14631 10.2113 9.22 10.28L10.94 12L9.22 13.72C9.14631 13.7887 9.08721 13.8715 9.04622 13.9635C9.00523 14.0555 8.98318 14.1548 8.98141 14.2555C8.97963 14.3562 8.99816 14.4562 9.03588 14.5496C9.0736 14.643 9.12974 14.7278 9.20096 14.799C9.27218 14.8703 9.35701 14.9264 9.4504 14.9641C9.54379 15.0018 9.64382 15.0204 9.74452 15.0186C9.84522 15.0168 9.94454 14.9948 10.0365 14.9538C10.1285 14.9128 10.2113 14.8537 10.28 14.78L12 13.06L13.72 14.78C13.7887 14.8537 13.8715 14.9128 13.9635 14.9538C14.0555 14.9948 14.1548 15.0168 14.2555 15.0186C14.3562 15.0204 14.4562 15.0018 14.5496 14.9641C14.643 14.9264 14.7278 14.8703 14.799 14.799C14.8703 14.7278 14.9264 14.643 14.9641 14.5496C15.0018 14.4562 15.0204 14.3562 15.0186 14.2555C15.0168 14.1548 14.9948 14.0555 14.9538 13.9635C14.9128 13.8715 14.8537 13.7887 14.78 13.72L13.06 12L14.78 10.28C14.8537 10.2113 14.9128 10.1285 14.9538 10.0365C14.9948 9.94454 15.0168 9.84522 15.0186 9.74452C15.0204 9.64382 15.0018 9.54379 14.9641 9.4504C14.9264 9.35701 14.8703 9.27218 14.799 9.20096C14.7278 9.12974 14.643 9.0736 14.5496 9.03588C14.4562 8.99816 14.3562 8.97963 14.2555 8.98141C14.1548 8.98318 14.0555 9.00523 13.9635 9.04622C13.8715 9.08721 13.7887 9.14631 13.72 9.22L12 10.94L10.28 9.22Z"
                    fill="#A8A8A8"
                  />
                </svg>
              </button>
            </div>
            <button className="border ml-4 border-theme-silver-chalice flex items-center justify-center py-1 px-2 rounded-2xl min-w-[10rem] border-[#A9D4F8] mt-2 text-[#F8BBD9] font-family-mulish-2 hover:bg-[#d6e0e9] hover:text-white">
              Chủ đề quan tâm
            </button>
            <div className="flex flex-row justify-between w-full px-4">
              <div className="flex items-center space-x-2 cursor-pointer text-[#555555]">
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
                    d="M11.54 22.351L11.61 22.391L11.638 22.407C11.749 22.467 11.8733 22.4985 11.9995 22.4985C12.1257 22.4985 12.25 22.467 12.361 22.407L12.389 22.392L12.46 22.351C12.8511 22.1191 13.2328 21.8716 13.604 21.609C14.5651 20.9305 15.463 20.1667 16.287 19.327C18.231 17.337 20.25 14.347 20.25 10.5C20.25 8.31196 19.3808 6.21354 17.8336 4.66637C16.2865 3.11919 14.188 2.25 12 2.25C9.81196 2.25 7.71354 3.11919 6.16637 4.66637C4.61919 6.21354 3.75 8.31196 3.75 10.5C3.75 14.346 5.77 17.337 7.713 19.327C8.53664 20.1667 9.43427 20.9304 10.395 21.609C10.7666 21.8716 11.1485 22.1191 11.54 22.351ZM12 13.5C12.7956 13.5 13.5587 13.1839 14.1213 12.6213C14.6839 12.0587 15 11.2956 15 10.5C15 9.70435 14.6839 8.94129 14.1213 8.37868C13.5587 7.81607 12.7956 7.5 12 7.5C11.2044 7.5 10.4413 7.81607 9.87868 8.37868C9.31607 8.94129 9 9.70435 9 10.5C9 11.2956 9.31607 12.0587 9.87868 12.6213C10.4413 13.1839 11.2044 13.5 12 13.5Z"
                    fill="#474747"
                  />
                </svg>

                <div className="flex items-center space-x-2 cursor-pointer text-[#555555] font-bold ">
                  Khu vực
                </div>
              </div>
              <Link to="/location" className="text-[12px] text-[#7A7A7A]">
                {" "}
                Tất cả
              </Link>
            </div>
            <div className="flex px-8 flex-col  space-y-4 w-48 list-none font-family-mulish">
              {visit.map((item) => (
                <Link key={item.id} to={`/visit/${item.name}`}>
                  <div className="flex flex-row ">
                    <div
                      className="flex items-center space-x-2 cursor-pointer"
                      onClick={() => navigate("/t/hanoi")}
                    >
                      {/* vẽ vòng tròn */}
                      <span className="w-3 h-3 bg-[#F8BBD9] rounded-full"></span>
                      <span className="text-sm text-[#7AC0F8]">
                        {item.name}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start space-y-4  bg-white pb-4 border-b-2 border-neutral-200 mt-6">
            <div className="flex flex-row justify-between w-full px-4">
              <div className="flex items-center space-x-2 cursor-pointer text-[#555555]">
                <svg
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_395_1222)">
                    <path
                      d="M0 6.87001C0 6.73001 0 6.60001 0 6.46001C0.01 6.43001 0.02 6.41001 0.03 6.38001C0.17 5.84001 0.55 5.50001 1.11 5.42001C2.46 5.22001 3.82 5.03001 5.17 4.84001C5.44 4.80001 5.62 4.68001 5.74 4.43001C6.33 3.21001 6.94 2.00001 7.54 0.780013C7.6 0.640013 7.68 0.510013 7.78 0.400013C8.37 -0.249987 9.41 -0.0899866 9.81 0.710013C10.43 1.95001 11.04 3.19001 11.65 4.43001C11.77 4.67001 11.95 4.79001 12.21 4.83001C13.57 5.02001 14.93 5.22001 16.29 5.42001C16.84 5.50001 17.24 5.87001 17.35 6.38001C17.45 6.86001 17.3 7.26001 16.96 7.59001C15.98 8.54001 15 9.50001 14.02 10.46C13.85 10.63 13.77 10.81 13.82 11.05C14.04 12.29 14.25 13.53 14.46 14.78C14.51 15.06 14.57 15.36 14.52 15.63C14.38 16.48 13.47 16.89 12.68 16.48C11.49 15.86 10.31 15.24 9.13 14.61C8.84 14.45 8.58 14.45 8.29 14.61C7.11 15.25 5.91 15.87 4.72 16.49C4.25 16.74 3.79 16.71 3.36 16.4C2.94 16.09 2.8 15.66 2.89 15.14C3.12 13.8 3.34 12.47 3.58 11.13C3.63 10.84 3.55 10.62 3.34 10.42C2.43 9.55001 1.54 8.67001 0.64 7.80001C0.35 7.53001 0.09 7.25001 0 6.87001Z"
                      fill="#474747"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_395_1222">
                      <rect width="17.38" height="16.66" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <div className="flex items-center space-x-2 cursor-pointer text-[#555555] font-bold ">
                  Kiến thức
                </div>
              </div>
              <Link to="/knowledge" className="text-[12px] text-[#7A7A7A]">
                Tất cả
              </Link>
            </div>
            <div className="flex px-8 flex-col  space-y-4 w-72 list-none font-family-mulish">
              {kienthuc.map((item) => (
                <Link key={item.id} to={`/visit/${item.name}`}>
                  <div className="flex flex-row ">
                    <div
                      className="flex items-center space-x-2 cursor-pointer"
                      onClick={() => navigate("/t/hanoi")}
                    >
                      {/* vẽ vòng tròn */}
                      <span className="w-3 h-3 bg-[#F8BBD9] rounded-full"></span>
                      <span className="text-sm text-[#7AC0F8]">
                        {item.name}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start space-y-4  px-4 bg-white pb-4  border-neutral-200 mt-6">
            <a href="https://bluepink.gitbook.io/introduction">
              <div className="flex items-center space-x-2 cursor-pointer text-[#555555] font-bold ">
                Giới thiệu
              </div>
            </a>
            <a href="https://bluepink.gitbook.io/chinh-sach">
              <div className="flex items-center space-x-2 cursor-pointer text-[#555555] font-bold ">
                Chính sách
              </div>
            </a>
            <a href="https://bluepink.gitbook.io/ho-tro">
              <div className="flex items-center space-x-2 cursor-pointer text-[#555555] font-bold ">
                Hỗ trợ
              </div>
            </a>
          </div>
        </div>

        <div
          className={`md:hidden ${
            searchOpen ? "block" : "hidden"
          } absolute top-0 left-0 w-full h-screen bg-white shadow-md z-50 transition-transform duration-300 transform`}
        >
          <div className="flex flex-col items-start space-y-4  bg-white pb-4  border-neutral-200">
            <div className="flex justify-between w-full border-b p-4 border-neutral-200">
              <Link to="/" className="flex items-center space-x-3">
                <img
                  src={donghanhmevabe}
                  alt="threadit-logo"
                  className="object-cover w-30 h-10"
                />
              </Link>
              <button onClick={toggleSearch} className="self-end p-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25C6.615 2.25 2.25 6.615 2.25 12C2.25 17.385 6.615 21.75 12 21.75C17.385 21.75 21.75 17.385 21.75 12C21.75 6.615 17.385 2.25 12 2.25ZM10.28 9.22C10.2113 9.14631 10.1285 9.08721 10.0365 9.04622C9.94454 9.00523 9.84522 8.98318 9.74452 8.98141C9.64382 8.97963 9.54379 8.99816 9.4504 9.03588C9.35701 9.0736 9.27218 9.12974 9.20096 9.20096C9.12974 9.27218 9.0736 9.35701 9.03588 9.4504C8.99816 9.54379 8.97963 9.64382 8.98141 9.74452C8.98318 9.84522 9.00523 9.94454 9.04622 10.0365C9.08721 10.1285 9.14631 10.2113 9.22 10.28L10.94 12L9.22 13.72C9.14631 13.7887 9.08721 13.8715 9.04622 13.9635C9.00523 14.0555 8.98318 14.1548 8.98141 14.2555C8.97963 14.3562 8.99816 14.4562 9.03588 14.5496C9.0736 14.643 9.12974 14.7278 9.20096 14.799C9.27218 14.8703 9.35701 14.9264 9.4504 14.9641C9.54379 15.0018 9.64382 15.0204 9.74452 15.0186C9.84522 15.0168 9.94454 14.9948 10.0365 14.9538C10.1285 14.9128 10.2113 14.8537 10.28 14.78L12 13.06L13.72 14.78C13.7887 14.8537 13.8715 14.9128 13.9635 14.9538C14.0555 14.9948 14.1548 15.0168 14.2555 15.0186C14.3562 15.0204 14.4562 15.0018 14.5496 14.9641C14.643 14.9264 14.7278 14.8703 14.799 14.799C14.8703 14.7278 14.9264 14.643 14.9641 14.5496C15.0018 14.4562 15.0204 14.3562 15.0186 14.2555C15.0168 14.1548 14.9948 14.0555 14.9538 13.9635C14.9128 13.8715 14.8537 13.7887 14.78 13.72L13.06 12L14.78 10.28C14.8537 10.2113 14.9128 10.1285 14.9538 10.0365C14.9948 9.94454 15.0168 9.84522 15.0186 9.74452C15.0204 9.64382 15.0018 9.54379 14.9641 9.4504C14.9264 9.35701 14.8703 9.27218 14.799 9.20096C14.7278 9.12974 14.643 9.0736 14.5496 9.03588C14.4562 8.99816 14.3562 8.97963 14.2555 8.98141C14.1548 8.98318 14.0555 9.00523 13.9635 9.04622C13.8715 9.08721 13.7887 9.14631 13.72 9.22L12 10.94L10.28 9.22Z"
                    fill="#A8A8A8"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col justify-center items-center space-y-4 w-full">
              <div className="flex items-center space-x-2 cursor-pointer text-[#555555] font-bold ">
                Tìm kiếm
              </div>
              <div className="relative flex items-center">
                <span className="absolute left-3 text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.9 14.32a8 8 0 111.414-1.414l4.3 4.3a1 1 0 01-1.415 1.415l-4.3-4.3zM8 14a6 6 0 100-12 6 6 0 000 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <input
                  type="search"
                  name="search"
                  id="search"
                  className="py-2 pl-10 w-72 bg-neutral-100 focus:outline-none rounded-3xl"
                  placeholder="Tìm kiếm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

AppLogo.propTypes = {
  forBanner: PropTypes.bool,
  children: PropTypes.node,
};
export function AppLogo({ forBanner = false, children }) {
  if (forBanner) {
    return (
      <div className="hidden relative flex-col justify-center items-center space-y-5 rounded-md cursor-pointer md:flex group">
        <img
          src={donghanhmevabe}
          alt="threadit-logo"
          className="object-cover"
        />

        {children}
      </div>
    );
  }
  return (
    <Link
      to="/"
      className="flex relative items-center space-x-3 cursor-pointer group"
    >
      <img
        src={threads}
        className="object-cover w-10 h-10"
        alt="threadit-logo"
      />
      {/* <span
        className="hidden md:block absolute w-2 h-2 bg-theme-orange rounded-full
                    right-[1.4rem] top-[0.2rem] z-20 group-hover:animate-bounce"
      ></span>
      <span className="hidden md:block absolute w-2 h-2 bg-white rounded-full right-[1.4rem] top-[0.2rem] z-10"></span>
      <h1 className="hidden font-mono text-3xl font-bold tracking-tight md:block">
        Donghanhcungcon
      </h1> */}
      {children}
    </Link>
  );
}

ThreadSearch.propTypes = {
  callBackFunc: PropTypes.func,
  forPost: PropTypes.bool,
};
export function ThreadSearch({ callBackFunc, forPost = false }) {
  const [showModal, setShowModal] = useState(false);
  const searchRef = useRef();
  const [search, setSearch] = useState("");
  const queryData = useQuery({
    queryKey: ["threads/search", search],
    queryFn: async ({ signal }) => {
      const promise = new Promise((resolve) => setTimeout(resolve, 500)).then(
        async () => {
          return await axios
            .get(`/api/threads/search/${search}`, {
              signal,
            })
            .then((data) => data.data);
        }
      );
      return promise;
    },
    enabled: search.length > 0 && search.replace(/\s/g, "").length > 0,
  });
  useClickOutside(searchRef, () => {
    setSearch("");
  });
  const threadNames = queryData.data
    ? queryData.data.map((thread) => thread.name)
    : [];
  return (
    <div
      className="flex flex-row 
      hidden
      md:flex
       items-center md:flex-row md:items-center ml-4 py-1.5 pl-2 md:p-1.5 space-y-4 md:space-y-0 md:space-x-14 rounded-2xl bg-neutral-100 relative md:w-[50rem]"
      ref={searchRef}
    >
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="search"
        name="search"
        id="search"
        className="py-0.5 w-72 md:w-full bg-neutral-100 focus:outline-none "
        placeholder="Tìm thông tin"
      />
      <Svg type="search" className="w-6 h-6" />
      {queryData.data && search && (
        <ul className="flex absolute right-0 top-full z-50 flex-col p-5 mt-3 space-y-5 w-full list-none bg-white rounded-md border shadow-xl border-y-theme-gray-blue">
          {queryData.data.slice(0, 5).map((subthread) => (
            <li
              className={`flex space-x-5 cursor-pointer ${
                !subthread.logo && "pl-[3.75rem]"
              }`}
              key={subthread.name}
              onClick={() => {
                callBackFunc(
                  forPost
                    ? { id: subthread.id, name: subthread.name }
                    : subthread.name
                );
                setSearch("");
              }}
            >
              <div className="flex flex-col">
                <p className="text-sm font-semibold tracking-wide md:text-base">
                  {subthread.name}
                </p>
                <span className="text-xs font-light md:text-sm">
                  {subthread.subscriberCount} Members
                </span>
              </div>
              {subthread.logo && (
                <img
                  src={subthread.logo}
                  className="object-cover w-10 h-10 rounded-full"
                />
              )}
            </li>
          ))}
          {!threadNames.includes(`t/${search}`) && !forPost && (
            <>
              <span className="w-full border border-theme-orange"></span>
              <div
                className="flex justify-center items-center m-0 font-semibold cursor-pointer group"
                onClick={() => {
                  setShowModal(true);
                  setSearch("");
                }}
              >
                <p className="text-sm md:text-base">
                  Create subthread &quot;{search}&quot;
                </p>
                <Svg
                  type="arrow-right"
                  className="w-6 h-6 duration-500 group-hover:translate-x-1"
                />
              </div>
            </>
          )}
        </ul>
      )}
      {showModal && (
        <Modal setShowModal={setShowModal} showModal={showModal}>
          <NewThread subThreadName={search} setShowModal={setShowModal} />
        </Modal>
      )}
    </div>
  );
}





export default Navbar;
