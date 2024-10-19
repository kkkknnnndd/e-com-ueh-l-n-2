import mongoose from "mongoose";

// Schema for Creating Products

const productSchema = new mongoose.Schema({
  name: {type:String,require:true,},
  description: {type:String,require:true,},
  image:{type:String,require:true,},
  category:{type:String,require:true,},
  new_price:{type: Number,require: true,},
  old_price:{type: Number,require: true,},
})

const productModel = mongoose.models.product || mongoose.model("product",productSchema);

export default productModel;