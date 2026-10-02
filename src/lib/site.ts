export const WHATSAPP_HREF = `https://wa.me/27647848610?text=${encodeURIComponent(
  'Hi ITDInvestech, I would like to book a 20-minute call.',
)}`

export const NEED_OPTIONS = [
  'A new platform',
  'AI in a system we already run',
  'Something like the LMS',
  'A clinic site',
  'Inventory',
  'An ERP',
  'SearchBox hiring',
] as const

export function intentForProduct(title: string): string {
  const value = title.toLowerCase()
  if (value.includes('lms') || value.includes('school')) return 'Something like the LMS'
  if (value.includes('clinic') || value.includes('medical')) return 'A clinic site'
  if (value.includes('inventory')) return 'Inventory'
  if (value.includes('erp')) return 'An ERP'
  if (value.includes('searchbox') || value.includes('hiring')) return 'SearchBox hiring'
  return title
}
