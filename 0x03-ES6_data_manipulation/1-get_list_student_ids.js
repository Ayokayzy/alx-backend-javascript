export default function getListStudentIds(arrayOfObjects) {
  if (Array.isArray(arrayOfObjects)) {
    const iDArray = arrayOfObjects.map((item) => item.id);

    return iDArray;
  }
  return [];
}
