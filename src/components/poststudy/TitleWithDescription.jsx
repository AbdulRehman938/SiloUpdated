import { useState, useRef, useEffect } from "react";
import Player from "./vimeo-player";

const TitleWithDescription = ({ title, description }) => {
  const vimeoIframeRef = useRef(null);
  const playerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const handleIframeLoad = () => {
      if (vimeoIframeRef.current && !playerRef.current) {
        playerRef.current = new Player(vimeoIframeRef.current);
        playerRef.current.setVolume(1);
        playerRef.current.setMuted(true);
        playerRef.current.play();
        setIsPlaying(true);
      }
    };

    const iframe = vimeoIframeRef.current;
    if (iframe) {
      iframe.addEventListener("load", handleIframeLoad);
      // If already loaded, call immediately
      if (iframe.readyState === "complete") handleIframeLoad();
    }
    return () => {
      if (iframe) iframe.removeEventListener("load", handleIframeLoad);
      if (playerRef.current) playerRef.current.unload();
    };
  }, []);

  const handleVimeoClick = () => {
    if (playerRef.current) {
      playerRef.current.getPaused().then(paused => {
        if (paused) {
          playerRef.current.play();
          setIsPlaying(true);
        } else {
          playerRef.current.pause();
          setIsPlaying(false);
        }
      });
    }
  };

  return (
    <>
      <div className="w-full max-w-[1280px] mx-auto py-16 md:py-24 px-3 md:px-0">
        <div className="relative min-h-[300px] md:min-h-[400px]">
          <div className="relative w-full md:absolute md:top-0 md:left-0 md:w-[45%]">
            <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-tight">
              {title || "This job was pretty bloody cool."}
            </h1>
          </div>

          <div className="relative mt-6 w-full md:absolute md:-bottom-12 md:right-0 md:w-[50%] flex flex-col gap-4 md:mt-0">
            {Array.isArray(description) ? (
              description.map((para, index) => (
                <p
                  key={index}
                  className="text-base md:text-lg text-black leading-relaxed"
                >
                  {para}
                </p>
              ))
            ) : (
              <p className="text-base md:text-lg text-black leading-relaxed">
                {description ||
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."}
              </p>
            )}
          </div>
        </div>

        <div 
          className="relative w-full h-[30vh] md:h-auto md:aspect-video overflow-hidden mt-20 cursor-pointer"
          onClick={handleVimeoClick}
        >
          <iframe
            ref={vimeoIframeRef}
            id="vimeo-player"
            src="https://player.vimeo.com/video/76979871?autoplay=1&muted=1&background=0&controls=0"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Vimeo Video"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ border: 0, borderRadius: 0 }}
          />
          <div className="absolute inset-0 w-full h-full bg-black bg-opacity-30 pointer-events-none" />
        </div>
      </div>

      {/* Modal removed, video is now in-page. Play/pause toggles on empty area click. */}
    </>
  );
};

export default TitleWithDescription;