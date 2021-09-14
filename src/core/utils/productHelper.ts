export function getArray(number: number): number[] {
  return new Array(number).fill(0).map((_, idx) => idx + 1)
}
