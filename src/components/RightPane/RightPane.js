import React from "react";
import "./RightPane.css";

const RightPane = () => {
  const viewportHeight = window.innerHeight;
  return (
    <div className="rightBox" style={{ height: viewportHeight }}>
      <div>
        <input className="inputSearch" placeholder="search twitter"></input>
      </div>
      <div>
        <div
          style={{
            backgroundColor: "#f7f9f9",
            width: "82%",
            height: "400px",
            marginTop: "1rem",
            borderRadius: "12px",
            padding: "1rem",
          }}
        >
          <h6 style={{ fontWeight: "700" }}>
            <b>What’s happening</b>
          </h6>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div className="pt-4">
              <p className="subText m-0">Entairtainment</p>
              <p className="hashTag m-0">#DigitalIndia</p>
              <p className="subText m-0">
                Trending with<a href="#">#Digital, #Economy</a>
              </p>
            </div>
            <div className="pt-4">
              <p className="subText m-0">Entairtainment</p>
              <p className="hashTag m-0">#DigitalIndia</p>
              <p className="subText m-0">
                Trending with<a href="#">#Digital, #Economy</a>
              </p>
            </div>
            <div className="pt-4">
              <p className="subText m-0">Entairtainment</p>
              <p className="hashTag m-0">#DigitalIndia</p>
              <p className="subText m-0">
                Trending with<a href="#">#Digital, #Economy</a>
              </p>
            </div>
            <div className="pt-4">
              <p className="subText m-0">Entairtainment</p>
              <p className="hashTag m-0">#DigitalIndia</p>
              <p className="subText m-0">
                Trending with<a href="#">#Digital, #Economy</a>
              </p>
            </div>
            <div className="pt-4">
              <p className="subText m-0">Entairtainment</p>
              <p className="hashTag m-0">#DigitalIndia</p>
              <p className="subText m-0">
                Trending with<a href="#">#Digital, #Economy</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            backgroundColor: "#f7f9f9",
            width: "82%",
            height: "250px",
            marginTop: "1rem",
            borderRadius: "12px",
            padding: "1rem",
          }}
        >
          <h6 style={{ fontWeight: "700" }}>
            <b>Who to Follow</b>
          </h6>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              className="pt-3"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <img
                  src="https://pbs.twimg.com/profile_images/1604463689892909056/JKmnipCK_400x400.jpg"
                  className="profileImage"
                ></img>
              </div>
              <div>
                <p className="hashTag m-0">
                  Rahul Ganghi<></>
                </p>
                <p className="subText"> @Rahul Ganghi </p>
              </div>
              <div className="mr-3">
                <button className="follows">Follow</button>
              </div>
            </div>
            <div
              className="pt-3"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <img
                  src="https://pbs.twimg.com/profile_images/1604463689892909056/JKmnipCK_400x400.jpg"
                  className="profileImage"
                ></img>
              </div>
              <div>
                <p className="hashTag m-0">
                  Rahul Ganghi<></>
                </p>
                <p className="subText"> @Rahul Ganghi </p>
              </div>
              <div className="mr-3">
                <button className="follows">Follow</button>
              </div>
            </div>
            <div
              className="pt-3"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <img
                  src="https://pbs.twimg.com/profile_images/1604463689892909056/JKmnipCK_400x400.jpg"
                  className="profileImage"
                ></img>
              </div>
              <div>
                <p className="hashTag m-0">
                  Rahul Ganghi<></>
                </p>
                <p className="subText"> @Rahul Ganghi </p>
              </div>
              <div className="mr-3">
                <button className="follows">Follow</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightPane;
