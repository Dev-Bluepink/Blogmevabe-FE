import React from "react";
import { Link, useParams } from "react-router-dom";

const mockData = {
  thongTin: {
    name: "Nguyễn Văn A",
    email: "nguyenvana@example.com",
    phone: "0123456789",
  },
  baiDang: [
    { id: 1, title: "Bài đăng 1", content: "Nội dung bài đăng 1" },
    { id: 2, title: "Bài đăng 2", content: "Nội dung bài đăng 2" },
  ],
  binhLuan: [
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
  ],
  luuTru: [
    { id: 1, title: "Lưu trữ 1" },
    { id: 2, title: "Lưu trữ 2" },
  ],
  ungHo: [
    { id: 1, title: "Ủng hộ 1" },
    { id: 2, title: "Ủng hộ 2" },
  ],
  khongUngHo: [
    { id: 1, title: "Không ủng hộ 1" },
    { id: 2, title: "Không ủng hộ 2" },
  ],
};

const sections = [
  { id: "thong-tin", title: "Thông tin" },
  { id: "bai-dang", title: "Bài đăng" },
  { id: "binh-luan", title: "Bình luận" },
  { id: "luu-tru", title: "Lưu trữ" },
  { id: "ung-ho", title: "Ủng hộ" },
  { id: "khong-ung-ho", title: "Không ủng hộ" },
];

export default function Profile2() {
  const { section } = useParams();

  return (
    <div
      id="main-content"
      className="md:ml-56 flex w-full flex-col flex-1 p-2 space-y-3 rounded-lg p-0.5 bg-theme-cultured md:bg-white md:p-3"
    >
      <div className="flex flex-col mx-0 space-y-2 md:space-y-3 flex-1 mt-2 md:mt-0 md:mx-48">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/3 p-2 md:p-2">
            <div
              className="text-white mt-4 border-b-[1px] border-[#A7A7A7] pb-2 mb-2"
              style={{
                color: "#A7A7A7",
                fontSize: "0.725rem",
              }}
            >
              {" "}
              Trang cá nhân
            </div>
            <div className="flex flex-row items-center space-x-4 mb-6">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/weloveschool-212d8.appspot.com/o/asd1.png?alt=media&token=5229bcab-5620-4393-aabb-b52eb3ba7369"
                alt=""
                className="w-14 h-14 rounded-full "
              />
              <h3 className="text-lg font-semibold text-center text-[#7AC0F8]">
                Hà Phạm
              </h3>
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
          <div className="w-full md:w-1/3 p-2 md:p-2">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/weloveschool-212d8.appspot.com/o/image%2021.png?alt=media&token=8c8eb1c4-b971-4ae9-b45f-5595612de613"
              alt=""
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const Navbar = ({ currentSection }) => {
  return (
    <nav className="grid grid-cols-1 md:grid-cols-6 md:gap-2 mb-6">
      {sections.map((sec) => (
        <Link
          key={sec.id}
          to={`/u/profile/${sec.id}`}
          className={
            sec.id === currentSection
              ? "text-white hover:text-white bg-[#7AC0F8] py-2 min-w-[8rem] text-center rounded-2xl mb-2 md:mb-0"
              : "text-black hover:text-blue-700 bg-[#F8F8F8] py-2 min-w-[8rem] text-center rounded-2xl mb-2 md:mb-0"
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
            <div className="flex flex-row items-center space-x-4 mb-6">
              <label className="text-sm font-semibold min-w-[5rem]">
                Username:
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg bg-[#F8F8F8]"
                value={mockData.thongTin.name}
              />
            </div>
            <div className="flex flex-row items-center space-x-4 mb-6">
              <label className="text-sm font-semibold min-w-[5rem]">
                Email:
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg bg-[#F8F8F8]"
                value={mockData.thongTin.email}
              />
            </div>
            <div className="flex flex-row items-center space-x-4 mb-6">
              <label className="text-sm font-semibold min-w-[5rem]">
                Ngày sinh:
              </label>
              <input
                type="date"
                className="w-full p-2 border rounded-lg bg-[#F8F8F8]"
              />
            </div>
            <div className="flex flex-row items-center space-x-4 mb-6">
              <label className="text-sm font-semibold min-w-[5rem]">
                Địa chỉ:
              </label>
              <div className="w-full p-2 border rounded-lg bg-[#F8F8F8]">
                {/* grid 4 */}
                <form className="grid grid-cols-4 gap-2 px-3 py-2">
                  <div className="col-span-2">
                    <label className="text-sm font-semibold">Tỉnh</label>
                    <input
                      type="text"
                      className="w-full p-2 border  bg-white rounded-2xl"
                      placeholder="Tỉnh/Thành phố"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="text-sm font-semibold">Quận, huyện</label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded-2xl bg-white"
                      placeholder="Quận/Huyện"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="text-sm font-semibold">Phường, xã</label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded-2xl bg-white"
                      placeholder="Địa chỉ cụ thể"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="text-sm font-semibold">
                      Số nhà, đường
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded-2xl bg-white"
                      placeholder="Địa chỉ cụ thể"
                    />
                  </div>

                  <div className="col-span-4 flex justify-end">
                    <button className="bg-[#7AC0F8] text-white px-5 py-1 rounded-3xl">
                      Lưu
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      );
    case "bai-dang":
      return mockData.baiDang.map((post) => (
        <div key={post.id} className="mb-4">
          <h3 className="text-lg font-semibold">{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ));
    case "binh-luan":
      return mockData.binhLuan.map((comment) => (
        <>
          <div className="flex flex-col">
            <div key={comment.id} className=" mb-2 border p-2 rounded-lg px-8">
              <div className="flex flex-row justify-between">
                <div className="flex flex-row items-center space-x-4 mb-2">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/weloveschool-212d8.appspot.com/o/asd1.png?alt=media&token=5229bcab-5620-4393-aabb-b52eb3ba7369"
                    alt=""
                    className="w-10 h-10 rounded-full "
                  />
                  <div className="flex flex-col">
                    <div className="flex flex-row justify-center  space-x-4">
                      <h3 className="text-lg font-semibold text-center text-[#7AC0F8]">
                        Hà Phạm
                      </h3>
                      <span>7 giờ trước</span>
                    </div>
                    <div className="flex flex-row items-center space-x-4 ">
                      <span>Đồng Nai</span>
                    </div>
                  </div>
                </div>
                <div>Mang thai / 3 tháng đầu thai kì</div>
              </div>
              <div className="flex flex-row items-center space-x-4 mb-2">
                {comment.content}
              </div>
              <div className="flex justify-between">
                <div>
                  <button className="text-[#7AC0F8]">Thích</button>
                  <button className="text-[#7AC0F8]">Trả lời</button>
                </div>
                <div>
                  <button className="text-[#7AC0F8]">Xóa</button>
                </div>
              </div>
            </div>
          </div>
        </>
      ));
    case "luu-tru":
      return mockData.luuTru.map((archive) => (
        <div key={archive.id} className="mb-2">
          <p>{archive.title}</p>
        </div>
      ));
    case "ung-ho":
      return mockData.ungHo.map((support) => (
        <div key={support.id} className="mb-2">
          <p>{support.title}</p>
        </div>
      ));
    case "khong-ung-ho":
      return mockData.khongUngHo.map((oppose) => (
        <div key={oppose.id} className="mb-2">
          <p>{oppose.title}</p>
        </div>
      ));
    default:
      return null;
  }
};
