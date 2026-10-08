import { useEffect, useRef, useState } from "react";
import { ChevronDown, Star } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  brand,
  faqs,
  inquiryTypes,
  testimonials,
  vipImage,
  whatsappLink,
  whatsappMessages,
} from "@/data/site";
import { WhatsAppIcon } from "@/components/site/whatsapp";
import { Reveal, SectionHeading } from "@/components/site/reveal";
import { SocialLinksCompact } from "@/components/site/social-icons";
import { trackEvent } from "@/lib/analytics";

/* ─────────────────────────────────────────────────────────────────────── */
/* AWAARA SERVICES SECTION                                                 */
/* ─────────────────────────────────────────────────────────────────────── */

import heroImg    from "@/assets/hero.jpg";
import event1Img  from "@/assets/event-1.jpg";
import event2Img  from "@/assets/event-2.jpg";
import event3Img  from "@/assets/event-3.jpg";
import event4Img  from "@/assets/event-4.jpg";
import vipImgSrc  from "@/assets/vip.jpg";

type ServiceItem = {
  num: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  /** focal point for object-position */
  imagePos?: string;
};

const awaaraServices: ServiceItem[] = [
  {
    num: "01",
    title: "Elitist Venues",
    description:
      "For an exclusive experience at every party, we choose the best venues around the city.",
    image: heroImg,
    imageAlt: "Premium nightclub interior with dramatic red stage lighting and crowd",
    imagePos: "center center",
  },
  {
    num: "02",
    title: "Bollywood Night",
    description:
      "Put on your party shoes and groove to the best of Bollywood tunes.",
    image: event2Img,
    imageAlt: "Bollywood vocalist performing live on stage with atmospheric lighting",
    imagePos: "center top",
  },
  {
    num: "03",
    title: "Bollywood in the House",
    description:
      "Making nights crazier with the best DJs playing Bollywood, House, Commercial and Top 40 Hits is our most treasured task.",
    image: event1Img,
    imageAlt: "DJ performing at a club with packed dancefloor and laser rigs",
    imagePos: "center top",
  },
  {
    num: "04",
    title: "VIP Service",
    description:
      "We have the most suitable VIP/Birthday packages to turn your private parties, birthdays and other occasions into a carnival.",
    image: vipImgSrc,
    imageAlt: "VIP lounge with premium bottle service and warm atmospheric lighting",
    imagePos: "center center",
  },
  {
    num: "05",
    title: "Branded Events",
    description:
      "Let us create a parallel universe for the people who go wild for great music and the most happening bunch of party animals.",
    image: event3Img,
    imageAlt: "Large-scale branded event with crowd and city skyline at night",
    imagePos: "center top",
  },
  {
    num: "06",
    title: "We Keep Coming Back!",
    description: "We will make you groove at our parties all round.",
    image: event4Img,
    imageAlt: "Energetic nightlife crowd dancing under confetti and colourful lights",
    imagePos: "center top",
  },
];

