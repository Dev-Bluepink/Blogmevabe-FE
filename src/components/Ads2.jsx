import React from "react";

export default function Ads2() {
  return (
    <div>
      <div className="w-full hidden md:block">
        <div className="flex flex-col w-56 md:flex-col justify-between items-center hidden md:flex">
          <div className="flex flex-col w-full space-y-2 list-none mb-4 rounded-lg bg-[#F8F8F8] mt-3">
            <h2 className="font-family-nunito text-[#7AC0F8] mx-3 mt-3">
              Đề xuất chủ đề
            </h2>
            <form action="" className="flex flex-col space-y-2 mx-3">
              <div className="flex flex-row items-center space-x-2">
                <label htmlFor="category" className="text-xs font-bold ">
                  Thể loại
                </label>
                <input
                  type="text"
                  name="category"
                  id="category"
                  className="px-2 rounded-3xl border border-gray-300 bg-[#EBEBEB] w-36"
                  placeholder="Category"
                />
              </div>
              <div className="flex flex-row items-center space-x-2">
                <label htmlFor="category" className="text-xs font-bold ">
                  Chủ đề
                </label>
                <input
                  type="text"
                  name="category"
                  id="category"
                  className="px-2 rounded-3xl border border-gray-300 bg-[#EBEBEB] w-36"
                  placeholder="Thread"
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
  );
}
