import React from "react";
import Webcam from "react-webcam";
import { useState } from "react";

const WebcamComponent = () => {
  const [filter, setFilter] = useState("");

  const videoStyles = {
    filter: filter,
    width: "100%", // Adjust the video size to fit your needs
    height: "auto",
  };
  return (
    <>
      <div className="webcamContainer">
        <Webcam style={videoStyles} audio={false} />

        <div className="webcamButtonContainer">
          <button onClick={() => setFilter("")}>No Filter</button>
          <button onClick={() => setFilter("grayscale(100%)")}>
            Grayscale
          </button>
          <button onClick={() => setFilter("sepia(100%)")}>Sepia</button>
          <button onClick={() => setFilter("blur(5px)")}>Blur</button>
        </div>
      </div>
    </>
  );
};

export default WebcamComponent;
