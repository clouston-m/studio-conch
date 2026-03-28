export default function Gallery() {
  return (
    <section id="gallery" className="py-28 px-6 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#F5F0E8]/40 mb-4">
              Gallery
            </p>
            <h2
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontSize: "clamp(2.5rem, 6vw, 6rem)",
                lineHeight: 0.95,
                color: "#F5F0E8",
              }}
            >
              See the space.
            </h2>
          </div>
          <p className="md:max-w-xs text-[#F5F0E8]/40 text-sm leading-relaxed">
            Photos coming soon. Follow us on Instagram for the latest from
            Studio Conch.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          <div className="md:row-span-2 aspect-[3/4] md:aspect-auto bg-[#2A2A2A] rounded-xl flex items-center justify-center">
            <span className="text-[#F5F0E8]/15 text-xs uppercase tracking-widest">
              Photo
            </span>
          </div>
          <div className="aspect-square bg-[#2A2A2A] rounded-xl flex items-center justify-center">
            <span className="text-[#F5F0E8]/15 text-xs uppercase tracking-widest">
              Photo
            </span>
          </div>
          <div className="aspect-square bg-[#C5F135]/10 rounded-xl flex items-center justify-center">
            <span className="text-[#F5F0E8]/15 text-xs uppercase tracking-widest">
              Photo
            </span>
          </div>
          <div className="aspect-square bg-[#2A2A2A] rounded-xl flex items-center justify-center">
            <span className="text-[#F5F0E8]/15 text-xs uppercase tracking-widest">
              Photo
            </span>
          </div>
          <div className="aspect-square bg-[#2A2A2A] rounded-xl flex items-center justify-center">
            <span className="text-[#F5F0E8]/15 text-xs uppercase tracking-widest">
              Photo
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
