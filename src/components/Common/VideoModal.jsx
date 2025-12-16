import React, { useEffect, useRef, useState, useCallback } from "react";
import {
  IoClose,
  IoHeartOutline,
  IoTimeOutline,
  IoShareSocialOutline,
  IoVolumeHigh,
  IoVolumeMute,
} from "react-icons/io5";

export default function VideoModal({
  isOpen,
  onClose,
  src,
  title = "",
  byline = "",
  poster,
}) {
  const videoRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: null, height: null });
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  // compute fitted modal size based on video's intrinsic dimensions and viewport
  const computeFittedSize = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    const vw = v.videoWidth || 0;
    const vh = v.videoHeight || 0;
    if (!vw || !vh) return;

    const maxW = Math.min(window.innerWidth * 0.96, 1400);
    const maxH = window.innerHeight * 0.9;

    const scale = Math.min(maxW / vw, maxH / vh, 1);
    const displayW = Math.round(vw * scale);
    const displayH = Math.round(vh * scale);
    setDimensions({ width: displayW, height: displayH });
  }, []);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      // ensure muted state is applied before playing to improve autoplay chances
      videoRef.current.muted = muted;
      // try to play when opened
      const p = videoRef.current.play();
      if (p && p.catch) p.catch(() => {});
    } else if (!isOpen && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isOpen]);

  useEffect(() => {
    // keep video element's muted property in sync with state
    if (videoRef.current) videoRef.current.muted = muted;
  }, [muted]);

  useEffect(() => {
    // recompute on resize
    const onResize = () => computeFittedSize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [computeFittedSize]);

  const handleLoadedMetadata = () => {
    computeFittedSize();
  };

  if (!isOpen) return null;

  const modalStyle = dimensions.width
    ? { width: `${dimensions.width}px` }
    : { width: "min(1100px,96vw)" };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div
        style={modalStyle}
        className="relative mx-4 max-h-[90vh] bg-[#0b0b0b] overflow-hidden shadow-[0_20px_50px_rgba(2,6,23,0.6)] border border-black/60"
      >
        {/* top-left title badge */}
        <div className="absolute top-1 left-1 z-30 flex items-start gap-3">
          <div className="w-9 h-9 bg-white flex items-center justify-center text-sm font-bold">
            Silo
          </div>
          <div className="text-black">
            <div className="inline-block bg-[#0b5cff] text-black px-3 py-1 text-sm font-semibold -mt-1">
              {title}
            </div>
            {byline && (
              <div className="text-xs opacity-90 mt-1">
                by{" "}
                <a className="underline text-black/90" href="#">
                  {byline}
                </a>
              </div>
            )}
          </div>
        </div>

        {/* right vertical actions (moved slightly down) */}
        <div className="absolute top-20 right-4 flex flex-col items-center gap-3 z-30">
          <button
            onClick={() => setMuted((v) => !v)}
            aria-pressed={!muted}
            className="w-10 h-10 rounded-full bg-white/6 backdrop-blur-sm flex items-center justify-center text-black hover:bg-white/12 border border-white/10 transition"
            title={muted ? "Unmute" : "Mute"}
          >
            {muted ? <IoVolumeMute size={18} /> : <IoVolumeHigh size={18} />}
          </button>
          <button className="w-10 h-10 rounded-full bg-white/6 backdrop-blur-sm flex items-center justify-center text-black hover:bg-white/12 border border-white/10 transition">
            <IoHeartOutline size={18} />
          </button>
          <button className="w-10 h-10 rounded-full bg-white/6 backdrop-blur-sm flex items-center justify-center text-black hover:bg-white/12 border border-white/10 transition">
            <IoTimeOutline size={18} />
          </button>
          <button className="w-10 h-10 rounded-full bg-white/6 backdrop-blur-sm flex items-center justify-center text-black hover:bg-white/12 border border-white/10 transition">
            <IoShareSocialOutline size={18} />
          </button>
        </div>

        {/* close (larger) */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-6 right-4 w-11 h-11 bg-white/7 text-black z-40 flex items-center justify-center hover:bg-white/14 transition"
        >
          <IoClose size={22} />
        </button>

        <div className="w-full h-full bg-black flex items-center justify-center ">
          <div className="w-full h-full flex items-center justify-center">
            <video
              ref={videoRef}
              src={src}
              poster={poster}
              controls
              onLoadedMetadata={handleLoadedMetadata}
              className="max-w-full max-h-[80vh] bg-black shadow-inner"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
