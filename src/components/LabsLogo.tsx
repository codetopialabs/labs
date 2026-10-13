export function LabsLogo({ height = 22 }: { height?: number }) {
  const width = Math.round(height * (1169 / 381))
  return (
    <img
      src="/codetopia-labs.png"
      alt="Codetopia Labs"
      width={width}
      height={height}
      style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
    />
  )
}
