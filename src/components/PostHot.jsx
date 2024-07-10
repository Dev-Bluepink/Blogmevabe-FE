import React from "react";

export default function PostHot() {
  return (
    <div>
      <div className="w-56 hidden md:block">
        <div className="flex flex-col space-y-2 list-none  px-4 rounded-lg bg-[#F8F8F8] mt-3">
          <div className="flex flex-row space-y-2 list-none rounded-lg bg-[#F8F8F8] pt-3">
            <div className="grid grid-cols-2 gap-2 text-xs ">
              <div className="font-family-nunito   text-[#A8A8A8] border-r-[1px] border-[#A7A7A7] pr-3">
                Đề xuất chủ đề
              </div>
              <div className="font-family-nunito text-[#7AC0F8] border-[#A7A7A7] pl-3">
                Bài đăng hot nhất
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-2 list-none rounded-lg bg-[#F8F8F8] mt-5">
            <h2 className="font-family-nunito text-[#474747]">
              Ăn uống khi mang thai
            </h2>
            <p className=" text-[#A8A8A8]">5020 thành viên</p>
          </div>
          <div className="flex flex-col space-y-2 list-none rounded-lg bg-[#F8F8F8] mt-5">
            <h2 className="font-family-nunito text-[#474747]">
              Ăn uống khi mang thai
            </h2>
            <p className=" text-[#A8A8A8]">5020 thành viên</p>
          </div>
          <div className="flex flex-col space-y-2 list-none rounded-lg bg-[#F8F8F8] mt-5">
            <h2 className="font-family-nunito text-[#474747]">
              Ăn uống khi mang thai
            </h2>
            <p className=" text-[#A8A8A8]">5020 thành viên</p>
          </div>
          <div className="flex flex-col space-y-2 list-none rounded-lg bg-[#F8F8F8] mt-5">
            <h2 className="font-family-nunito text-[#474747]">
              Ăn uống khi mang thai
            </h2>
            <p className=" text-[#A8A8A8]">5020 thành viên</p>
          </div>
          <div className="flex flex-col space-y-2 list-none rounded-lg bg-[#F8F8F8] mt-5">
            <h2 className="font-family-nunito text-[#474747]">
              Ăn uống khi mang thai
            </h2>
            <p className=" text-[#A8A8A8]">5020 thành viên</p>
          </div>
        </div>
        <div className="flex flex-col space-y-2 list-none  p-4 rounded-lg bg-[#F8F8F8] mt-3">
          <h2 className="font-family-nunito text-[#7AC0F8]">Đề xuất chủ đề</h2>

          <form action="" className="flex flex-col space-y-2">
            {/* <div className="flex flex-row items-center space-x-2">
                  <label
                    htmlFor="category"
                    className="text-sm font-bold w-[60px]
                                "
                  >
                    Thể loại
                  </label>
                  <input
                    type="text"
                    name="category"
                    id="category"
                    className="p-2 rounded-lg border border-gray-300 w-full"
                    placeholder="Tìm chủ đề"
                  />
                </div> */}
            <div className="flex flex-row items-center space-x-2 justify-center">
              <label htmlFor="category" className="text-sm font-bold w-[60px]">
                Chủ đề
              </label>
              <input
                type="text"
                className="p-2 rounded-3xl bg-[#EBEBEB] w-full"
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
      </div>
    </div>
  );
}
