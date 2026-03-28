const features = [
  {
    number: "01",
    title: "Natural Daylight",
    description:
      "Generous windows flood the space with beautiful natural light throughout the day.",
  },
  {
    number: "02",
    title: "High Ceilings",
    description:
      "Impressive ceiling height gives you the freedom to shoot large-scale setups and creative rigs.",
  },
  {
    number: "03",
    title: "Seamless Backgrounds",
    description:
      "White, cream, and black seamless paper available. Cyc wall on request.",
  },
  {
    number: "04",
    title: "Equipment Available",
    description:
      "Studio lighting, stands, and grip gear available to hire alongside your booking.",
  },
  {
    number: "05",
    title: "Changing Room",
    description:
      "Private changing area and hanging space for talent and wardrobe.",
  },
  {
    number: "06",
    title: "Kitchen Access",
    description:
      "Fully equipped kitchen for refreshments, catering, and on-set prep.",
  },
  {
    number: "07",
    title: "Private Parking",
    description:
      "On-site parking available for crew and equipment vehicles.",
  },
  {
    number: "08",
    title: "High-Speed WiFi",
    description:
      "Gigabit internet connection throughout — tether, stream, and share without limits.",
  },
];

export default function Features() {
  return (
    <section id="space" className="py-28 px-6 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#1A1A1A]/40 mb-4">
              The Space
            </p>
            <h2
              style={{
                fontFamily: "var(--font-dm-serif), serif",
                fontSize: "clamp(2.5rem, 6vw, 6rem)",
                lineHeight: 0.95,
              }}
            >
              Everything you
              <br />
              need to create.
            </h2>
          </div>
          <p className="md:max-w-xs text-[#1A1A1A]/60 text-sm leading-relaxed">
            Studio Conch is designed around the needs of photographers,
            filmmakers, and content creators. Hire by the half-day or full day.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1A1A1A]/10 border border-[#1A1A1A]/10 rounded-2xl overflow-hidden">
          {features.map((feature) => (
            <div
              key={feature.number}
              className="bg-[#F5F0E8] p-7 hover:bg-[#C5F135] transition-colors duration-300 group cursor-default"
            >
              <p className="text-xs text-[#1A1A1A]/30 group-hover:text-[#1A1A1A]/40 mb-4 font-mono">
                {feature.number}
              </p>
              <h3 className="font-semibold text-base mb-3">{feature.title}</h3>
              <p className="text-sm text-[#1A1A1A]/55 group-hover:text-[#1A1A1A]/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
