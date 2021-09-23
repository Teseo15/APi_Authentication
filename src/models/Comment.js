import { Schema, model } from "mongoose";

const commentSchema = new Schema({
    comment: String,
    author : String,

})

export default model('Comment',commentSchema);


