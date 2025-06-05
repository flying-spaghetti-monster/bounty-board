function hslToHex(h: number, s: number, l: number): string {
  s /= 100;
  l /= 100;

  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) =>
    Math.round(255 * (l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))));

  return `#${[f(0), f(8), f(4)]
    .map(x => x.toString(16).padStart(2, '0'))
    .join('')}`;
}

export function getRandomColor(): string {
  const hue = Math.floor(Math.random() * 360); // Оттенок: 0–360
  const saturation = 100; // насыщенность
  const lightness = 50; // яркость

  return hslToHex(hue, saturation, lightness);
}
