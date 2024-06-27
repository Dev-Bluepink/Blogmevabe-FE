import React from "react";

export default function Area() {
  const area = [
    {
      id: 1,
      name: "Vùng Tây Nguyên",
      total: [
        {
          id: 1,
          name: "Gia Lai",
        },
        {
          id: 2,
          name: "Kon Tum",
        },
        {
          id: 3,
          name: "Đắk Lắk",
        },
        {
          id: 4,
          name: "Đắk Nông",
        },
      ],
    },
  ];
  return (
    <div
      id="main-content"
      className="
         md:ml-56
        flex w-full flex-col flex-1 p-2 space-y-3 rounded-lg p-0.5 bg-theme-cultured md:bg-white md:p-3"
    >
      <div className="flex flex-col mx-0 space-y-2 md:space-y-3 flex-1 mt-2 md:mt-0 md:mx-48">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/3  p-2 md:p-2">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              {area.map((item) => (
                <>
                  <table className="w-full text-sm text-left rtl:text-right text-[#7AC0F8] ">
                    <thead className="text-xs text-gray-700 uppercase bg-[#7AC0F8]">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-white font-medium"
                        >
                          {" "}
                          Vùng Tây Nguyên
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        ></th>
                      </tr>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          Microsoft Surface Pro
                        </th>
                      </tr>
                      <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          Magic Mouse 2
                        </th>
                      </tr>
                    </tbody>
                  </table>
                </>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 hidden md:block">
            <div className="flex flex-col space-y-2 list-none  p-4 rounded-lg bg-[#F8F8F8] mt-10">
              <h2 className="font-family-nunito text-[#7AC0F8]">
                Đề xuất chủ đề
              </h2>
              <form action="" className="flex flex-col space-y-2">
                <div className="flex flex-row items-center space-x-2">
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
                    className="p-2 rounded-lg border border-gray-300 w-full"
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
