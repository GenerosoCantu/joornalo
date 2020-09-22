"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.SectionSchema = new mongoose.Schema({
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
//# sourceMappingURL=section.schema.js.map