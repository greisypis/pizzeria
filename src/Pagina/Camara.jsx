import Webcam from "react-webcam";
import { useState } from "react";

const videoConstraints = {
    width: 400,
    height: 200,
    facingMode: "user"
  };
  
  const WebcamCapture = () => {
    <h2>Descripcion Del Menu:</h2>
    const [cameraSRC, setImage] = useState("");

    return(
        <>
    <Webcam
      audio={false}
      height={400}
      screenshotFormat="image/jpeg"
      width={1280}
      videoConstraints={videoConstraints}
    >
      {({ getScreenshot }) => (
        <button
          onClick={() => {
            setImage(getScreenshot());
          }}
        >
          Capture photo
        </button>
      )}
    </Webcam>
    <img src={cameraSRC} />
        
        </>
    )
  }
   
export default WebcamCapture