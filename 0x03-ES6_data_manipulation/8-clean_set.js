export default function cleanSet(set, startString) {
  if (set instanceof Set && typeof startString === "string") {
    const values = Array.from(set)
      .filter(
        (value) => typeof value === "string" && value.startsWith(startString)
      )
      .map((value) => value.slice(startString.length))
      .join("-");
    return values;
  }
  return "";
}
