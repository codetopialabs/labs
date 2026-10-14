import type { Field } from '../components/FieldIcon'

// What the lab works on: cycled by the emblem above the home headline and
// listed under it, with one line each on what it means. Kept broad on
// purpose: fields, not tools. Keep each line to about 33 characters so it
// stays on one line on small phones.
export const fields: { name: string; line: string; icon: Field }[] = [
  { name: 'Research', line: 'We study the problem first.', icon: 'research' },
  { name: 'Software', line: 'Websites, apps and platforms.', icon: 'software' },
  { name: 'Hardware', line: 'Devices and the code inside them.', icon: 'hardware' },
  { name: 'AI', line: 'AI built into real products.', icon: 'ai' },
  { name: 'Automation', line: 'Repetitive work, automated.', icon: 'automation' },
  { name: 'Data', line: 'Clear reports from messy data.', icon: 'data' },
  { name: 'Infrastructure', line: 'Hosting and servers that stay up.', icon: 'infrastructure' },
  { name: 'Design', line: 'Interfaces anyone can use.', icon: 'design' },
]
