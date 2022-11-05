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
    email: String,
    role: String,
    firstName: String,
    lastName: String,
    password: String,
    phone: String,
    status: {
        type: String,
        default: 'Pending'
    },
    reg_time: {
        type: Date,
        default: Date.now
    },
    login_fail: Number,
    locked: {
        type: Boolean,
        default: false
    },
    verified: {
        type: Boolean,
        default: false
    },
    permissions: [String],
    sections: [String],
    modules: [String]
}, {
    versionKey: false
});
exports.PermissionsSchema = new mongoose.Schema({
    permissions: [String]
}, {
    versionKey: false
});
//# sourceMappingURL=user.schema.js.map