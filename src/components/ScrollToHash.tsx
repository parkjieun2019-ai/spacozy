"use client";

import { useEffect } from "react";

/** 주소에 #위치가 있으면, 사진이 다 뜬 뒤 그 위치로 한 번 더 정확히 이동합니다. */
export default function ScrollToHash() {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;
    const go = () => {
      const el = document.getElementById(id);
      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "instant" });
    };
    const timers = [150, 600, 1200].map((ms) => setTimeout(go, ms));
    return () => timers.forEach(clearTimeout);
  }, []);
  return null;
}
