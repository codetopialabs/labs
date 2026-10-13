import { fields } from '../data/areas'
import { FieldIcon } from './FieldIcon'

// Every field icon runs its own motion on a loop, each starting a little
// after the one before so the grid ripples rather than moving in unison.
const STAGGER_S = 0.45

export function FieldGrid() {
  return (
    <ul className="fields">
      {fields.map((field, i) => (
        <li key={field.name} style={{ '--stagger': `${i * STAGGER_S}s` } as React.CSSProperties}>
          <FieldIcon field={field.icon} />
          {field.name}
        </li>
      ))}
    </ul>
  )
}
