export default function getStudentsByLocation(arrayOfObjects, city) {
  if (Array.isArray(arrayOfObjects)) {
    const iDArray = arrayOfObjects.filter((item) => item.location === city);

    return iDArray;
  }
  return [];
}
