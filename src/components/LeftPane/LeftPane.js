import React from "react";
import "./LeftPane.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDove,
  faHouse,
  faHashtag,
  faBell,
  faMessage,
  faBookmark,
  faRectangleList,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const LeftPane = () => {
  return (
    <div className="leftPane">
      <div className="iconAndText">
        <FontAwesomeIcon
          icon={faDove}
          style={{ fontSize: "1.8rem", padding: "10px", color: "#1d9bf0" }}
        />
      </div>
      <div className="iconAndText">
        <FontAwesomeIcon
          icon={faHouse}
          style={{ fontSize: "1.8rem", padding: "10px", color: "#1d9bf0" }}
        />
      </div>
      <div className="iconAndText">
        <FontAwesomeIcon
          icon={faHashtag}
          style={{ fontSize: "1.8rem", padding: "13px", color: "#1d9bf0" }}
        />
      </div>
      <div className="iconAndText">
        <FontAwesomeIcon
          icon={faBell}
          style={{ fontSize: "1.8rem", padding: "13px", color: "#1d9bf0" }}
        />
      </div>
      <div className="iconAndText">
        <FontAwesomeIcon
          icon={faMessage}
          style={{ fontSize: "1.8rem", padding: "13px", color: "#1d9bf0" }}
        />
      </div>
      <div className="iconAndText">
        <FontAwesomeIcon
          icon={faBookmark}
          style={{ fontSize: "1.8rem", padding: "13px", color: "#1d9bf0" }}
        />
      </div>
      <div className="iconAndText">
        <FontAwesomeIcon
          icon={faRectangleList}
          style={{ fontSize: "1.8rem", padding: "13px", color: "#1d9bf0" }}
        />
      </div>
      <div className="iconAndText">
        <FontAwesomeIcon
          icon={faUser}
          style={{ fontSize: "1.8rem", padding: "13px", color: "#1d9bf0" }}
        />
      </div>
    </div>
  );
};

export default LeftPane;
