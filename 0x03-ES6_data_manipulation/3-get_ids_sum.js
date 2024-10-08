export default function getStudentIdsSum(arrayOfObjects) {
  if (Array.isArray(arrayOfObjects)) {
    const initialValue = 0;
    const iDsum = arrayOfObjects.reduce((a, b) => a + b.id, initialValue);

    return iDsum;
  }
  return [];
}
