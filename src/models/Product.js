import { Schema, model } from "mongoose";

const productSchema = new Schema({
    name: String,
    category: String,
    cantidad:Number,
    price: Number,
    color:String,
    imgURL: String
},{
    timestamps: true,
    versionKey: false
})

export default model('Product',productSchema);
