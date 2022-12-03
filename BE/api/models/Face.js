import { Schema, model } from 'mongoose';
const Face = new Schema(
  {
   coordinates: {type:[Schema.Types.ObjectId], ref: "Node" }
  },
  { collection: 'Face' }
);
export default model('Face', Face);