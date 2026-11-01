import { cn } from "@/lib/utils";

// Wordmark DOJO dibujado en SVG.
export function DojoLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 405 100" role="img" aria-label="Dojo" className={cn("h-7 w-auto", className)}>
      <g fill="none" stroke="currentColor" strokeWidth="18">
        <path d="M9 9H48A41 41 0 0 1 48 91H9Z" />
        <circle cx="150" cy="50" r="41" />
        <path d="M285 0V58A33 33 0 0 1 219 58" />
        <circle cx="355" cy="50" r="41" />
      </g>
    </svg>
  );
}
