import { Schema, model } from 'mongoose';
const Node = new Schema(
  {
    x: String,
    y: String,
    z: String,
  },
  { collection: 'Node' }
);
export default model('Node', Node);
