// root page

"use client";

import Link from "next/link";
import Unity, { UnityContext } from "nextjs-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "/Build/Build.loader.js",
  dataUrl: "/Build/Build.data.unityweb",
  frameworkUrl: "/Build/Build.framework.js.unityweb",
  codeUrl: "/Build/Build.wasm.unityweb",
  productName: "Aim Test",
  productVersion: "1.0.0",
  companyName: "HG",
});

export default function Home() {
  return (
    <div>
      <Link href={"/game/ForTest"}>AimLab</Link>
    </div>
  );
}
