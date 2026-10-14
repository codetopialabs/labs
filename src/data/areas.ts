import type { Field } from '../components/FieldIcon'

// What the lab works on: cycled by the emblem above the home headline and
// listed under it, with one line each on what it means. Kept broad on
// purpose: fields, not tools.
export const fields: { name: string; line: string; icon: Field }[] = [
  { name: 'Research', line: 'Evidence before we build.', icon: 'research' },
  { name: 'Software', line: 'Software that keeps its promises.', icon: 'software' },
  { name: 'Hardware', line: 'Prototypes that become products.', icon: 'hardware' },
  { name: 'AI', line: 'AI where it actually helps.', icon: 'ai' },
  { name: 'Automation', line: 'The repetitive work, handled.', icon: 'automation' },
  { name: 'Data', line: 'Numbers turned into decisions.', icon: 'data' },
  { name: 'Infrastructure', line: 'Stays up when it matters.', icon: 'infrastructure' },
  { name: 'Design', line: 'Obvious at first glance.', icon: 'design' },
]
