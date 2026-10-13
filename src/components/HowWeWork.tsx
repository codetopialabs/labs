import { steps } from '../data/areas'
import { StatusIcon } from './StatusIcon'

export function HowWeWork() {
  return (
    <section className="section">
      <div className="section-head">
        <h2 className="eyebrow">How we work</h2>
      </div>
      <ol className="steps">
        {steps.map((step, i) => (
          <li key={step.name} style={{ '--stagger': `${i * 0.6}s` } as React.CSSProperties}>
            <span className={`step-icon step-icon-${step.icon}`}>
              <StatusIcon status={step.icon} />
            </span>
            <h3 className="step-name">{step.name}</h3>
            <p className="step-text">{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
