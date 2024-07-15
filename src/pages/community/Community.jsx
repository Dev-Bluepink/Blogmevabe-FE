import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Community() {
  const { id } = useParams();
  const [provinceDetails, setProvinceDetails] = useState
  ({
    categories: [],
  });

  useEffect(() => {
    fetch(`https://forum-hngc.onrender.com/category/get-all-category/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProvinceDetails(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [id]);

  console.log("provinceDetails", provinceDetails.categogy);

  return (
    <div
      id="main-content"
      className="md:ml-56 flex w-full flex-col flex-1 p-2 space-y-3 rounded-lg p-0.5 bg-theme-cultured md:bg-white md:p-3"
    >
      <div className="flex flex-col mx-0 space-y-2 md:space-y-3 flex-1 mt-2 md:mt-0 ">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:mx-2 md:px-2">
            {provinceDetails.categogy ? (
              provinceDetails.categogy.map((category) => (
                <Link to="/list-post" key={category.id}>
                  <div className="flex flex-row justify-between items-center space-y-2 list-none p-4 rounded-lg border border-gray-300 mb-4">
                    <div className="flex flex-row items-center space-x-2">
                      <img
                        src={category.image || 'https://via.placeholder.com/150'}
                        alt={category.name}
                        className="w-10 h-10
                        rounded-full"
                      />
                      <h2 className="font-family-nunito text-[#7AC0F8]">
                        {category.name}
                      </h2>
                    </div>
                    <div className="flex flex-row items-center space-x-2 text-[#878787] text-sm">
                      Số chủ đề :<span className="font-bold">{category.numThreads}</span>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
