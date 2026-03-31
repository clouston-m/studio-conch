"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";

const images = [
  { src: "/images/Frame 16.png", alt: "Living space with natural light and green sofa" },
  { src: "/images/DSC08864.jpg", alt: "Food shoot in action in the kitchen" },
  { src: "/images/Frame 19.png", alt: "Kitchen and open-plan space" },
  { src: "/images/DSC08862.jpg", alt: "Ingredients flat lay on the kitchen counter" },
  { src: "/images/Frame 18.png", alt: "Window shadow patterns on white wall" },
  { src: "/images/DSC08868.jpg", alt: "Green risotto with poached egg" },
  { src: "/images/Frame 20.png", alt: "Wooden sculpture on sideboard with mirror" },
  { src: "/images/DSC08392.JPG", alt: "Kitchen with gas range and natural light" },
  { src: "/images/DSC08878.jpg", alt: "Bean stew in a pan with plates" },
  { src: "/images/Frame 22.png", alt: "Bookshelf with vinyl records and framed print" },
  { src: "/images/Frame 21.png", alt: "Kitchen with window light" },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handlePrev = () =>
    setLightboxIndex((i) => (i === null ? 0 : (i - 1 + images.length) % images.length));

  const handleNext = () =>
    setLightboxIndex((i) => (i === null ? 0 : (i + 1) % images.length));

  return (
    <section id="gallery" className="py-28 px-6 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-[#1A1A1A]/40 mb-4">
            Gallery
          </p>
          <h2
            style={{
              fontFamily: "var(--font-work-sans), sans-serif",
              fontWeight: 600,
              fontSize: "clamp(2.5rem, 6vw, 6rem)",
              lineHeight: 0.95,
              color: "#1A1A1A",
            }}
          >
            See the space.
          </h2>
        </div>

        <div className="columns-2 md:columns-3 gap-2 space-y-2">
          {images.map((image, i) => (
            <div
              key={image.src}
              className="break-inside-avoid relative overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => setLightboxIndex(i)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={800}
                className="w-full h-auto object-cover transition-opacity duration-200 group-hover:opacity-80"
              />
            </div>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </section>
  );
}
