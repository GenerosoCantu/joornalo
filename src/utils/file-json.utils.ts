import * as fs from 'fs';

export const createJsonFile = (path, fileName, obj) => {
  fs.writeFile(path + fileName + '.json', JSON.stringify(obj), function (err) {
    if (err) throw err;
  });
}
