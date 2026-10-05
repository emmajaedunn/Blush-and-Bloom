import { useEffect, useState } from "react";
import { ButtonLink, Container } from "./ui";

const LINKS = [
  ["Services", "#services"],
  ["Price List", "#prices"],
  ["About", "#about"],
  ["Contact", "#visit"],
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${scrolled || open ? "bg-cream/90 shadow-[0_1px_0_var(--color-line)] backdrop-blur-md" : ""}`}>
      <Container className="flex h-16 items-center justify-between md:h-20">
        <a href="#top" className="whitespace-nowrap font-display text-xl font-medium tracking-tight text-ink sm:text-2xl" onClick={() => setOpen(false)}>
          Blush <em className="font-light text-berry">&amp;</em> Bloom
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
          {LINKS.map(([l, h]) => (
            <a key={h} href={h} className="text-[15px] font-medium text-ink/80 transition hover:text-berry">
              {l}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <ButtonLink href="#book" className="min-h-11">
            Book an Appointment
          </ButtonLink>
        </div>
        <button
          className="-mr-2 flex h-11 w-11 items-center justify-center rounded-full md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="relative block h-3.5 w-6">
            <span className={`absolute left-0 h-0.5 w-6 bg-ink transition duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-3 h-0.5 w-6 bg-ink transition duration-300 ${open ? "top-1.5 -rotate-45" : ""}`} />
          </span>
        </button>
      </Container>
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-16 h-[calc(100dvh-4rem)] bg-cream px-5 pt-6 transition duration-300 md:hidden ${open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"}`}
      >
        <nav aria-label="Mobile" className="flex flex-col">
          {LINKS.map(([l, h]) => (
            <a key={h} href={h} onClick={() => setOpen(false)} className="border-b border-line py-5 font-display text-3xl font-light text-ink">
              {l}
            </a>
          ))}
        </nav>
        <ButtonLink href="#book" className="mt-8 w-full" onClick={() => setOpen(false)}>
          Book an Appointment
        </ButtonLink>
        <p className="mt-6 text-center text-sm text-muted">Sample studio — details are placeholders.</p>
      </div>
    </header>
  );
}
