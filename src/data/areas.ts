import type { Field } from '../components/FieldIcon'

// What the lab works on: cycled by the emblem above the home headline and
// listed under it, with one line each on what it means. Kept broad on
// purpose: fields, not tools.
export const fields: { name: string; line: string; icon: Field }[] = [
  { name: 'Research', line: 'Ask the harder question.', icon: 'research' },
  { name: 'Software', line: 'Code that holds under load.', icon: 'software' },
  { name: 'Hardware', line: 'Ideas you can hold.', icon: 'hardware' },
  { name: 'AI', line: 'Intelligence, put to work.', icon: 'ai' },
  { name: 'Automation', line: 'Busywork, gone.', icon: 'automation' },
  { name: 'Data', line: 'Numbers that decide.', icon: 'data' },
  { name: 'Infrastructure', line: 'Up while you sleep.', icon: 'infrastructure' },
  { name: 'Design', line: 'Obvious at first glance.', icon: 'design' },
]
