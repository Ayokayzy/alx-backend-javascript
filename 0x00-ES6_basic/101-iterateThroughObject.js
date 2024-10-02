/* eslint-disable no-unused-vars */
/* eslint-disable */
export default function iterateThroughObject(reportWithIterator) {
  let result = "";
  let employee = reportWithIterator.next();
  while (!employee.done) {
    result += employee.value;
    employee = reportWithIterator.next();
    if (!employee.done) result += " | ";
  }
  return result;
}
