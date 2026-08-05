// Shared date formatting for election data — used for the data-snapshot
// banner (app/page.tsx, states/[slug]/page.tsx) and per-poll/per-headline
// dates (PollingHistoryTable, HeadlinesList).
export function formatDate(iso: string): string {
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(new Date(iso))
}
