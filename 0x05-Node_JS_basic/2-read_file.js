const fs = require('fs');

function countStudents(path) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      throw new Error('Cannot load the database');
    }
    let numberOfStudents = 0;

    const lines = data.split('\n');

    const fields = {};

    const headers = lines[0].split(',');

    for (let i = 1; i < lines.length; i += 1) {
      if (lines[i]) {
        const currentline = lines[i].split(',');

        for (let j = 0; j < headers.length; j += 1) {
          if (j === 3 && currentline[j] in fields) {
            fields[currentline[j]].push(currentline[0]);
          } else if (j === 3 && !(currentline[j] in fields)) {
            fields[currentline[j]] = [currentline[0]];
          }
        }
        numberOfStudents += 1;
      }
    }

    if (numberOfStudents > 0) {
      console.log(`Number of students: ${numberOfStudents}`);
      for (const [key, value] of Object.entries(fields)) {
        const numberOfStudents = value.length;
        const listOfNames = value.join(', ');
        console.log(`Number of students in ${key}: ${numberOfStudents}. List: ${listOfNames}`);
      }
    } else {
      throw new Error('Cannot load the database');
    }
  });
}

module.exports = countStudents;
