// Client-generated lead ID. Format: KCH-YYYY-NNNNNN (6-digit random suffix).
// Server is authoritative — the n8n webhook response returns the canonical
// lead_id and may renumber on collision.
export function generateLeadId(): string {
  const year = new Date().getFullYear();
  const random = Math.floor(Math.random() * 1_000_000)
    .toString()
    .padStart(6, "0");
  return `KCH-${year}-${random}`;
}
