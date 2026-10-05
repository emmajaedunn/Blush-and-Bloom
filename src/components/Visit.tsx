import { SALON } from "../data";
import { ButtonLink, Container, Reveal, SectionHeading } from "./ui";

export default function Visit() {
  return (
    <>
      <section id="visit" className="bg-blush/60 py-16 sm:py-24">
        <Container className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="Visit us">
              Come and <em className="text-berry">say hello</em>
            </SectionHeading>
            <p className="-mt-4 mb-6 text-sm text-muted">Sample details for this salon preview.</p>
            <dl className="space-y-5 text-base">
              <div><dt className="text-xs font-semibold uppercase tracking-widest text-berry">Address</dt><dd className="mt-1">{SALON.address}</dd></div>
              <div><dt className="text-xs font-semibold uppercase tracking-widest text-berry">Hours</dt>
                <dd className="mt-1 max-w-xs divide-y divide-line/70">
                  {SALON.hours.map(([d, h]) => (
                    <div key={d} className="flex justify-between gap-4 py-2"><span>{d}</span><span className="text-muted">{h}</span></div>
                  ))}
                </dd>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div><dt className="text-xs font-semibold uppercase tracking-widest text-berry">Phone</dt><dd className="mt-1 break-words">{SALON.phone}</dd></div>
                <div><dt className="text-xs font-semibold uppercase tracking-widest text-berry">Email</dt><dd className="mt-1 break-words">{SALON.email}</dd></div>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {SALON.socials.map((s) => (
                  <a key={s} href="#visit" className="inline-flex min-h-11 items-center rounded-full border border-berry/30 bg-paper px-4 text-sm font-medium text-berry transition hover:bg-berry hover:text-white">{s}</a>
                ))}
              </div>
            </dl>
          </div>
          <Reveal>
            <div role="img" aria-label="Map placeholder" className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-3xl border border-line bg-paper lg:aspect-auto lg:min-h-96">
              <svg aria-hidden className="absolute inset-0 h-full w-full text-blush-deep" fill="none" stroke="currentColor" strokeWidth="2"><path d="M-20 80 L140 40 L300 120 L460 60 L620 140" /><path d="M60 -10 L90 120 L70 260 L120 420" /><path d="M200 -10 L240 160 L220 300 L280 420" /><path d="M-20 220 L180 200 L360 260 L560 220" /></svg>
              <div className="relative text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-berry text-xl text-white shadow-lg">●</span>
                <p className="mt-3 rounded-full bg-paper/90 px-4 py-1.5 text-sm font-semibold">Map placeholder</p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <footer className="bg-berry-dark text-cream">
        <Container className="py-14 sm:py-20">
          <div className="flex flex-col gap-8 border-b border-cream/20 pb-12 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-xl font-display text-4xl font-light leading-tight sm:text-5xl md:text-6xl">Your <em className="text-blush-deep">you-time</em> is waiting.</h2>
            <ButtonLink href="#book" variant="light" className="w-full md:w-auto">Book an Appointment</ButtonLink>
          </div>
          <div className="grid gap-8 pt-10 sm:grid-cols-3">
            <div>
              <p className="font-display text-2xl">Blush &amp; Bloom Studio</p>
              <p className="mt-2 text-sm text-cream/75">Salon preview. All content is sample.</p>
            </div>
            <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-1 sm:flex-col">
              {[["Services", "#services"], ["Price List", "#prices"], ["About", "#about"], ["Contact", "#visit"]].map(([l, h]) => (
                <a key={h} href={h} className="inline-flex min-h-10 items-center text-sm text-cream/90 hover:underline">{l}</a>
              ))}
            </nav>
            <div className="break-words text-sm text-cream/80">
              <p>{SALON.phone}</p>
              <p className="mt-1">{SALON.email}</p>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}
