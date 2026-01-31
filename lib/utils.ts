export function cn(...classes: Array<string | undefined | false | null>) {
  return classes.filter(Boolean).join(" ");
}

export function formatPriceKZT(value: number) {
  // Простая форматировка "xxx xxx ₸"
  const s = Math.round(value).toString();
  const spaced = s.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return `${spaced} ₸`;
}
