import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { clearToken } from "../../utils/auth";

const mockData = {
  thongTin: {
    name: "Nguyễn Văn A",
    email: "nguyenvana@example.com",
    phone: "0123456789",
  },
  baiDang: [
    {
      id: 1,
      avatar: "https://picsum.photos/200/300",
      name: "Hồ Lê",
      time: "1 giờ trước",
      title:
        "Mẹ không tiêm vắc xin trước khi mang thai, sinh con có sao không?",
      banner:
        "https://firebasestorage.googleapis.com/v0/b/weloveschool-212d8.appspot.com/o/post1.png?alt=media&token=5b330a42-e221-4f2b-9868-9e491ff59a08",
      content:
        "Việc lên kế hoạch tiêm chủng trước khi mang thai là rất cần thiết và quan trọng đối với mẹ bầu và thai nhi. Tuy nhiên, không tránh được trường hợp một số mẹ đã mang bầu trước khi tiêm chủng...",
      like: 100,
      dislike: 10,
      comment: 20,
    },
    {
      id: 2,
      avatar: "https://picsum.photos/200/301",
      name: "Hà Phan",
      time: "2 giờ trước",
      title: "Tác hại của việc cho trẻ học tiếng Hàn sớm",
      banner:
        "https://firebasestorage.googleapis.com/v0/b/weloveschool-212d8.appspot.com/o/post2.png?alt=media&token=a12f6549-4e78-4ef3-8a5d-a884c4a76653",
      content:
        "Việc học tiếng Hàn sớm cho trẻ có thể gây ra những tác hại không mong muốn cho sự phát triển của trẻ. Bài viết dưới đây sẽ giúp bạn hiểu rõ hơn về vấn đề này...",
      like: 100,
      dislike: 10,
      comment: 20,
    },
  ],
  chuDe: [
    {
      id: 1,
      avatar: "https://i.pravatar.cc/300",
      time: "7 giờ trước",
      address: "Đồng Nai",
      content:
        "Cho con đi học tiếng Hàn sớm để sau này con có thể xem phim Hàn mà không cần phụ đề, cứu bố mẹ khỏi việc phải đọc nhanh như siêu nhân!",
      like: 40,
      reply: 11,
    },
    {
      id: 2,
      avatar: "https://i.pravatar.cc/300",
      time: "2 giờ trước",
      address: "Hồ Chí Minh",
      content:
        "Cho con đi học tiếng Hàn sớm để sau này con có thể xem phim Hàn mà không cần phụ đề, cứu bố mẹ khỏi việc phải đọc nhanh như siêu nhân!",
      like: 40,
      reply: 11,
    },
    {
      id: 3,
      avatar: "https://i.pravatar.cc/300",
      time: "3 giờ trước",
      address: "Hà Nội",
      content:
        "Cho con đi học tiếng Hàn sớm để sau này con có thể xem phim Hàn mà không cần phụ đề, cứu bố mẹ khỏi việc phải đọc nhanh như siêu nhân!",
      like: 40,
      reply: 11,
    },
    {
      id: 4,
      avatar: "https://i.pravatar.cc/300",
      time: "3 giờ trước",
      address: "Hà Nội",
      content:
        "Cho con đi học tiếng Hàn sớm để sau này con có thể xem phim Hàn mà không cần phụ đề, cứu bố mẹ khỏi việc phải đọc nhanh như siêu nhân!",
      like: 40,
      reply: 11,
    },
    {
      id: 5,
      avatar: "https://i.pravatar.cc/300",
      time: "3 giờ trước",
      address: "Hà Nội",
      content:
        "Cho con đi học tiếng Hàn sớm để sau này con có thể xem phim Hàn mà không cần phụ đề, cứu bố mẹ khỏi việc phải đọc nhanh như siêu nhân!",
      like: 40,
      reply: 11,
    },
    {
      id: 6,
      avatar: "https://i.pravatar.cc/300",
      time: "3 giờ trước",
      address: "Hà Nội",
      content:
        "Cho con đi học tiếng Hàn sớm để sau này con có thể xem phim Hàn mà không cần phụ đề, cứu bố mẹ khỏi việc phải đọc nhanh như siêu nhân!",
      like: 40,
      reply: 11,
    },
    {
      id: 7,
      avatar: "https://i.pravatar.cc/300",
      time: "3 giờ trước",
      address: "Hà Nội",
      content:
        "Cho con đi học tiếng Hàn sớm để sau này con có thể xem phim Hàn mà không cần phụ đề, cứu bố mẹ khỏi việc phải đọc nhanh như siêu nhân!",
      like: 40,
      reply: 11,
    },
  ],
  luuTru: [
    {
      id: 1,
      avatar: "https://picsum.photos/200/300",
      name: "Hồ Lê",
      time: "1 giờ trước",
      title:
        "Mẹ không tiêm vắc xin trước khi mang thai, sinh con có sao không?",
      banner:
        "https://firebasestorage.googleapis.com/v0/b/weloveschool-212d8.appspot.com/o/post1.png?alt=media&token=5b330a42-e221-4f2b-9868-9e491ff59a08",
      content:
        "Việc lên kế hoạch tiêm chủng trước khi mang thai là rất cần thiết và quan trọng đối với mẹ bầu và thai nhi. Tuy nhiên, không tránh được trường hợp một số mẹ đã mang bầu trước khi tiêm chủng...",
      like: 100,
      dislike: 10,
      comment: 20,
      status: "Đã lưu",
    },
    {
      id: 2,
      avatar: "https://picsum.photos/200/301",
      name: "Hà Phan",
      time: "2 giờ trước",
      title: "Tác hại của việc cho trẻ học tiếng Hàn sớm",
      banner:
        "https://firebasestorage.googleapis.com/v0/b/weloveschool-212d8.appspot.com/o/post2.png?alt=media&token=a12f6549-4e78-4ef3-8a5d-a884c4a76653",
      content:
        "Việc học tiếng Hàn sớm cho trẻ có thể gây ra những tác hại không mong muốn cho sự phát triển của trẻ. Bài viết dưới đây sẽ giúp bạn hiểu rõ hơn về vấn đề này...",
      like: 100,
      dislike: 10,
      comment: 20,
      status: "Đã lưu",
    },
  ],
  ungHo: [
    {
      id: 1,
      avatar: "https://picsum.photos/200/300",
      name: "Hồ Lê",
      time: "1 giờ trước",
      title:
        "Mẹ không tiêm vắc xin trước khi mang thai, sinh con có sao không?",
      banner:
        "https://firebasestorage.googleapis.com/v0/b/weloveschool-212d8.appspot.com/o/post1.png?alt=media&token=5b330a42-e221-4f2b-9868-9e491ff59a08",
      content:
        "Việc lên kế hoạch tiêm chủng trước khi mang thai là rất cần thiết và quan trọng đối với mẹ bầu và thai nhi. Tuy nhiên, không tránh được trường hợp một số mẹ đã mang bầu trước khi tiêm chủng...",
      like: 100,
      dislike: 10,
      comment: 20,
      status: "Đã lưu",
    },
    {
      id: 2,
      avatar: "https://picsum.photos/200/301",
      name: "Hà Phan",
      time: "2 giờ trước",
      title: "Tác hại của việc cho trẻ học tiếng Hàn sớm",
      banner:
        "https://firebasestorage.googleapis.com/v0/b/weloveschool-212d8.appspot.com/o/post2.png?alt=media&token=a12f6549-4e78-4ef3-8a5d-a884c4a76653",
      content:
        "Việc học tiếng Hàn sớm cho trẻ có thể gây ra những tác hại không mong muốn cho sự phát triển của trẻ. Bài viết dưới đây sẽ giúp bạn hiểu rõ hơn về vấn đề này...",
      like: 100,
      dislike: 10,
      comment: 20,
      status: "Đã lưu",
    },
  ],
  khongUngHo: [
    {
      id: 2,
      avatar: "https://picsum.photos/200/301",
      name: "Hà Phan",
      time: "2 giờ trước",
      title: "Tác hại của việc cho trẻ học tiếng Hàn sớm",
      banner:
        "https://firebasestorage.googleapis.com/v0/b/weloveschool-212d8.appspot.com/o/post2.png?alt=media&token=a12f6549-4e78-4ef3-8a5d-a884c4a76653",
      content:
        "Việc học tiếng Hàn sớm cho trẻ có thể gây ra những tác hại không mong muốn cho sự phát triển của trẻ. Bài viết dưới đây sẽ giúp bạn hiểu rõ hơn về vấn đề này...",
      like: 100,
      dislike: 10,
      comment: 20,
      status: "Đã lưu",
    },
  ],
};

