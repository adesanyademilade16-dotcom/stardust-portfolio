'use client';

import { useState } from 'react';

export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button type="button" onClick={handleCopy} className="text-caption" aria-live="polite" style={{
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      color: copied ? 'var(--accent-secondary)' : 'var(--text-secondary)',
      padding: 0,
      textDecoration: 'underline',
      textUnderlineOffset: '3px',
    }}>
      {copied ? 'Copied to clipboard' : 'Copy email address'}
    </button>
  );
}
