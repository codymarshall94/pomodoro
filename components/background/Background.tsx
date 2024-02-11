"use client";

import { useThemeStore } from "@/store/themeStore";

const Background = () => {
  const { theme } = useThemeStore();
  const source = `https://www.youtube.com/embed/${theme.videoId}?modestbranding=1?controls=0&amp;start=15&amp;end=3600&amp;showinfo=0&amp;rel=0&amp;autoplay=1&amp;loop=1&amp;mute=1`;
  return (
    <>
      {theme.videoId === "" ? (
        <div className="bg-background" />
      ) : (
        <div className="fixed top-0 left-0 w-screen h-screen overflow-hidden transition-opacity ease-in duration-1000 opacity-100">
          <div className="fixed w-full h-full bg-[rgba(0,0,0,0.5)] z-10 top-0 inset-0"></div>
          <iframe
            src={source}
            allowFullScreen
            aria-label="Youtube Player"
            id="video-player"
            className="-translate-x-1/2 -translate-y-1/2 absolute box-border h-[56.25vw] left-1/2 min-h-full min-w-full pointer-events-none top-1/2 w-screen"
          ></iframe>
        </div>
      )}
    </>
  );
};

export default Background;
