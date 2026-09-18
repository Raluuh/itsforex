import { useEffect, useRef } from "react";
import { generateCandles } from "../lib/charts";

export function HeroChart() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const candles = generateCandles(72, 91, 1.085);
    let raf = 0;
    let t = 0;
    let width = 0;
    let height = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const paint = () => {
      if (!width || !height) return;
      ctx.clearRect(0, 0, width, height);

      const min = Math.min(...candles.map((c) => c.l));
      const max = Math.max(...candles.map((c) => c.h));
      const span = max - min || 1;
      const padX = 24;
      const padY = 36;
      const y = (v: number) => padY + ((max - v) / span) * (height - padY * 2);
      const slot = (width - padX * 2) / candles.length;

      ctx.strokeStyle =
        getComputedStyle(document.documentElement).getPropertyValue("--rm-grid") || "rgba(186,210,255,0.06)";
      ctx.lineWidth = 1;
      for (let i = 0; i < 6; i++) {
        const gy = padY + ((height - padY * 2) / 5) * i;
        ctx.beginPath();
        ctx.moveTo(0, gy);
        ctx.lineTo(width, gy);
        ctx.stroke();
      }

      const visible = reduce ? candles.length : Math.min(candles.length, 10 + Math.floor(t / 16));
      const slice = candles.slice(0, visible);
      if (!slice.length) return;

      ctx.beginPath();
      slice.forEach((c, i) => {
        const x = padX + i * slot + slot / 2;
        const py = y(c.c);
        if (i === 0) ctx.moveTo(x, py);
        else ctx.lineTo(x, py);
      });
      ctx.strokeStyle = "rgba(122,162,247,0.55)";
      ctx.lineWidth = 1.4;
      ctx.stroke();

      const firstX = padX + slot / 2;
      const lastX = padX + (visible - 1) * slot + slot / 2;
      const grad = ctx.createLinearGradient(0, padY, 0, height);
      grad.addColorStop(0, "rgba(46,230,166,0.12)");
      grad.addColorStop(1, "rgba(46,230,166,0)");
      ctx.beginPath();
      slice.forEach((c, i) => {
        const x = padX + i * slot + slot / 2;
        const py = y(c.c);
        if (i === 0) ctx.moveTo(x, py);
        else ctx.lineTo(x, py);
      });
      ctx.lineTo(lastX, height);
      ctx.lineTo(firstX, height);
      ctx.closePath();
      ctx.fillStyle = grad;
      ctx.fill();

      slice.forEach((c, i) => {
        const x = padX + i * slot + slot / 2;
        const up = c.c >= c.o;
        ctx.strokeStyle = up ? "#2ee6a6" : "#7aa2f7";
        ctx.fillStyle = up ? "rgba(46,230,166,0.85)" : "rgba(122,162,247,0.8)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x, y(c.h));
        ctx.lineTo(x, y(c.l));
        ctx.stroke();
        const top = y(Math.max(c.o, c.c));
        const bot = y(Math.min(c.o, c.c));
        const bw = Math.max(3, slot * 0.55);
        ctx.fillRect(x - bw / 2, top, bw, Math.max(1.2, bot - top));
      });

      if (!reduce) {
        const scan = ((t * 0.7) % (width + 120)) - 60;
        const g = ctx.createLinearGradient(scan - 40, 0, scan + 40, 0);
        g.addColorStop(0, "rgba(46,230,166,0)");
        g.addColorStop(0.5, "rgba(46,230,166,0.08)");
        g.addColorStop(1, "rgba(46,230,166,0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, width, height);
      }
    };

    const loop = () => {
      t += 1;
      paint();
      if (!reduce) raf = requestAnimationFrame(loop);
    };

    resize();
    loop();
    const onResize = () => {
      resize();
      if (reduce) paint();
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 h-full w-full opacity-70 dark:opacity-80" aria-hidden="true" />;
}
