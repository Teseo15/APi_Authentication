import { Schema, model } from "mongoose";

const productoSchema = new Schema({
    name: String,
    category: String,
    cantidad:Number,
    price: Number,
    color:String,
    imgURL: String
})

export default model('Product',productoSchema);
