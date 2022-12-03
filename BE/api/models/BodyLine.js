import { Schema, model } from 'mongoose';
const BodyLine = new Schema(
  {
    nameInfo: String,
    heightInfo: String,
    primaryColor: String,
    secondColor: String,
    bodyHeight: Number,
    bodyWidth: Number,
    face: { type: Schema.Types.ObjectId, ref: 'Face' },
  },
  { collection: 'BodyLine' }
);
export default model('BodyLine', BodyLine);
