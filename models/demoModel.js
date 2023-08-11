
import { model, Schema } from 'mongoose';

const demoSchema = new Schema(
  {
    productName: String,
    title: String,
    passage1: String,
    passage2: String,
    date: {
      type: Date,
      default: new Date(),
    },

  },
  { timestamps: true }
);
export const Demo = model('demo', demoSchema);
