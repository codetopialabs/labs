import { fields } from '../data/areas'
import { FieldIcon } from './FieldIcon'

// What we do as eight cards on one surface. Every icon runs its own motion
// on a loop, each starting a little after the one before so the light
// ripples across the cards rather than everything moving at once.
const STAGGER_S = 0.45

export function FieldGrid() {
  return (
    <ul className="cards fields">
      {fields.map((field, i) => (
        <li
          key={field.name}
          className="card"
          style={{ '--stagger': `${i * STAGGER_S}s` } as React.CSSProperties}
        >
          <FieldIcon field={field.icon} />
          <h3 className="card-name">{field.name}</h3>
          <p className="card-line">{field.line}</p>
        </li>
      ))}
    </ul>
  )
}
