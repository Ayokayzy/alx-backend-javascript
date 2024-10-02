/* eslint-disable no-unused-vars */
/* eslint-disable */
export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (let item of array) {
    newArray.push(appendString + item);
  }
  return newArray;
}
