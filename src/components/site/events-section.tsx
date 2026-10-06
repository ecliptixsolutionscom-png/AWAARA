import { useMemo, useState } from "react";
import { categories, activeEvents, experiences, type Category } from "@/data/site";
import { EventCard } from "@/components/site/event-card";
import { Reveal, SectionHeading } from "@/components/site/reveal";
import { cn } from "@/lib/utils";

/** Switch: set to true and add real events to data/site.ts to re-enable the events grid */
// activeEvents is imported from data/site.ts — set it to [] for evergreen mode

/* ─────────────────────────────────────────────────────────────────────── */
/* THE AWAARA EXPERIENCE — evergreen 4-card section shown when no events  */
/* ─────────────────────────────────────────────────────────────────────── */

export function AwaaraExperienceSection() {
  return (
    <section
      id="experiences"
      className="mx-auto max-w-[1400px] scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28"
    >
      <SectionHeading
        eyebrow="What we create"
        title={
          <>
            More than an event.
            <br />
            <span className="text-heat">It's an experience.</span>
          </>
        }
        subtitle="From high-energy DJ nights and live Punjabi performances to Bollywood experiences and premium celebrations, AWAARA creates unforgettable moments for Canada's Desi community."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {experiences.map((x, i) => (
          <Reveal key={x.title} delay={i * 80} as="article">
            <div className="group border-border/70 relative aspect-[3/4] overflow-hidden rounded-xl border transition-all duration-500 hover:border-primary/40">
              <img
                src={x.image}
                alt={x.title}
                loading="lazy"
                width={1024}
                height={1280}
                className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.04] group-hover:brightness-110"
              />
              {/* Bottom gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent" />
              {/* Subtle red glow on hover */}
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 100%, oklch(0.58 0.22 26 / 18%) 0%, transparent 65%)",
                }}
                aria-hidden="true"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 transition-transform duration-500 group-hover:-translate-y-2">
                <p className="eyebrow text-primary/80 mb-2">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-xl font-extrabold uppercase">{x.title}</h3>
                <p className="text-muted-foreground mt-2 max-h-0 overflow-hidden text-sm leading-relaxed transition-all duration-500 group-hover:max-h-28">
                  {x.copy}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────── */
/* EVENTS SECTION — shown when activeEvents.length > 0                   */
/* ─────────────────────────────────────────────────────────────────────── */

export function EventsSection() {
  const [active, setActive] = useState<Category>("All");

  const filtered = useMemo(() => {
    if (active === "All") return activeEvents;
    return activeEvents.filter((e) => e.category === active);
  }, [active]);

  // When no active events, this component is not rendered (index.tsx handles the switch)
  return (
    <section
      id="events"
      className="mx-auto max-w-[1400px] scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28"
    >
      <SectionHeading
        eyebrow="Tickets on sale now"
        title="Upcoming Events"
        subtitle="Your next unforgettable night is already on the calendar."
      />

      <Reveal className="no-scrollbar mt-10 flex gap-2 overflow-x-auto pb-1">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(c)}
            className={cn(
              "shrink-0 rounded-full border px-5 py-2.5 text-[0.7rem] font-semibold tracking-[0.18em] uppercase transition-colors",
              active === c
                ? "bg-heat text-primary-foreground border-transparent"
                : "border-border/70 text-muted-foreground hover:text-foreground",
            )}
          >
            {c}
          </button>
        ))}
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((e, i) => (
          <Reveal key={e.id} delay={i * 70} as="div">
            <EventCard event={e} />
          </Reveal>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-muted-foreground mt-12 text-center text-sm">
          No events in this category right now — new dates drop every month.
        </p>
      )}
    </section>
  );
}
