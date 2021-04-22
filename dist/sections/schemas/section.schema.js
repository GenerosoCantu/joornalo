"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const uuid_1 = require("uuid");
exports.SectionSchema = new mongoose.Schema({
    _id: {
        type: String,
        index: true,
        unique: true,
        default: () => uuid_1.v4()
    },
    id: String,
    name: String,
    email: String,
    desc: String,
    status: {
        type: String,
        default: 'Pending'
    },
    covers: [String],
    subsections: [
        {
            id: String,
            name: String,
            order: Number
        }
    ],
    config: {
        front_include_headlines: Boolean,
        front_include_most_viewed: Boolean,
        split_paragraphs: Boolean,
        summary_max_characters: Number,
        photo_default_size: String
    }
}, {
    versionKey: false
});
//# sourceMappingURL=section.schema.js.map