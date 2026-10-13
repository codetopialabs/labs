import type { Field } from '../components/FieldIcon'

// What the lab works on, shown on the home page. Kept broad on purpose:
// fields, not tools, so it reads as open-ended rather than a fixed menu.
export const scope = 'Most of the problems we work on cross more than one of these.'

export const fields: { name: string; line: string; icon: Field }[] = [
  { name: 'Research', line: 'Studying a problem before we solve it.', icon: 'research' },
  { name: 'Software', line: 'Apps and the systems behind them.', icon: 'software' },
  { name: 'Hardware', line: 'Devices and the code that runs them.', icon: 'hardware' },
  { name: 'AI', line: 'Models put to work in real products.', icon: 'ai' },
  { name: 'Automation', line: "Taking repetitive work off people's hands.", icon: 'automation' },
  { name: 'Data', line: 'Making sense of what you collect.', icon: 'data' },
  { name: 'Infrastructure', line: 'Keeping systems deployed and running.', icon: 'infrastructure' },
  { name: 'Design', line: 'Interfaces people understand quickly.', icon: 'design' },
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
