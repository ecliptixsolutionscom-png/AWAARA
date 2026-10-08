import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowDown } from "lucide-react";
import { heroSlides, brand } from "@/data/site";
import { trackEvent } from "@/lib/analytics";

const SLIDE_DURATION = 5000; // ms each slide stays visible
const FADE_DURATION  = 800;  // ms for the CSS crossfade transition

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (index: number) => {
    setPrev(current);
    setCurrent(index);
  };

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((c) => {
        setPrev(c);
        return (c + 1) % heroSlides.length;
      });
    }, SLIDE_DURATION);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Clear the "prev" layer once the fade completes so it stops painting
  useEffect(() => {
    if (prev === null) return;
    const id = setTimeout(() => setPrev(null), FADE_DURATION + 50);
    return () => clearTimeout(id);
  }, [prev]);

  return (
    <section id="top" className="grain relative min-h-[100svh] overflow-hidden">
      {/* ── Background image layers ─────────────────────────────────────── */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* Outgoing slide — sits below, fades out */}
        {prev !== null && (() => {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          const prevSlide = heroSlides[prev]!;
          return (
            <img
              key={`prev-${prev}`}
              src={prevSlide.image}
              alt=""
              width={1920}
              height={1024}
              className="absolute inset-0 h-full w-full object-cover"
              style={{ zIndex: 1, objectPosition: prevSlide.heroPosition }}
            />
          );
        })()}

        {/* Incoming slide — fades in on top */}
        {(() => {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          const currSlide = heroSlides[current]!;
          return (
            <img
              key={`curr-${current}`}
              src={currSlide.image}
              alt={currSlide.alt}
              width={1920}
              height={1024}
              className="absolute inset-0 h-full w-full object-cover"
              style={{
                zIndex: 2,
                objectPosition: currSlide.heroPosition,
                animation: `hero-fade-in ${FADE_DURATION}ms ease-in-out forwards`,
              }}
            />
          );
        })()}

        {/* Cinematic overlays — always on top of images */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/35 to-background/95"
          style={{ zIndex: 3 }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/20 to-transparent"
          style={{ zIndex: 3 }}
        />

        {/* Subtle red/orange atmospheric bloom — bottom-left */}
        <div
          className="absolute bottom-0 left-0 h-[50%] w-[40%] rounded-full opacity-[0.07]"
          style={{
            zIndex: 3,
            background: "radial-gradient(ellipse, oklch(0.58 0.22 26) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div
        className="relative mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-end px-5 pt-28 pb-12 sm:px-8 sm:pt-32 sm:pb-16"
        style={{ zIndex: 4 }}
      >
        {/* Slide accent label — only shown when the slide has an accent string */}
        {heroSlides[current]?.accent && (
          <p
            key={current}
            className="eyebrow text-foreground/70 mb-6"
            style={{ animation: `hero-fade-in ${FADE_DURATION}ms ease-in-out forwards` }}
          >
            {heroSlides[current]?.accent}
          </p>
        )}

        <h1 className="max-w-4xl text-[clamp(3rem,15vw,5rem)] leading-[0.86] font-extrabold tracking-tight uppercase sm:text-8xl lg:text-[8.5rem]">
          The night
          <br />
          <span className="text-heat">starts here.</span>
        </h1>

        <p className="text-muted-foreground mt-4 max-w-sm text-sm font-semibold tracking-[0.14em] uppercase sm:text-base">
          {brand.tagline}
        </p>

        <p className="text-muted-foreground/80 mt-4 max-w-lg text-base leading-relaxed sm:text-lg">
          Music, culture and unforgettable experiences brought to stages and communities across Canada.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/"
            hash="experiences"
            onClick={() => trackEvent("click_explore_awaara", { source: "hero" })}
            className="border-border/70 hover:bg-surface-2 rounded-full border px-8 py-4 text-center text-xs font-bold tracking-[0.22em] uppercase transition-colors"
          >
            Explore AWAARA
          </Link>
          <Link
            to="/"
            hash="newsletter"
            onClick={() => trackEvent("click_join_list", { source: "hero" })}
            className="bg-heat text-primary-foreground glow rounded-full px-8 py-4 text-center text-xs font-bold tracking-[0.22em] uppercase transition-transform duration-300 hover:scale-[1.03]"
          >
            Join the List
          </Link>
        </div>

        {/* ── Bottom bar ──────────────────────────────────────────────── */}
        <div className="border-border/60 mt-12 flex flex-wrap items-end gap-x-8 gap-y-6 border-t pt-7 sm:mt-14 sm:gap-x-10">
          <div>
            <p className="eyebrow mb-2">Music</p>
            <p className="font-display text-xl font-extrabold uppercase sm:text-2xl">
              Live Artists
            </p>
          </div>
          <div>
            <p className="eyebrow mb-2">Culture</p>
            <p className="font-display text-xl font-extrabold uppercase sm:text-2xl">
              South Asian
            </p>
          </div>
          <div className="hidden sm:block">
            <p className="eyebrow mb-2">Community</p>
            <p className="font-display text-xl font-extrabold uppercase sm:text-2xl">
              Across Canada
            </p>
          </div>

          {/* Slide indicator dots + live label */}
          <div className="flex w-full shrink-0 flex-col items-start gap-3 sm:ml-auto sm:w-auto sm:items-end sm:pr-2">
            {/* Dots */}
            <div className="flex items-center gap-2" role="tablist" aria-label="Hero image slides">
              {heroSlides.map((slide, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Slide ${i + 1}: ${slide.accent}`}
                  onClick={() => {
                    goTo(i);
                    startTimer();
                  }}
                  className={[
                    "rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                    i === current
                      ? "bg-heat w-6 h-2 opacity-100"
                      : "bg-foreground/30 hover:bg-foreground/60 w-2 h-2",
                  ].join(" ")}
                />
              ))}
            </div>
            {/* Live label */}
            <p className="text-muted-foreground hidden items-center gap-2 text-[0.7rem] tracking-[0.24em] whitespace-nowrap uppercase lg:flex">
              Live • Music • Culture • Community <ArrowDown className="h-4 w-4" />
            </p>
          </div>
        </div>
      </div>

      {/* Inline keyframe — scoped to hero, no external CSS changes needed */}
      <style>{`
        @keyframes hero-fade-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
