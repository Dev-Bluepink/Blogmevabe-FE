import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ThreadSearch } from "../../components/Navbar";

const ITEMS_PER_PAGE = 10;

export default function Location() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const area = [
    {
      id: 1,
      name: "Tỉnh thành",
      total: [
        { id: 1, name: "Gia Lai" },
        { id: 2, name: "Kon Tum" },
        { id: 3, name: "Đắk Lắk" },
        { id: 4, name: "Đắk Nông" },
        { id: 5, name: "Lâm Đồng" },
        { id: 6, name: "Bình Phước" },
        { id: 7, name: "Bình Dương" },
        { id: 8, name: "Bình Thuận" },
        { id: 9, name: "Ninh Thuận" },
        { id: 10, name: "Khánh Hòa" },
        { id: 11, name: "Phú Yên" },
        { id: 12, name: "Đà Nẵng" },
        { id: 1, name: "Gia Lai" },
        { id: 2, name: "Kon Tum" },
        { id: 3, name: "Đắk Lắk" },
        { id: 4, name: "Đắk Nông" },
        { id: 5, name: "Lâm Đồng" },
        { id: 6, name: "Bình Phước" },
        { id: 7, name: "Bình Dương" },
        { id: 8, name: "Bình Thuận" },
        { id: 9, name: "Ninh Thuận" },
        { id: 10, name: "Khánh Hòa" },
        { id: 11, name: "Phú Yên" },
        { id: 12, name: "Đà Nẵng" },
        { id: 1, name: "Gia Lai" },
        { id: 2, name: "Kon Tum" },
        { id: 3, name: "Đắk Lắk" },
        { id: 4, name: "Đắk Nông" },
        { id: 5, name: "Lâm Đồng" },
        { id: 6, name: "Bình Phước" },
        { id: 7, name: "Bình Dương" },
        { id: 8, name: "Bình Thuận" },
        { id: 9, name: "Ninh Thuận" },
        { id: 10, name: "Khánh Hòa" },
        { id: 11, name: "Phú Yên" },
        { id: 12, name: "Đà Nẵng" },
        { id: 1, name: "Gia Lai" },
        { id: 2, name: "Kon Tum" },
        { id: 3, name: "Đắk Lắk" },
        { id: 4, name: "Đắk Nông" },
        { id: 5, name: "Lâm Đồng" },
        { id: 6, name: "Bình Phước" },
        { id: 7, name: "Bình Dương" },
        { id: 8, name: "Bình Thuận" },
        { id: 9, name: "Ninh Thuận" },
        { id: 10, name: "Khánh Hòa" },
        { id: 11, name: "Phú Yên" },
        { id: 12, name: "Đà Nẵng" },
        { id: 1, name: "Gia Lai" },
        { id: 2, name: "Kon Tum" },
        { id: 3, name: "Đắk Lắk" },
        { id: 4, name: "Đắk Nông" },
        { id: 5, name: "Lâm Đồng" },
        { id: 6, name: "Bình Phước" },
        { id: 7, name: "Bình Dương" },
        { id: 8, name: "Bình Thuận" },
        { id: 9, name: "Ninh Thuận" },
        { id: 10, name: "Khánh Hòa" },
        { id: 11, name: "Phú Yên" },
        { id: 12, name: "Đà Nẵng" },
        { id: 1, name: "Gia Lai" },
        { id: 2, name: "Kon Tum" },
        { id: 3, name: "Đắk Lắk" },
        { id: 4, name: "Đắk Nông" },
        { id: 5, name: "Lâm Đồng" },
        { id: 6, name: "Bình Phước" },
        { id: 7, name: "Bình Dương" },
        { id: 8, name: "Bình Thuận" },
        { id: 9, name: "Ninh Thuận" },
        { id: 10, name: "Khánh Hòa" },
        { id: 11, name: "Phú Yên" },
        { id: 12, name: "Đà Nẵng" },
        { id: 1, name: "Gia Lai" },
        { id: 2, name: "Kon Tum" },
        { id: 3, name: "Đắk Lắk" },
        { id: 4, name: "Đắk Nông" },
        { id: 5, name: "Lâm Đồng" },
        { id: 6, name: "Bình Phước" },
        { id: 7, name: "Bình Dương" },
        { id: 8, name: "Bình Thuận" },
        { id: 9, name: "Ninh Thuận" },
        { id: 10, name: "Khánh Hòa" },
        { id: 11, name: "Phú Yên" },
        { id: 12, name: "Đà Nẵng" },
        { id: 1, name: "Gia Lai" },
        { id: 2, name: "Kon Tum" },
        { id: 3, name: "Đắk Lắk" },
        { id: 4, name: "Đắk Nông" },
        { id: 5, name: "Lâm Đồng" },
        { id: 6, name: "Bình Phước" },
        { id: 7, name: "Bình Dương" },
        { id: 8, name: "Bình Thuận" },
        { id: 9, name: "Ninh Thuận" },
        { id: 10, name: "Khánh Hòa" },
        { id: 11, name: "Phú Yên" },
        { id: 12, name: "Đà Nẵng" },
      ],
    },
  ];

  const totalItems = filteredItems.length
    ? filteredItems.length
    : area[0].total.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const handleChangePage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleSearch = () => {
    const results = area[0].total.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(results);
    setCurrentPage(1);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const currentItems = filteredItems.length
    ? filteredItems.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
      )
    : area[0].total.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
      );

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 3;
    const leftSide = maxPagesToShow - Math.floor(maxPagesToShow / 2);
    const rightSide = maxPagesToShow - leftSide;

    if (totalPages <= maxPagesToShow + 4) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => handleChangePage(i)}
            className={`px-3 py-1 mx-1 ${
              currentPage === i ? "bg-blue-500 text-white" : " text-gray-700"
            } rounded`}
          >
            {i}
          </button>
        );
      }
    } else {
      for (let i = 1; i <= leftSide; i++) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => handleChangePage(i)}
            className={`px-3 py-1 mx-1 ${
              currentPage === i
                ? "bg-[#7AC0F8] text-white rounded-3xl"
                : " text-gray-700"
            } rounded`}
          >
            {i}
          </button>
        );
      }

      if (currentPage > leftSide + 1) {
        pageNumbers.push(<span key="left-ellipsis">...</span>);
      }

      for (
        let i = Math.max(currentPage - rightSide, leftSide + 1);
        i <= Math.min(currentPage + rightSide, totalPages - leftSide);
        i++
      ) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => handleChangePage(i)}
            className={`px-3 py-1 mx-1 ${
              currentPage === i
                ? "bg-[#7AC0F8] text-white rounded-3xl"
                : " text-gray-700"
            } rounded`}
          >
            {i}
          </button>
        );
      }

      if (currentPage < totalPages - rightSide) {
        pageNumbers.push(<span key="right-ellipsis">...</span>);
      }

      for (let i = totalPages - leftSide + 1; i <= totalPages; i++) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => handleChangePage(i)}
            className={`px-3 py-1 mx-1 ${
              currentPage === i
                ? "bg-[#7AC0F8] text-white rounded-3xl"
                : " text-gray-700"
            } rounded`}
          >
            {i}
          </button>
        );
      }
    }

    return pageNumbers;
  };

  return (
    <div
      id="main-content"
      className="md:ml-56 flex w-full flex-col flex-1 p-2 space-y-3 rounded-lg p-0.5 bg-theme-cultured md:bg-white md:p-3"
    >
      <div className="flex flex-col mx-0 space-y-2 md:space-y-3 flex-1 mt-2 md:mt-0 ">
        <div className="flex flex-col md:flex-row">
          <div className="w-full -2 md:px-4">
            <div className="flex items-center justify-between md:justify-center mb-4  md:items-center">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Tỉnh thành"
                className="flex items-center py-1.5 pl-2 md:p-1.5 space-x-14  rounded-3xl bg-neutral-100 relative md:w-96 md:ml-10 md:mr-5 md:pl-5 md:pr-5 "
              />
              <button
                onClick={handleSearch}
                className="px-7 py-1 bg-[#F8BBD9] text-white rounded-3xl hover:bg-[#F48FB1]"
              >
                Tìm kiếm
              </button>
            </div>
            {area.map((item) => (
              <div
                className="relative overflow-x-auto sm:rounded-lg"
                key={item.id}
              >
                <div className="mb-4 rounded-lg">
                  <table className="w-full text-sm text-left rtl:text-right text-[#7AC0F8] bg-white rounded-lg border border-gray-200">
                    <thead className="text-xs text-gray-700 uppercase bg-[#7AC0F8]">
                      <tr>
                        <th
                          scope="col"
                          className="px-10 py-3 text-white font-medium"
                        >
                          Tỉnh thành
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-white font-medium"
                        >
                          Số danh mục
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-white font-medium"
                        >
                          Số người tham gia
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentItems.map((subItem, index) => (
                        <tr
                          key={subItem.id}
                          className={`bg-white border-b border-gray-200 ${
                            index === currentItems.length - 1
                              ? "rounded-b-3xl"
                              : ""
                          } hover:bg-gray-100`}
                        >
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex justify-start items-center">
                              <div className="ml-4">
                                <Link
                                  to={"/community"}
                                  className="text-sm font-medium text-gray-900"
                                >
                                  {subItem.name}
                                </Link>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="ml-8 text-[#878787]">42</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="ml-8 text-[#878787]">42</div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="flex justify-center items-center mt-4">
                  <button
                    onClick={() => handleChangePage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="p-2 bg-[#F6F6F6] rounded-3xl disabled:opacity-50"
                  >
                    <svg
                      width="6"
                      height="8"
                      viewBox="0 0 8 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 1L2 6L7 11"
                        stroke="#878787"
                        strokeWidth="2"
                      />
                    </svg>
                  </button>
                  <div>{renderPageNumbers()}</div>
                  <button
                    onClick={() => handleChangePage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="p-2 bg-[#F6F6F6] rounded-3xl disabled:opacity-50"
                  >
                    <svg
                      width="8"
                      height="12"
                      viewBox="0 0 8 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 11L6 6L1 0.999999"
                        stroke="#878787"
                        strokeWidth="2"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
