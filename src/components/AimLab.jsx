"use client";

import Unity, { UnityContext } from "nextjs-unity-webgl";
import React, { useEffect, useState } from "react";

const unityContext = new UnityContext({
  loaderUrl: "/Build/testBuild.loader.js",
  dataUrl: "/Build/testBuild.data",
  frameworkUrl: "/Build/testBuild.framework.js",
  codeUrl: "/Build/testBuild.wasm",
  productName: "Aim Test",
  productVersion: "1.0.0",
  companyName: "HG",
});

const AimLab = ({ id }) => {
  const [progression, setProgresstion] = useState(0);
  useEffect(() => {
    unityContext.on("progress", (progression) => {
      setProgresstion(progression);
    });
    unityContext.send("ScriptsManager", "MoveScene", id);
  });

  return (
    <div>
      <h2>AimLab</h2>
      <div>
        <Unity
          unityContext={unityContext}
          style={{
            width: 500,
            height: 500,
          }}
        />
      </div>
    </div>
  );
};

export default AimLab;
