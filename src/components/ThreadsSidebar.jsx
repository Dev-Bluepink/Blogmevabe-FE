import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import * as PropType from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";

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
      category: "Cộng đồng mẹ & bé",
      subcategories: [
        "Mang thai",
        "Kinh nghiệm sinh nở",
        "Làm đẹp cho mẹ bầu",
        "Giải trí đời sống gia đình",
        "Sức khỏe sau sinh",
        "Review đồ cho bé",
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

  console.log("categories[0].subcategories", categories[0].subcategories);
  return (
    <aside
      className="fixed
     hidden flex-col w-56 bg-white border-r border-theme-silver-chalice md:flex"
    >
      <div className="flex flex-col m-5 space-y-4">
        <div className=" w-48 cursor-pointer">
          <button
            className="border border-theme-silver-chalice flex items-center justify-center py-1 px-2 rounded-2xl min-w-[10rem] border-[#A9D4F8] text-[#A9D4F8] font-family-mulish-2 hover:bg-[#d6e0e9] hover:text-white
          "
          >
            <span className="mr-2">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1_28)">
                  <path
                    d="M10.25 0C10.44 0 10.63 0 10.83 0C11.45 0.12 11.88 0.52 12.3 0.95C14.91 3.57 17.52 6.18 20.14 8.79C20.57 9.22 20.97 9.66 21.08 10.29C21.08 10.45 21.08 10.62 21.08 10.78C21.07 10.8 21.05 10.83 21.05 10.85C20.84 11.85 20.1 12.46 19.09 12.47C19 12.47 18.92 12.47 18.82 12.47C18.82 12.59 18.82 12.67 18.82 12.75C18.82 14.73 18.82 16.71 18.82 18.7C18.82 20.1 17.85 21.07 16.45 21.07C15.41 21.07 14.36 21.07 13.32 21.07C12.79 21.07 12.56 20.84 12.56 20.3C12.56 18.72 12.56 17.14 12.56 15.57C12.56 14.88 12.13 14.46 11.44 14.45C10.85 14.45 10.26 14.45 9.66997 14.45C8.91997 14.45 8.50997 14.86 8.50997 15.61C8.50997 17.19 8.50997 18.77 8.50997 20.34C8.50997 20.82 8.26997 21.06 7.78997 21.06C6.72997 21.06 5.65997 21.06 4.59997 21.06C4.39997 21.06 4.19997 21.04 4.00997 21C2.94997 20.75 2.25997 19.86 2.25997 18.75C2.25997 16.74 2.25997 14.73 2.25997 12.72C2.25997 12.64 2.25997 12.56 2.25997 12.49C2.21997 12.48 2.20997 12.47 2.19997 12.47C2.09997 12.47 1.98997 12.47 1.88997 12.46C1.17997 12.43 0.629972 12.11 0.269972 11.5C-0.200028 10.73 -0.0500279 9.79 0.639972 9.1C3.34997 6.39 6.05997 3.68 8.76997 0.96C9.19997 0.53 9.62997 0.12 10.25 0Z"
                    fill="#A9D4F8"
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
          <button
            className="border border-theme-silver-chalice flex items-center justify-center py-1 px-2 rounded-2xl min-w-[10rem] border-[#A9D4F8] mt-2 text-[#F8BBD9] font-family-mulish-2 hover:bg-[#d6e0e9] hover:text-white
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
            <div className="flex justify-start items-center w-48  cursor-pointer">
              <span className="mr-2">
                <svg
                  width="22"
                  height="17"
                  viewBox="0 0 22 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2_33)">
                    <path
                      d="M0 8.82C0.11 8.49 0.18 8.14 0.34 7.84C0.82 6.96 1.58 6.45 2.59 6.4C3.36 6.36 4.14 6.37 4.92 6.42C5.61 6.47 6.18 6.82 6.65 7.35C4.72 8.65 3.73 10.45 3.64 12.78C3.41 12.78 3.18 12.78 2.95 12.78C2.52 12.78 2.09 12.8 1.67 12.76C0.83 12.69 0.22 12.13 0.04 11.3C0.03 11.27 0.01 11.24 0 11.2C0 10.42 0 9.62 0 8.82Z"
                      fill="#474747"
                    />
                    <path
                      d="M10.96 16.44C10.07 16.44 9.18 16.44 8.29 16.44C6.69 16.44 5.49 15.23 5.49 13.64C5.49 12.93 5.46 12.23 5.66 11.54C6.2 9.62 7.97 8.25 9.96 8.23C10.79 8.22 11.62 8.2 12.44 8.27C14.36 8.44 16.01 10 16.35 11.89C16.5 12.7 16.53 13.53 16.36 14.34C16.1 15.57 14.99 16.43 13.73 16.44C12.8 16.44 11.88 16.44 10.96 16.44Z"
                      fill="#474747"
                    />
                    <path
                      d="M14.61 3.66C14.61 5.68 12.98 7.31 10.97 7.31C8.94999 7.31 7.30999 5.67 7.31999 3.65C7.31999 1.63 8.95999 0 10.98 0C12.99 0.01 14.61 1.64 14.61 3.66Z"
                      fill="#474747"
                    />
                    <path
                      d="M18.28 12.77C18.19 10.46 17.2 8.67 15.28 7.36C15.31 7.32 15.34 7.27 15.37 7.24C15.87 6.73 16.47 6.42 17.19 6.4C17.95 6.38 18.72 6.36 19.48 6.42C20.83 6.53 21.9 7.71 21.92 9.06C21.93 9.68 21.93 10.3 21.92 10.92C21.91 11.91 21.23 12.68 20.25 12.76C19.6 12.81 18.94 12.77 18.28 12.77Z"
                      fill="#474747"
                    />
                    <path
                      d="M6.38997 2.74C6.38997 4.25 5.16997 5.48 3.65997 5.48C2.14997 5.48 0.899972 4.24 0.909972 2.73C0.919972 1.22 2.14997 0 3.65997 0C5.16997 0 6.38997 1.23 6.38997 2.74Z"
                      fill="#474747"
                    />
                    <path
                      d="M18.26 0C19.77 0 21 1.22 21.01 2.73C21.02 4.24 19.77 5.48 18.26 5.48C16.75 5.48 15.53 4.25 15.53 2.74C15.53 1.22 16.75 0 18.26 0Z"
                      fill="#474747"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2_33">
                      <rect width="21.92" height="16.44" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <h2 className="font-family-nunito">Cộng đồng mẹ & bé</h2>
            </div>
            <SideBarComponent threadList={categories[0].subcategories} />
          </div>
          <span className="mx-5 border border-theme-silver-chalice"></span>
        </>
      )}
      <div className="flex flex-col m-5 space-y-4">
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
        <SideBarComponent threadList={categories[1].subcategories} />
      </div>
      <span className="mx-5 border border-theme-silver-chalice"></span>
      <div className="flex flex-col m-5 space-y-4">
        <div className=" w-48 cursor-pointer font-family-mulish">
          <div className="flex justify-start  items-center w-48  cursor-pointer">
            <span className="mr-2">
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
                    fill="#494949"
                  />
                  <path
                    d="M7.31999 1.68C7.31999 1.4 7.31999 1.12 7.31999 0.849995C7.31999 0.369995 7.65999 0.0099953 8.10999 -4.6965e-06C8.56999 -0.0100047 8.92999 0.339995 8.94999 0.829995C8.95999 1.06 8.95999 1.3 8.94999 1.54C8.94999 1.65 8.97999 1.7 9.09999 1.73C11.46 2.22 12.99 3.63 13.64 5.95C13.77 6.41999 13.8 6.93 13.82 7.42C13.85 8.2 13.81 8.98 13.84 9.76C13.89 11.3 14.49 12.59 15.62 13.63C15.92 13.9 16.18 14.19 16.24 14.6C16.37 15.44 15.83 16.16 14.98 16.26C14.89 16.27 14.8 16.27 14.71 16.27C10.32 16.27 5.92999 16.27 1.53999 16.27C0.849989 16.27 0.339989 15.96 0.109989 15.39C-0.130011 14.81 0.00998855 14.19 0.509989 13.75C1.15999 13.18 1.66999 12.51 2.00999 11.71C2.27999 11.07 2.42999 10.41 2.43999 9.71C2.44999 8.93 2.43999 8.14999 2.43999 7.37C2.44999 4.52 4.41999 2.19 7.21999 1.71C7.24999 1.7 7.26999 1.69 7.31999 1.68Z"
                    fill="#494949"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_96">
                    <rect width="16.26" height="19.52" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>

            <h2 className="font-family-nunito">Thông báo</h2>
          </div>
          <div className="flex justify-start items-center w-48  cursor-pointer mt-2">
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
        </div>
        <SideBarComponent threadList={data?.popular} />
      </div>
      <span className="mx-5 border border-theme-silver-chalice"></span>
      <div className="flex flex-col m-5 space-y-4 font-family-mulish">
        <div className=" w-48 cursor-pointer">
          <div className="flex justify-start  items-center w-48  cursor-pointer">
            <h2 className="font-family-nunito">Giới thiệu</h2>
          </div>
          <div className="flex justify-start items-center w-48  cursor-pointer mt-2">
            <h2 className="font-family-nunito">Chính sách</h2>
          </div>
          <div className="flex justify-start items-center w-48  cursor-pointer mt-2">
            <h2 className="font-family-nunito">Hỗ trợ</h2>
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
          to={`/${thread.name}`}
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
