import Storie from "../models/stories";

export const createStorie = async (req,res) =>{
    const {  
    title,
    content,
    user_id} = req.body;
    const newStorie = new Storie( {title,
        content,
        user_id} )
    const storieSaved = await newStorie.save();
    res.status(201).json(storieSaved);
}
export const getStories = async (req,res) =>{
    const storie = await Storie.find();
    res.json(storie);
}
export const getStorieById = async (req,res) =>{
    const obra = await Storie.findById(req.params.id);
    res.status(200).json(obra);
}
export const updateStorieById = async (req,res) =>{
    const updateStorie = await Storie.findByIdAndUpdate(
        req.params.id, req.body,{new: true});
    res.status(200).json(updateStorie);
}

export const deleteStorieById = async (req,res) =>{
    await Storie.findByIdAndDelete(req.params.id)
    res.status(204).json()
}

