'use client';

import React, { useEffect, useRef, useState } from 'react';

class Pixel {
  width: number;
  height: number;
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  color: string;
  speed: number;
  size: number;
  sizeStep: number;
  minSize: number;
  maxSize: number;
  isIdle: boolean;
  isReverse: boolean;
  isShimmer: boolean;

  constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D, x: number, y: number, color: string, speed: number) {
    this.width = canvas.width;
    this.height = canvas.height;
    this.ctx = context;
    this.x = x;
    this.y = y;
    this.color = color;
    this.speed = (Math.random() * 0.8 + 0.2) * speed;
    this.size = 0;
    this.sizeStep = Math.random() * 3 + 1; // Faster growth
    this.minSize = 2;
    this.maxSize = Math.random() * 12 + 18; // Variation around 24px
    this.isIdle = false;
    this.isReverse = false;
    this.isShimmer = false;
  }

  draw() {
    this.ctx.globalAlpha = 0.05;
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
    this.ctx.globalAlpha = 1.0;
  }

  appear() {
    this.isIdle = false;
    if (this.size >= this.maxSize) {
      this.isShimmer = true;
    }
    if (this.isShimmer) {
      this.shimmer();
    } else {
      this.size += this.sizeStep;
    }
    this.draw();
  }

  disappear() {
    this.isShimmer = false;
    if (this.size <= 0) {
      this.isIdle = true;
      return;
    } else {
      this.size -= 1.5; // Faster disappear
    }
    this.draw();
  }

  shimmer() {
    if (this.size >= this.maxSize) {
      this.isReverse = true;
    } else if (this.size <= this.minSize) {
      this.isReverse = false;
    }
    if (this.isReverse) {
      this.size -= this.speed;
    } else {
      this.size += this.speed;
    }
  }
}

interface PixelCardProps {
  gap?: number;
  speed?: number;
  colors?: string;
  className?: string;
  active?: boolean;
}

export default function PixelCard({
  gap = 10,
  speed = 40,
  colors = '#ffffff,#f97316,#3b82f6',
  className = '',
  active = false
}: PixelCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pixelsRef = useRef<Pixel[]>([]);
  const animationRef = useRef<number | null>(null);

  const initPixels = () => {
    if (!containerRef.current || !canvasRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    const width = Math.floor(rect.width);
    const height = Math.floor(rect.height);
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    canvasRef.current.width = width;
    canvasRef.current.height = height;

    const colorsArray = colors.split(',');
    const pxs: Pixel[] = [];
    const s = speed * 0.002;

    for (let x = 0; x < width; x += gap) {
      for (let y = 0; y < height; y += gap) {
        const color = colorsArray[Math.floor(Math.random() * colorsArray.length)];
        pxs.push(new Pixel(canvasRef.current, ctx, x, y, color, s));
      }
    }
    pixelsRef.current = pxs;
  };

  const animate = () => {
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx || !canvasRef.current) return;

    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    let allIdle = true;
    const fnName = active ? 'appear' : 'disappear';

    for (let i = 0; i < pixelsRef.current.length; i++) {
      const pixel = pixelsRef.current[i];
      pixel[fnName]();
      if (!pixel.isIdle) {
        allIdle = false;
      }
    }

    if (!allIdle || active) {
      animationRef.current = requestAnimationFrame(animate);
    } else {
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      animationRef.current = null;
    }
  };

  useEffect(() => {
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    animationRef.current = requestAnimationFrame(animate);
  }, [active]);

  useEffect(() => {
    initPixels();

    const handleResize = () => {
      initPixels();
      if (active) {
        if (animationRef.current) cancelAnimationFrame(animationRef.current);
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [gap, speed, colors]);

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none ${className}`}
    >
      <canvas
        className="w-full h-full block"
        ref={canvasRef}
      />
    </div>
  );
}
