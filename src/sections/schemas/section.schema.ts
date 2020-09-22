import * as mongoose from 'mongoose';
import { v4 as uuid } from 'uuid';

export const SectionSchema = new mongoose.Schema({
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