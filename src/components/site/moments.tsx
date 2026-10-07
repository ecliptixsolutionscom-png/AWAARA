import { ArrowUpRight } from "lucide-react";
import { cities, gallery, brand } from "@/data/site";
import { Reveal, SectionHeading } from "@/components/site/reveal";
import { whatsappLink, whatsappMessages } from "@/data/site";
import event1 from "@/assets/event-1.jpg";

export function BrandStory() {
  return (
    <section
      id="about"
      className="bg-surface/40 border-border/60 scroll-mt-24 border-y py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            eyebrow="Our story"
            title={
              <>
                More than an event.
                <br />
                <span className="text-heat">It's an experience.</span>
              </>
            }
          />
          <Reveal delay={120}>
            <div className="text-muted-foreground space-y-5 text-base leading-relaxed sm:text-lg">
              <p>
                AWAARA is built around the energy of music, culture and community.
                From intimate nights to packed venues, we create experiences that stay
                with you long after the lights go down.
              </p>
              <p>
                From warehouse DJ nights in Toronto to live Punjabi concerts in
                Vancouver, every AWAARA event is built around authentic South Asian
                culture and a modern nightlife standard — sold-out rooms, real
                artists, zero compromise.
              </p>
            </div>

            {/* Three pillars */}
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {[
                {
                  label: "Music",
                  copy: "Curated sounds. Unforgettable performances.",
                },
                {
                  label: "Culture",
                  copy: "Rooted in South Asian identity.",
                },
                {
                  label: "Community",
                  copy: "Bringing people together across Canada.",
                },
              ].map((pillar) => (
                <div key={pillar.label} className="border-border/50 border-l pl-4">
                  <p className="text-heat text-xs font-bold tracking-[0.22em] uppercase">
                    {pillar.label}
                  </p>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                    {pillar.copy}
                  </p>
                </div>
              ))}
            </div>

          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Cities ---------------- */

export function CitiesSection() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading eyebrow="Where we are" title="We bring the night to you" />
      <Reveal className="mt-12">
        <ul className="border-border/60 border-t">
          {cities.map((c) => (
            <li
              key={c.name}
              className="border-border/60 group flex flex-col items-start gap-2 border-b py-5 transition-colors hover:bg-surface/60 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:py-7"
            >
              <span className="font-display text-[clamp(2rem,12vw,3.75rem)] font-extrabold uppercase transition-transform duration-500 group-hover:translate-x-2 sm:text-6xl">
                {c.name}
              </span>
              <span className="text-muted-foreground flex items-center gap-4 text-xs tracking-[0.2em] uppercase">
                {c.events} Events
                <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

/* ---------------- Gallery — THE NIGHTS WE'VE CREATED ---------------- */

export function GallerySection() {
  return (
    <section
      id="gallery"
      className="bg-surface/40 border-border/60 scroll-mt-24 border-y py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Past experiences"
          title={
            <>
              The nights
              <br />
              <span className="text-heat">we've created</span>
            </>
          }
          subtitle="A look back at the artists, energy and moments that have made AWAARA unforgettable."
        />
        <div className="mt-12 columns-2 gap-4 [column-fill:balance] sm:columns-3">
          {gallery.map((g, i) => (
            <Reveal key={i} className="mb-4 break-inside-avoid">
              <div className="group relative overflow-hidden rounded-lg">
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                />
                {/* Hover overlay with location label */}
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                  <p className="eyebrow text-foreground/80 p-4">{g.location ?? ""}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <a
            href={brand.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="border-border/70 hover:bg-surface-2 inline-block rounded-full border px-8 py-4 text-xs font-bold tracking-[0.22em] uppercase transition-colors"
          >
            View All on Instagram
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Bring AWAARA to Your City ---------------- */

export function BringAwaaraSection() {
  return (
    <section className="grain relative overflow-hidden border-y border-border/60">
      {/* Background image */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={event1}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover brightness-[0.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/60" />
        {/* Subtle red atmospheric glow */}
        <div
          className="absolute bottom-0 right-0 h-[60%] w-[50%] opacity-[0.12]"
          style={{
            background:
              "radial-gradient(ellipse at 100% 100%, oklch(0.58 0.22 26) 0%, transparent 65%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <p className="eyebrow mb-5 text-primary/80 tracking-[0.3em]">Partner with AWAARA</p>
            <h2 className="text-[clamp(2rem,11vw,3.5rem)] leading-[0.9] font-extrabold uppercase sm:text-5xl lg:text-6xl">
              Bring AWAARA
              <br />
              <span className="text-heat">to your city.</span>
            </h2>
            <p className="text-muted-foreground mt-6 max-w-lg text-base leading-relaxed sm:text-lg">
              Looking to bring a premium Desi entertainment experience to your venue,
              university, brand or private celebration?
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink(whatsappMessages.private)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-heat text-primary-foreground rounded-full px-8 py-4 text-center text-xs font-bold tracking-[0.22em] uppercase transition-transform duration-300 hover:scale-[1.03]"
              >
                Partner with Us
              </a>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  title: "Concerts",
                  copy: "Full production live shows with touring artists and premium staging.",
                },
                {
                  title: "University Events",
                  copy: "Campus nights that bring the community together at scale.",
                },
                {
                  title: "Private Celebrations",
                  copy: "Birthdays, weddings, and milestone events with AWAARA energy.",
                },
                {
                  title: "Brand Activations",
                  copy: "Connect your brand to a passionate, culture-driven audience.",
                },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className="border-border/60 bg-surface/50 rounded-xl border p-5 backdrop-blur-sm transition-colors duration-300 hover:border-primary/40 hover:bg-surface/80"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <h3 className="font-display text-sm font-extrabold uppercase tracking-[0.08em]">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mt-2 text-xs leading-relaxed">
                    {item.copy}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Social marquee ---------------- */

export function SocialStrip() {
  const items = Array.from({ length: 8 }, (_, i) =>
    i % 2 === 0 ? brand.instagramHandle : "The Night Starts Here",
  );
  return (
    <section className="border-border/60 max-w-full overflow-hidden border-b py-6">
      <div className="marquee flex w-max max-w-none gap-10 whitespace-nowrap">
        {[...items, ...items].map((t, i) => (
          <span
            key={i}
            className="font-display flex items-center gap-10 text-lg font-bold tracking-[0.2em] uppercase opacity-40"
          >
            {t} <span className="text-heat">•</span>
          </span>
        ))}
      </div>
    </section>
  );
}
