export default function Location() {
  return (
    <section id="location" className="py-28 px-6 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#1A1A1A]/40 mb-4">
              Find Us
            </p>
            <h2
              style={{
                fontFamily: "var(--font-dm-serif), serif",
                fontSize: "clamp(2.5rem, 5vw, 5.5rem)",
                lineHeight: 0.95,
              }}
              className="mb-12"
            >
              Clapton,
              <br />
              Hackney.
            </h2>

            <div className="space-y-8">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#1A1A1A]/40 mb-2">
                  Address
                </p>
                <p className="text-[#1A1A1A]/80 leading-relaxed">
                  Dehavilland Studios
                  <br />
                  Theydon Road
                  <br />
                  London E5
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-[#1A1A1A]/40 mb-2">
                  Overground
                </p>
                <p className="text-[#1A1A1A]/80">
                  Clapton — 8 min walk
                  <br />
                  <span className="text-[#1A1A1A]/50 text-sm">
                    Direct services to Liverpool Street
                  </span>
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-[#1A1A1A]/40 mb-2">
                  Also Nearby
                </p>
                <p className="text-[#1A1A1A]/80">
                  Hackney Downs · Hackney Central
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-[#1A1A1A]/40 mb-2">
                  By Car
                </p>
                <p className="text-[#1A1A1A]/80">
                  Designated parking in the building&apos;s car park.
                  <br />
                  <span className="text-[#1A1A1A]/50 text-sm">
                    Additional street parking on Theydon Road.
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="sticky top-28">
            <div className="aspect-square bg-[#1A1A1A]/6 rounded-2xl flex items-center justify-center border border-[#1A1A1A]/10">
              <div className="text-center">
                <div className="w-3 h-3 rounded-full bg-[#C5F135] mx-auto mb-3" />
                <p className="text-[#1A1A1A]/40 text-xs uppercase tracking-widest">
                  Dehavilland Studios, E5
                </p>
              </div>
            </div>
            <p className="mt-3 text-xs text-[#1A1A1A]/30 text-center">
              Map coming soon
            </p>

            <div className="mt-8 p-6 border border-[#1A1A1A]/10 rounded-2xl">
              <p className="text-xs uppercase tracking-widest text-[#1A1A1A]/40 mb-3">
                The Building
              </p>
              <p className="text-sm text-[#1A1A1A]/60 leading-relaxed">
                Dehavilland Studios was designed in the 1930s by engineer Sir
                Owen Williams and served as a WWII &lsquo;shadow factory&rsquo;,
                producing aircraft components for the famous de Havilland
                Mosquito. Today it&apos;s one of East London&apos;s most
                striking pieces of modernist architecture — raw concrete,
                steel-framed windows, and views over the River Lea.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
