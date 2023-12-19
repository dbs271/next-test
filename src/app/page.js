"use client";

import Unity, { UnityContext } from "nextjs-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "/Build/testbuild.loader.js",
  dataUrl: "/Build/testbuild.data",
  frameworkUrl: "/Build/testbuild.framework.js",
  codeUrl: "/Build/testbuild.wasm",
});

export default function Home() {
  function TestA() {
    unityContext.send("TestBridge", "ClickBtn1()");
  }
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
      <button onClick={TestA}>click</button>
    </div>
  );
}
