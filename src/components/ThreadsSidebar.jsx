import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import * as PropType from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
// css
import "./threadsSidebar.css";

export function ThreadsSidebar() {
  const { data } = useQuery({
    queryKey: ["threads/all"],
    queryFn: async () => {
      return await axios.get("/api/threads").then((res) => res.data);
    },
  });
  const [categories, setCategories] = useState([
    {
      categoryid: 1,
      category: "Khu vực",
      subcategories: [
        "Hà Nội",
        "TP. Hồ Chí Minh",
        "Hải Phòng",
        "Huế",
        "Đà Nẵng",
        "Đồng Nai",
        "Bình Dương",
        "Lâm Đồng",
      ],
    },
    {
      categoryid: 2,
      category: "Kiến thức",
      subcategories: [
        "Sức khỏe mẹ & bé",
        "Sự phát triển của bé",
        "Gia đình",
        "Đàn ông chăm con",
      ],
    },
  ]);
  const hiddenScrollbar = {
    msOverflowStyle: "none", // IE and Edge
    scrollbarWidth: "none", // Firefox
  };

  const visibleScrollbar = {
    scrollbarWidth: "thin",
    scrollbarColor: "#c4c4c4 transparent",
  };

  const visibleScrollbarWebkit = {
    overflowY: "scroll",
  };

  return (
    <aside
      className="fixed hidden flex-col w-56 my-3 border border-theme-silver-chalice bg-white h-screen rounded-xl md:flex"
      style={{ ...hiddenScrollbar }}
      onMouseEnter={(e) => {
        e.currentTarget.style.overflowY = "scroll";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.overflowY = "hidden";
      }}
    >
      <div className="flex flex-col m-5 space-y-4">
        <div className=" w-48 cursor-pointer">
          <Link to="/">
            <button
              className="border border-theme-silver-chalice flex items-center justify-center py-1 px-2 rounded-2xl min-w-[10rem] border-[#A9D4F8] text-[#A9D4F8] font-family-mulish-2 text-[#F8BBD9] font-family-mulish-2 hover:bg-[#F8BBD9] hover:text-white hover:border-[#F8BBD9]
          "
            >
              <span className="mr-2 group">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:fill-current group-hover:text-blue-500" // Adjust the color as needed
                >
                  <g clipPath="url(#clip0_1_28)">
                    <path
                      d="M10.25 0C10.44 0 10.63 0 10.83 0C11.45 0.12 11.88 0.52 12.3 0.95C14.91 3.57 17.52 6.18 20.14 8.79C20.57 9.22 20.97 9.66 21.08 10.29C21.08 10.45 21.08 10.62 21.08 10.78C21.07 10.8 21.05 10.83 21.05 10.85C20.84 11.85 20.1 12.46 19.09 12.47C19 12.47 18.92 12.47 18.82 12.47C18.82 12.59 18.82 12.67 18.82 12.75C18.82 14.73 18.82 16.71 18.82 18.7C18.82 20.1 17.85 21.07 16.45 21.07C15.41 21.07 14.36 21.07 13.32 21.07C12.79 21.07 12.56 20.84 12.56 20.3C12.56 18.72 12.56 17.14 12.56 15.57C12.56 14.88 12.13 14.46 11.44 14.45C10.85 14.45 10.26 14.45 9.66997 14.45C8.91997 14.45 8.50997 14.86 8.50997 15.61C8.50997 17.19 8.50997 18.77 8.50997 20.34C8.50997 20.82 8.26997 21.06 7.78997 21.06C6.72997 21.06 5.65997 21.06 4.59997 21.06C4.39997 21.06 4.19997 21.04 4.00997 21C2.94997 20.75 2.25997 19.86 2.25997 18.75C2.25997 16.74 2.25997 14.73 2.25997 12.72C2.25997 12.64 2.25997 12.56 2.25997 12.49C2.21997 12.48 2.20997 12.47 2.19997 12.47C2.09997 12.47 1.98997 12.47 1.88997 12.46C1.17997 12.43 0.629972 12.11 0.269972 11.5C-0.200028 10.73 -0.0500279 9.79 0.639972 9.1C3.34997 6.39 6.05997 3.68 8.76997 0.96C9.19997 0.53 9.62997 0.12 10.25 0Z"
                      className="fill-[#A9D4F8] group-hover:fill-white" // Adjust the hover color as needed
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_28">
                      <rect width="21.08" height="21.07" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              Trang chủ
            </button>
          </Link>
          <button
            className="border border-theme-silver-chalice flex items-center justify-center py-1 px-2 rounded-2xl min-w-[10rem] border-[#A9D4F8] mt-2 text-[#F8BBD9] font-family-mulish-2 hover:bg-[#F8BBD9] hover:text-white hover:border-[#F8BBD9]
          "
          >
            Chủ đề quan tâm
          </button>
        </div>
        <SideBarComponent threadList={data?.all} />
      </div>
      <span className="mx-5 border border-theme-silver-chalice"></span>
      {data?.subscribed.length !== 0 && (
        <>
          <div className="flex flex-col m-5 space-y-4">
            <div className="flex justify-between">
              <div className="flex justify-start items-center w-48  cursor-pointer">
                <span className="mr-2">
                  <svg
                    width="14"
                    height="19"
                    viewBox="0 0 14 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_2_107)">
                      <path
                        d="M7.10003 0C7.29003 0.02 7.47003 0.04 7.66003 0.07C10.15 0.47 11.93 1.83 12.95 4.13C13.6 5.59 13.64 7.12 13.2 8.66C12.82 10 12.22 11.24 11.53 12.44C10.32 14.54 8.87003 16.48 7.29003 18.31C6.92003 18.74 6.55003 18.74 6.18003 18.31C4.39003 16.22 2.75003 14.02 1.47003 11.58C0.880028 10.46 0.370028 9.31 0.140028 8.06C-0.319972 5.6 0.380028 3.51 2.18003 1.79C3.25003 0.78 4.54003 0.22 5.99003 0.04C6.12003 0.03 6.25003 0.01 6.37003 0C6.61003 0 6.86003 0 7.10003 0ZM6.71003 10.14C8.55003 10.17 10.09 8.66 10.12 6.79C10.15 4.92 8.65003 3.38 6.76003 3.35C4.92003 3.32 3.39003 4.82 3.35003 6.69C3.31003 8.57 4.81003 10.11 6.71003 10.14Z"
                        fill="#494949"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2_107">
                        <rect width="13.48" height="18.64" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>

                <h2 className="font-family-nunito">Khu vực</h2>
              </div>

              <Link to="/location">
                <button className="text-xs text-[#7AC0F8]">All</button>
              </Link>
            </div>
            <SideBarComponent threadList={categories[0].subcategories} />
          </div>
          <span className="mx-5 border border-theme-silver-chalice"></span>
        </>
      )}
      <div className="flex flex-col m-5 space-y-4">
        <div className=" flex justify-between">
          <div className="flex justify-start  items-center w-48  cursor-pointer">
            <span className="mr-2">
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2_90)">
                  <path
                    d="M0 6.87C0 6.73 0 6.6 0 6.46C0.01 6.43 0.02 6.41 0.03 6.38C0.17 5.84 0.55 5.5 1.11 5.42C2.46 5.22 3.82 5.03 5.17 4.84C5.44 4.8 5.62 4.68 5.74 4.43C6.33 3.21 6.94 2 7.54 0.779998C7.6 0.639998 7.68 0.509998 7.78 0.399998C8.37 -0.250002 9.41 -0.0900018 9.81 0.709998C10.43 1.95 11.04 3.19 11.65 4.43C11.77 4.67 11.95 4.79 12.21 4.83C13.57 5.02 14.93 5.22 16.29 5.42C16.84 5.5 17.24 5.87 17.35 6.38C17.45 6.86 17.3 7.26 16.96 7.59C15.98 8.54 15 9.5 14.02 10.46C13.85 10.63 13.77 10.81 13.82 11.05C14.04 12.29 14.25 13.53 14.46 14.78C14.51 15.06 14.57 15.36 14.52 15.63C14.38 16.48 13.47 16.89 12.68 16.48C11.49 15.86 10.31 15.24 9.13 14.61C8.84 14.45 8.58 14.45 8.29 14.61C7.11 15.25 5.91 15.87 4.72 16.49C4.25 16.74 3.79 16.71 3.36 16.4C2.94 16.09 2.8 15.66 2.89 15.14C3.12 13.8 3.34 12.47 3.58 11.13C3.63 10.84 3.55 10.62 3.34 10.42C2.43 9.55 1.54 8.67 0.64 7.8C0.35 7.53 0.09 7.25 0 6.87Z"
                    fill="#474747"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_90">
                    <rect width="17.38" height="16.66" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <h2 className="font-family-nunito">Kiến thức</h2>
          </div>

          <Link to="/u/knowledge">
            <button className="text-xs text-[#7AC0F8]">All</button>
          </Link>
        </div>

        <SideBarComponent threadList={categories[1].subcategories} />
      </div>
      {/* <span className="mx-5 border border-theme-silver-chalice"></span> */}

      <span className="mx-5 border border-theme-silver-chalice"></span>
      <div className="flex flex-col m-5 space-y-4 font-family-mulish">
        <div className=" w-48 cursor-pointer">
          <div className="flex justify-start  items-center w-48  cursor-pointer">
            <a
              href="https://bluepink.gitbook.io/introduction"
              target="_blank"
              rel="noreferrer"
            >
              <h2 className="font-family-nunito">Giới thiệu</h2>
            </a>
          </div>
          <div className="flex justify-start items-center w-48  cursor-pointer mt-2">
            <a
              href="https://bluepink.gitbook.io/chinh-sach"
              target="_blank"
              rel="noreferrer"
            >
              <h2 className="font-family-nunito">Chính sách</h2>
            </a>
          </div>
          <div className="flex justify-start items-center w-48  cursor-pointer mt-2">
            <a
              href="https://bluepink.gitbook.io/ho-tro"
              target="_blank"
              rel="noreferrer"
            >
              <h2 className="font-family-nunito">Hỗ trợ</h2>
            </a>
          </div>
        </div>
        <SideBarComponent threadList={data?.popular} />
      </div>
    </aside>
  );
}

