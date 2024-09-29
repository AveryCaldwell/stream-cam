// TODO: set up webcam.
// TODO: apply a simple CSS filter.

import React from "react";
import Webcam from "react-webcam";

const WebcamComponent = () => {
  return (
    <div>
      <Webcam
        width="100%" // Adjust the width or height as needed
        height="auto"
        screenshotFormat="image/jpeg" // For taking screenshots later
      />
    </div>
  );
};

export default WebcamComponent;
