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
                fontFamily: "var(--font-work-sans), sans-serif",
            fontWeight: 600,
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
                  20 Theydon Road
                  <br />
                  London E5 9NY
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
            <div className="overflow-hidden rounded-2xl">
              <iframe
                src="https://maps.google.com/maps?q=20+Theydon+Road,+London+E5+9NY&output=embed&z=16"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Studio Conch location"
              />
            </div>

            <div className="mt-8 p-6 border border-[#1A1A1A]/10 rounded-2xl">
              <p className="text-xs uppercase tracking-widest text-[#1A1A1A]/40 mb-3">
                The Building
              </p>
              <p className="text-sm text-[#1A1A1A]/60 leading-relaxed">
                Dehavilland Studios was designed in the 1930s by engineer Sir
                Owen Williams and served as a WWII &lsquo;shadow factory&rsquo;,
                producing aircraft components for the famous de Havilland
                Mosquito. Today it&apos;s one of East London&apos;s most
                striking pieces of modernist architecture — raw concrete
                and steel-framed windows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
