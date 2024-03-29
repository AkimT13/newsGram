import React from "react";
import { FaHeart, FaComment, FaBookmark } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import useState from "react";
const Bar = () => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  };

  return (
    <div className="flex justify-between p-1 border-b-[1px] h-8 border-gray-500 items-center ">
      <div className="flex gap-5">
        {!liked ? (
          <FaHeart
            fontSize={20}
            fill={"white"}
            onClick={handleLike}
            className="cursor-pointer"
          />
        ) : (
          <FaHeart
            fontSize={20}
            fill={"red"}
            onClick={handleLike}
            className=" cursor-pointer"
          />
        )}

        <FaComment fontSize={20} color={"white"} />
        <IoSend fontSize={20} color={"white"} />
      </div>
      <FaBookmark fontSize={20} className="cursor-pointer" color={"white"} />
    </div>
  );
};

export default Bar;