export function AwaaraServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 py-20 sm:py-28">

      {/* ── Heading ── */}
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow mb-5 tracking-[0.3em]">Our Experiences</p>
          <h2 className="text-[clamp(2.8rem,10vw,5.5rem)] leading-[0.88] font-extrabold uppercase">
            Our
            <br />
            <span className="text-heat">Services.</span>
          </h2>
        </Reveal>

        {/* Tagline — visually prominent, clearly separated */}
        <Reveal delay={80}>
          <p className="mt-7 mb-1 max-w-2xl border-l-2 border-primary pl-5 text-lg font-light italic leading-snug tracking-wide text-foreground/90 sm:text-xl lg:text-2xl">
            Where stories wander and memories stay.
          </p>
        </Reveal>
      </div>

      {/* ── Image-backed card grid ── */}
      <div className="mx-auto mt-16 max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {awaaraServices.map((s, i) => (
            <Reveal key={s.title} delay={i * 55} as="article">
              {/*
               * Card — full relative container.
               * Layer order (z-index):
               *   1 = background image
               *   2 = dark cinematic overlay
               *   3 = content
               */}
              <div className="group relative min-h-[320px] overflow-hidden rounded-sm border border-border/40 transition-all duration-500 hover:-translate-y-1 hover:border-border/80 hover:shadow-[0_0_40px_oklch(0.58_0.22_26_/_0.15)] sm:min-h-[360px]">

                {/* Layer 1 — background image */}
                <img
                  src={s.image}
                  alt={s.imageAlt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                  style={{ objectPosition: s.imagePos ?? "center center", zIndex: 1 }}
                />

                {/* Layer 2a — permanent dark base overlay so text is always readable */}
                <div
                  className="absolute inset-0"
                  style={{
                    zIndex: 2,
                    background:
                      "linear-gradient(to bottom, rgba(8,6,6,0.52) 0%, rgba(8,6,6,0.72) 55%, rgba(8,6,6,0.92) 100%)",
                  }}
                  aria-hidden="true"
                />

                {/* Layer 2b — red/orange atmospheric vignette, intensifies on hover */}
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    zIndex: 2,
                    background:
                      "radial-gradient(ellipse at 50% 110%, oklch(0.58 0.22 26 / 0.28) 0%, transparent 65%)",
                  }}
                  aria-hidden="true"
                />

                {/* Layer 2c — top accent bar slides in on hover */}
                <div
                  className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-primary to-orange-400 transition-transform duration-500 ease-out group-hover:scale-x-100"
                  style={{ zIndex: 3 }}
                  aria-hidden="true"
                />

                {/* Layer 3 — content */}
                <div
                  className="relative flex h-full min-h-[320px] flex-col justify-between p-7 sm:min-h-[360px] sm:p-8"
                  style={{ zIndex: 3 }}
                >
                  {/* Number — top right, large editorial watermark */}
                  <div className="flex justify-end">
                    <span
                      className="font-display select-none text-5xl font-extrabold tabular-nums leading-none text-white/20 transition-colors duration-300 group-hover:text-white/40"
                      aria-hidden="true"
                    >
                      {s.num}
                    </span>
                  </div>

                  {/* Title + description — pinned to bottom */}
                  <div className="flex flex-col gap-3">
                    <h3 className="font-display text-lg font-extrabold uppercase leading-tight tracking-[0.07em] text-white sm:text-xl">
                      {s.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/75 sm:text-[0.9375rem]">
                      {s.description}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────── */
/* VIP                                                                     */
/* ─────────────────────────────────────────────────────────────────────── */

export function VipSection() {
  return (
    <section className="grain relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={vipImage}
          alt="VIP table with champagne bottles and sparklers in a dark club"
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="from-background via-background/80 absolute inset-0 bg-gradient-to-r to-transparent" />
      </div>
      <div className="relative mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-36">
        <SectionHeading
          eyebrow="Tables • Bottle service • Suites"
          title={
            <>
              Make it
              <br />
              <span className="text-heat">VIP.</span>
            </>
          }
        />
        <Reveal delay={120}>
          <ul className="text-muted-foreground mt-8 grid max-w-lg gap-2 text-sm tracking-[0.08em] uppercase">
            {[
              "VIP tables",
              "Premium seating",
              "Bottle service",
              "Birthday packages",
              "Group bookings",
              "Private celebrations",
              "Corporate events",
            ].map((f) => (
              <li key={f} className="border-border/40 flex items-center gap-3 border-b py-2.5">
                <span className="text-gold">★</span> {f}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink(whatsappMessages.vip)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("vip_inquiry", { source: "vip_section" })}
              className="bg-heat text-primary-foreground rounded-full px-8 py-4 text-center text-xs font-bold tracking-[0.22em] uppercase transition-transform duration-300 hover:scale-[1.03]"
            >
              Book VIP
            </a>
            <a
              href={whatsappLink(whatsappMessages.vip)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("click_whatsapp", { source: "vip_section" })}
              className="border-border/70 hover:bg-surface-2 inline-flex items-center justify-center gap-2 rounded-full border px-8 py-4 text-xs font-bold tracking-[0.22em] uppercase transition-colors"
            >
              <WhatsAppIcon className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────── */
/* Private / corporate                                                     */
/* ─────────────────────────────────────────────────────────────────────── */

export function PrivateEventsSection() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <SectionHeading
          eyebrow="Private & corporate"
          title={
            <>
              Your event.
              <br />
              <span className="text-heat">Our energy.</span>
            </>
          }
          subtitle="From boardroom to ballroom — we produce the whole thing: artists, venue, production and hospitality."
        />
        <Reveal delay={120}>
          <ul className="grid grid-cols-1 gap-x-8 gap-y-3 text-sm min-[420px]:grid-cols-2 sm:text-base">
            {[
              "Corporate parties",
              "University events",
              "Private parties",
              "Brand activations",
              "College nights",
              "Cultural events",
              "Artist bookings",
              "Large-scale celebrations",
            ].map((f) => (
              <li key={f} className="border-border/40 border-b py-3">
                {f}
              </li>
            ))}
          </ul>
          <a
            href={whatsappLink(whatsappMessages.private)}
            target="_blank"
            rel="noopener noreferrer"
            className="border-border/70 hover:bg-surface-2 mt-10 inline-block rounded-full border px-8 py-4 text-xs font-bold tracking-[0.22em] uppercase transition-colors"
          >
            Plan an Event
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────── */
/* Testimonials                                                            */
/* ─────────────────────────────────────────────────────────────────────── */

export function TestimonialsSection() {
  const [i, setI] = useState(1);
  const [transition, setTransition] = useState(true);
  const [paused, setPaused] = useState(false);
  const [timerKey, setTimerKey] = useState(0);
  const timerRef = useRef<number | null>(null);
  const touchRef = useRef({ x: 0, y: 0 });
  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const slides = [testimonials[testimonials.length - 1]!, ...testimonials, testimonials[0]!];
  const active = (i - 1 + testimonials.length) % testimonials.length;

  const goTo = (nextIndex: number) => {
    setTransition(!reducedMotion);
    setI(nextIndex);
    setTimerKey((v) => v + 1);
  };

  const next = () => goTo(i + 1);
  const prev = () => goTo(i - 1);

  useEffect(() => {
    if (timerRef.current) window.clearInterval(timerRef.current);
    if (!paused && !reducedMotion) {
      timerRef.current = window.setInterval(() => setI((v) => v + 1), 3500);
    }
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [paused, reducedMotion, timerKey]);

  return (
    <section className="bg-surface/40 border-border/60 border-y py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <SectionHeading eyebrow="Word of mouth" title="What the night said" align="center" />
        <Reveal delay={100} className="mt-10">
          <div
            className="max-w-full overflow-hidden"
            aria-label="Testimonials carousel"
            aria-live="polite"
            tabIndex={0}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") next();
              if (e.key === "ArrowLeft") prev();
            }}
            onTouchStart={(e) => {
              touchRef.current = { x: e.touches[0]?.clientX ?? 0, y: e.touches[0]?.clientY ?? 0 };
            }}
            onTouchEnd={(e) => {
              const dx = (e.changedTouches[0]?.clientX ?? 0) - touchRef.current.x;
              const dy = (e.changedTouches[0]?.clientY ?? 0) - touchRef.current.y;
              if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
                dx < 0 ? next() : prev();
              }
            }}
          >
            <div
              className="flex"
              style={{
                transform: `translateX(-${i * 100}%)`,
                transition: transition && !reducedMotion ? "transform 600ms ease-in-out" : "none",
              }}
              onTransitionEnd={() => {
                if (i === testimonials.length + 1) {
                  setTransition(false);
                  setI(1);
                  requestAnimationFrame(() => setTransition(true));
                }
                if (i === 0) {
                  setTransition(false);
                  setI(testimonials.length);
                  requestAnimationFrame(() => setTransition(true));
                }
              }}
            >
              {slides.map((t, slide) => (
                <div
                  key={`${t.name}-${slide}`}
                  className="min-w-full shrink-0 px-1"
                  aria-hidden={slide !== i}
                >
                  <p className="text-gold flex justify-center gap-1">
                    {Array.from({ length: 5 }, (_, s) => (
                      <Star key={s} className="h-4 w-4 fill-current" />
                    ))}
                  </p>
                  <blockquote className="mt-6 text-xl leading-relaxed font-medium sm:text-2xl">
                    "{t.quote}"
                  </blockquote>
                  <p className="eyebrow mt-6">
                    {t.name} • {t.city} • {t.event}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex justify-center gap-2">
              {testimonials.map((_, d) => (
                <button
                  key={d}
                  type="button"
                  aria-label={`Show testimonial ${d + 1}`}
                  onClick={() => goTo(d + 1)}
                  className={
                    d === active
                      ? "bg-heat h-3 w-8 rounded-full transition-all"
                      : "bg-surface-2 h-3 w-3 rounded-full transition-all"
                  }
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────── */
/* Newsletter / Waitlist                                                   */
/* ─────────────────────────────────────────────────────────────────────── */

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section
      id="newsletter"
      className="mx-auto max-w-[1400px] scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28"
    >
      <Reveal className="border-border/70 from-surface-2 relative mx-auto max-w-3xl overflow-hidden rounded-xl border bg-gradient-to-b to-transparent p-8 text-center sm:p-14">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            background:
              "radial-gradient(ellipse at 50% 100%, oklch(0.58 0.22 26) 0%, transparent 65%)",
          }}
          aria-hidden="true"
        />
        <div className="relative">
          <h2 className="text-3xl font-extrabold uppercase sm:text-5xl">
            Don't miss
            <br />
            <span className="text-heat">the next one.</span>
          </h2>
          <p className="text-muted-foreground mx-auto mt-5 max-w-md leading-relaxed">
            Get first access to event announcements, artist reveals and early ticket drops.
          </p>
          {message ? (
            <p className="text-gold mt-8 text-sm font-semibold tracking-[0.18em] uppercase">
              {message}
            </p>
          ) : (
            <form
              className="mt-8 flex flex-col gap-3 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault();
                const valid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
                setMessage(
                  valid
                    ? "Newsletter signup needs a configured email service before launch."
                    : "Enter a valid email address.",
                );
              }}
            >
              <label className="sr-only" htmlFor="newsletterEmail">
                Email address
              </label>
              <input
                id="newsletterEmail"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                aria-label="Email address"
                className="border-input bg-background/60 placeholder:text-muted-foreground/60 flex-1 rounded-full border px-6 py-4 text-sm outline-none focus:ring-1 focus:ring-current"
              />
              <button
                type="submit"
                className="bg-heat text-primary-foreground rounded-full px-8 py-4 text-xs font-bold tracking-[0.22em] uppercase transition-transform duration-300 hover:scale-[1.03]"
              >
                Join the List
              </button>
            </form>
          )}
          {!message && (
            <p className="text-muted-foreground/50 mt-4 text-xs tracking-[0.12em]">
              No spam. Just AWAARA.
            </p>
          )}
        </div>
      </Reveal>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────── */
/* FAQ                                                                     */
/* ─────────────────────────────────────────────────────────────────────── */

export function FaqSection() {
  return (
    <section id="faq" className="mx-auto max-w-[1400px] scroll-mt-24 px-5 pb-20 sm:px-8 sm:pb-28">
      <SectionHeading eyebrow="Good to know" title="Questions, answered" />
      <Reveal delay={100} className="mt-10 max-w-3xl">
        <Accordion type="single" collapsible className="gap-0">
          {faqs.map((f, idx) => (
            <AccordionItem key={idx} value={`faq-${idx}`} className="border-border/60">
              <AccordionTrigger className="min-w-0 gap-4 py-5 text-left text-base leading-snug font-semibold hover:no-underline sm:text-lg">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────── */
/* Contact                                                                 */
/* ─────────────────────────────────────────────────────────────────────── */

const inputCls =
  "border-input bg-background/60 placeholder:text-muted-foreground/60 w-full rounded-lg border px-4 py-3.5 text-sm outline-none focus:ring-1 focus:ring-current";

export function ContactSection() {
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  return (
    <section
      id="contact"
      className="bg-surface/40 border-border/60 scroll-mt-24 border-t py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-[1400px] gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-24">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title={
              <>
                Let's make
                <br />
                it happen.
              </>
            }
            subtitle="General inquiries, bookings, VIP, artists or partnerships — reach the right desk."
          />
          <Reveal delay={120} className="mt-10 space-y-6">
            <div>
              <p className="eyebrow mb-1">Email</p>
              <a href={`mailto:${brand.email}`} className="text-lg font-semibold">
                {brand.email}
              </a>
            </div>
            <div>
              <p className="eyebrow mb-1">Phone</p>
              <a href={`tel:${brand.phone.replace(/[^+\d]/g, "")}`} className="text-lg font-semibold">
                {brand.phone}
              </a>
            </div>
            <div>
              <p className="eyebrow mb-3">Social</p>
              <SocialLinksCompact />
            </div>
          </Reveal>
        </div>

        <Reveal delay={160}>
          {status ? (
            <div className="border-border/70 flex h-full min-h-[420px] flex-col items-center justify-center rounded-xl border p-10 text-center">
              <p className="text-heat font-display text-4xl font-extrabold uppercase">
                Inquiry not sent yet.
              </p>
              <p className="text-muted-foreground mt-4">{status}</p>
              <button
                type="button"
                onClick={() => setStatus("")}
                className="border-border/70 hover:bg-surface-2 mt-6 rounded-full border px-7 py-3 text-xs font-bold tracking-[0.22em] uppercase"
              >
                Edit Inquiry
              </button>
            </div>
          ) : (
            <form
              className="grid gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                if (submitting) return;
                const form = new FormData(e.currentTarget);
                const email = String(form.get("email") ?? "").trim();
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
                  setStatus("Please enter a valid email address.");
                  return;
                }
                setSubmitting(true);
                trackEvent("submit_contact_form", { configured: false });
                setStatus(
                  "A contact form backend is not configured yet. Connect an email, CRM, or form service before production launch.",
                );
                setSubmitting(false);
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="sr-only" htmlFor="contactName">Name</label>
                <input id="contactName" name="name" required placeholder="Name" className={inputCls} />
                <label className="sr-only" htmlFor="contactEmail">Email</label>
                <input
                  id="contactEmail"
                  name="email"
                  required
                  type="email"
                  placeholder="Email"
                  className={inputCls}
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="sr-only" htmlFor="contactPhone">Phone</label>
                <input id="contactPhone" name="phone" placeholder="Phone" className={inputCls} />
                <label className="sr-only" htmlFor="contactCity">City</label>
                <input id="contactCity" name="city" placeholder="City" className={inputCls} />
              </div>
              <label className="sr-only" htmlFor="contactInquiry">Inquiry type</label>
              <select
                id="contactInquiry"
                name="inquiryType"
                required
                defaultValue=""
                className={inputCls}
              >
                <option value="" disabled>Inquiry Type</option>
                {inquiryTypes.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
              <label className="sr-only" htmlFor="contactMessage">Message</label>
              <textarea
                id="contactMessage"
                name="message"
                required
                placeholder="Message"
                rows={5}
                className={inputCls}
              />
              <button
                type="submit"
                className="bg-heat text-primary-foreground mt-2 w-full rounded-full px-8 py-4 text-xs font-bold tracking-[0.22em] uppercase transition-transform duration-300 hover:scale-[1.02] sm:w-auto"
                disabled={submitting}
                aria-disabled={submitting}
              >
                {submitting ? "Sending..." : "Send Inquiry"}
              </button>
            </form>
          )}
        </Reveal>
      </div>
      <div className="mx-auto mt-16 max-w-[1400px] px-5 sm:px-8">
        <ChevronDown className="text-muted-foreground/40 mx-auto h-5 w-5" aria-hidden="true" />
      </div>
    </section>
  );
}
