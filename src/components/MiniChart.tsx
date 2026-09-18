import { areaFromCandles, generateCandles, lineFromCandles } from "../lib/charts";
import { cn } from "../utils/cn";

export function MiniChart({
  seed,
  base,
  className,
  height = 92,
}: {
  seed: number;
  base: number;
  className?: string;
  height?: number;
}) {
  const candles = generateCandles(36, seed, base);
  const up = candles[candles.length - 1].c >= candles[0].c;
  const line = lineFromCandles(candles);
  const area = areaFromCandles(candles);
  const id = `g${seed}`;

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className={cn("w-full", className)}
      style={{ height }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={up ? "#2ee6a6" : "#7aa2f7"} stopOpacity="0.35" />
          <stop offset="100%" stopColor={up ? "#2ee6a6" : "#7aa2f7"} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill={`url(#${id})`} />
      <path d={line} fill="none" stroke={up ? "#2ee6a6" : "#7aa2f7"} strokeWidth="1.6" className="draw-line" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

export function CandleStrip({ seed, base }: { seed: number; base: number }) {
  const candles = generateCandles(28, seed, base);
  const min = Math.min(...candles.map((c) => c.l));
  const max = Math.max(...candles.map((c) => c.h));
  const span = max - min || 1;
  const w = 8;
  return (
    <svg viewBox={`0 0 ${candles.length * w} 80`} className="h-24 w-full" aria-hidden="true">
      {candles.map((c, i) => {
        const up = c.c >= c.o;
        const y = (v: number) => ((max - v) / span) * 70 + 5;
        const x = i * w + 3;
        return (
          <g key={i} className="candle" style={{ animationDelay: `${i * 28}ms` }}>
            <line x1={x + 1.4} x2={x + 1.4} y1={y(c.h)} y2={y(c.l)} stroke={up ? "#2ee6a6" : "#7aa2f7"} strokeWidth="1" />
            <rect
              x={x}
              y={y(Math.max(c.o, c.c))}
              width="2.8"
              height={Math.max(1, Math.abs(y(c.o) - y(c.c)))}
              fill={up ? "#2ee6a6" : "#7aa2f7"}
              rx="0.3"
            />
          </g>
        );
      })}
    </svg>
  );
}
