type LogoProps = {
  /** 'primary' = mark + tracked wordmark. 'compact' = mark only (nav/favicon-scale). */
  variant?: 'primary' | 'compact';
  className?: string;
};

/**
 * Approved "Compose" mark: fragments aligning into one structured symbol.
 * Geometry is fixed — do not redesign without an explicit Phase 2 revision.
 */
function ComposeMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="STARDUST"
    >
      <rect x="1" y="1" width="5" height="26" fill="currentColor" />
      <rect x="9" y="1" width="18" height="5" fill="currentColor" />
      <rect x="9" y="9" width="10" height="5" fill="currentColor" />
      <rect x="22" y="9" width="5" height="5" fill="currentColor" />
    </svg>
  );
}

export function Logo({ variant = 'primary', className }: LogoProps) {
  if (variant === 'compact') {
    return <ComposeMark className={className} />;
  }

  return (
    <span
      className={className}
      style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', color: 'var(--text-primary)' }}
    >
      <ComposeMark />
      <span className="text-nav" style={{ letterSpacing: '0.14em', fontWeight: 600 }}>
        STARDUST
      </span>
    </span>
  );
}
