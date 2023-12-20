"use client";

import Unity, { UnityContext } from "nextjs-unity-webgl";
import { useEffect, useState } from "react";

const unityContext = new UnityContext({
  loaderUrl: "/Build/testfinal.loader.js",
  dataUrl: "/Build/testfinal.data",
  frameworkUrl: "/Build/testfinal.framework.js",
  codeUrl: "/Build/testfinal.wasm",
});

export default function Home() {
  const TestA = () => {
    unityContext.send("GameController", "ClickBtn1");
  };
  const [gameMsg, setGameMsg] = useState("");
  const [score, setScore] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [progression, setProgression] = useState(0);

  const FullScreen = () => {
    unityContext.setFullscreen(true);
  };

  const requestPointerLock = () => {
    unityContext.requestPointerLock();
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
      <div onClick={requestPointerLock}>
        <Unity
          unityContext={unityContext}
          style={{
            width: 1100,
            height: 1024,
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
    </div>
  );
}
