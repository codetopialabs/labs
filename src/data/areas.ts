import type { Field } from '../components/FieldIcon'

// What the lab works on: cycled by the emblem above the home headline and
// listed under it, with one line each on what it means. Kept broad on
// purpose: fields, not tools.
export const fields: { name: string; line: string; icon: Field }[] = [
  { name: 'Research', line: 'The problem behind the problem.', icon: 'research' },
  { name: 'Software', line: 'Software that survives real users.', icon: 'software' },
  { name: 'Hardware', line: 'Devices that leave the lab.', icon: 'hardware' },
  { name: 'AI', line: 'AI that earns its place.', icon: 'ai' },
  { name: 'Automation', line: 'The work nobody should do by hand.', icon: 'automation' },
  { name: 'Data', line: 'Data that changes decisions.', icon: 'data' },
  { name: 'Infrastructure', line: 'Still up at 3am.', icon: 'infrastructure' },
  { name: 'Design', line: 'If it needs a manual, we redesign it.', icon: 'design' },
]
