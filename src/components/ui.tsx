import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`reveal ${shown ? "is-in" : ""} ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-berry">{children}</p>;
}

export function SectionHeading({ eyebrow, children, intro }: { eyebrow: string; children: ReactNode; intro?: string }) {
  return (
    <div className="mb-10 max-w-2xl md:mb-14">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="font-display text-[2rem] font-light leading-[1.08] text-ink sm:text-5xl md:text-6xl">{children}</h2>
      {intro && <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{intro}</p>}
    </div>
  );
}

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-[15px] font-semibold transition duration-300 active:scale-[0.98]";

export function ButtonLink({ href, children, variant = "primary", className = "", ...rest }: { href: string; children: ReactNode; variant?: "primary" | "ghost" | "light"; className?: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const styles = {
    primary: "bg-berry text-white shadow-[0_8px_24px_-10px_rgba(122,31,69,0.7)] hover:-translate-y-0.5 hover:bg-berry-dark",
    ghost: "border border-ink/25 text-ink hover:border-berry hover:text-berry",
    light: "bg-cream text-berry hover:-translate-y-0.5 hover:bg-white",
  }[variant];
  return (
    <a href={href} className={`${base} ${styles} ${className}`} {...rest}>
      {children}
    </a>
  );
}

export const Container = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 ${className}`}>{children}</div>
);
