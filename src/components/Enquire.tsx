"use client";

import { useState } from "react";

// Replace with your Formspree endpoint ID from formspree.io
const FORMSPREE_ENDPOINT = "https://formspree.io/f/maqlqprz";

export default function Enquire() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const data = new FormData(e.currentTarget);
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    setStatus(res.ok ? "success" : "error");
  }

  return (
    <section id="enquire" className="py-28 px-6 bg-[#FDDF7D]">
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

        {status === "success" ? (
          <div className="py-12">
            <p className="text-2xl font-semibold mb-2">Thanks — we&apos;ll be in touch.</p>
            <p className="text-[#1A1A1A]/60">
              Your enquiry has been sent to hello@studioconch.co.uk.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#1A1A1A]/50 mb-3">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
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
                  name="email"
                  required
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
                <select
                  name="shoot_type"
                  className="w-full bg-transparent border-b-2 border-[#1A1A1A]/30 pb-3 text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] transition-colors appearance-none cursor-pointer"
                >
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
                  Preferred Dates
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="date"
                    name="date_from"
                    className="w-full bg-transparent border-b-2 border-[#1A1A1A]/30 pb-3 text-[#1A1A1A]/70 focus:outline-none focus:border-[#1A1A1A] transition-colors"
                  />
                  <span className="text-[#1A1A1A]/40 pb-3">→</span>
                  <input
                    type="date"
                    name="date_to"
                    className="w-full bg-transparent border-b-2 border-[#1A1A1A]/30 pb-3 text-[#1A1A1A]/70 focus:outline-none focus:border-[#1A1A1A] transition-colors"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-[#1A1A1A]/50 mb-3">
                Tell us about your project
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="What are you creating?"
                className="w-full bg-transparent border-b-2 border-[#1A1A1A]/30 pb-3 text-[#1A1A1A] placeholder:text-[#1A1A1A]/30 focus:outline-none focus:border-[#1A1A1A] transition-colors resize-none"
              />
            </div>

            {status === "error" && (
              <p className="text-[#1A1A1A]/70 text-sm">
                Something went wrong — please try again or email us directly at hello@studioconch.co.uk.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="bg-[#1A1A1A] text-[#F5F0E8] text-sm font-semibold px-10 py-4  hover:bg-[#2D2D2D] transition-colors duration-200 disabled:opacity-50"
            >
              {status === "submitting" ? "Sending…" : "Send Enquiry →"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
