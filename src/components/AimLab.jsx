"use client";

import Unity, { UnityContext } from "nextjs-unity-webgl";
import React, { useEffect, useState } from "react";

const unityContext = new UnityContext({
  loaderUrl: "/Build/testbuild.loader.js",
  dataUrl: "/Build/testbuild.data",
  frameworkUrl: "/Build/testbuild.framework.js",
  codeUrl: "/Build/testbuild.wasm",
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
            width: 940,
            height: 500,
          }}
        />
      </div>
    </div>
  );
};

export default AimLab;
