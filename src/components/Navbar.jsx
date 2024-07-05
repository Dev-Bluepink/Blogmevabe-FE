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

export function Navbar() {
  const { isAuthenticated, user, logout } = AuthConsumer();
  const location = useLocation();
  const navigate = useNavigate();
const [menuOpen, setMenuOpen] = useState(false);

const toggleMenu = () => {
  setMenuOpen(!menuOpen);
};

return (
  <nav className="sticky top-0 z-50 flex justify-between items-center h-16 p-0 md:p-5 border-b border-neutral-200 bg-white shadow-md">
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
    <div className="flex items-center md:space-x-6">
      <ThreadSearch callBackFunc={(data) => navigate(`/t/${data}`)} />
    </div>
    <div className="flex items-center md:space-x-6">
      {isAuthenticated && (
        <>
          <NavLink
            to="/saved"
            className={({ isActive }) => `${isActive && "text-theme-orange"}`}
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
            className={({ isActive }) => `${isActive && "text-theme-orange"}`}
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
          </div>
          <Link to="/u/profile/thong-tin">
            <img src={avatar} alt="avatar" className="w-8 h-8 rounded-full" />
          </Link>
        </div>
        <Link
          to="/login"
          className="hidden font-semibold cursor-pointer md:flex group bg-[#7AC0F8] px-4 p-2 rounded-2xl hover:bg-[#F8BBD9] hover:text-white"
        >
          <span className="font-family-mulish text-white"> Đăng Nhập</span>
        </Link>
      </div>
    )}

    <div
      className={`md:hidden ${
        menuOpen ? "block" : "hidden"
      } absolute top-0 left-0 w-64 h-screen bg-white shadow-md z-50 transition-transform duration-300 transform`}
    >
      <div
        className="flex flex-col items-start space-y-4 p-4 bg-white
        
      "
      >
        <button onClick={toggleMenu} className="self-end p-2">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-2 border rounded-md w-full"
        />
        <NavLink
          to="/saved"
          className="text-gray-700 w-full text-left px-4 py-2"
        >
          Saved
        </NavLink>
        <NavLink
          to="/inbox"
          className="text-gray-700 w-full text-left px-4 py-2"
        >
          Inbox
        </NavLink>
        <Link
          to="/profile"
          className="flex items-center space-x-2 w-full px-4 py-2"
        >
          <img
            src="https://via.placeholder.com/40"
            alt="User"
            className="object-cover w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-gray-700">Username</p>
            <p className="text-gray-500">karma: 100</p>
          </div>
        </Link>
        <button className="text-gray-700 w-full text-left px-4 py-2">
          Logout
        </button>
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
