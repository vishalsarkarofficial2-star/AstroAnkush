'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { SERVICES_DATA } from '@/lib/astrology-data';

const CRITICAL_ROUTES = [
  '/',
  '/services',
  '/about',
  '/contact',
  '/testimonials',
  '/why-us',
  '/gallery',
  '/faq',
  '/privacy',
  '/terms',
  ...SERVICES_DATA.map((s) => `/services/${s.slug}`)
];

export function InstantNavigationPreloader() {
  const router = useRouter();

  useEffect(() => {
    // Immediate prefetch for the most critical top 5 pages
    ['/services', '/about', '/contact', '/testimonials', '/why-us'].forEach((route) => {
      try {
        router.prefetch(route);
      } catch {}
    });

    // Idle background preloading of all remaining routes
    const prefetchRoutes = () => {
      CRITICAL_ROUTES.forEach((route) => {
        try {
          router.prefetch(route);
        } catch {}
      });
    };

    if (typeof window !== 'undefined') {
      if ('requestIdleCallback' in window) {
        (window as Window & { requestIdleCallback: (cb: () => void) => void }).requestIdleCallback(prefetchRoutes);
      } else {
        setTimeout(prefetchRoutes, 50);
      }
    }

    // 2. Global instant on-hover / on-touch prefetch handler
    const handlePointerEnter = (e: MouseEvent | TouchEvent) => {
      const rawTarget = e.target;
      if (!rawTarget || !(rawTarget instanceof Element)) {
        return;
      }
      try {
        const target = rawTarget.closest('a');
        if (target && target.href) {
          const url = new URL(target.href);
          if (url.origin === window.location.origin && url.pathname.startsWith('/')) {
            router.prefetch(url.pathname);
          }
        }
      } catch {
        // Silently ignore any parsing issues
      }
    };

    document.addEventListener('pointerenter', handlePointerEnter as EventListener, { passive: true, capture: true });
    document.addEventListener('touchstart', handlePointerEnter as EventListener, { passive: true, capture: true });

    return () => {
      document.removeEventListener('pointerenter', handlePointerEnter as EventListener, { capture: true });
      document.removeEventListener('touchstart', handlePointerEnter as EventListener, { capture: true });
    };
  }, [router]);

  return null;
}
