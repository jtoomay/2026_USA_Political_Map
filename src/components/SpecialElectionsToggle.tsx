'use client'

interface SpecialElectionsToggleProps {
  checked: boolean
  onChange: (checked: boolean) => void
}

export function SpecialElectionsToggle({ checked, onChange }: SpecialElectionsToggleProps) {
  return (
    <label className="inline-flex items-center gap-2 text-sm text-muted-foreground">
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="h-4 w-4 rounded border-border accent-foreground"
      />
      Show special elections
    </label>
  )
}
