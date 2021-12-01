import * as mongoose from 'mongoose';
import { v4 as uuid } from 'uuid';

export const NewsSchema = new mongoose.Schema({
  _id: {
    type: String,
    index: true,
    unique: true,
    default: () => uuid()
  },
  date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    default: 'Pending'
  },
  section: String,
  subsections: String,
  title: String,
  desc: String,
  text: String,
  images: [String],
  embeded: [String],
  quotes: [String]
}, {
  versionKey: false
});