import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";
import Loader from "./Loader";
import * as PropType from "prop-types";


InfinitePostsLayout.propTypes = {
  linkUrl: PropTypes.string,
  apiQueryKey: PropTypes.string,
  forSaved: PropTypes.bool,
  enabled: PropTypes.bool,
};

export default function InfinitePostsLayout({
  linkUrl,
  apiQueryKey,
  forSaved = false,
  enabled = true,
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "top";
  const duration = searchParams.get("duration") || "alltime";

  const { data, isFetching, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ["posts", apiQueryKey, sortBy, duration],
    queryFn: async ({ pageParam = 0 }) => {
      return await axios
        .get(
          `/api/${linkUrl}?limit=${20}&offset=${
            pageParam * 20
          }&sortby=${sortBy}&duration=${duration}`
        )
        .then((data) => data.data);
    },
    enabled: enabled,
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.length < 20) return undefined;
      return pages.length;
    },
  });

  useEffect(() => {
    const onScroll = (event) => {
      const { scrollTop, scrollHeight, clientHeight } =
        event.target.scrollingElement;
      if (
        scrollHeight - scrollTop <= clientHeight * 2 &&
        hasNextPage &&
        !isFetching
      ) {
        fetchNextPage();
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [fetchNextPage, isFetching, hasNextPage]);

  const news = [
    {
      title: "Bài viết 1",
      content: "Nội dung bài viết 1",
      banner: "https://picsum.photos/200/300",
      name: "Hồ Lê",
      avatar: "https://picsum.photos/200/300",
    },
    {
      title: "Bài viết 2",
      content: "Nội dung bài viết 2",
      banner: "https://picsum.photos/200/301",
      name: "Nguyễn Văn A",
      avatar: "https://picsum.photos/200/301",
    },
    {
      title: "Bài viết 3",
      content: "Nội dung bài viết 3",
      banner: "https://picsum.photos/200/302",
      name: "Trần Thị B",
      avatar: "https://picsum.photos/200/302",
    },
    // Thêm nhiều bài viết hơn nếu cần
  ];

  const [categories, setCategories] = useState([
    {
      categoryid: 1,
      category: "Cộng đồng mẹ & bé",
      subcategories: [
        "Mang thai",
        "Kinh nghiệm sinh nở",
        "Làm đẹp cho mẹ bầu",
        "Giải trí đời sống gia đình",
        "Sức khỏe sau sinh",
        "Review đồ cho bé",
      ],
    },
    {
      categoryid: 2,
      category: "Kiến thức",
      subcategories: [
        "Sức khỏe mẹ & bé",
        "Sự phát triển của bé",
        "Gia đình",
        "Đàn ông chăm con",
      ],
    },
  ]);

  const [posts, setPosts] = useState([
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
  ]);

  return (
    <div
      id="main-content"
      className="flex w-full flex-col flex-1 p-2 space-y-3 rounded-lg p-0.5 bg-theme-cultured md:bg-white md:p-3"
    >
      <div className="flex flex-col mx-0 space-y-2 md:space-y-3 flex-1 mt-2 md:mt-0 md:mx-48">
        <div className="">
          <div className="flex flex-col md:flex-row">
            {/* Phần bên trái */}
            <div className="w-full md:w-2/3  p-2 md:p-2">
              {/* <div className="overflow-x-auto">
                <div className="flex space-x-4">
                  {news.map((item, index) => (
                    <div key={index} className="w-40 flex-shrink-0">
                      <div
                        className="h-64 bg-cover bg-center rounded-lg"
                        style={{
                          backgroundImage: `url(${item.banner})`,
                          width: "150px",
                          height: "150px",
                        }}
                      >
                        <div className="p-2">
                          <h1 className="text-xl font-bold text-white">
                            {item.title}
                          </h1>

                          <div className="flex items-center mt-4">
                            <img
                              src={item.avatar}
                              alt=""
                              className="w-8 h-8 rounded-full"
                            />
                            <p className="ml-2 text-white">{item.name}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div> */}
              <div
                className="text-white mt-4 border-b-[1px] border-[#A7A7A7] pb-2 mb-2"
                style={{
                  color: "#A7A7A7",
                  fontSize: "0.725rem",
                }}
              >
                {" "}
                Post mới nhất
              </div>

              <div className="flex flex-col space-y-4 font-family-mulish">
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="flex flex-col bg-white p-4 space-y-2 border-b-[1px] border-[#A7A7A7] pb-2 mb-2"
                  >
                    <div className="flex justify-between">
                      <div className="flex items-center space-x-2">
                        <img
                          src={post.avatar}
                          alt=""
                          className="w-8 h-8 rounded-full"
                        />

                        <div>
                          <div>
                            {" "}
                            <p className="font-semibold text-[#7AC0F8]">
                              {post.name}{" "}
                              <span className="text-xs text-gray-400">
                                {post.time}
                              </span>
                            </p>
                            <span className="text-xs text-gray-400">
                              TP. Hồ Chí Minh
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="flex flex-end space-x-2 bg-[#A9D4F8] px-6 py-1 rounded-3xl text-white">
                          Tham gia
                        </button>
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
                        className="w-full  object-cover rounded-lg"
                      />
                      <p className="text-gray-600">{post.content}</p>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex space-x-4">
                        <Counter />
                        <Comments comment={post.comment} />
                      </div>
                      <div className="flex space-x-4">
                        <SaveNew saved={false} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Phần bên phải */}
            <div className="w-full md:w-1/3 px-4 hidden md:block">
              <SideBarComponentOne threadList={categories[1].subcategories} />
              <SideBarComponentTwo threadList={categories[1].subcategories} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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

function SaveNew({ saved }) {
  const [isSaved, setIsSaved] = useState(saved);

  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  return (
    <div className="flex justify-between items-center px-2">
      {isSaved ? (
        "Đã lưu"
      ) : (
        <span className="mr-2">
          <svg
            width="16"
            height="20"
            viewBox="0 0 16 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_33_512)">
              <path
                d="M1.54386 19.6277C1.4113 19.6277 1.27875 19.6277 1.1462 19.6277C0.725145 19.4862 0.483429 19.1958 0.413254 18.7789C0.389862 18.6597 0.397659 18.5406 0.397659 18.4215C0.397659 12.9859 0.405457 7.55772 0.389862 2.12213C0.389862 1.13925 1.23976 0.364868 2.21442 0.364868C6.08967 0.372314 9.97271 0.364868 13.848 0.364868C14.8538 0.364868 15.6023 1.07969 15.6023 2.04022C15.6023 7.52794 15.6023 13.0157 15.6023 18.5108C15.6023 19.0246 15.4308 19.4267 14.8928 19.6203C14.7602 19.6203 14.6277 19.6203 14.4951 19.6203C14.191 19.4267 13.8713 19.2629 13.5906 19.0395C11.9688 17.7364 10.3626 16.4185 8.74854 15.108C8.2963 14.7357 7.77388 14.7357 7.32164 15.1005C5.7076 16.4036 4.10136 17.7066 2.49513 19.0171C2.20663 19.2703 1.91813 19.5086 1.54386 19.6277Z"
                stroke="#A8A8A8"
                strokeMiterlimit="10"
              />
            </g>
            <defs>
              <clipPath id="clip0_33_512">
                <rect width="16" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
      )}
    </div>
  );
}

SideBarComponentOne.propTypes = {
  threadList: PropType.array,
};
function SideBarComponentOne({ threadList }) {
  return (
    <div className="flex flex-col space-y-2 list-none  p-4 rounded-lg bg-[#F8F8F8]">
      <h2 className="font-family-nunito ">Cộng đồng phổ biến</h2>
      {threadList?.slice(0, 10).map((thread) => (
        <Link
          to={`/${thread.name}`}
          className="flex justify-between w-48 cursor-pointer text-[#7AC0F8]"
          key={thread.name}
        >
          <div
            className={`flex items-center space-x-3 ${!thread.logo && "pl-9"}`}
          >
            {thread.logo && (
              <img
                loading="lazy"
                width="auto"
                height="100%"
                src={thread.logo}
                alt=""
                className="object-cover w-6 h-6 rounded-full"
              />
            )}
            {!thread.logo && (
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="6" r="6" fill="#F8BBD9" />
              </svg>
            )}
            {thread && <span className="text-xs font-semibold ">{thread}</span>}
          </div>
          {/* <span className="p-1 px-2 text-sm font-semibold rounded-md bg-theme-gray-blue">
            {thread.subscriberCount > 9
              ? thread.subscriberCount
              : `0${thread.subscriberCount}`}
          </span> */}
        </Link>
      ))}
      <div className="flex justify-end items-center cursor-pointer text-theme-blue-500 font-family-mulish text-[#949494]">
        Xem thêm
        <span className="ml-1">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_36_577)">
              <path
                d="M8 16C12.42 16 16 12.42 16 8C16 3.58 12.42 0 8 0C3.58 0 0 3.58 0 8C0 12.42 3.58 16 8 16Z"
                fill="#A9D4F8"
              />
              <path
                d="M12 5.65L8.03 8.82L4 5.6"
                stroke="white"
                strokeMiterlimit="10"
              />
              <path
                d="M12 8.31L8.03 11.48L4 8.26"
                stroke="white"
                strokeMiterlimit="10"
              />
            </g>
            <defs>
              <clipPath id="clip0_36_577">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
      </div>
    </div>
  );
}

SideBarComponentTwo.propTypes = {
  threadList: PropType.array,
};
function SideBarComponentTwo({ threadList }) {
  return (
    <div className="flex flex-col space-y-2 list-none  p-4 rounded-lg bg-[#F8F8F8] mt-5">
      <h2 className="font-family-nunito ">Cộng đồng phổ biến</h2>
      {threadList?.slice(0, 10).map((thread) => (
        <Link
          to={`/${thread.name}`}
          className="flex justify-between w-48 cursor-pointer text-[#7AC0F8]"
          key={thread.name}
        >
          <div
            className={`flex items-center space-x-3 ${!thread.logo && "pl-9"}`}
          >
            {thread.logo && (
              <img
                loading="lazy"
                width="auto"
                height="100%"
                src={thread.logo}
                alt=""
                className="object-cover w-6 h-6 rounded-full"
              />
            )}
            {!thread.logo && (
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="6" r="6" fill="#F8BBD9" />
              </svg>
            )}
            {thread && <span className="text-xs font-semibold ">{thread}</span>}
          </div>
          {/* <span className="p-1 px-2 text-sm font-semibold rounded-md bg-theme-gray-blue">
            {thread.subscriberCount > 9
              ? thread.subscriberCount
              : `0${thread.subscriberCount}`}
          </span> */}
        </Link>
      ))}
      <div className="flex justify-end items-center cursor-pointer text-theme-blue-500 font-family-mulish text-[#949494]">
        Xem thêm
        <span className="ml-1">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_36_577)">
              <path
                d="M8 16C12.42 16 16 12.42 16 8C16 3.58 12.42 0 8 0C3.58 0 0 3.58 0 8C0 12.42 3.58 16 8 16Z"
                fill="#A9D4F8"
              />
              <path
                d="M12 5.65L8.03 8.82L4 5.6"
                stroke="white"
                strokeMiterlimit="10"
              />
              <path
                d="M12 8.31L8.03 11.48L4 8.26"
                stroke="white"
                strokeMiterlimit="10"
              />
            </g>
            <defs>
              <clipPath id="clip0_36_577">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
      </div>
    </div>
  );
}