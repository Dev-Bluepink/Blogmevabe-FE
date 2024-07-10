import React from "react";

export default function Ads() {
  return (
    <div>
      {/* lassName="fixed hidden flex-col w-56 m-3 border border-theme-silver-chalice bg-white h-screen rounded-2xl md:flex" */}
      <div className="flex flex-col w-56 my-3 md:flex-row justify-between items-center hidden md:flex">
        <div className="flex flex-col ">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/weloveschool-212d8.appspot.com/o/image%2012.png?alt=media&token=13f610b2-28c8-451e-95bf-e5a08ea3a00f"
            alt=""
            // width={239}
            // height={239}
            className="mb-4 rounded-2xl"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/weloveschool-212d8.appspot.com/o/image%2013.png?alt=media&token=f383abb6-22da-4a37-81f5-c34f9e7600e3"
            alt=""
            // width={239}
            // height={239}
            className="mb-4 rounded-2xl"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/weloveschool-212d8.appspot.com/o/image%2014.png?alt=media&token=134f3ce3-ab6e-4429-8395-bb9397b75fc4"
            alt=""
            // width={239}
            // height={238}
            className="mb-4 rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}
