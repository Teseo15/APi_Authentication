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
export const getCommentById = async (req,res) =>{
    const obra = await Comment.findById(req.params.id);
    res.status(200).json(obra);
}
export const updateCommentById = async (req,res) =>{
    const updateComment = await Comment.findByIdAndUpdate(req.params.id, req.body,{
        new: true
    });
    res.status(200).json(updateComment);
}

export const deleteCommentById = async (req,res) =>{
    await Comment.findByIdAndDelete(req.params.id)
    res.status(204).json()
}
