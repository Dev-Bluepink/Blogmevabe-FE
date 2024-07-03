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

  return (
    <nav
      className="sticky top-0 z-50 flex justify-between items-center mx-1 h-16 md:p-5 border-b border-neutral-200
    bg-white shadow-md"
    >
      {/* <AppLogo /> */}
      <div className="hidden relative flex-col justify-center items-center space-y-5 rounded-md cursor-pointer md:flex group">
        <img
          src={donghanhmevabe}
          alt="threadit-logo"
          className="object-cover w-30 h-10"
        />
      </div>

      <div className="flex items-center md:space-x-6">
        <ThreadSearch callBackFunc={(threadUrl) => navigate(threadUrl)} />
      </div>
      <div className="flex items-center md:space-x-6">
        {isAuthenticated && (
          <>
            <NavLink
              to="/saved"
              className={({ isActive }) => `${isActive && "text-theme-orange"}`}
              title="saved"
            >
              <Svg type="save" className="hidden w-6 h-6 md:block" />
            </NavLink>
            <NavLink
              to="/inbox"
              className={({ isActive }) => `${isActive && "text-theme-orange"}`}
              title="inbox"
            >
              <Svg type="message" className="hidden w-6 h-6 md:block" />
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
              <Svg
                type="circle-logout"
                className="w-6 h-6 duration-300 rotate-180 md:block hover:scale-110"
              />
              <span className="text-sm font-semibold">Logout</span>
            </button>
          </>
        )}
        {/* <select
          name="page"
          id="page"
          className="px-1 py-3 mr-1 text-center rounded-3xl md:hidden bg-theme-cultured"
          onChange={(e) => {
            if (e.target.value !== "logout") {
              navigate(e.target.value);
            } else {
              logout();
              return navigate("/all");
            }
          }}
          value={location.pathname}
        >
          <optgroup label="Feeds">
            {isAuthenticated && <option value="/home">Home</option>}
            <option value="/popular">Popular</option>
            <option value="/all">All</option>
          </optgroup>
          <optgroup label="Other">
            {isAuthenticated ? (
              <>
                <option value="/inbox">Inbox</option>
                <option value="/saved">Saved</option>
                <option value={`/u/${user.username}`}>Profile</option>
                <option value="logout">Logout</option>
              </>
            ) : (
              <>
                <option value="/register">Register</option>
                <option value="/login">Login</option>
              </>
            )}
          </optgroup>
        </select> */}
        {/* logo */}
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
                  <g clipPath="url(#clip0_2_96)">
                    <path
                      d="M7.81996 19.52C7.43996 19.39 7.02996 19.32 6.67996 19.13C5.84996 18.7 5.35996 18 5.14996 17.08C7.13996 17.08 9.11996 17.08 11.11 17.08C11.05 17.45 10.91 17.77 10.72 18.08C10.21 18.87 9.48996 19.34 8.55996 19.49C8.52996 19.49 8.49996 19.51 8.46996 19.52C8.24996 19.52 8.02996 19.52 7.81996 19.52Z"
                      fill="#7AC0F8"
                    />
                    <path
                      d="M7.31999 1.68C7.31999 1.4 7.31999 1.12 7.31999 0.849995C7.31999 0.369995 7.65999 0.0099953 8.10999 -4.6965e-06C8.56999 -0.0100047 8.92999 0.339995 8.94999 0.829995C8.95999 1.06 8.95999 1.3 8.94999 1.54C8.94999 1.65 8.97999 1.7 9.09999 1.73C11.46 2.22 12.99 3.63 13.64 5.95C13.77 6.41999 13.8 6.93 13.82 7.42C13.85 8.2 13.81 8.98 13.84 9.76C13.89 11.3 14.49 12.59 15.62 13.63C15.92 13.9 16.18 14.19 16.24 14.6C16.37 15.44 15.83 16.16 14.98 16.26C14.89 16.27 14.8 16.27 14.71 16.27C10.32 16.27 5.92999 16.27 1.53999 16.27C0.849989 16.27 0.339989 15.96 0.109989 15.39C-0.130011 14.81 0.00998855 14.19 0.509989 13.75C1.15999 13.18 1.66999 12.51 2.00999 11.71C2.27999 11.07 2.42999 10.41 2.43999 9.71C2.44999 8.93 2.43999 8.14999 2.43999 7.37C2.44999 4.52 4.41999 2.19 7.21999 1.71C7.24999 1.7 7.26999 1.69 7.31999 1.68Z"
                      fill="#7AC0F8"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2_96">
                      <rect width="16.26" height="19.52" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </div>
          </Link>

          {/* link user  */}
          <Link
            to="/u/profile/thong-tin"
            //   className="hidden font-semibold cursor-pointer md:flex group bg-[#7AC0F8]
            // px-4 p-2 rounded-2xl hover:bg-[#F8BBD9]  hover:text-white font-family-mulish
            // "
          >
            {/* svg user */}
            <img src={avatar} alt="avatar" className="w-8 h-8" />
          </Link>

          <Link
            to="/login"
            className=" hidden font-semibold cursor-pointer md:flex group bg-[#7AC0F8]
          px-4 p-2 rounded-2xl hover:bg-[#F8BBD9]  hover:text-white font-family-mulish 
          "
          >
            <span className="font-family-mulish text-white"> Đăng Nhập</span>
          </Link>
        </div>
      )}
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
        Mebe
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
