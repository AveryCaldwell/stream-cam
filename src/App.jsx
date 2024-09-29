import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import WebcamComponent from "./components/Webcam";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <h1>Stream Cam</h1>
        <WebcamComponent />
      </div>
    </>
  );
}

export default App;
