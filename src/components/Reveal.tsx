"use client";

import { useEffect } from "react";

/** .reveal 요소가 화면에 들어오면 부드럽게 나타나게 합니다. layout에 한 번만 둡니다. */
export default function Reveal() {
  useEffect(() => {
    const observe = () => {
      const els = document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)");
      if (!("IntersectionObserver" in window)) {
        els.forEach((el) => el.classList.add("is-visible"));
        return () => {};
      }
      const io = new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("is-visible");
              io.unobserve(e.target);
            }
          }),
        { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
      );
      els.forEach((el) => io.observe(el));
      return () => io.disconnect();
    };

    let cleanup = observe();
    // 페이지 이동 후 새로 생긴 요소도 관찰
    const mo = new MutationObserver(() => {
      cleanup();
      cleanup = observe();
    });
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      mo.disconnect();
      cleanup();
    };
  }, []);

  return null;
}
