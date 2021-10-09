import { Schema, model } from "mongoose";

const storieSchema = new Schema({
    
    title: String,
    content: String,
    user_id: String

})

export default model('Storie',storieSchema);


