import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import AuthConsumer from "../../components/AuthContext";
import Comment, { CommentMode } from "../../components/Comment";
import Loader from "../../components/Loader";
import Post from "../../components/Post";

export function FullPost() {
  const queryClient = useQueryClient();
  const { user } = AuthConsumer();
  const { postId } = useParams();
  const [commentMode, setCommentMode] = useState(false);
  // const { data, isFetching } = useQuery({
  //   queryKey: ["post/comment", postId],
  //   queryFn: async () => await axios.get(`/api/comments/post/${postId}`).then((res) => res.data),
  // });
  const { mutate } = useMutation({
    mutationFn: async (data) => {
      await axios
        .post(`/api/comments`, { post_id: postId, content: data })
        .then((res) => {
          queryClient.setQueryData(
            { queryKey: ["post/comment", postId] },
            (oldData) => {
              return {
                ...oldData,
                comment_info: [...oldData.comment_info, res.data.new_comment],
              };
            }
          );
          setCommentMode(false);
        });
    },
  });
  // if (isFetching) {
  //   return (
  //     <div className="flex flex-col justify-center items-center w-full h-screen">
  //       <Loader forPosts={true} />
  //     </div>
  //   );
  // }

  const post = {
    id: 1,
    name: "Nguyễn Văn A",
    avatar: "https://i.pravatar.cc/150?img=1",
    time: "2 giờ trước",
    title: "Bán nhà ở Quận 1",
    banner:
      "https://firebasestorage.googleapis.com/v0/b/weloveschool-212d8.appspot.com/o/post2.png?alt=media&token=a12f6549-4e78-4ef3-8a5d-a884c4a76653",
    content: "Nhà ở Quận 1, 2 tầng, 3 phòng ngủ, 2 toilet, 1 phòng khách",
    comment: 10,
  };
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Hà Phan",
      avatar:
        "https://scontent-hkg1-1.xx.fbcdn.net/v/t39.30808-1/433124344_122107206314247463_1345011116744623977_n.jpg?stp=dst-jpg_p200x200&_nc_cat=109&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=nPUivUj5zK0Q7kNvgE14u1H&_nc_ht=scontent-hkg1-1.xx&oh=00_AYBZ6I8tvkqpzE4d35vW2D1IAO1FP1FETjIdBkevF5YXfw&oe=66817689",
      time: "2 giờ trước",
      content:
        "Cho con đi học tiếng Hàn sớm để sau này con có thể xem phim Hàn mà không cần phụ đề, cứu bố mẹ khỏi việc phải đọc nhanh như siêu nhân!",
      replies: [
        {
          id: 2,
          name: "Hòa Hồ",
          avatar:
            "https://scontent-hkg1-1.xx.fbcdn.net/v/t39.30808-1/433124344_122107206314247463_1345011116744623977_n.jpg?stp=dst-jpg_p200x200&_nc_cat=109&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=nPUivUj5zK0Q7kNvgE14u1H&_nc_ht=scontent-hkg1-1.xx&oh=00_AYBZ6I8tvkqpzE4d35vW2D1IAO1FP1FETjIdBkevF5YXfw&oe=66817689",
          time: "1 giờ trước",
          content:
            "Học tiếng Hàn từ bé để sau này con có thể tự đi du lịch Hàn Quốc mà không sợ bị lạc, chỉ sợ bố mẹ lạc thôi!",
        },
        {
          id: 3,
          name: "Lê Thị C",
          avatar:
            "https://scontent-hkg1-1.xx.fbcdn.net/v/t39.30808-1/433124344_122107206314247463_1345011116744623977_n.jpg?stp=dst-jpg_p200x200&_nc_cat=109&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=nPUivUj5zK0Q7kNvgE14u1H&_nc_ht=scontent-hkg1-1.xx&oh=00_AYBZ6I8tvkqpzE4d35vW2D1IAO1FP1FETjIdBkevF5YXfw&oe=66817689",
          time: "30 phút trước",
          content:
            "Học tiếng Hàn từ bé để sau này con có thể tự đi du lịch Hàn Quốc mà không sợ bị lạc, chỉ sợ bố mẹ lạc thôi!",
        },
      ],
    },
    {
      id: 3,
      name: "Lê Thị C",
      avatar:
        "https://scontent-hkg1-1.xx.fbcdn.net/v/t39.30808-1/433124344_122107206314247463_1345011116744623977_n.jpg?stp=dst-jpg_p200x200&_nc_cat=109&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=nPUivUj5zK0Q7kNvgE14u1H&_nc_ht=scontent-hkg1-1.xx&oh=00_AYBZ6I8tvkqpzE4d35vW2D1IAO1FP1FETjIdBkevF5YXfw&oe=66817689",
      time: "30 phút trước",
      content: "Đây là bình luận của Lê Thị C.",
    },
  ]);
  return (
    <div
      id="main-content"
      className="
       md:ml-56
      flex w-full flex-col flex-1 p-2 space-y-3 rounded-lg p-0.5 bg-theme-cultured md:bg-white md:p-3"
    >
      <div className="flex flex-col mx-0 space-y-2 md:space-y-3 flex-1 mt-2 md:mt-0 ">
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
              Post mới nhất
            </div>

            <div className="flex flex-col md:flex-row">
              <div className="flex flex-col space-y-4 font-family-mulish">
                <div className="flex flex-col p-2 space-y-2 w-full">
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
                        {/* <Link to={"/bai-dang"}>
                          <button
                            className="flex flex-end space-x-2 bg-[#A9D4F8] px-6 py-1 rounded-3xl text-white
                        hover:bg-[#F8BBD9] hover:text-white
                        "
                          >
                            Tham gia
                          </button>
                        </Link> */}
                        {/* <button>
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
                        </button> */}
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
                </div>
              </div>
            </div>
            <div className="w-full  p-2 md:p-2">
              <InputComment />
              <CommentTree comments={comments} />
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 hidden md:block">
            {/* <SideBarComponentOne threadList={categories[1].subcategories} />
              <SideBarComponentTwo threadList={categories[1].subcategories} /> */}
            <div className="flex flex-col space-y-2 list-none  p-4 rounded-lg ">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/weloveschool-212d8.appspot.com/o/image%2012.png?alt=media&token=13f610b2-28c8-451e-95bf-e5a08ea3a00f"
                alt=""
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/weloveschool-212d8.appspot.com/o/image%2013.png?alt=media&token=f383abb6-22da-4a37-81f5-c34f9e7600e3"
                alt=""
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/weloveschool-212d8.appspot.com/o/image%2014.png?alt=media&token=134f3ce3-ab6e-4429-8395-bb9397b75fc4"
                alt=""
              />
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

const CommentTree = ({ comments }) => {
  const renderComments = (comments) => {
    return comments.map((comment) => (
      <div key={comment.id} className="pl-4 ">
        <div className="p-2 bg-white rounded-lg shadow mb-2">
          <div className="flex items-center space-x-2">
            <img src={comment.avatar} alt="" className="w-8 h-8 rounded-full" />
            <div>
              <p className="font-semibold text-blue-500">{comment.name}</p>
              <p className="text-xs text-gray-400">{comment.time}</p>
            </div>
          </div>
          <p className="mt-2 text-gray-600">{comment.content}</p>
          <div className="mt-2 flex space-x-4">
            <Counter />
            <button className="text-sm text-blue-500">Trả lời</button>
          </div>
          {comment.replies && renderComments(comment.replies)}
        </div>
      </div>
    ));
  };

  return <div>{renderComments(comments)}</div>;
};

function InputComment() {
  const [comment, setComment] = useState("");

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = () => {
    mutate(comment);
  };

  return (
    <div className="flex items-center space-x-2 bg-[#F5F5F5]  rounded-sm mb-3">
      <input
        type="text"
        value={comment}
        onChange={handleChange}
        className="w-full   rounded-sm bg-[#F5F5F5] p-2 "
        placeholder="Viết bình luận..."
      />
      <button
        className="text-blue-500 px-3 py-2"
        onClick={handleSubmit}
        disabled={comment.trim() === ""}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.2982 1.70176C15.929 1.33262 15.4283 1.12524 14.9062 1.12524C14.3841 1.12524 13.8834 1.33262 13.5142 1.70176L12.6464 2.56951L15.4304 5.35351L16.2982 4.48576C16.6673 4.11656 16.8747 3.61585 16.8747 3.09376C16.8747 2.57167 16.6673 2.07096 16.2982 1.70176ZM14.6347 6.14926L11.8507 3.36526L2.7382 12.4778C2.27534 12.9404 1.93508 13.5111 1.7482 14.1383L1.1482 16.152C1.11923 16.2492 1.11707 16.3524 1.14194 16.4507C1.16682 16.549 1.21781 16.6387 1.28951 16.7104C1.36121 16.7822 1.45096 16.8331 1.54927 16.858C1.64757 16.8829 1.75077 16.8807 1.84795 16.8518L3.8617 16.2518C4.48887 16.0649 5.05957 15.7246 5.5222 15.2618L14.6347 6.14926Z"
            fill="#A8A8A8"
          />
        </svg>
      </button>
    </div>
  );
}



export default FullPost;
