import React from "react";
import { Link } from "react-router-dom";

export default function Area() {
  const area = [
    {
      id: 1,
      name: "Vùng Tây Nguyên",
      total: [
        { id: 1, name: "Gia Lai" },
        { id: 2, name: "Kon Tum" },
        { id: 3, name: "Đắk Lắk" },
        { id: 4, name: "Đắk Nông" },
      ],
    },
    {
      id: 2,
      name: "Vùng Đông Nam Bộ",
      total: [
        { id: 1, name: "Bình Phước" },
        { id: 2, name: "Bình Dương" },
        { id: 3, name: "Đồng Nai" },
        { id: 4, name: "Tây Ninh" },
        { id: 5, name: "Bà Rịa - Vũng Tàu" },
        { id: 6, name: "TP.Hồ Chí Minh" },
      ],
    },
    {
      id: 3,
      name: "Vùng Tây Nam Bộ",
      total: [
        { id: 1, name: "Long An" },
        { id: 2, name: "Tiền Giang" },
        { id: 3, name: "Bến Tre" },
        { id: 4, name: "Vĩnh Long" },
        { id: 5, name: "Trà Vinh" },
        { id: 6, name: "Hậu Giang" },
        { id: 7, name: "Kiên Giang" },
        { id: 8, name: "Sóc Trăng" },
        { id: 9, name: "Bạc Liêu" },
        { id: 10, name: "Cà Mau" },
        { id: 11, name: "Cần Thơ" },
      ],
    },
    {
      id: 4,
      name: "Vùng Đồng Bằng Sông Cửu Long",
      total: [
        { id: 1, name: "Đồng Tháp" },
        { id: 2, name: "An Giang" },
        { id: 3, name: "Vĩnh Long" },
        { id: 4, name: "Kiên Giang" },
      ],
    },
  ];

  return (
    <div
      id="main-content"
      className="md:ml-56 flex w-full flex-col flex-1 p-2 space-y-3 rounded-lg p-0.5 bg-theme-cultured md:bg-white md:p-3"
    >
      <div className="flex flex-col mx-0 space-y-2 md:space-y-3 flex-1 mt-2 md:mt-0 ">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/3 p-2 md:p-2">
            {area.map((item) => (
              <div
                className="relative overflow-x-auto sm:rounded-lg"
                key={item.id}
              >
                <div className="mb-4 rounded-lg">
                  <table className="w-full text-sm text-left rtl:text-right text-[#7AC0F8] bg-white rounded-lg shadow-lg">
                    <thead className="text-xs text-gray-700 uppercase bg-[#7AC0F8]">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-white font-medium"
                        >
                          {item.name}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {item.total.map((subItem, index) => (
                        <tr
                          key={subItem.id}
                          className={`bg-white border-b border-gray-200 ${
                            index === item.total.length - 1
                              ? "rounded-b-3xl"
                              : ""
                          } hover:bg-gray-100`}
                        >
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="ml-4">
                                <Link
                                  to={`/details/${subItem.id}`}
                                  className="text-sm font-medium text-gray-900"
                                >
                                  {subItem.name}
                                </Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
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
