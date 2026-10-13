// Dates are stored as YYYY-MM-DD and shown the way people write them:
// "13 Oct 2026" in lists, "13 October 2026" on a post. Parsed as UTC so
// the day never shifts with the reader's time zone.
const short = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
})

const long = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
})

export function formatDate(date: string, style: 'short' | 'long' = 'short') {
  return (style === 'long' ? long : short).format(new Date(`${date}T00:00:00Z`))
}
