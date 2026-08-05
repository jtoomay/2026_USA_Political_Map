import type { Metadata } from "next";
import { getAllStates, getDataSnapshotDate } from "@/api/elections";
import { ElectionMapExplorer } from "@/components/ElectionMapExplorer";
import { StateList } from "@/components/StateList";
import { formatDate } from "@/lib/format";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Nonpartisan 2026 map: see who is running for Senate, House, and governor in every state, current officeholders, and each candidate's odds of winning.",
};

// TODO: once the real backend is connected, this should read from a `fetch`
// using Next's cache with a short `revalidate` window (see the TODO in
// src/api/elections.ts) instead of a fully static build — election data
// changes often and a twice-daily refresh agent is the plan.
export default function Home() {
  const states = getAllStates();
  const snapshotDate = getDataSnapshotDate();

  return (
    <div className="mx-auto flex w-full max-w-[var(--content-max-w)] flex-1 flex-col gap-6 px-6 pt-8 pb-14 sm:pt-12 sm:pb-20">
      <div className="flex flex-col w-fit m-auto items-center gap-3 text-center">
        <p className="font-mono text-xs font-medium tracking-[0.2em] text-accent uppercase">
          2026 Senate, House &amp; Governor &middot; Nonpartisan Voter Guide
        </p>
        <h1 className="font-display max-w-2xl text-5xl font-semibold text-foreground sm:text-6xl">
          2026 United States Mid-Term Election Watch
        </h1>
        <p className="max-w-xl text-muted-foreground">
          Track every 2026 Senate, House, and governor&rsquo;s race, state by
          state: who&rsquo;s currently in office, who&rsquo;s running against
          them, and each candidate&rsquo;s odds of winning. Nonpartisan and
          built from public race ratings &mdash; not affiliated with any party,
          campaign, or candidate.
        </p>
        <p className="hidden max-w-xl text-sm text-muted-foreground md:block">
          Hover a state for a quick preview of its Senate, House, or governor
          race. Click through for the full breakdown.
        </p>
        <p className="flex items-center gap-2 font-mono text-[11px] tracking-wide text-muted-foreground uppercase">
          <span
            aria-hidden="true"
            className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent"
          />
          Data compiled as of {formatDate(snapshotDate)}
        </p>
      </div>

      {/* Desktop/tablet: interactive map. Mobile: plain list below — both
          link to the same /states/[slug] routes so every state page stays
          reachable regardless of device. */}
      <div className="hidden md:block">
        <ElectionMapExplorer states={states} />
      </div>

      <div className="md:hidden">
        <StateList states={states} />
      </div>
    </div>
  );
}
