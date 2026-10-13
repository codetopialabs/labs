import { fields } from '../data/areas'
import { FieldIcon } from './FieldIcon'

// What we do, as one plate of eight panels. Each panel carries its field's
// drawing, large and faint, cropped by the panel edge. Hovering a panel
// redraws the drawing; otherwise everything is still.
export function FieldGrid() {
  return (
    <ul className="plate">
      {fields.map((field) => (
        <li key={field.name} className="panel">
          <h3 className="panel-name">{field.name}</h3>
          <p className="panel-line">{field.line}</p>
          <FieldIcon field={field.icon} art />
        </li>
      ))}
    </ul>
  )
}
