"use client";

import { Slider } from "@mui/material";
import Unity, { UnityContext } from "nextjs-unity-webgl";
import { useEffect, useState } from "react";

const unityContext = new UnityContext({
  loaderUrl: "/Build/testbuild.loader.js",
  dataUrl: "/Build/testbuild.data",
  frameworkUrl: "/Build/testbuild.framework.js",
  codeUrl: "/Build/testbuild.wasm",
  productName: "Aim Test",
  productVersion: "1.0.0",
  companyName: "HG",
});

export default function Home() {
  const TestA = () => {
    unityContext.send("GameController", "ClickBtn1");
  };

  const [gameMsg, setGameMsg] = useState("");
  const [score, setScore] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [progression, setProgression] = useState(0);
  const [state, setState] = useState(0);
  const [slider, setSlider] = useState(50);

  const TestB = () => {
    unityContext.send("GameController", "SetSensitivity", slider);
  };

  const TestC = () => {
    unityContext.send("GameController", "SetNumber", 1000);
  };
  const TestD = () => {
    unityContext.send("GameController", "SetNumber", 10);
  };

  const FullScreen = () => {
    unityContext.setFullscreen(true);
  };

  const requestPointerLock = () => {
    unityContext.requestPointerLock();
  };

  const SensitivityUp = () => {
    setState(state + 1.0);
    TestB();
  };

  const handleSliderChange = (e, newValue) => {
    setSlider(newValue);
  };

  useEffect(() => {
    unityContext.on("CallReactScore", (score) => {
      setScore(score);
    });
    unityContext.on("CallReactMessage", (gameMsg) => {
      setGameMsg(gameMsg);
    });
    unityContext.on("loaded", () => {
      setIsLoaded(true);
    });
    unityContext.on("progress", (progression) => {
      setProgression(progression);
    });
  }, []);

  return (
    <div>
      <p>Loading {progression * 100} %</p>
      <div>
        <Unity
          unityContext={unityContext}
          style={{
            width: 500,
            height: 500,
          }}
        />
      </div>

      <div>
        <button onClick={TestA}>click</button>
        <button onClick={FullScreen}>전체화면</button>
      </div>
      <button onClick={requestPointerLock}>Lock Pointer</button>
      <p>{score}</p>
      <p> {gameMsg} </p>

      <button onClick={SensitivityUp}>민감도+</button>
      <button onClick={TestC}>btn size up</button>
      <button onClick={TestD}>btn size down</button>

      <div>
        {slider}
        <Slider
          style={{ width: "300px" }}
          value={slider}
          aria-label="Default"
          valueLabelDisplay="auto"
          onChange={handleSliderChange}
        />
      </div>
    </div>
  );
}
