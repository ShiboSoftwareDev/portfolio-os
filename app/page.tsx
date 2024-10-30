"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import definePlatform from "./utils/definePlatform";
import Welcome from "./components/Welcome";

export default function Home() {
  const platform = definePlatform();
  const router = useRouter();

  useEffect(() => {
    if (platform === "desktop") router.push("/desktop");
    if (platform === "mobile") router.push("/mobile");
  }, [platform, router]);

  return <Welcome />;
}
