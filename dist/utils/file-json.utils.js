"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
exports.createJsonFile = (path, fileName, obj) => {
    fs.writeFile(path + fileName + '.json', JSON.stringify(obj), function (err) {
        if (err)
            throw err;
    });
};
//# sourceMappingURL=file-json.utils.js.map