import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { canonical, pageMeta } from "@/lib/seo";
import { events, activeEvents, brand, whatsappLink, whatsappMessages } from "@/data/site";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { FloatingWhatsApp } from "@/components/site/whatsapp";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: pageMeta({
      title: "Experiences — AWAARA | Canada's Desi Entertainment Experience",
      description:
        "Discover AWAARA experiences across Canada — live concerts, DJ nights, Bollywood events, Punjabi nights and premium celebrations.",
      path: "/events",
    }),
    links: [canonical("/events")],
  }),
  component: EventsPage,
});

function EventsPage() {
  const hasEvents = activeEvents.length > 0;

  if (hasEvents) {
    // When real events exist, redirect to the homepage events section
    if (typeof window !== "undefined") {
      window.location.replace("/#events");
    }
    return null;
  }

  // No-events state — premium evergreen page
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main>
        <section className="grain relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 py-32 text-center sm:px-8">
          {/* Cinematic dark stage background */}
          <div className="absolute inset-0" aria-hidden="true">
            <img
              src={heroImg}
              alt=""
              loading="eager"
              className="h-full w-full object-cover brightness-[0.18]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/95" />
            {/* Spotlight beam — centre top */}
            <div
              className="absolute inset-x-0 top-0 mx-auto h-[65%] w-[55%]"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 0%, oklch(0.58 0.22 26 / 25%) 0%, oklch(0.7 0.19 45 / 10%) 40%, transparent 68%)",
                filter: "blur(50px)",
              }}
            />
          </div>

          <div className="relative max-w-2xl">
            <p className="eyebrow text-primary/80 mb-8 tracking-[0.36em]">Experiences</p>

            <h1 className="text-[clamp(3rem,14vw,6.5rem)] leading-[0.86] font-extrabold uppercase">
              No events.
              <br />
              <span className="text-heat">Just yet.</span>
            </h1>

            <p className="text-muted-foreground mx-auto mt-8 max-w-md text-base leading-relaxed sm:text-lg">
              We're working on something worth showing up for.
              <br />
              Be the first to know when the next AWAARA experience is announced.
            </p>

            <p className="text-muted-foreground/50 mt-5 text-xs font-semibold tracking-[0.28em] uppercase">
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
              <a
                href={brand.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="border-border/70 hover:bg-surface-2 rounded-full border px-8 py-4 text-xs font-bold tracking-[0.22em] uppercase transition-colors"
              >
                Follow AWAARA
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp message={whatsappMessages.general} />
    </div>
  );
}
