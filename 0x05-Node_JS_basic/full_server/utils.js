import * as fs from 'fs';

function res(data) {
  if (!data) {
    return 'Cannot load the database';
  }
  const content = data.trim();
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
  return fieldMap;
}

function readDatabase(fileName) {
  return new Promise((resolve, reject) => fs.readFile(fileName, 'utf-8', (err, data) => {
    if (err) {
      reject(err);
    }
    const resp = res(data);
    resolve(resp);
  }));
}

export default readDatabase;
