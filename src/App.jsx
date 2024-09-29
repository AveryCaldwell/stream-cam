import "./App.css";
import WebcamComponent from "./components/Webcam";

function App() {
  console.log("App has loaded.");
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
