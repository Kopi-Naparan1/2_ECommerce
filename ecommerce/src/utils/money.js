export default function formatMoney(cents) {
  return `$${(cents / 100).toFixed(2)}`;
}
