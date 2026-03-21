export function generateHSLColors(count: number): string[] {
  const defaultColors: string[] = ["#B98E63", "#EAD9C3"];

  if (count <= defaultColors.length) {
    return defaultColors.slice(0, count);
  }

  const extraCount = count - defaultColors.length;
  const saturation = 80;
  const lightness = 60;
  const extraColors: string[] = [];

  for (let i = 0; i < extraCount; i++) {
    const hue = (30 + (360 / extraCount) * i) % 360;
    extraColors.push(`hsl(${hue}, ${saturation}%, ${lightness}%)`);
  }

  return [...defaultColors, ...extraColors];
}
