import { fetchUpcomingLaunches } from '@/api/launches'
import { LaunchCard } from '@/components/LaunchCard'

export default async function DataPage() {
  const launches = await fetchUpcomingLaunches()

  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {launches.map((launch) => (
        <LaunchCard key={launch.id} launch={launch} />
      ))}
    </ul>
  )
}
