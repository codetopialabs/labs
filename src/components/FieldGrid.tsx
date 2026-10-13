import { fields } from '../data/areas'
import { FieldIcon } from './FieldIcon'

export function FieldGrid() {
  return (
    <ul className="fields">
      {fields.map((field) => (
        <li key={field.name}>
          <FieldIcon field={field.icon} />
          {field.name}
        </li>
      ))}
    </ul>
  )
}
