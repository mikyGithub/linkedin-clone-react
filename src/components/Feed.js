import React, { useEffect, useState } from "react";
import "./Feed.css";
import InputOption from "./InputOption";
import PhotoIcon from "../icons/PhotoIcon";
import VideoIcon from "../icons/VideoIcon";
import EventIcon from "../icons/EventIcon";
import WriteArticleIcon from "../icons/WriteArticleIcon";
import Post from "./Post";
import { db } from "../services/firebase";
import firebase from "firebase";

function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  // Fires when ever Feed Component Load
  useEffect(() => {
    db.collection("posts")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  const sendPost = (e) => {
    db.collection("posts").add({
      name: "sonny",
      description: "test",
      message: input,
      photoUrl: "url",
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };
  return (
    <>
      <div className="rounded-lg border p-3 bg-white">
        <div className="flex items-center">
          <img
            className="rounded-full w-12 h-12 border-2 border-white"
            src="https://media-exp1.licdn.com/dms/image/C4E03AQF7ZY2psichZA/profile-displayphoto-shrink_100_100/0/1626602550395?e=1637798400&v=beta&t=KMRkEzcsqt3CwF4kggIWLe-TdCO0javPA-vlmdz2HfM"
            alt=""
          />
          <div className="flex-1">
            <form className="flex">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                placeholder="Start a post"
                className="focus:border-blue-500 focus:shadow-md focus:bg-gray-100 ml-3 py-2 px-4 rounded-full w-full border border-gray-400 outline-none bg-gray-200"
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  sendPost(e);
                }}
                type="submit"
                className="hidden"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="flex items-center justify-between mt-3 w-full">
          <InputOption icon={<PhotoIcon />} text="Photo" />
          <InputOption icon={<VideoIcon />} text="Video" />
          <InputOption icon={<EventIcon />} text="Event" />
          <InputOption icon={<WriteArticleIcon />} text="Write Article" />
        </div>
      </div>

      {posts.map(({ id, data: { name, description, message } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl="https://media-exp1.licdn.com/dms/image/C4D03AQE4ytCW8peZBA/profile-displayphoto-shrink_100_100/0/1621361364710?e=1637798400&v=beta&t=oI3SFV2HgjIFKYBSrD2kXHuDe7782u-S1vPhzUF5g3o"
        />
      ))}
    </>
  );
}

export default Feed;