SideBarComponent.propTypes = {
  threadList: PropType.array,
};
function SideBarComponent({ threadList }) {
  console.log("threadList", threadList);
  return (
    <div className="flex flex-col space-y-4 w-48 list-none font-family-mulish">
      {threadList?.slice(0, 10).map((thread) => (
        <Link
          // to={`/${thread.name}`}
          to="/u/knowledge/detailknowledge"
          className="flex justify-between w-48 cursor-pointer font-family-mulish text-[#7AC0F8]"
          key={thread.name}
        >
          <div
            className={`flex items-center space-x-3 ${!thread.logo && "pl-9"}`}
          >
            {thread.logo && (
              <img
                loading="lazy"
                width="auto"
                height="100%"
                src={thread.logo}
                alt=""
                className="object-cover w-6 h-6 rounded-full"
              />
            )}
            {!thread.logo && (
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="6" r="6" fill="#F8BBD9" />
              </svg>
            )}
            {thread && <span className="text-xs font-semibold ">{thread}</span>}
          </div>
          {/* <span className="p-1 px-2 text-sm font-semibold rounded-md bg-theme-gray-blue">
            {thread.subscriberCount > 9
              ? thread.subscriberCount
              : `0${thread.subscriberCount}`}
          </span> */}
        </Link>
      ))}
    </div>
  );
}
export default ThreadsSidebar;
