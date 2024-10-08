export default function setFromArray(array) {
  if (Array.isArray(array)) {
    return new Set(array);
  }
  return new Set();
}
