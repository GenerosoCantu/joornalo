"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.ModuleSchema = new mongoose.Schema({
    _id: {
        type: String,
        index: true,
        unique: true
    },
    name: String,
    status: {
        type: String,
        default: 'Pending'
    },
    order: Number
}, {
    versionKey: false
});
//# sourceMappingURL=module.schema.js.map