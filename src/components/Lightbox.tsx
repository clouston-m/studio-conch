"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";

interface LightboxProps {
  images: { src: string; alt: string }[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({ images, index, onClose, onPrev, onNext }: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  return (
    <div
      className="fixed inset-0 z-50 bg-[#1A1A1A]/95 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-[#F5F0E8]/60 hover:text-[#F5F0E8] transition-colors text-sm uppercase tracking-widest"
      >
        Close
      </button>

      {/* Counter */}
      <p className="absolute top-6 left-6 text-[#F5F0E8]/40 text-xs uppercase tracking-widest font-mono">
        {index + 1} / {images.length}
      </p>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-6 text-[#F5F0E8]/50 hover:text-[#F5F0E8] transition-colors text-2xl px-4 py-8"
      >
        ←
      </button>

      {/* Image */}
      <div
        className="relative max-h-[85vh] max-w-[85vw] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          key={images[index].src}
          src={images[index].src}
          alt={images[index].alt}
          width={1400}
          height={1400}
          className="max-h-[85vh] max-w-[85vw] w-auto h-auto object-contain"
          priority
        />
      </div>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-6 text-[#F5F0E8]/50 hover:text-[#F5F0E8] transition-colors text-2xl px-4 py-8"
      >
        →
      </button>
    </div>
  );
}
