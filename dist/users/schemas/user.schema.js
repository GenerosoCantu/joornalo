"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const uuid_1 = require("uuid");
exports.UserSchema = new mongoose.Schema({
    _id: {
        type: String,
        index: true,
        unique: true,
        default: () => uuid_1.v4()
    },
    username: String,
    name: String,
    password: String,
    reg_time: {
        type: Date,
        default: Date.now
    },
    admin: {
        type: Boolean,
        default: false
    },
    permissions: [String],
    login_fail: Number,
    locked: Boolean
}, {
    versionKey: false
});
exports.PermissionsSchema = new mongoose.Schema({
    permissions: [String]
}, {
    versionKey: false
});
//# sourceMappingURL=user.schema.js.map