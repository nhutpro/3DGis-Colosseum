import { Schema, model } from 'mongoose';
const BodyLine = new Schema(
  {
    nameInfo: String,
    heightInfo: String,
    color: String,
    bodyHeight: Number,
    bodyWidth: Number,
    face: { type: Schema.Types.ObjectId, ref: 'Face' },
  },
  { collection: 'BodyLine' }
);
export default model('BodyLine', BodyLine);
