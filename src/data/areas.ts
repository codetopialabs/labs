import type { Field } from '../components/FieldIcon'

// What the lab works on, shown on the home page. Kept broad on purpose:
// fields, not tools, so it reads as open-ended rather than a fixed menu.
export const scope = 'Most of the problems we work on cross more than one of these.'

export const fields: { name: string; icon: Field }[] = [
  { name: 'Research', icon: 'research' },
  { name: 'Software', icon: 'software' },
  { name: 'Hardware', icon: 'hardware' },
  { name: 'AI', icon: 'ai' },
  { name: 'Automation', icon: 'automation' },
  { name: 'Data', icon: 'data' },
  { name: 'Infrastructure', icon: 'infrastructure' },
  { name: 'Design', icon: 'design' },
]

// How a piece of work moves through the lab, shown under the fields.
// Icons reuse the project status icons for the matching stage.
export const steps: { name: string; description: string; icon: 'research' | 'experiment' | 'live' }[] = [
  {
    name: 'Study',
    description: 'We start by understanding the problem, usually by talking to the people who have it.',
    icon: 'research',
  },
  {
    name: 'Experiment',
    description: 'We test ideas with small prototypes before committing to one.',
    icon: 'experiment',
  },
  {
    name: 'Ship',
    description: 'What works gets built properly and kept running.',
    icon: 'live',
  },
]
