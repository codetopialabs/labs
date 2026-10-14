import { Fragment } from 'react'
import { fields } from '../data/areas'
import { FieldIcon } from './FieldIcon'
import type { Cycle } from './useFieldCycle'

// The emblem above the home headline and the field line under it, both
// showing the current field from useFieldCycle.

export function Emblem({ cycle }: { cycle: Cycle }) {
  const field = fields[cycle.index]
  return (
    <div
      className="emblem"
      aria-hidden="true"
      onMouseEnter={cycle.hold}
      onMouseLeave={cycle.resume}
    >
      <span key={field.name} className="emblem-item">
        <span className="emblem-icon">
          <FieldIcon field={field.icon} />
        </span>
        <span className="emblem-text">
          <span className="emblem-mask">
            <span className="emblem-name">{field.name}</span>
          </span>
          <span className="emblem-mask">
            <span className="emblem-line">{field.line}</span>
          </span>
        </span>
      </span>
    </div>
  )
}

// Every field in plain text, separated by middle dots. The current field is
// lit; each word is a button that shows its field in the emblem.
export function FieldLine({ cycle }: { cycle: Cycle }) {
  const current = fields[cycle.index]
  return (
    <>
      <p
        className="field-line"
        onMouseLeave={cycle.resume}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) cycle.resume()
        }}
      >
        {fields.map((field, i) => (
          // Each word keeps its trailing dot, so a line can break after a dot
          // but never start with one.
          <Fragment key={field.name}>
            <span className="field-item">
              <button
                type="button"
                className={`field-word${i === cycle.index ? ' is-current' : ''}`}
                aria-pressed={i === cycle.index}
                onMouseEnter={() => cycle.pick(i)}
                onFocus={() => cycle.pick(i)}
                onClick={() => cycle.pick(i)}
              >
                {field.name.toLowerCase()}
              </button>
              {i < fields.length - 1 && (
                <span className="field-sep" aria-hidden="true">
                  ·
                </span>
              )}
            </span>{' '}
          </Fragment>
        ))}
      </p>
      <p className="sr-only" aria-live="polite">
        {cycle.picked ? `${current.name}: ${current.line}` : ''}
      </p>
    </>
  )
}
