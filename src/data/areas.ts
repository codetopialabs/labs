import type { Field } from '../components/FieldIcon'

// What the lab works on, shown on the home page. Kept broad on purpose:
// fields, not tools, so it reads as open-ended rather than a fixed menu.
export const scope = 'Most of the problems we work on cross more than one of these.'

export const fields: { name: string; line: string; icon: Field }[] = [
  { name: 'Research', line: 'We find the real problem first.', icon: 'research' },
  { name: 'Software', line: 'Systems that hold up in daily use.', icon: 'software' },
  { name: 'Hardware', line: 'Devices that leave the lab.', icon: 'hardware' },
  { name: 'AI', line: 'Models doing real work.', icon: 'ai' },
  { name: 'Automation', line: 'Work that runs itself.', icon: 'automation' },
  { name: 'Data', line: 'Numbers you can act on.', icon: 'data' },
  { name: 'Infrastructure', line: 'Systems that stay up.', icon: 'infrastructure' },
  { name: 'Design', line: 'Interfaces that need no manual.', icon: 'design' },
]
