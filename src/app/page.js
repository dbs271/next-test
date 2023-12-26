// root page

"use client";

import Link from "next/link";
import Unity, { UnityContext } from "nextjs-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "/Build/testBuild.loader.js",
  dataUrl: "/Build/testBuild.data",
  frameworkUrl: "/Build/testBuild.framework.js",
  codeUrl: "/Build/testBuild.wasm",
  productName: "Aim Test",
  productVersion: "1.0.0",
  companyName: "HG",
});

export default function Home() {
  const TestA = () => {
    unityContext.send("ScriptsManager", "MoveScene", "AimLab");
  };
  const TestB = () => {
    unityContext.send("ScriptsManager", "MoveScene", "ForTest");
  };

  return (
    <div>
      <Link href={"/game/ForTest"}>AimLab</Link>
    </div>
  );
}
