const express = require('express');
const fs = require('fs');

function countStudents(fileName) {
  let content;

  try {
    content = fs.readFileSync(fileName, 'utf-8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }
  content = content.trim();
  const contentLines = content.split('\n');
  contentLines.splice(0, 1);
  const fieldMap = {};
  for (const item of contentLines) {
    if (item) {
      const splittedItem = item.split(',');
      const field = splittedItem[3];
      const fn = splittedItem[0];
      if (fieldMap[field]) {
        fieldMap[field].push(fn);
      } else {
        fieldMap[field] = [];
        fieldMap[field].push(fn);
      }
    }
  }
  let str = 'This is the list of our students\n';
  str += `Number of students: ${contentLines.length.toString()}`;
  for (const key in fieldMap) {
    if (key) {
      const ar = fieldMap[key];
      str += `\nNumber of students in ${key}: ${ar.length}. List: ${ar.join(
        ', ',
      )}`;
    }
  }
  return str;
}

const hostname = '127.0.0.1';
const port = 1245;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  let str;
  try {
    str = countStudents(process.argv[2]);
  } catch (err) {
    str = 'This is the list of our students\nCannot load the database';
  }
  res.send(str);
});

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
