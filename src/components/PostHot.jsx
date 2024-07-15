import React, { useEffect, useState } from 'react';

export default function PostHot({ provinceId }) {
  const [categoryDetails, setCategoryDetails] = useState({});

  useEffect(() => {
    if (provinceId) {
      fetch(`https://forum-hngc.onrender.com/category/get-all-category/${provinceId}`)
        .then((res) => res.json())
        .then((data) => {
          setCategoryDetails(data);
        })
        .catch((error) => console.error('Error fetching data:', error));
    }
  }, [provinceId]);

  console.log("categoryDetails", categoryDetails);

  return (
    <div>
      <div className="w-56 hidden md:block">
        <div className="flex flex-col space-y-2 list-none px-4 rounded-lg bg-[#F8F8F8] mt-3">
          <div className="flex flex-row space-y-2 list-none rounded-lg bg-[#F8F8F8] pt-3">
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="font-family-nunito text-[#A8A8A8] border-r-[1px] border-[#A7A7A7] pr-3">
                Đề xuất chủ đề
              </div>
              <div className="font-family-nunito text-[#7AC0F8] border-[#A7A7A7] pl-3">
                Bài đăng hot nhất
              </div>
            </div>
          </div>
          {categoryDetails.categories ? (
            categoryDetails.categories.map((category) => (
              <div className="flex flex-col space-y-2 list-none rounded-lg bg-[#F8F8F8] mt-5" key={category.id}>
                <h2 className="font-family-nunito text-[#474747]">{category.name}</h2>
                <p className="text-[#A8A8A8]">{category.memberCount} thành viên</p>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
          <div className="flex flex-col space-y-2 list-none p-4 rounded-lg bg-[#F8F8F8] mt-3 justify-center items-center">
            <h2 className="font-family-nunito text-[#7AC0F8]">Đề xuất chủ đề</h2>
            <form action="" className="flex flex-col space-y-2">
              <div className="flex flex-row items-center space-x-2 justify-center">
                <label htmlFor="category" className="text-xs font-bold w-[60px]">Chủ đề</label>
                <input
                  type="text"
                  className="p-1 px-2 rounded-3xl bg-[#EBEBEB] w-full"
                  placeholder="Tìm chủ đề"
                />
              </div>
              <div className="flex flex-row items-center space-x-2 justify-center w-full">
                <button className="bg-[#F8BBD9] text-white text-sm px-4 py-1 rounded-2xl">
                  Đề xuất
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
