import { useState } from "react";
import { PRICES } from "../data";
import { Container, Reveal, SectionHeading } from "./ui";

export default function PriceList() {
  const [open, setOpen] = useState<string | null>("Hair");
  return (
    <section id="prices" className="bg-blush/60 py-16 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading eyebrow="Price list">
            Simple, <em className="text-berry">honest</em> pricing
          </SectionHeading>
          <p className="-mt-4 rounded-2xl border border-berry/20 bg-paper p-5 text-sm leading-relaxed text-muted md:-mt-8">
            <strong className="text-ink">Sample prices only.</strong> Final pricing may vary with hair length, nail design or after a consultation. Replace these before launch.
          </p>
        </div>
        <Reveal>
          <div className="divide-y divide-line overflow-hidden rounded-3xl border border-line bg-paper">
            {PRICES.map((g) => {
              const isOpen = open === g.category;
              return (
                <div key={g.category}>
                  <h3>
                    <button
                      aria-expanded={isOpen}
                      aria-controls={`panel-${g.category}`}
                      onClick={() => setOpen(isOpen ? null : g.category)}
                      className="flex min-h-16 w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-8"
                    >
                      <span className="font-display text-2xl text-ink sm:text-3xl">{g.category}</span>
                      <span aria-hidden className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-xl text-berry transition duration-300 ${isOpen ? "rotate-45 bg-blush" : ""}`}>
                        +
                      </span>
                    </button>
                  </h3>
                  <div id={`panel-${g.category}`} className={`grid transition-all duration-500 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <ul className="overflow-hidden px-5 sm:px-8" hidden={false}>
                      {g.items.map(([name, dur, price]) => (
                        <li key={name} className={`flex items-baseline gap-3 border-t border-dashed border-line py-3.5 ${isOpen ? "" : "invisible"}`}>
                          <span className="min-w-0 flex-1">
                            <span className="block text-[15px] font-medium text-ink sm:text-base">{name}</span>
                            <span className="text-xs text-muted">{dur}</span>
                          </span>
                          <span className="whitespace-nowrap font-display text-lg text-berry sm:text-xl">R{price.toLocaleString("en-ZA")}</span>
                        </li>
                      ))}
                      <li className="h-3" aria-hidden />
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
