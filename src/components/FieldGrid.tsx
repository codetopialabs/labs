import { fields } from '../data/areas'
import { FieldIcon } from './FieldIcon'
import { replayIcon } from './replay'

// What we do as eight cards on one surface. Every icon runs its own motion,
// each starting a little after the one before so the light ripples across
// the cards. It plays a few passes, then rests; hovering a card replays it.
const STAGGER_S = 0.45

export function FieldGrid() {
  return (
    <ul className="cards fields">
      {fields.map((field, i) => (
        <li
          key={field.name}
          className="card"
          style={{ '--stagger': `${i * STAGGER_S}s` } as React.CSSProperties}
          onMouseEnter={(e) => replayIcon(e.currentTarget)}
        >
          <FieldIcon field={field.icon} />
          <h3 className="card-name">{field.name}</h3>
          <p className="card-line">{field.line}</p>
        </li>
      ))}
    </ul>
  )
}
