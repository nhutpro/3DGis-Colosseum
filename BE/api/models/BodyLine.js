import { Schema, model } from 'mongoose';
const BodyLine = new Schema(
  {
    nameInfo: String,
    heightInfo: String,
    color: String,
    height: { type: Number, default: null },
    width: Number,
    face: { type: Schema.Types.ObjectId, ref: 'Face' },
  },
  { collection: 'BodyLine' }
);
export default model('BodyLine', BodyLine);
