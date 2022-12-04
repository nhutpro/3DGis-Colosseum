import { Schema, model } from 'mongoose';
const BodyPolygon = new Schema(
  {
    nameInfo: String,
    heightInfo: String,
    color: String,
    resource: { type: String, default: null },
    width: { type: Number, default: null },
    height: { type: Number, default: null },
    size: Number,
    type: String,
    roll: { type: Number, default: null },
    face: { type: Schema.Types.ObjectId, ref: 'Face' },
  },
  { collection: 'BodyPolygon' }
);
export default model('BodyPolygon', BodyPolygon);
