import Image from "next/image";

const images = [
  { src: "/images/Frame 16.png", alt: "Living space with natural light and green sofa" },
  { src: "/images/DSC08359.JPG", alt: "Window light shadows across the studio wall" },
  { src: "/images/Frame 19.png", alt: "Kitchen and open-plan space" },
  { src: "/images/Frame 18.png", alt: "Window shadow patterns on white wall" },
  { src: "/images/Frame 20.png", alt: "Wooden sculpture on sideboard with mirror" },
  { src: "/images/DSC08392.JPG", alt: "Kitchen with gas range and natural light" },
  { src: "/images/Frame 22.png", alt: "Bookshelf with vinyl records and framed print" },
  { src: "/images/Frame 21.png", alt: "Kitchen with window light" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-28 px-6 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-[#F5F0E8]/40 mb-4">
            Gallery
          </p>
          <h2
            style={{
              fontFamily: "var(--font-work-sans), sans-serif",
              fontWeight: 600,
              fontSize: "clamp(2.5rem, 6vw, 6rem)",
              lineHeight: 0.95,
              color: "#F5F0E8",
            }}
          >
            See the space.
          </h2>
        </div>

        <div className="columns-2 md:columns-3 gap-2 space-y-2">
          {images.map((image) => (
            <div key={image.src} className="break-inside-avoid relative overflow-hidden rounded-lg">
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
