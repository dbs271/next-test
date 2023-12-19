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

  useEffect(() => {
    unityContext.on("CallReactScore", (score) => {
      setScore(score);
    });
    unityContext.on("CallReactMessage", (gameMsg) => {
      setGameMsg(gameMsg);
    });
  }, []);

  return (
    <div>
      <div>
        <Unity
          unityContext={unityContext}
          style={{
            width: 300,
            height: 300,
          }}
        />
      </div>
      <div>
        <button onClick={TestA}>click</button>
      </div>
      <p>{score}</p>
      <p> {gameMsg} </p>
    </div>
  );
}
