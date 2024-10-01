"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Welcome from "./components/Welcome";
import definePlatform from "./utils/definePlatform";

export default function Home() {
  const platform = definePlatform();
  const router = useRouter();

  useEffect(() => {
    if (platform === "desktop") router.push("/desktop");
    if (platform === "mobile") router.push("/mobile");
  }, [platform, router]);

  return <Welcome platform="null" />;
}
