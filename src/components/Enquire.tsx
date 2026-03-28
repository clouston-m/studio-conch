"use client";

export default function Enquire() {
  return (
    <section id="enquire" className="py-28 px-6 bg-[#C5F135]">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-[#1A1A1A]/50 mb-4">
          Get in Touch
        </p>
        <h2
          style={{
            fontFamily: "var(--font-work-sans), sans-serif",
            fontWeight: 600,
            fontSize: "clamp(2.5rem, 6vw, 6rem)",
            lineHeight: 0.95,
          }}
          className="mb-14"
        >
          Let&apos;s make
          <br />
          something.
        </h2>

        <form className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <label className="block text-xs uppercase tracking-widest text-[#1A1A1A]/50 mb-3">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full bg-transparent border-b-2 border-[#1A1A1A]/30 pb-3 text-[#1A1A1A] placeholder:text-[#1A1A1A]/30 focus:outline-none focus:border-[#1A1A1A] transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-[#1A1A1A]/50 mb-3">
                Email
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full bg-transparent border-b-2 border-[#1A1A1A]/30 pb-3 text-[#1A1A1A] placeholder:text-[#1A1A1A]/30 focus:outline-none focus:border-[#1A1A1A] transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <label className="block text-xs uppercase tracking-widest text-[#1A1A1A]/50 mb-3">
                Shoot Type
              </label>
              <select className="w-full bg-transparent border-b-2 border-[#1A1A1A]/30 pb-3 text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] transition-colors appearance-none cursor-pointer">
                <option value="">Select type</option>
                <option>Photography</option>
                <option>Film / Video</option>
                <option>Content Creation</option>
                <option>Brand Campaign</option>
                <option>Music Video</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-[#1A1A1A]/50 mb-3">
                Preferred Date
              </label>
              <input
                type="date"
                className="w-full bg-transparent border-b-2 border-[#1A1A1A]/30 pb-3 text-[#1A1A1A]/70 focus:outline-none focus:border-[#1A1A1A] transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest text-[#1A1A1A]/50 mb-3">
              Tell us about your project
            </label>
            <textarea
              rows={4}
              placeholder="What are you creating?"
              className="w-full bg-transparent border-b-2 border-[#1A1A1A]/30 pb-3 text-[#1A1A1A] placeholder:text-[#1A1A1A]/30 focus:outline-none focus:border-[#1A1A1A] transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="bg-[#1A1A1A] text-[#F5F0E8] text-sm font-semibold px-10 py-4 rounded-full hover:bg-[#2D2D2D] transition-colors duration-200"
          >
            Send Enquiry →
          </button>
        </form>
      </div>
    </section>
  );
}
