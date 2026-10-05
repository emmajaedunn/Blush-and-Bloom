import { useEffect, useState, type FormEvent } from "react";
import { SALON } from "../data";
import { ButtonLink, Container, Reveal, SectionHeading } from "./ui";

const OPTIONS = ["Hair", "Nails", "Brows & Lashes", "Skin", "Not sure yet"];
const TIMES = ["Morning (09:00 – 12:00)", "Afternoon (12:00 – 15:00)", "Late afternoon (15:00 – 18:00)"];
type Errors = Partial<Record<"name" | "contact" | "service" | "date" | "time", string>>;

const field =
  "mt-1.5 block min-h-12 w-full rounded-xl border bg-white px-4 text-base text-ink placeholder:text-muted/70 transition focus:border-berry focus:outline-none focus:ring-2 focus:ring-berry/25";

export default function Booking() {
  const [service, setService] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState<{ name: string } | null>(null);
  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    const h = (e: Event) => setService((e as CustomEvent<string>).detail);
    window.addEventListener("pick-service", h);
    return () => window.removeEventListener("pick-service", h);
  }, []);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = (k: string) => String(f.get(k) ?? "").trim();
    const err: Errors = {};
    if (!v("name")) err.name = "Please tell us your name.";
    const c = v("contact");
    if (!c) err.contact = "Add an email or phone number so we can reach you.";
    else if (!/^\S+@\S+\.\S+$/.test(c) && c.replace(/\D/g, "").length < 9) err.contact = "That doesn't look like an email or phone number.";
    if (!service) err.service = "Choose a service.";
    if (!v("date")) err.date = "Pick a preferred date.";
    if (!v("time")) err.time = "Pick a preferred time.";
    setErrors(err);
    if (Object.keys(err).length === 0) setSent({ name: v("name").split(" ")[0] });
  }

  const Err = ({ k }: { k: keyof Errors }) =>
    errors[k] ? (
      <p id={`${k}-err`} role="alert" className="mt-1.5 text-sm font-medium text-berry">
        {errors[k]}
      </p>
    ) : null;
  const inv = (k: keyof Errors) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `${k}-err` : undefined });
  const border = (k: keyof Errors) => (errors[k] ? "border-berry" : "border-line");

  return (
    <section id="book" className="py-16 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <SectionHeading eyebrow="Book & enquire" intro="Tell us what you have in mind and when suits you. We'll confirm availability by email, phone or WhatsApp.">
            Let&apos;s find a <em className="text-berry">time</em> for you
          </SectionHeading>
          <div className="rounded-3xl bg-berry p-6 text-white sm:p-8">
            <h3 className="font-display text-2xl">Prefer to chat?</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-white/85">Send us a quick message with a photo or question.</p>
            <ButtonLink href={SALON.whatsapp} variant="light" className="mt-5 w-full sm:w-auto" target="_blank" rel="noreferrer">
              Ask us on WhatsApp
            </ButtonLink>
            <p className="mt-3 text-xs text-white/75">Placeholder number — replace before launch.</p>
          </div>
        </div>

        <Reveal>
          <div className="rounded-3xl border border-line bg-paper p-5 shadow-[0_30px_50px_-35px_rgba(122,31,69,0.35)] sm:p-8">
            {sent ? (
              <div role="status" className="py-8 text-center sm:py-12">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blush text-3xl text-berry">✓</div>
                <h3 className="mt-6 font-display text-3xl text-ink">Thank you, {sent.name}.</h3>
                <p className="mx-auto mt-3 max-w-sm text-muted">
                  Your request has been noted. In a real salon, the team would now confirm availability with you. No appointment has been booked.
                </p>
                <p className="mx-auto mt-4 max-w-sm rounded-xl bg-blush/60 px-4 py-3 text-sm text-ink">Front-end demo: nothing was sent or saved.</p>
                <button onClick={() => { setSent(null); setService(""); }} className="mt-6 min-h-11 text-sm font-semibold text-berry underline underline-offset-4">
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label htmlFor="name" className="text-sm font-semibold">Name</label>
                  <input id="name" name="name" autoComplete="name" placeholder="Your full name" className={`${field} ${border("name")}`} {...inv("name")} />
                  <Err k="name" />
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="contact" className="text-sm font-semibold">Email or phone</label>
                  <input id="contact" name="contact" autoComplete="email" placeholder="you@example.com or 082…" className={`${field} ${border("contact")}`} {...inv("contact")} />
                  <Err k="contact" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="service" className="text-sm font-semibold">Service</label>
                  <select id="service" value={service} onChange={(e) => setService(e.target.value)} className={`${field} ${border("service")}`} {...inv("service")}>
                    <option value="">Choose a service</option>
                    {OPTIONS.map((o) => <option key={o}>{o}</option>)}
                  </select>
                  <Err k="service" />
                </div>
                <div>
                  <label htmlFor="date" className="text-sm font-semibold">Preferred date</label>
                  <input id="date" name="date" type="date" min={today} className={`${field} ${border("date")}`} {...inv("date")} />
                  <Err k="date" />
                </div>
                <div>
                  <label htmlFor="time" className="text-sm font-semibold">Preferred time</label>
                  <select id="time" name="time" defaultValue="" className={`${field} ${border("time")}`} {...inv("time")}>
                    <option value="">Choose a time</option>
                    {TIMES.map((t) => <option key={t}>{t}</option>)}
                  </select>
                  <Err k="time" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="text-sm font-semibold">
                    Message <span className="font-normal text-muted">(optional)</span>
                  </label>
                  <textarea id="message" name="message" rows={4} placeholder="Hair length, inspiration, allergies…" className={`${field} min-h-28 border-line py-3`} />
                </div>
                <div className="sm:col-span-2">
                  <button type="submit" className="min-h-13 w-full rounded-full bg-berry px-6 py-3.5 text-base font-semibold text-white transition hover:bg-berry-dark active:scale-[0.99]">
                    Request appointment
                  </button>
                  <p className="mt-3 text-center text-xs leading-relaxed text-muted">
                    The salon will confirm availability before anything is booked. This form is a front-end demo and doesn&apos;t send data.
                  </p>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
