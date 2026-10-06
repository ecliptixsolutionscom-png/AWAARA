import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { EventsSection } from "@/components/site/events-section";
import { FeaturedEvent, ComingSoonSection } from "@/components/site/featured-event";
import {
  BrandStory,
  CitiesSection,
  SocialStrip,
  BringAwaaraSection,
} from "@/components/site/moments";
import {
  VipSection,
  PrivateEventsSection,
  TestimonialsSection,
  NewsletterSection,
  FaqSection,
  ContactSection,
} from "@/components/site/offerings";
import { Footer } from "@/components/site/footer";
import { FloatingWhatsApp } from "@/components/site/whatsapp";
import { brand, events, activeEvents, whatsappMessages } from "@/data/site";
import { canonical, eventsJsonLd, pageMeta, websiteJsonLd, organizationJsonLd } from "@/lib/seo";

/** Switch: populate activeEvents in data/site.ts to enter EVENT MODE */
const hasActiveEvents = activeEvents.length > 0;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: pageMeta({
      title: `${brand.name} — Canada's Desi Entertainment Experience`,
      description:
        "AWAARA creates unforgettable Desi entertainment experiences across Canada — from live concerts and DJ nights to cultural celebrations and premium private events.",
    }),
    links: [canonical("/")],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(websiteJsonLd()),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(organizationJsonLd()),
      },
      ...(hasActiveEvents
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify(eventsJsonLd()),
            },
          ]
        : []),
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main>
        {/* Always visible */}
        <Hero />

        {/* ── STATE A: No upcoming public events — evergreen brand mode ── */}
        {!hasActiveEvents && (
          <>
            <ComingSoonSection />
          </>
        )}

        {/* ── STATE B: Active events exist — event listing mode ── */}
        {hasActiveEvents && (
          <>
            <EventsSection />
            <FeaturedEvent />
          </>
        )}

        {/* ── Always visible ── */}
        <BrandStory />
        <CitiesSection />
        <SocialStrip />
        <BringAwaaraSection />
        <VipSection />
        <PrivateEventsSection />
        <TestimonialsSection />
        <NewsletterSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp message={whatsappMessages.general} />
    </div>
  );
}
