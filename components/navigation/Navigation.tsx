'use client';

import { useEffect, useState } from 'react';
import { Logo } from '@/components/brand/Logo';
import { MagneticButton } from '@/components/ui/MagneticButton';
import styles from './Navigation.module.css';

const DESTINATIONS = [
  { href: '/#work', label: 'Work' },
  { href: '/#about', label: 'About' },
  { href: '/#capabilities', label: 'Skills' },
  { href: '/#testimonials', label: 'Feedback' },
];

export function Navigation() {
  const [compressed, setCompressed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompressed(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className={`${styles.nav} ${compressed ? styles.navCompressed : ''}`}>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className={`container ${styles.navInner}`}>
        <a href="/#top" aria-label="STARDUST — home">
          <Logo />
        </a>

        <nav aria-label="Primary" className={styles.links}>
          {DESTINATIONS.map((item) => (
            <a key={item.href} href={item.href} className={`${styles.link} text-nav`}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.navActions}>
          <MagneticButton href="/#contact" className={`btn btn-primary ${styles.navCta}`}>
            Let&rsquo;s Talk
          </MagneticButton>

          <button
            type="button"
            className={styles.menuTrigger}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              {menuOpen ? (
                <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.6" />
              ) : (
                <>
                  <path d="M2 6H18" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M2 14H18" stroke="currentColor" strokeWidth="1.6" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-menu" aria-label="Mobile" className={styles.mobileMenu}>
          {DESTINATIONS.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className={`${styles.mobileLink} text-display-l`}
              style={{ animationDelay: `${index * 60}ms` }}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="/#contact"
            className={`btn btn-primary ${styles.mobileCta}`}
            onClick={() => setMenuOpen(false)}
          >
            Let&rsquo;s Talk
          </a>
        </nav>
      )}
    </header>
  );
}