const sections = [
  { id: "thong-tin", title: "Thông tin" },
  { id: "bai-dang", title: "Bài đăng" },
  { id: "chu-de", title: "Chủ đề" },
  { id: "luu-tru", title: "Lưu trữ" },
  { id: "ung-ho", title: "Ủng hộ" },
  { id: "khong-ung-ho", title: "Không ủng hộ" },
];

const handleLogout = () => {
  clearToken(); // Xóa token từ localStorage bằng hàm clearToken từ auth.js
  window.location.reload(); // Tải lại trang sau khi đăng xuất
};
export default function Profile2() {
  const { section } = useParams();

  return (
    <div
      id="main-content"
      className="md:ml-56 flex w-full flex-col flex-1 p-2 space-y-3 rounded-lg p-0.5 bg-white md:bg-white md:p-3 mb-20"
    >
      <div className="flex flex-col mx-0 space-y-2 md:space-y-3 flex-1 mt-2 md:mt-0 md:mx-2">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/3 mx-0 md:mx-1 p-2 md:p-2">
            <div className="flex flex-row items-center space-x-4 mb-6">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/weloveschool-212d8.appspot.com/o/asd1.png?alt=media&token=5229bcab-5620-4393-aabb-b52eb3ba7369"
                alt=""
                className="w-14 h-14 rounded-full "
              />
              <div className="flex flex-col items-start">
                <h3 className="text-lg font-semibold text-center text-[#7AC0F8]">
                  Hà Phạm
                </h3>
                <button
                  className="text-[#7AC0F8] text-xs"
                  onClick={handleLogout}
                >
                  Đăng xuất
                </button>
              </div>
            </div>

            <Navbar currentSection={section} />
            {sections.map((sec) => (
              <Section
                key={sec.id}
                id={sec.id}
                // title={sec.title}
                isVisible={section === sec.id || !section}
              >
                {getContent(sec.id)}
              </Section>
            ))}
          </div>
          {/* <div className="w-full md:w-1/3 p-2 md:p-2">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/weloveschool-212d8.appspot.com/o/image%2021.png?alt=media&token=8c8eb1c4-b971-4ae9-b45f-5595612de613"
              alt=""
              className="w-full h-auto rounded-lg"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}

const Navbar = ({ currentSection }) => {
  return (
    <nav className="grid grid-cols-4 md:grid-cols-6 md:gap-2 mb-6">
      {sections.map((sec) => (
        <Link
          key={sec.id}
          to={`/u/profile/${sec.id}`}
          className={
            sec.id === currentSection
              ? " text-[0.875rem] text-white hover:text-white bg-[#7AC0F8] py-1 min-w-[5rem] text-center rounded-2xl mb-2 md:mb-0 mr-2 md:mr-0"
              : "text-[0.875rem] text-black hover:text-blue-700 bg-[#F8F8F8] py-1 min-w-[5rem] text-center rounded-2xl mb-2 md:mb-0 mr-2 md:mr-0"
          }
        >
          {sec.title}
        </Link>
      ))}
    </nav>
  );
};

const Section = ({ id, title, isVisible, children }) => {
  if (!isVisible) return null;
  return (
    <div id={id} className="mb-6">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      {children}
    </div>
  );
};

const getContent = (id) => {
  switch (id) {
    case "thong-tin":
      return (
        <>
          <div className="mb-4 border p-4 rounded-lg ">
            <div
              className="text-white  border-b-[1px] border-[#A7A7A7] pb-2 mb-2"
              style={{
                color: "#A7A7A7",
                fontSize: "0.725rem",
              }}
            >
              Thông tin cá nhân
            </div>
            <form>
              <div className="flex flex-row items-center space-x-4 mb-6">
                <label className="text-sm font-semibold min-w-[5rem]">
                  Username:
                </label>
                <input
                  type="text"
                  className="w-full p-2  rounded-full bg-[#F8F8F8] font-semibold text-[#535353]"
                  value={mockData.thongTin.name}
                />
              </div>
              <div className="flex flex-row items-center space-x-4 mb-6">
                <label className="text-sm font-semibold min-w-[5rem]">
                  Email:
                </label>
                <input
                  type="text"
                  className="w-full p-2 rounded-full bg-[#F8F8F8]  font-semibold text-[#535353]"
                  value={mockData.thongTin.email}
                />
              </div>
              <div className="flex flex-row items-center space-x-4 mb-6">
                <label className="text-sm font-semibold min-w-[5rem]">
                  Ngày sinh:
                </label>
                <input
                  type="date"
                  className="w-full p-2 rounded-full bg-[#F8F8F8]  font-semibold text-[#535353]"
                />
              </div>
              <div className="flex flex-row items-center space-x-4 mb-6">
                <label className="text-sm font-semibold min-w-[5rem]">
                  Địa chỉ:
                </label>
                <div className="w-full p-2 rounded-lg bg-[#F8F8F8]">
                  <div className="md:grid md:grid-cols-4 gap-2 px-3 py-2">
                    <div className="col-span-2  md:col-span-0">
                      <label className="text-sm font-semibold">Tỉnh</label>
                      <input
                        type="text"
                        className="w-full p-2 bg-white rounded-full  font-semibold text-[#535353]"
                        placeholder="Tỉnh/Thành phố"
                        value="TP. Hồ Chí Minh"
                      />
                    </div>
                    <div className="col-span-2 md:col-span-0">
                      <label className="text-sm font-semibold">
                        Quận, huyện
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 rounded-full bg-white  font-semibold text-[#535353]"
                        placeholder="Quận/Huyện"
                        value="Bình Thạnh"
                      />
                    </div>
                    <div className="col-span-2 md:col-span-0">
                      <label className="text-sm font-semibold">
                        Phường, xã
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 rounded-full bg-white  font-semibold text-[#535353]"
                        placeholder="Địa chỉ cụ thể"
                        value="Phường 4"
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="text-sm font-semibold">
                        Số nhà, đường
                      </label>
                      <input
                        type="text"
                        className="w-full p-2  bg-white rounded-full font-semibold text-[#535353]"
                        placeholder="Địa chỉ cụ thể"
                        value=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-4 flex justify-end">
                <button className="bg-[#7AC0F8] text-white px-5 py-1 rounded-3xl">
                  Lưu
                </button>
              </div>
            </form>

            <div
              className="text-white  border-b-[1px] border-[#A7A7A7] pb-2 mb-2"
              style={{
                color: "#A7A7A7",
                fontSize: "0.725rem",
              }}
            >
              Thông tin mật khẩu
            </div>
            <form>
              <div className="flex flex-col items-start  space-x-4 mb-6 md:flex-row md:space-y-2 md:items-center">
                <label className="text-sm font-semibold min-w-[9rem]">
                  Mật khẩu cũ:
                </label>
                <input
                  type="password"
                  className="w-full p-2 rounded-full bg-[#F8F8F8]"
                  value={mockData.thongTin.phone}
                />
              </div>
              <div className="flex flex-col items-start  space-x-4 mb-6 md:flex-row md:space-y-2 md:items-center">
                <label className="text-sm font-semibold min-w-[9rem]">
                  Mật khẩu mới
                </label>
                <input
                  type="password"
                  className="w-full p-2 rounded-full bg-[#F8F8F8]"
                  value={mockData.thongTin.phone}
                />
              </div>
              <div className="flex flex-col items-start  space-x-4 mb-6 md:flex-row md:space-y-2 md:items-center">
                <label className="text-sm font-semibold min-w-[9rem]">
                  Xác nhận lại mật khẩu:
                </label>
                <input
                  type="password"
                  className="w-full p-2 rounded-full bg-[#F8F8F8]"
                  value={mockData.thongTin.phone}
                />
              </div>
              <div className="col-span-4 flex justify-end">
                <button className="bg-[#7AC0F8] text-white px-5 py-1 rounded-3xl">
                  Lưu
                </button>
              </div>
            </form>
          </div>
        </>
      );
    case "bai-dang":
      return mockData.baiDang.map((post) => (
        <div
          key={post.id}
          className="flex flex-col bg-white p-4 space-y-2 border-[1px] border-[#A7A7A7] pb-2 mb-2 rounded-lg"
        >
          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <img src={post.avatar} alt="" className="w-8 h-8 rounded-full" />

              <div>
                <div>
                  {" "}
                  <p className="font-semibold text-[#7AC0F8]">
                    {post.name}{" "}
                    <span className="text-xs text-gray-400">{post.time}</span>
                  </p>
                  <span className="text-xs text-gray-400">TP. Hồ Chí Minh</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button>
                <svg
                  width="18"
                  height="4"
                  viewBox="0 0 18 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="2" cy="2" r="2" fill="#D9D9D9" />
                  <circle cx="9" cy="2" r="2" fill="#D9D9D9" />
                  <circle cx="16" cy="2" r="2" fill="#D9D9D9" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <h1 className="text-xl font-semibold">{post.title}</h1>
            <img
              src={post.banner}
              alt=""
              className="w-full h-72
                  object-cover rounded-lg"
            />
            <p className="text-gray-600">{post.content}</p>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center space-x-4">
              <Counter />
              <Comments comment={11} />
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-[#A7A7A7]">
                Xóa bình luận
                <span className="ml-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.5 4.478V4.705C17.799 4.82379 19.0927 4.99459 20.378 5.217C20.4751 5.23381 20.5678 5.26957 20.6511 5.32224C20.7343 5.3749 20.8063 5.44345 20.8631 5.52396C20.9198 5.60447 20.9601 5.69536 20.9817 5.79145C21.0033 5.88755 21.0058 5.98695 20.989 6.084C20.9722 6.18105 20.9364 6.27383 20.8838 6.35706C20.8311 6.44029 20.7626 6.51232 20.682 6.56906C20.6015 6.6258 20.5106 6.66612 20.4146 6.68773C20.3185 6.70934 20.2191 6.71181 20.122 6.695L19.913 6.66L18.908 19.73C18.8501 20.4836 18.5098 21.1875 17.9553 21.7011C17.4008 22.2146 16.6728 22.5 15.917 22.5H8.08401C7.3282 22.5 6.60026 22.2146 6.04573 21.7011C5.4912 21.1875 5.15095 20.4836 5.09301 19.73L4.08701 6.66L3.87801 6.695C3.78096 6.71181 3.68155 6.70934 3.58546 6.68773C3.48937 6.66612 3.39847 6.6258 3.31796 6.56906C3.15537 6.45448 3.04495 6.27999 3.01101 6.084C2.97706 5.888 3.02236 5.68655 3.13694 5.52396C3.25153 5.36136 3.42601 5.25095 3.62201 5.217C4.90727 4.99432 6.20099 4.82352 7.50001 4.705V4.478C7.50001 2.914 8.71301 1.578 10.316 1.527C11.4387 1.49107 12.5623 1.49107 13.685 1.527C15.288 1.578 16.5 2.914 16.5 4.478ZM10.364 3.026C11.4547 2.99112 12.5463 2.99112 13.637 3.026C14.39 3.05 15 3.684 15 4.478V4.591C13.0018 4.46965 10.9982 4.46965 9.00001 4.591V4.478C9.00001 3.684 9.60901 3.05 10.364 3.026ZM10.009 8.971C10.0052 8.87251 9.98203 8.77573 9.94082 8.68619C9.89961 8.59666 9.84117 8.51611 9.76883 8.44916C9.69649 8.38221 9.61168 8.33016 9.51923 8.29599C9.42678 8.26182 9.3285 8.24619 9.23001 8.25C9.13152 8.25381 9.03474 8.27698 8.9452 8.31819C8.85567 8.3594 8.77512 8.41784 8.70817 8.49018C8.64122 8.56251 8.58917 8.64733 8.555 8.73978C8.52083 8.83223 8.5052 8.93051 8.50901 9.029L8.85601 18.029C8.8637 18.2278 8.95004 18.4154 9.09604 18.5505C9.16833 18.6174 9.25309 18.6694 9.34548 18.7035C9.43787 18.7377 9.53608 18.7533 9.63451 18.7495C9.73293 18.7457 9.82964 18.7225 9.91912 18.6814C10.0086 18.6402 10.0891 18.5818 10.156 18.5095C10.2229 18.4372 10.2749 18.3524 10.3091 18.26C10.3432 18.1676 10.3588 18.0694 10.355 17.971L10.009 8.971ZM15.489 9.029C15.4963 8.92862 15.4834 8.82778 15.4509 8.73251C15.4185 8.63724 15.3672 8.54947 15.3001 8.47444C15.233 8.39941 15.1515 8.33865 15.0604 8.29579C14.9694 8.25292 14.8706 8.22882 14.77 8.22493C14.6694 8.22103 14.5691 8.23742 14.475 8.27312C14.3809 8.30882 14.2949 8.36309 14.2222 8.43271C14.1496 8.50233 14.0916 8.58586 14.0519 8.67834C14.0122 8.77082 13.9915 8.87035 13.991 8.971L13.644 17.971C13.6363 18.1699 13.708 18.3637 13.8432 18.5098C13.9784 18.6559 14.1661 18.7423 14.365 18.75C14.5639 18.7577 14.7577 18.6861 14.9038 18.5508C15.0499 18.4156 15.1363 18.2279 15.144 18.029L15.489 9.029Z"
                      fill="#A8A8A8"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      ));
    case "chu-de":
      return mockData.chuDe.map((comment) => (
        <>
          <div className="flex flex-col">
            <div
              key={comment.id}
              className=" mb-2 border p-2 rounded-lg md:px-8 md:py-4"
            >
              <div className="flex flex-row justify-between">
                <span className="text-[#A7A7A7] cursor-pointer text-xs md:text-sm ">
                  TP. Hồ Chí Minh / Mang thai
                </span>
                <div className="flex items-center space-x-4  md:flex">
                  <div className="flex items-center space-x-2 text-[#A7A7A7] text-xs md:text-sm ">
                    Tham gia: <span>56</span>
                  </div>
                  <div className="flex items-center space-x-2 text-[#A7A7A7] text-xs md:text-sm">
                    Số bài đăng: <span> 10</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <div className="flex items-center space-x-2 text-xl font-semibold">
                  3 tháng đầu thai kì
                </div>
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-2 text-[#000000] border border-[#A7A7A7] px-4 py-1 rounded-2xl">
                    <span className=" text-xs md:text-sm ">Xóa chủ đề</span>
                    <span className="ml-2">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16.5 4.478V4.705C17.799 4.82379 19.0927 4.99459 20.378 5.217C20.4751 5.23381 20.5678 5.26957 20.6511 5.32224C20.7343 5.3749 20.8063 5.44345 20.8631 5.52396C20.9198 5.60447 20.9601 5.69536 20.9817 5.79145C21.0033 5.88755 21.0058 5.98695 20.989 6.084C20.9722 6.18105 20.9364 6.27383 20.8838 6.35706C20.8311 6.44029 20.7626 6.51232 20.682 6.56906C20.6015 6.6258 20.5106 6.66612 20.4146 6.68773C20.3185 6.70934 20.2191 6.71181 20.122 6.695L19.913 6.66L18.908 19.73C18.8501 20.4836 18.5098 21.1875 17.9553 21.7011C17.4008 22.2146 16.6728 22.5 15.917 22.5H8.08401C7.3282 22.5 6.60026 22.2146 6.04573 21.7011C5.4912 21.1875 5.15095 20.4836 5.09301 19.73L4.08701 6.66L3.87801 6.695C3.78096 6.71181 3.68155 6.70934 3.58546 6.68773C3.48937 6.66612 3.39847 6.6258 3.31796 6.56906C3.15537 6.45448 3.04495 6.27999 3.01101 6.084C2.97706 5.888 3.02236 5.68655 3.13694 5.52396C3.25153 5.36136 3.42601 5.25095 3.62201 5.217C4.90727 4.99432 6.20099 4.82352 7.50001 4.705V4.478C7.50001 2.914 8.71301 1.578 10.316 1.527C11.4387 1.49107 12.5623 1.49107 13.685 1.527C15.288 1.578 16.5 2.914 16.5 4.478ZM10.364 3.026C11.4547 2.99112 12.5463 2.99112 13.637 3.026C14.39 3.05 15 3.684 15 4.478V4.591C13.0018 4.46965 10.9982 4.46965 9.00001 4.591V4.478C9.00001 3.684 9.60901 3.05 10.364 3.026ZM10.009 8.971C10.0052 8.87251 9.98203 8.77573 9.94082 8.68619C9.89961 8.59666 9.84117 8.51611 9.76883 8.44916C9.69649 8.38221 9.61168 8.33016 9.51923 8.29599C9.42678 8.26182 9.3285 8.24619 9.23001 8.25C9.13152 8.25381 9.03474 8.27698 8.9452 8.31819C8.85567 8.3594 8.77512 8.41784 8.70817 8.49018C8.64122 8.56251 8.58917 8.64733 8.555 8.73978C8.52083 8.83223 8.5052 8.93051 8.50901 9.029L8.85601 18.029C8.8637 18.2278 8.95004 18.4154 9.09604 18.5505C9.16833 18.6174 9.25309 18.6694 9.34548 18.7035C9.43787 18.7377 9.53608 18.7533 9.63451 18.7495C9.73293 18.7457 9.82964 18.7225 9.91912 18.6814C10.0086 18.6402 10.0891 18.5818 10.156 18.5095C10.2229 18.4372 10.2749 18.3524 10.3091 18.26C10.3432 18.1676 10.3588 18.0694 10.355 17.971L10.009 8.971ZM15.489 9.029C15.4963 8.92862 15.4834 8.82778 15.4509 8.73251C15.4185 8.63724 15.3672 8.54947 15.3001 8.47444C15.233 8.39941 15.1515 8.33865 15.0604 8.29579C14.9694 8.25292 14.8706 8.22882 14.77 8.22493C14.6694 8.22103 14.5691 8.23742 14.475 8.27312C14.3809 8.30882 14.2949 8.36309 14.2222 8.43271C14.1496 8.50233 14.0916 8.58586 14.0519 8.67834C14.0122 8.77082 13.9915 8.87035 13.991 8.971L13.644 17.971C13.6363 18.1699 13.708 18.3637 13.8432 18.5098C13.9784 18.6559 14.1661 18.7423 14.365 18.75C14.5639 18.7577 14.7577 18.6861 14.9038 18.5508C15.0499 18.4156 15.1363 18.2279 15.144 18.029L15.489 9.029Z"
                          fill="#000000"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ));
    case "luu-tru":
      return mockData.luuTru.map((archive) => (
        <>
          <div className="flex flex-col">
            <div
              key={archive.id}
              className="flex flex-col bg-white p-4 space-y-2 border-[1px] border-[#A7A7A7] pb-2 mb-2 rounded-lg"
            >
              <div className="flex justify-between">
                <div className="flex items-center space-x-2">
                  <img
                    src={archive.avatar}
                    alt=""
                    className="w-8 h-8 rounded-full"
                  />

                  <div>
                    <div>
                      {" "}
                      <p className="font-semibold text-[#7AC0F8]">
                        {archive.name}{" "}
                        <span className="text-xs text-gray-400">
                          {archive.time}
                        </span>
                      </p>
                      <span className="text-xs text-gray-400">
                        TP. Hồ Chí Minh
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button>
                    <svg
                      width="18"
                      height="4"
                      viewBox="0 0 18 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2" cy="2" r="2" fill="#D9D9D9" />
                      <circle cx="9" cy="2" r="2" fill="#D9D9D9" />
                      <circle cx="16" cy="2" r="2" fill="#D9D9D9" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <h1 className="text-xl font-semibold">{archive.title}</h1>
                <img
                  src={archive.banner}
                  alt=""
                  className="w-full h-72
                  object-cover rounded-lg"
                />
                <p className="text-gray-600">{archive.content}</p>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center space-x-4">
                  <Counter />
                  <Comments comment={11} />
                </div>
                <div className="flex items-center space-x-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.32 2.57701C10.094 2.13888 13.906 2.13888 17.68 2.57701C19.177 2.75101 20.25 4.03701 20.25 5.50701V21C20.2498 21.1277 20.217 21.2533 20.1547 21.3648C20.0925 21.4763 20.0027 21.57 19.8941 21.6371C19.7854 21.7042 19.6614 21.7425 19.5338 21.7482C19.4062 21.754 19.2793 21.7271 19.165 21.67L12 18.089L4.835 21.672C4.72058 21.7291 4.59345 21.7561 4.4657 21.7502C4.33795 21.7444 4.21381 21.7059 4.10509 21.6386C3.99637 21.5713 3.90667 21.4772 3.84452 21.3655C3.78237 21.2537 3.74983 21.1279 3.75 21V5.50701C3.75 4.03701 4.823 2.75101 6.32 2.57701Z"
                      fill="#A8A8A8"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </>
      ));
    case "ung-ho":
      return mockData.ungHo.map((support) => (
        <>
          <div className="flex flex-col">
            <div
              key={support.id}
              className="flex flex-col bg-white p-4 space-y-2 border-[1px] border-[#A7A7A7] pb-2 mb-2 rounded-lg"
            >
              <div className="flex justify-between">
                <div className="flex items-center space-x-2">
                  <img
                    src={support.avatar}
                    alt=""
                    className="w-8 h-8 rounded-full"
                  />

                  <div>
                    <div>
                      {" "}
                      <p className="font-semibold text-[#7AC0F8]">
                        {support.name}{" "}
                        <span className="text-xs text-gray-400">
                          {support.time}
                        </span>
                      </p>
                      <span className="text-xs text-gray-400">
                        TP. Hồ Chí Minh
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button>
                    <svg
                      width="18"
                      height="4"
                      viewBox="0 0 18 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2" cy="2" r="2" fill="#D9D9D9" />
                      <circle cx="9" cy="2" r="2" fill="#D9D9D9" />
                      <circle cx="16" cy="2" r="2" fill="#D9D9D9" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <h1 className="text-xl font-semibold">{support.title}</h1>
                <img
                  src={support.banner}
                  alt=""
                  className="w-full h-72
                  object-cover rounded-lg"
                />
                <p className="text-gray-600">{support.content}</p>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center space-x-4">
                  <Counter />
                  <Comments comment={11} />
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-[#A8A8A8] cursor-pointer">Bỏ lưu</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.32 2.57701C10.094 2.13888 13.906 2.13888 17.68 2.57701C19.177 2.75101 20.25 4.03701 20.25 5.50701V21C20.2498 21.1277 20.217 21.2533 20.1547 21.3648C20.0925 21.4763 20.0027 21.57 19.8941 21.6371C19.7854 21.7042 19.6614 21.7425 19.5338 21.7482C19.4062 21.754 19.2793 21.7271 19.165 21.67L12 18.089L4.835 21.672C4.72058 21.7291 4.59345 21.7561 4.4657 21.7502C4.33795 21.7444 4.21381 21.7059 4.10509 21.6386C3.99637 21.5713 3.90667 21.4772 3.84452 21.3655C3.78237 21.2537 3.74983 21.1279 3.75 21V5.50701C3.75 4.03701 4.823 2.75101 6.32 2.57701Z"
                      fill="#A8A8A8"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </>
      ));
    case "khong-ung-ho":
      return mockData.khongUngHo.map((oppose) => (
        <>
          <div className="flex flex-col">
            <div
              key={oppose.id}
              className="flex flex-col bg-white p-4 space-y-2 border-[1px] border-[#A7A7A7] pb-2 mb-2 rounded-lg"
            >
              <div className="flex justify-between">
                <div className="flex items-center space-x-2">
                  <img
                    src={oppose.avatar}
                    alt=""
                    className="w-8 h-8 rounded-full"
                  />

                  <div>
                    <div>
                      {" "}
                      <p className="font-semibold text-[#7AC0F8]">
                        {oppose.name}{" "}
                        <span className="text-xs text-gray-400">
                          {oppose.time}
                        </span>
                      </p>
                      <span className="text-xs text-gray-400">
                        TP. Hồ Chí Minh
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button>
                    <svg
                      width="18"
                      height="4"
                      viewBox="0 0 18 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2" cy="2" r="2" fill="#D9D9D9" />
                      <circle cx="9" cy="2" r="2" fill="#D9D9D9" />
                      <circle cx="16" cy="2" r="2" fill="#D9D9D9" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <h1 className="text-xl font-semibold">{oppose.title}</h1>
                <img
                  src={oppose.banner}
                  alt=""
                  className="w-full h-72
                  object-cover rounded-lg"
                />
                <p className="text-gray-600">{oppose.content}</p>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center space-x-4">
                  <Counter />
                  <Comments comment={11} />
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-[#A8A8A8] cursor-pointer">Bỏ lưu</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.32 2.57701C10.094 2.13888 13.906 2.13888 17.68 2.57701C19.177 2.75101 20.25 4.03701 20.25 5.50701V21C20.2498 21.1277 20.217 21.2533 20.1547 21.3648C20.0925 21.4763 20.0027 21.57 19.8941 21.6371C19.7854 21.7042 19.6614 21.7425 19.5338 21.7482C19.4062 21.754 19.2793 21.7271 19.165 21.67L12 18.089L4.835 21.672C4.72058 21.7291 4.59345 21.7561 4.4657 21.7502C4.33795 21.7444 4.21381 21.7059 4.10509 21.6386C3.99637 21.5713 3.90667 21.4772 3.84452 21.3655C3.78237 21.2537 3.74983 21.1279 3.75 21V5.50701C3.75 4.03701 4.823 2.75101 6.32 2.57701Z"
                      fill="#A8A8A8"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </>
      ));
    default:
      return null;
  }
};

function Counter() {
  const [number, setNumber] = useState(0);

  const increaseNumber = () => setNumber((prevNumber) => prevNumber + 1);
  const decreaseNumber = () => setNumber((prevNumber) => prevNumber - 1);

  const activeLike = number == 0 ? "#7AC0F8" : "#A8A8A8";
  const activeDislike = number == 0 ? "#F8ADD2" : "#A8A8A8";
  return (
    <div className="flex justify-between bg-[#F5F5F5] rounded-2xl px-2">
      <button
        className="flex  items-center bg-[#CCEDFF]
         rounded-2xl px-2  active:bg-[#CCEDFF] active:text-white"
        onClick={increaseNumber}
      >
        <svg
          width="12"
          height="13"
          viewBox="0 0 12 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.63757 13C3.46799 12.9212 3.42476 12.7824 3.42476 12.6152C3.42809 10.458 3.42809 8.29767 3.42809 6.14047C3.42809 6.08685 3.42809 6.03324 3.42809 5.96385C3.36492 5.96385 3.31171 5.96385 3.25852 5.96385C2.30091 5.96385 1.3433 5.96385 0.389022 5.96385C0.325846 5.96385 0.262671 5.9607 0.20282 5.94493C0.0199439 5.89762 -0.0598558 5.70209 0.0432193 5.54755C0.0731446 5.5034 0.11637 5.4624 0.156271 5.42455C2.00498 3.66788 3.85369 1.91121 5.70573 0.154537C5.92186 -0.0504604 6.05486 -0.0504613 6.27098 0.151382C8.12967 1.90805 9.98503 3.66473 11.8404 5.4214C11.8803 5.45924 11.9235 5.50024 11.9534 5.5444C12.0565 5.69578 11.98 5.89132 11.7972 5.94178C11.7373 5.95755 11.6741 5.9607 11.611 5.9607C10.66 5.9607 9.70573 5.9607 8.75477 5.9607C8.70157 5.9607 8.64837 5.9607 8.58187 5.9607C8.58187 6.02693 8.58187 6.08054 8.58187 6.13416C8.58187 8.30082 8.58187 10.4675 8.5852 12.6342C8.5852 12.8045 8.53532 12.9306 8.36575 13C6.78636 13 5.21363 13 3.63757 13Z"
            fill={activeLike}
          />
        </svg>
      </button>
      <span className="flex justify-center items-center mx-2">{number}</span>
      <button
        className="flex justify-center items-center  bg-[#FFDAEC] rounded-2xl px-2"
        onClick={decreaseNumber}
      >
        <svg
          width="12"
          height="13"
          viewBox="0 0 12 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_33_553)">
            <path
              d="M8.36243 0C8.532 0.0788452 8.57523 0.217613 8.57523 0.384765C8.5719 2.54197 8.5719 4.70233 8.5719 6.85953C8.5719 6.91315 8.5719 6.96676 8.5719 7.03615C8.63508 7.03615 8.68828 7.03615 8.74148 7.03615C9.69908 7.03615 10.6567 7.03615 11.611 7.03615C11.6741 7.03615 11.7373 7.0393 11.7972 7.05507C11.98 7.10238 12.0598 7.29791 11.9568 7.45245C11.9268 7.4966 11.8836 7.5376 11.8437 7.57545C9.99501 9.33212 8.1463 11.0888 6.29426 12.8455C6.07814 13.0505 5.94514 13.0505 5.72901 12.8486C3.87032 11.0919 2.01496 9.33527 0.1596 7.5786C0.1197 7.54076 0.0764743 7.49976 0.0465491 7.4556C-0.0565266 7.30422 0.0199489 7.10868 0.202825 7.05822C0.262675 7.04245 0.325851 7.0393 0.389026 7.0393C1.33998 7.0393 2.29426 7.0393 3.24522 7.0393C3.29842 7.0393 3.35162 7.0393 3.41812 7.0393C3.41812 6.97307 3.41812 6.91946 3.41812 6.86584C3.41812 4.69918 3.41812 2.53251 3.4148 0.365842C3.4148 0.195536 3.46467 0.0693838 3.63425 0C5.21363 0 6.78637 0 8.36243 0Z"
              fill={activeDislike}
            />
          </g>
          <defs>
            <clipPath id="clip0_33_553">
              <rect width="12" height="13" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
  );
}

function Comments({ comment }) {
  const commentsNumber = comment;

  return (
    <div className="flex justify-between items-center rounded-2xl bg-[#F5F5F5] px-2">
      <span className="mr-2">
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_33_442)">
            <path
              d="M15 7.49557C14.9823 11.1413 12.341 14.2815 8.76325 14.8936C7.0053 15.1863 5.35336 14.8936 3.79859 14.0243C3.71025 13.9799 3.63958 13.971 3.55124 14.0065C2.70318 14.317 1.84629 14.6274 0.998234 14.9379C0.706714 15.0444 0.441697 15.0266 0.220849 14.8049C-0.00883321 14.5742 -0.0265011 14.3081 0.0883399 14.0065C0.397527 13.1549 0.706714 12.3122 1.0159 11.4607C1.05124 11.3631 1.0424 11.2833 0.998234 11.1946C-1.43109 6.93673 0.812721 1.55234 5.53004 0.266121C9.75265 -0.887043 14.1078 1.88055 14.8498 6.20048C14.9205 6.62626 14.947 7.06092 15 7.49557Z"
              fill="#A8A8A8"
            />
          </g>
          <defs>
            <clipPath id="clip0_33_442">
              <rect width="15" height="15" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </span>
      <p>{commentsNumber} </p>
    </div>
  );
}
