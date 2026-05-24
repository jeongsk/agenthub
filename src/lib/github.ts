export function formatStarCount(stars: number | null | undefined): string {
  if (typeof stars !== 'number') return 'Stars unavailable';
  return new Intl.NumberFormat('en', {
    notation: stars >= 1000 ? 'compact' : 'standard',
    maximumFractionDigits: 1,
  }).format(stars);
}
