export type Candle = { o: number; h: number; l: number; c: number };

export function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a += 0x6d2b79f5;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function generateCandles(n: number, seed: number, base = 1.08): Candle[] {
  const rnd = mulberry32(seed);
  let price = base;
  const out: Candle[] = [];
  for (let i = 0; i < n; i++) {
    const vol = base * (0.0012 + rnd() * 0.0024);
    const drift = Math.sin(i / 9 + seed) * vol * 0.35 + (rnd() - 0.48) * vol;
    const o = price;
    const c = Math.max(base * 0.92, o + drift);
    const wick = vol * (0.35 + rnd());
    const h = Math.max(o, c) + wick * rnd();
    const l = Math.min(o, c) - wick * rnd();
    out.push({ o, h, l, c });
    price = c;
  }
  return out;
}

export function lineFromCandles(c: Candle[]) {
  const min = Math.min(...c.map((x) => x.l));
  const max = Math.max(...c.map((x) => x.h));
  const span = max - min || 1;
  return c
    .map((x, i) => {
      const px = (i / (c.length - 1)) * 100;
      const py = 100 - ((x.c - min) / span) * 100;
      return `${i === 0 ? "M" : "L"} ${px.toFixed(2)} ${py.toFixed(2)}`;
    })
    .join(" ");
}

export function areaFromCandles(c: Candle[]) {
  const line = lineFromCandles(c);
  return `${line} L 100 100 L 0 100 Z`;
}
