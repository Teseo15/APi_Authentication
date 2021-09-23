import Comment from "../models/Comment";

export const createComment = async (req,res) =>{
    const {comment, author} = req.body;
    const newComment = new Comment( {comment, author} )
    const obraSaved = await newComment.save();
    res.status(201).json(obraSaved);
}

export const getComments = async (req,res) =>{
    const comment = await Comment.find();
    res.json(comment);
}
