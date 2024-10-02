/* eslint-disable no-unused-vars */
/* eslint-disable */
export default function createReportObject(employeesList) {
return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(employees) {
      return Object.keys(employees).length;
    },
  };
}
