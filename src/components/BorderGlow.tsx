'use client';

import { useState, useRef, useEffect } from 'react';

type BorderGlowProps = {
  children: React.ReactNode;
  className?: string;
  glowRadius?: number;
  glowIntensity?: number;
  edgeSensitivity?: number;
  coneSpread?: number;
  animated?: boolean;
  backgroundColor?: string;
  glowColor?: string;
  borderRadius?: number;
};

export default function BorderGlow({
  children,
  className = '',
  glowRadius = 20,
  glowIntensity = 0.6,
  edgeSensitivity = 19,
  coneSpread = 10,
  animated = true,
  backgroundColor = '#12204c', // Fallback
  glowColor = '#fac376',       // Secondary color
  borderRadius = 10,
}: BorderGlowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
    }
  };

  // Convert custom properties
  const radiusPx = glowRadius * 10;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden transition-all duration-300 ${className}`}
      style={{ borderRadius: `${borderRadius}px` }}
    >
      {/* Outer Glow / Border Layer */}
      <div
        className="absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          opacity: isHovered && animated ? 1 : 0,
          background: `radial-gradient(${radiusPx}px circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowColor}, transparent ${coneSpread * 10}%)`,
          filter: `brightness(${glowIntensity + 0.5})`
        }}
      />

      {/* Inner Content Layer masking the center so only border glows */}
      <div
        className="absolute z-10 transition-all duration-300 pointer-events-none"
        style={{
          top: '1px',
          left: '1px',
          right: '1px',
          bottom: '1px',
          backgroundColor: backgroundColor,
          borderRadius: `${Math.max(1, borderRadius - 1)}px`
        }}
      />

      {/* Actual Content (Placed above the background) */}
      <div className="relative z-20 h-full w-full">
        {children}
      </div>
    </div>
  );
}
