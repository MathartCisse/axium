"use client";

import { useEffect, useRef } from "react";
import { SPHERE_POINTS } from "./sphere-points";

const TURN_MS = 8000;

type Dot = { x: number; y: number; z: number; r: number };

const DOTS: Dot[] = SPHERE_POINTS.flatMap(([x, y, z, r]) => [
  { x, y, z, r },
  { x, y, z: -z, r },
]);

function paint(canvas: HTMLCanvasElement, angle: number) {
  const css = canvas.clientWidth || canvas.clientHeight;
  if (css < 2) return false;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const size = Math.max(2, Math.round(css * dpr));
  if (canvas.width !== size || canvas.height !== size) {
    canvas.width = size;
    canvas.height = size;
  }
  const ctx = canvas.getContext("2d");
  if (!ctx) return false;
  ctx.clearRect(0, 0, size, size);
  const cx = size / 2;
  const cy = size / 2;
  const rad = size * 0.46;
  const ca = Math.cos(angle);
  const sa = Math.sin(angle);
  const drawn = DOTS.map((dot) => {
    const xr = dot.x * ca + dot.z * sa;
    const zr = -dot.x * sa + dot.z * ca;
    return { xr, y: dot.y, zr, r: dot.r };
  });
  drawn.sort((a, b) => a.zr - b.zr);
  const scale = css / 452;
  for (const dot of drawn) {
    const front = (dot.zr + 1) / 2;
    const alpha = dot.zr < 0 ? 0.18 + 0.25 * front : 0.75 + 0.25 * front;
    const radius = Math.max(
      0.55 * dpr,
      (1.05 + 1.05 * dot.r) * (dot.zr < 0 ? 0.7 : 1) * scale * dpr,
    );
    ctx.fillStyle = `rgba(255,255,255,${alpha})`;
    ctx.beginPath();
    ctx.arc(cx + dot.xr * rad, cy - dot.y * rad, radius, 0, Math.PI * 2);
    ctx.fill();
  }
  return true;
}

export function SphereMark({
  className,
}: {
  className?: string;
  variant?: "hero" | "engagement";
}) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const started = performance.now();

    const draw = (now: number) => {
      const reduce = motion.matches;
      const turns = reduce ? 0 : (now - started) / TURN_MS;
      const ready = paint(canvas, turns * Math.PI * 2);
      if (!reduce || !ready) frame = requestAnimationFrame(draw);
    };

    const onMotion = () => {
      cancelAnimationFrame(frame);
      if (motion.matches) paint(canvas, 0);
      else frame = requestAnimationFrame(draw);
    };

    frame = requestAnimationFrame(draw);
    motion.addEventListener("change", onMotion);
    return () => {
      cancelAnimationFrame(frame);
      motion.removeEventListener("change", onMotion);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className={`aspect-square bg-transparent ${className ?? ""}`}
    />
  );
}
