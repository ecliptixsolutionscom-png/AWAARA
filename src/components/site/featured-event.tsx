import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { featuredEvent, whatsappLink, whatsappMessages, events } from "@/data/site";
import { WhatsAppIcon } from "@/components/site/whatsapp";
import { Reveal } from "@/components/site/reveal";
import { formatDate } from "@/components/site/event-card";
import heroImg from "@/assets/hero.jpg";

/* ─────────────────────────────────────────────────────────────────────── */
/* COMING SOON — shown when there are no active upcoming events           */
/* ─────────────────────────────────────────────────────────────────────── */

export function ComingSoonSection() {
  return (
    <section
      id="coming-soon"
      className="grain relative overflow-hidden border-y border-border/60"
    >
      {/* ── Background: cinematic dark stage / spotlight ── */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={heroImg}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover object-center brightness-[0.25]"
        />
        {/* Deep black gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/95" />
        {/* Atmospheric spotlight — centre top */}
        <div
          className="absolute inset-x-0 top-0 mx-auto h-[60%] w-[60%]"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, oklch(0.58 0.22 26 / 22%) 0%, oklch(0.7 0.19 45 / 8%) 45%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        {/* Animated slow light sweep */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.7 0.19 45) 0%, transparent 50%, oklch(0.58 0.22 26) 100%)",
            animation: "coming-soon-sweep 8s ease-in-out infinite alternate",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative mx-auto max-w-[1400px] px-5 py-28 text-center sm:px-8 sm:py-40 lg:py-52">
        <Reveal>
          <p className="eyebrow text-primary/80 mb-8 tracking-[0.36em]">Next Up</p>
          <h2 className="text-[clamp(2.8rem,14vw,7rem)] leading-[0.86] font-extrabold uppercase">
            The next night
            <br />
            <span className="text-heat">is coming.</span>
          </h2>
          <p className="text-muted-foreground mx-auto mt-8 max-w-lg text-base leading-relaxed sm:text-lg">
            We're working behind the scenes on our next AWAARA experience.
          </p>
          <p className="text-muted-foreground/60 mt-4 text-xs font-semibold tracking-[0.28em] uppercase">
            New Artists&nbsp;•&nbsp;New Cities&nbsp;•&nbsp;New Energy
          </p>

          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/"
              hash="newsletter"
              className="bg-heat text-primary-foreground glow rounded-full px-10 py-4 text-xs font-bold tracking-[0.22em] uppercase transition-transform duration-300 hover:scale-[1.03]"
            >
              Join the AWAARA List
            </Link>
          </div>
        </Reveal>
      </div>

      {/* Inline keyframe for light sweep */}
      <style>{`
        @keyframes coming-soon-sweep {
          from { transform: translateX(-10%) scaleX(0.9); opacity: 0.04; }
          to   { transform: translateX(10%) scaleX(1.1); opacity: 0.09; }
        }
      `}</style>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────── */
/* FEATURED EVENT — shown when activeEvents.length > 0                   */
/* ─────────────────────────────────────────────────────────────────────── */

function useCountdown(target: string) {
  const [left, setLeft] = useState<number | null>(null);
  useEffect(() => {
    const end = new Date(`${target}T21:00:00`).getTime();
    const tick = () => setLeft(Math.max(0, end - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  const ms = left ?? 0;
  return [
    { label: "Days",    value: Math.floor(ms / 86400000) },
    { label: "Hours",   value: Math.floor((ms / 3600000) % 24) },
    { label: "Minutes", value: Math.floor((ms / 60000) % 60) },
    { label: "Seconds", value: Math.floor((ms / 1000) % 60) },
  ];
}

export function FeaturedEvent() {
  const e = featuredEvent;
  const units = useCountdown(e.date);

  return (
    <section className="border-border/60 border-y">
      <div className="mx-auto grid max-w-[1400px] items-stretch gap-0 lg:grid-cols-2">
        <Reveal className="relative min-h-[340px] overflow-hidden sm:min-h-[420px] lg:min-h-[680px]">
          <img
            src={e.image}
            alt={`${e.title} featured event poster`}
            loading="lazy"
            width={1024}
            height={1280}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="from-background/70 absolute inset-0 bg-gradient-to-t to-transparent lg:bg-gradient-to-r" />
        </Reveal>

        <Reveal className="flex flex-col justify-center px-5 py-14 sm:px-10 lg:py-20" delay={80}>
          <p className="eyebrow mb-5">Featured Event</p>
          <h2 className="text-[clamp(2.5rem,13vw,3.75rem)] leading-[0.9] font-extrabold uppercase sm:text-6xl">
            {e.title}
          </h2>
          <p className="text-muted-foreground mt-5 text-sm tracking-[0.12em] uppercase">
            {formatDate(e.date)} • {e.city} • {e.venue}
          </p>
          <p className="text-muted-foreground mt-5 max-w-xl leading-relaxed">{e.description}</p>
          <p className="text-gold mt-5 text-sm font-semibold tracking-[0.18em] uppercase">
            {e.artists.join(" • ")}
          </p>

          <div className="mt-9 grid max-w-md grid-cols-2 gap-3 min-[420px]:grid-cols-4">
            {units.map((u) => (
              <div
                key={u.label}
                className="border-border/70 bg-surface rounded-lg border px-2 py-4 text-center"
              >
                <p className="font-display text-2xl font-extrabold tabular-nums sm:text-3xl">
                  {String(u.value).padStart(2, "0")}
                </p>
                <p className="text-muted-foreground mt-1 text-[0.6rem] tracking-[0.18em] uppercase">
                  {u.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            {e.ticketUrl ? (
              <a
                href={e.ticketUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-heat text-primary-foreground rounded-full px-8 py-4 text-center text-xs font-bold tracking-[0.22em] uppercase transition-transform duration-300 hover:scale-[1.03]"
              >
                Get Tickets
              </a>
            ) : (
              <Link
                to="/ticket/$slug"
                params={{ slug: e.slug }}
                className="bg-heat text-primary-foreground rounded-full px-8 py-4 text-center text-xs font-bold tracking-[0.22em] uppercase transition-transform duration-300 hover:scale-[1.03]"
              >
                Get Tickets
              </Link>
            )}
            <a
              href={whatsappLink(whatsappMessages.event(e.title))}
              target="_blank"
              rel="noopener noreferrer"
              className="border-border/70 hover:bg-surface-2 inline-flex items-center justify-center gap-2 rounded-full border px-8 py-4 text-xs font-bold tracking-[0.22em] uppercase transition-colors"
            >
              <WhatsAppIcon className="h-4 w-4" /> WhatsApp Us
            </a>
            <Link
              to="/events/$slug"
              params={{ slug: e.slug }}
              className="text-muted-foreground hover:text-foreground inline-flex items-center justify-center px-2 py-4 text-xs font-bold tracking-[0.22em] uppercase transition-colors"
            >
              Details
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* Re-export for backward-compat with any other import */
export { events };
