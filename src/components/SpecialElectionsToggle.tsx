'use client'

interface SpecialElectionsToggleProps {
  checked: boolean
  onChange: (checked: boolean) => void
}

export function SpecialElectionsToggle({ checked, onChange }: SpecialElectionsToggleProps) {
  return (
    <label className="inline-flex items-center gap-3 text-sm text-muted-foreground">
      <span>Show special elections</span>
      <span className="relative inline-flex h-5 w-9 shrink-0 items-center">
        <input
          type="checkbox"
          checked={checked}
          onChange={(event) => onChange(event.target.checked)}
          className="peer sr-only"
        />
        <span className="absolute inset-0 rounded-full border border-border bg-panel-soft transition peer-checked:border-accent peer-checked:bg-accent peer-focus-visible:ring-2 peer-focus-visible:ring-accent peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-background" />
        <span className="absolute left-0.5 h-4 w-4 rounded-full bg-foreground transition peer-checked:translate-x-4" />
      </span>
    </label>
  )
}
