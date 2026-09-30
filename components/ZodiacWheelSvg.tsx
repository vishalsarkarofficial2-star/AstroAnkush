import React from 'react';

// Helper to round coordinates to 2 decimal places to guarantee exact SSR and Client hydration match
const r = (val: number): number => Math.round(val * 100) / 100;

// Precompute 12 radials with exact rounded values
const HOUSE_RADIALS = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => {
  const rad = (deg * Math.PI) / 180;
  return {
    deg,
    x2: r(250 + 225 * Math.cos(rad)),
    y2: r(250 + 225 * Math.sin(rad)),
  };
});

// Precompute 72 outer tick marks with exact rounded values
const TICK_MARKS = Array.from({ length: 72 }).map((_, i) => {
  const deg = (i * 360) / 72;
  const rad = (deg * Math.PI) / 180;
  const r1 = 225;
  const r2 = i % 6 === 0 ? 212 : 219;
  return {
    id: i,
    x1: r(250 + r1 * Math.cos(rad)),
    y1: r(250 + r1 * Math.sin(rad)),
    x2: r(250 + r2 * Math.cos(rad)),
    y2: r(250 + r2 * Math.sin(rad)),
    strokeWidth: i % 6 === 0 ? '1.5' : '0.8',
  };
});

export function ZodiacWheelSvg({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <circle cx="250" cy="250" r="240" stroke="rgba(229, 184, 75, 0.25)" strokeWidth="1.5" strokeDasharray="4 4" />
      <circle cx="250" cy="250" r="225" stroke="rgba(229, 184, 75, 0.45)" strokeWidth="1" />
      <circle cx="250" cy="250" r="195" stroke="rgba(255, 154, 46, 0.35)" strokeWidth="1.5" />
      <circle cx="250" cy="250" r="150" stroke="rgba(229, 184, 75, 0.2)" strokeWidth="1" strokeDasharray="2 3" />
      <circle cx="250" cy="250" r="100" stroke="rgba(229, 184, 75, 0.3)" strokeWidth="1.5" />
      <circle cx="250" cy="250" r="60" stroke="rgba(255, 154, 46, 0.4)" strokeWidth="1" />

      {/* 12 Astrological House Radials */}
      {HOUSE_RADIALS.map(({ deg, x2, y2 }) => (
        <line
          key={deg}
          x1="250"
          y1="250"
          x2={x2}
          y2={y2}
          stroke="rgba(229, 184, 75, 0.25)"
          strokeWidth="1"
        />
      ))}

      {/* Outer 72 degree tick marks */}
      {TICK_MARKS.map(({ id, x1, y1, x2, y2, strokeWidth }) => (
        <line
          key={`tick-${id}`}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="rgba(229, 184, 75, 0.35)"
          strokeWidth={strokeWidth}
        />
      ))}

      {/* Sacred Geometric Triangles (Navagrah Mandala) */}
      <polygon
        points="250,55 418,348 82,348"
        stroke="rgba(229, 184, 75, 0.2)"
        strokeWidth="1.2"
        fill="none"
      />
      <polygon
        points="250,445 82,152 418,152"
        stroke="rgba(255, 154, 46, 0.2)"
        strokeWidth="1.2"
        fill="none"
      />

      {/* Inner Central Sun / Bindu */}
      <circle cx="250" cy="250" r="16" fill="rgba(229, 184, 75, 0.2)" stroke="rgba(229, 184, 75, 0.6)" strokeWidth="1.5" />
      <circle cx="250" cy="250" r="5" fill="#E5B84B" />
    </svg>
  );
}
