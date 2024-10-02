/* eslint-disable */
export function taskFirst() {
  const task = "I prefer const when I can.";
  return task;
}

export function getLast() {
  return " is okay";
}

export function taskNext() {
  let combo = `But sometimes let${getLast()}`;
  return combo;
}
