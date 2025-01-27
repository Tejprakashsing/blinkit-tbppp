import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    image: {
      data: { type: String, required: true }, 
      contentType: { type: String, required: true },
    },
  },
  { timestamps: true }
);

export default mongoose.model('Product', ProductSchema);