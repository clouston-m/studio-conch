const features = [
  {
    number: "01",
    title: "Double-Aspect Natural Light",
    description:
      "South and west-facing steel-framed windows flood the space with natural light throughout the day — morning softness through to golden-hour warmth.",
  },
  {
    number: "02",
    title: "Soaring Concrete Ceilings",
    description:
      "Exposed concrete ceilings overhead and raw concrete pillars throughout give instant industrial character — no set-building required.",
  },
  {
    number: "03",
    title: "1,400 sq ft Open-Plan",
    description:
      "A wide, column-free floorplan on the second floor of a corner unit. Fully flexible — arrange it however your shoot demands.",
  },
  {
    number: "04",
    title: "Plywood & Concrete Floors",
    description:
      "Soft grey-finished plywood underfoot with raw concrete detailing. Clean lines, no fuss — a neutral base that works with any aesthetic.",
  },
  {
    number: "06",
    title: "White Kitchen",
    description:
      "White cabinetry with polished granite surfaces and integrated appliances. Ideal for food, product, and lifestyle shoots.",
  },
  {
    number: "07",
    title: "Lift & Easy Access",
    description:
      "Second-floor studio with both stair and lift access. Getting kit in and out is straightforward — even for larger productions.",
  },
  {
    number: "08",
    title: "Dedicated Parking",
    description:
      "A designated parking space in the building's car park. More street parking available on Theydon Road.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-28 px-6 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#1A1A1A]/40 mb-4">
              The Space
            </p>
            <h2
              style={{
                fontFamily: "var(--font-work-sans), sans-serif",
            fontWeight: 600,
                fontSize: "clamp(2.5rem, 6vw, 6rem)",
                lineHeight: 0.95,
              }}
            >
              Everything you
              <br />
              need to create.
            </h2>
          </div>
          <p className="md:max-w-sm text-[#1A1A1A]/60 text-sm leading-relaxed">
            Over 1,400 sq ft of raw industrial space in a 1930s former aircraft
            factory designed by Sir Owen Williams. Available for photography,
            film, and content creation.
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
