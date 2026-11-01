// Iconos ilustrados en coral y burdeos.
const CORAL = "#ff7d66";
const PLUM = "#6b0f3a";

export function StopwatchIcon() {
  return (
    <svg viewBox="0 0 52 60" className="h-14 w-auto" aria-hidden>
      <rect x="15" y="0" width="22" height="7" fill={CORAL} />
      <circle cx="26" cy="35" r="25" fill={CORAL} />
      <circle cx="26" cy="35" r="19" fill={PLUM} />
      <path d="M26 35V16A19 19 0 0 1 45 35Z" fill={CORAL} />
    </svg>
  );
}

export function CardIcon() {
  return (
    <svg viewBox="0 0 66 47" className="h-12 w-auto" aria-hidden>
      <rect width="66" height="47" rx="3" fill={CORAL} />
      <rect y="8" width="66" height="8" fill={PLUM} />
      <rect x="25" y="35" width="8" height="5" rx="2.5" fill={PLUM} />
      <rect x="40" y="35" width="16" height="5" rx="2.5" fill={PLUM} />
    </svg>
  );
}

export function WifiIcon() {
  return (
    <svg viewBox="0 0 66 48" className="h-12 w-auto" aria-hidden>
      <path d="M4 18a42 42 0 0 1 58 0" stroke={CORAL} strokeWidth="8" fill="none" />
      <path d="M15 29a26 26 0 0 1 36 0" stroke={CORAL} strokeWidth="8" fill="none" />
      <path d="M24 40l9-8 9 8-9 8Z" fill={PLUM} />
    </svg>
  );
}

export function ChatIcon() {
  return (
    <svg viewBox="0 0 76 64" className="h-14 w-auto" aria-hidden>
      <path d="M4 0h50a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H26L12 50V36H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4Z" fill={CORAL} />
      <path d="M41 26h31a4 4 0 0 1 4 4v18a4 4 0 0 1-4 4h-8v12L52 52H41a4 4 0 0 1-4-4V30a4 4 0 0 1 4-4Z" fill={PLUM} />
    </svg>
  );
}
