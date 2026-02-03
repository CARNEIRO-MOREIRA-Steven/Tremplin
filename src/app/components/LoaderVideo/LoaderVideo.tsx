"use client";

import { useState, useEffect, useRef } from "react";
import "./loader-video.css"

export default function LoaderVideo({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // Bloque le scroll pendant la vidéo
    document.body.style.overflow = "hidden";

    // Force la lecture de la vidéo même si elle est en cache
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => console.log("Autoplay bloqué"));
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleVideoEnd = () => {
    setFadeOut(true);
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "auto";
    }, 0); // fade-out duration
  };

  return (
    <>
      {isLoading && (
        <div className={`loader-overlay ${fadeOut ? "fade-out" : ""}`}>
          <video
            ref={videoRef}
            src={`/loader.mp4?v=${Date.now()}`} // force le reload
            muted
            playsInline
            onEnded={handleVideoEnd}
            className="loader-video"
          />
        </div>
      )}

      <div className={`site-content ${isLoading ? "" : "visible"}`}>
        {children}
      </div>
    </>
  );
}
