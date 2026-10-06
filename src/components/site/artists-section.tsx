import { Instagram } from "lucide-react";
import { artists } from "@/data/site";
import { Reveal, SectionHeading } from "@/components/site/reveal";

export function ArtistsSection() {
  return (
    <section
      id="artists"
      className="bg-surface/40 border-border/60 scroll-mt-24 border-y py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="The Sound of AWAARA"
          title={
            <>
              The sound
              <br />
              <span className="text-heat">of AWAARA</span>
            </>
          }
          subtitle="DJs, vocalists and performers bringing South Asian sound and energy to stages across Canada."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {artists.map((a, i) => (
            <Reveal key={a.name} delay={i * 80} as="article">
              <div className="group border-border/70 relative aspect-[3/4] overflow-hidden rounded-xl border transition-all duration-500 hover:border-primary/40">
                <img
                  src={a.image}
                  alt={`Portrait of ${a.name}`}
                  loading="lazy"
                  width={912}
                  height={1200}
                  className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                />
                {/* Permanent gradient */}
                <div className="fade-bottom absolute inset-0 transition-opacity duration-500 group-hover:opacity-95" />
                {/* Red rim glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(ellipse at 50% 100%, oklch(0.58 0.22 26 / 20%) 0%, transparent 60%)",
                  }}
                  aria-hidden="true"
                />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-2xl font-extrabold uppercase">{a.name}</h3>
                  <p className="text-gold mt-1 text-xs tracking-[0.2em] uppercase">{a.genre}</p>
                  <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
                    <p className="text-muted-foreground mt-3 text-sm">{a.city}</p>
                    <a
                      href={a.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${a.name} on Instagram`}
                      className="border-border/70 hover:bg-surface-2 mt-3 inline-flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-md transition-colors"
                    >
                      <Instagram className="h-4 w-4" />
                    </a>
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
