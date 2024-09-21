'use client'

import { useRouter } from "next/navigation";
import { useDefinePlatform } from "./hooks/useDefinePlatform";
import { useEffect } from "react";
import Welcome from "./components/Welcome";

export default function Home() {
  const platform = useDefinePlatform()
  const router = useRouter()

  useEffect(()=>{
    if(platform === 'desktop')
      router.push('/desktop')
    if(platform === 'mobile')
      router.push('/mobile')

  },[platform, router])
  
  return (
    <Welcome platform="null" />
  );
}
