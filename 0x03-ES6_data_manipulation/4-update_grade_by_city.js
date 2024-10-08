export default function updateStudentGradeByCity(
  arrayOfObjects,
  city,
  newGrades
) {
  if (
    Array.isArray(arrayOfObjects) &&
    typeof city === "string" &&
    Array.isArray(newGrades)
  ) {
    const iDArray = arrayOfObjects
      .filter((item) => item.location === city)
      .map((item) => ({
        id: item.id,
        firstName: item.firstName,
        location: item.location,
        grade: (
          newGrades.filter((grade) => grade.studentId === item.id).pop() || {
            grade: "N/A",
          }
        ).grade,
      }));
    return iDArray;
  }
  return [];
}
