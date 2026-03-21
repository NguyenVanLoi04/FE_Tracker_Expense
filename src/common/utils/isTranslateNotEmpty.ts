export function isTranslateNotEmpty(obj: object) {
  for (const [, value] of Object.entries(obj)) {
    if (typeof value === 'string' && !value.trim()) return false;
  }
  return true;
}
