"use client";

import { useEffect, useRef } from "react";

export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.loop = true;
    video.controls = false;
    video.disablePictureInPicture = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");
    video.setAttribute("controlsList", "nodownload noplaybackrate noremoteplayback");
    video.removeAttribute("controls");

    const play = () => {
      video.muted = true;
      video.controls = false;
      video.removeAttribute("controls");
      void video.play().catch(() => {});
    };

    play();

    const onGesture = () => play();
    window.addEventListener("pointerdown", onGesture);
    window.addEventListener("keydown", onGesture);

    const onPlaying = () => {
      window.removeEventListener("pointerdown", onGesture);
      window.removeEventListener("keydown", onGesture);
    };

    let frame = 0;
    const watchLoop = () => {
      if (Number.isFinite(video.duration) && video.duration > 0 && video.currentTime >= video.duration - 0.05) {
        video.currentTime = 0;
        play();
      }
      frame = window.requestAnimationFrame(watchLoop);
    };
    frame = window.requestAnimationFrame(watchLoop);

    const onEnded = () => {
      video.currentTime = 0;
      play();
    };

    const onPause = () => {
      if (document.hidden) return;
      play();
    };

    const onVisible = () => {
      if (!document.hidden) play();
    };

    video.addEventListener("playing", onPlaying);
    video.addEventListener("ended", onEnded);
    video.addEventListener("pause", onPause);
    document.addEventListener("visibilitychange", onVisible);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointerdown", onGesture);
      window.removeEventListener("keydown", onGesture);
      video.removeEventListener("playing", onPlaying);
      video.removeEventListener("ended", onEnded);
      video.removeEventListener("pause", onPause);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);

  return (
    <video
      ref={ref}
      className="hero-video pointer-events-none absolute inset-0 h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster="/hero/poster.jpg"
      controlsList="nodownload noplaybackrate noremoteplayback"
      disablePictureInPicture
      disableRemotePlayback
      aria-hidden
      {...{ "webkit-playsinline": "", "x-webkit-airplay": "deny" }}
    >
      <source src="/hero/hero.mp4" type="video/mp4" />
    </video>
  );
}
