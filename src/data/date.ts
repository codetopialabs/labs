// Dates are stored as YYYY-MM-DD and shown the way people write them:
// "13 Oct 2026" in lists, "13 October 2026" on a post. Month names are
// spelled out here so every browser shows the same "Sep", never "Sept".
const shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const longMonths = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export function formatDate(date: string, style: 'short' | 'long' = 'short') {
  const [year, month, day] = date.split('-').map(Number)
  const months = style === 'long' ? longMonths : shortMonths
  return `${day} ${months[month - 1]} ${year}`
}
