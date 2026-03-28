export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-[#F5F0E8] px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p
            style={{ fontFamily: "var(--font-work-sans), sans-serif", fontWeight: 600 }}
            className="text-2xl mb-1"
          >
            Studio Conch
          </p>
          <p className="text-[#F5F0E8]/40 text-sm">
            Clapton, Hackney, London
          </p>
        </div>

        <div className="flex flex-wrap gap-6 text-sm text-[#F5F0E8]/50">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F5F0E8] transition-colors"
          >
            Instagram
          </a>
          <a
            href="mailto:hello@studioconch.com"
            className="hover:text-[#F5F0E8] transition-colors"
          >
            hello@studioconch.com
          </a>
        </div>

        <p className="text-[#F5F0E8]/25 text-xs">
          © 2026 Studio Conch
        </p>
      </div>
    </footer>
  );
}
