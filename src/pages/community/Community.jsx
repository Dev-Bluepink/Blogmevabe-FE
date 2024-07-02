import React from "react";
import { Link } from "react-router-dom";

export default function Community() {
  return (
    <div
      id="main-content"
      className="md:ml-56 flex w-full flex-col flex-1 p-2 space-y-3 rounded-lg p-0.5 bg-theme-cultured md:bg-white md:p-3"
    >
      <div className="flex flex-col mx-0 space-y-2 md:space-y-3 flex-1 mt-2 md:mt-0 ">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/3 p-2 md:p-2">
            <Link to="/list-post">
              <div className="flex flex-row justify-between items-center space-y-2 list-none p-4 rounded-lg  border border-gray-300 mb-4 ">
                <div className="flex flex-row items-center space-x-2">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/weloveschool-212d8.appspot.com/o/asd1.png?alt=media&token=5229bcab-5620-4393-aabb-b52eb3ba7369"
                    alt=""
                    className="w-10 w-10 rounded-full"
                  />
                  <h2 className="font-family-nunito text-[#7AC0F8]">
                    Mang thai
                  </h2>
                </div>
                <div
                  className="flex flex-row items-center 
                space-x-2 text-[#878787] text-sm "
                >
                  Số chủ đề :<span className=" font-bold"> 10</span>
                </div>
              </div>
            </Link>
            <div className="flex flex-row justify-between items-center space-y-2 list-none p-4 rounded-lg  border border-gray-300 mb-4 ">
              <div className="flex flex-row items-center space-x-2">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/weloveschool-212d8.appspot.com/o/asd1.png?alt=media&token=5229bcab-5620-4393-aabb-b52eb3ba7369"
                  alt=""
                  className="w-10 w-10 rounded-full"
                />
                <h2 className="font-family-nunito text-[#7AC0F8]">Mang thai</h2>
              </div>
              <div
                className="flex flex-row items-center 
                space-x-2 text-[#878787] text-sm "
              >
                Số chủ đề :<span className=" font-bold"> 10</span>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center space-y-2 list-none p-4 rounded-lg  border border-gray-300 mb-4 ">
              <div className="flex flex-row items-center space-x-2">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/weloveschool-212d8.appspot.com/o/asd1.png?alt=media&token=5229bcab-5620-4393-aabb-b52eb3ba7369"
                  alt=""
                  className="w-10 w-10 rounded-full"
                />
                <h2 className="font-family-nunito text-[#7AC0F8]">Mang thai</h2>
              </div>
              <div
                className="flex flex-row items-center 
                space-x-2 text-[#878787] text-sm "
              >
                Số chủ đề :<span className=" font-bold"> 10</span>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center space-y-2 list-none p-4 rounded-lg  border border-gray-300 mb-4 ">
              <div className="flex flex-row items-center space-x-2">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/weloveschool-212d8.appspot.com/o/asd1.png?alt=media&token=5229bcab-5620-4393-aabb-b52eb3ba7369"
                  alt=""
                  className="w-10 w-10 rounded-full"
                />
                <h2 className="font-family-nunito text-[#7AC0F8]">Mang thai</h2>
              </div>
              <div
                className="flex flex-row items-center 
                space-x-2 text-[#878787] text-sm "
              >
                Số chủ đề :<span className=" font-bold"> 10</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 hidden md:block">
            <div className="flex flex-col space-y-2 list-none p-4 rounded-lg bg-[#F8F8F8] mt-10">
              <h2 className="font-family-nunito text-[#7AC0F8]">
                Đề xuất chủ đề
              </h2>
              <form action="" className="flex flex-col space-y-2">
                <div className="flex flex-row items-center space-x-2">
                  <label
                    htmlFor="category"
                    className="text-sm font-bold w-[60px]"
                  >
                    Thể loại
                  </label>
                  <input
                    type="text"
                    name="category"
                    id="category"
                    className="p-2 rounded-3xl border border-gray-300 bg-[#EBEBEB]"
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
                    className="p-2 rounded-3xl border border-gray-300 bg-[#EBEBEB]"
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
