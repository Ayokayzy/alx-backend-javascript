export default function hasValuesFromArray(set, array) {
  if (set instanceof Set && Array.isArray(array)) {
    const initial = true;
    const value = array.reduce(
      (previous, current) => previous && set.has(current),
      initial
    );

    return value;
  }
  return false;
}
