import { Link } from "@tanstack/react-router";
import { trackEvent } from "@/lib/analytics";
import { ArrowUpRight, CalendarDays, Clock, MapPin } from "lucide-react";
import type { EventItem } from "@/data/site";

/**
 * Renders the correct CTA button depending on whether the event has an
 * external ticketUrl (opens Eventbrite in new tab) or uses internal checkout.
 * Label is "Book Tickets" for external providers, "Get Tickets" for internal.
 */
function GetTicketsCta({ event, className }: { event: EventItem; className: string }) {
  if (event.ticketUrl) {
    return (
      <a
        href={event.ticketUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent("click_get_tickets", { source: "event_card", event: event.slug })}
        className={className}
      >
        Book Tickets
      </a>
    );
  }
  return (
    <Link
      to="/ticket/$slug"
      params={{ slug: event.slug }}
      onClick={() => trackEvent("click_get_tickets", { source: "event_card", event: event.slug })}
      className={className}
    >
      Get Tickets
    </Link>
  );
}

export const formatDate = (iso: string) =>
  new Date(iso + "T00:00:00").toLocaleDateString("en-CA", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

export function EventCard({ event }: { event: EventItem }) {
  return (
    <article className="group border-border/70 bg-surface relative overflow-hidden rounded-xl border">
      {/* Poster / flyer image — full portrait aspect, object-contain so artwork
          is never cropped (letter-boxed against dark background if needed) */}
      <Link
        to="/events/$slug"
        params={{ slug: event.slug }}
        className="block"
        aria-label={`${event.title} — details`}
      >
        <div className="relative aspect-[3/4] overflow-hidden bg-background">
          <img
            src={event.image}
            alt={`${event.title} event poster`}
            loading="lazy"
            width={900}
            height={1200}
            className="h-full w-full object-contain transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
          />
          {/* Very subtle bottom fade so meta text below reads well */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/60 to-transparent" />

          {/* Category badge — top left */}
          <span className="bg-background/70 absolute top-4 left-4 rounded-full border px-3 py-1 text-[0.65rem] font-semibold tracking-[0.18em] uppercase backdrop-blur-md">
            {event.category}
          </span>

          {/* Status badge — top right */}
          <span className="bg-heat text-primary-foreground absolute top-4 right-4 rounded-full px-3 py-1 text-[0.65rem] font-bold tracking-[0.16em] uppercase">
            {event.status}
          </span>
        </div>
      </Link>

      {/* Event meta */}
      <div className="p-5">
        <h3 className="text-xl font-extrabold uppercase leading-tight">
          {event.title}
        </h3>

        <div className="text-muted-foreground mt-3 flex flex-col gap-1.5 text-xs">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5 shrink-0" />
            {formatDate(event.date)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 shrink-0" />
            {event.time}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 shrink-0" />
            {event.venue}, {event.city}
          </span>
        </div>

        <p className="eyebrow mt-3">{event.artists.join(" × ")}</p>

        {/* CTA row */}
        <div className="mt-5 flex items-center gap-3">
          <GetTicketsCta
            event={event}
            className="bg-heat text-primary-foreground inline-flex min-w-0 flex-1 items-center justify-center gap-2 rounded-full px-4 py-3 text-center text-[0.7rem] font-bold tracking-[0.16em] uppercase transition-transform duration-300 hover:scale-[1.02] sm:px-5 sm:tracking-[0.2em]"
          />
          <Link
            to="/events/$slug"
            params={{ slug: event.slug }}
            aria-label={`View ${event.title} details`}
            className="border-border/70 hover:bg-surface-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-colors"
          >
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
