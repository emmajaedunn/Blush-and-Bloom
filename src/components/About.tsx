import { useState } from "react";
import { IMG } from "../data";
import { Container, Reveal, SectionHeading } from "./ui";

const QUOTES = [
  ["Walked in stressed, walked out glowing. The blowout lasted all week.", "Sample Client A"],
  ["The nail art is so precise, and nobody rushes you. Pure calm.", "Sample Client B"],
  ["My brows have never looked this natural. I'm booked in monthly now.", "Sample Client C"],
];

const FAQS = [
  ["How far ahead should I book?", "Sample answer: we suggest a week ahead, and two for colour or lash extensions."],
  ["What if I need to reschedule?", "Sample answer: let us know at least 24 hours before and we'll happily move you."],
  ["Do you offer consultations?", "Sample answer: yes. A short chat before colour or a new look is always included."],
];

export default function About() {
  const [faq, setFaq] = useState<number | null>(0);
  return (
    <>
      <section id="about" className="py-16 sm:py-24">
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative">
            <div className="aspect-[5/4] overflow-hidden rounded-3xl bg-blush">
              <img src={IMG.team} alt="Three stylists holding scissors and brushes, smiling" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 right-3 hidden aspect-square w-32 overflow-hidden rounded-full border-4 border-cream bg-blush sm:block lg:-right-6 lg:w-40">
              <img src={IMG.interior} alt="The salon floor with styling chairs" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <Reveal>
            <SectionHeading eyebrow="About the studio">
              A small studio with a <em className="text-berry">big heart</em>
            </SectionHeading>
            <div className="-mt-4 space-y-4 text-base leading-relaxed text-muted sm:text-lg md:-mt-8">
              <p>Blush &amp; Bloom began with a simple idea: beauty appointments should feel like a treat, not a chore. Soft music, good coffee, and a team who really listen.</p>
              <p>From a first trim to a wedding-day look, we take the time to get it right. (Sample story — replace with your own.)</p>
            </div>
            <dl className="mt-8 grid grid-cols-3 gap-3 border-t border-line pt-6">
              {[["8+", "Years"], ["4", "Specialists"], ["1", "Calm space"]].map(([n, l]) => (
                <div key={l}>
                  <dt className="text-xs uppercase tracking-widest text-muted">{l}</dt>
                  <dd className="font-display text-3xl text-berry sm:text-4xl">{n}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>
      </section>

      <section className="bg-ink py-16 text-cream sm:py-24">
        <Container>
          <div className="mb-10 max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blush-deep">Client love</p>
            <h2 className="font-display text-[2rem] font-light leading-[1.08] sm:text-5xl">Kind words <em className="text-blush-deep">(sample)</em></h2>
            <p className="mt-4 text-sm text-cream/75">Preview testimonials. Replace with real reviews before launch.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {QUOTES.map(([q, who], i) => (
              <Reveal key={who} delay={i * 100}>
                <figure className="h-full rounded-3xl border border-cream/15 bg-cream/5 p-6 sm:p-7">
                  <p aria-hidden className="font-display text-5xl leading-none text-rose">“</p>
                  <blockquote className="mt-2 font-display text-xl font-light leading-snug sm:text-2xl">{q}</blockquote>
                  <figcaption className="mt-5 text-sm text-cream/75">— {who}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-berry">Good to know</p>
            <h2 className="font-display text-[2rem] font-light leading-[1.08] sm:text-5xl">Quick <em className="text-berry">questions</em></h2>
          </div>
          <div className="divide-y divide-line border-y border-line">
            {FAQS.map(([q, a], i) => (
              <div key={q}>
                <h3>
                  <button aria-expanded={faq === i} onClick={() => setFaq(faq === i ? null : i)} className="flex min-h-16 w-full items-center justify-between gap-4 py-4 text-left text-base font-semibold sm:text-lg">
                    {q}
                    <span aria-hidden className={`text-2xl text-berry transition duration-300 ${faq === i ? "rotate-45" : ""}`}>+</span>
                  </button>
                </h3>
                <div className={`grid transition-all duration-500 ${faq === i ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]"}`}>
                  <p className="overflow-hidden text-muted">{a}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
