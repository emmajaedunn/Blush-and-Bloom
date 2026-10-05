import { SERVICES } from "../data";
import { Container, Reveal, SectionHeading } from "./ui";

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24">
      <Container>
        <SectionHeading eyebrow="Services" intro="Four little worlds under one roof. Prices shown are sample starting prices.">
          Everything you need to feel <em className="text-berry">your best</em>
        </SectionHeading>
        <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-4 lg:gap-5 [&::-webkit-scrollbar]:hidden">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={i * 80} className="w-[78%] shrink-0 snap-start sm:w-auto">
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-paper transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_40px_-24px_rgba(122,31,69,0.4)]">
                <div className="aspect-[4/4.4] overflow-hidden bg-blush">
                  <img src={s.img} alt={s.alt} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-2xl text-ink">{s.title}</h3>
                  <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted">{s.blurb}</p>
                  <p className="mt-4 text-sm text-muted">
                    From <span className="font-display text-xl text-berry">R{s.from}</span>
                    <span className="ml-1 text-xs">(sample)</span>
                  </p>
                  <div className="mt-4 flex gap-4 border-t border-line pt-4 text-sm font-semibold">
                    <a href="#prices" className="text-berry underline-offset-4 hover:underline">
                      View prices
                    </a>
                    <a href="#book" onClick={() => window.dispatchEvent(new CustomEvent("pick-service", { detail: s.title }))} className="text-ink underline-offset-4 hover:underline">
                      Enquire
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-2 text-center text-xs text-muted sm:hidden">Swipe to see more →</p>
      </Container>
    </section>
  );
}
