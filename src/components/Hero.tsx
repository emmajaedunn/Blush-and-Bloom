import { IMG } from "../data";
import { ButtonLink, Container, Reveal } from "./ui";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-24 sm:pt-28 lg:pt-32">
      <div aria-hidden className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-blush blur-3xl sm:h-[28rem] sm:w-[28rem]" />
      <Container className="relative grid items-center gap-10 pb-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:pb-24">
        <Reveal>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-2 text-xs font-semibold text-berry sm:text-sm">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-rose" />
            Your local space for hair, nails &amp; beauty
          </p>
          <h1 className="font-display text-[2.75rem] font-light leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-[5.5rem]">
            Make time
            <br />
            for <em className="font-normal text-berry">yourself.</em>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg">
            A calm, unhurried studio where every appointment is a small act of care. Come as you are, leave feeling like the best version of you.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <ButtonLink href="#book">Book an Appointment</ButtonLink>
            <ButtonLink href="#services" variant="ghost">
              Explore Services
            </ButtonLink>
          </div>
        </Reveal>
        <Reveal delay={150} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-3xl bg-blush-deep shadow-[0_30px_60px_-30px_rgba(122,31,69,0.45)]">
            <img src={IMG.hero} alt="A client having her hair styled by a stylist in a bright salon" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-5 left-2 rounded-2xl border border-line bg-paper px-4 py-3 shadow-lg sm:-left-4 sm:px-5 sm:py-4">
            <p className="font-display text-2xl text-berry sm:text-3xl">4.9 ★</p>
            <p className="text-xs text-muted">Sample rating · placeholder</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
