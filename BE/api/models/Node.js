import { Schema, model } from 'mongoose';
const Node = new Schema(
  {
    x: Number,
    y: Number,
    z: Number,
  },
  { collection: 'Node' }
);
export default model('Node', Node);
