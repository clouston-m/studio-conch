export default function Hero() {
  return (
    <section className="bg-[#1A1A1A] text-[#F5F0E8] min-h-screen flex flex-col justify-between px-6 pt-28 pb-12">
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center">
        <h1
          style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontSize: "clamp(4.5rem, 16vw, 17rem)",
            lineHeight: 0.9,
            letterSpacing: "-0.02em",
          }}
        >
          Studio
          <br />
          Conch.
        </h1>
        <div className="mt-6">
          <span className="inline-block w-5 h-5 rounded-full bg-[#C5F135]" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full border-t border-[#F5F0E8]/15 pt-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#F5F0E8]/40 mb-2">
              Location
            </p>
            <p className="text-lg font-medium">Theydon Road, Clapton</p>
            <p className="text-lg text-[#F5F0E8]/60">London E5</p>
          </div>

          <div className="md:max-w-xs">
            <p className="text-[#F5F0E8]/60 text-sm leading-relaxed mb-6">
              1,400 sq ft of raw industrial space in a 1930s former aircraft
              factory — overlooking the River Lea with double-aspect natural
              light all day.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#space"
                className="text-sm font-semibold px-7 py-3 rounded-full border border-[#F5F0E8]/30 text-[#F5F0E8] hover:border-[#F5F0E8] transition-colors duration-200"
              >
                Explore the Space
              </a>
              <a
                href="#enquire"
                className="text-sm font-semibold px-7 py-3 rounded-full bg-[#C5F135] text-[#1A1A1A] hover:bg-[#F5F0E8] transition-colors duration-200"
              >
                Make an Enquiry
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <a
              href="#space"
              className="text-xs uppercase tracking-widest text-[#F5F0E8]/30 hover:text-[#F5F0E8]/60 transition-colors flex flex-col items-center gap-2"
            >
              <span>Scroll</span>
              <span className="animate-bounce">↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
