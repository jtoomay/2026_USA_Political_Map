export default function DataLoading() {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }, (_, i) => (
        <li key={i} className="h-40 animate-pulse rounded-lg border border-border bg-muted" />
      ))}
    </ul>
  )
}
