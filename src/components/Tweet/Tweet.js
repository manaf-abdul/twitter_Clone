import React, { useEffect, useState } from "react";
import "./Tweet.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftRotate,
  faComment,
  faHeart,
  faRetweet,
} from "@fortawesome/free-solid-svg-icons";

const Tweet = ({ tweet }) => {
  const [isLikedByMe, setIsLikedByMe] = useState(false);
  const handleLike = () => {
    let likedTweets = JSON.parse(localStorage.getItem("likedTweets")) || [];

    console.log("likedTweets", likedTweets);
    if (!likedTweets.includes(tweet._id)) {
      likedTweets.push(tweet._id);
      setIsLikedByMe(true);
    } else {
      likedTweets = likedTweets.filter((item) => item !== tweet._id);
      setIsLikedByMe(false);
    }
    localStorage.setItem("likedTweets", JSON.stringify(likedTweets));
  };
  useEffect(() => {
    let likedTweets = JSON.parse(localStorage.getItem("likedTweets")) || [];
    if (likedTweets.includes(tweet._id)) setIsLikedByMe(true);
  }, [isLikedByMe]);

  return (
    <>
      <div className="twitter-post">
        <div className="twitter-post-header">
          <img src={tweet?.imageUrl} alt="Profile" />
          <h3>{tweet?.author}</h3>
        </div>
        <p className="twitter-post-text">{tweet.text}</p>
        <div className="twitter-post-footer">
          <div>
            <button
              style={{
                color: "grey",
                backgroundColor: "transparent",
                width: "4rem",
                height: "2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={handleLike}
            >
              <FontAwesomeIcon
                icon={faHeart}
                style={{
                  fontSize: "1rem",
                  padding: "10px",
                  color: isLikedByMe ? "red" : "#a2acb9",
                }}
              />
              {isLikedByMe ? Number(tweet.likes)+1:tweet.likes }
            </button>
          </div>
          <div>
            <button
              style={{
                color: "grey",
                backgroundColor: "transparent",
                width: "4rem",
                height: "2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FontAwesomeIcon
                icon={faRetweet}
                style={{ fontSize: "1rem", padding: "10px", color: "#a2acb9" }}
              />
              {tweet.retweets}
            </button>
          </div>
          <div>
            <button
              style={{
                color: "grey",
                backgroundColor: "transparent",
                width: "4rem",
                height: "2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FontAwesomeIcon
                icon={faComment}
                style={{ fontSize: "1rem", padding: "10px", color: "#a2acb9" }}
              />
              {tweet.replies}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tweet;
