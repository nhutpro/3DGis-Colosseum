import { Schema, model } from 'mongoose';
const BodyPolygon = new Schema(
  {
    nameInfo: String,
    heightInfo: String,
    primaryColor: String,
    resource: String,
    body_width: String,
    face: { type: Schema.Types.ObjectId, ref: 'Face' },
  },
  { collection: 'BodyPolygon' }
);
export default model('BodyPolygon', BodyPolygon);
