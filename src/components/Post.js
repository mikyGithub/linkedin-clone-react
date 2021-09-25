import React from "react";
import InputOption from "./InputOption";
import LikeIcon from "../icons/LikeIcon";
import CommentIcon from "../icons/CommentIcon";
import ShareIcon from "../icons/ShareIcon";
import SendIcon from "../icons/SendIcon";

function Post(props) {
  return (
    <div className="bg-white rounded-lg my-2 p-3 border">
      <div className="flex items-center">
        <img
          className="rounded-full w-12 h-12 border-2 mr-3 border-white"
          src={props.photoUrl}
          alt=""
        />
        <div className="flex-1">
          <h2 className="font-semibold text-gray-800 text-lg">{props.name}</h2>
          <h4 className="text-xs text-gray-500 font-semibold">
            {props.description}
          </h4>
        </div>
      </div>
      <p className="text-gray-600 text-sm mt-2">{props.message}</p>
      <div className="flex items-center justify-between border-t mt-3 pt-3 w-full">
        <InputOption icon={<LikeIcon />} text="Like" />
        <InputOption icon={<CommentIcon />} text="Comment" />
        <InputOption icon={<ShareIcon />} text="Share" />
        <InputOption icon={<SendIcon />} text="Send" />
      </div>
    </div>
  );
}

export default Post;
