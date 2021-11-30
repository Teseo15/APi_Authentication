import Obra from "../models/Obra";

export const createObra = async (req,res) =>{
    const {titulo, author, publicacion,generos,imagen,sinopsis,fecha,precio,disponible} = req.body;
    const newObra = new Obra( {titulo, author, publicacion,generos,imagen,sinopsis,precio,disponible,fecha} )
    const obraSaved = await newObra.save();
    res.status(201).json(obraSaved);
}

export const getObras = async (req,res) =>{
    const obra = await Obra.find();
    res.json(obra);
}

export const getObraById = async (req,res) =>{
    const obra = await Obra.findById(req.params.id);
    res.status(200).json(obra);
}

export const updateObraById = async (req,res) =>{
    const updateObra = await Obra.findByIdAndUpdate(req.params.id, req.body,{
        new: true
    });
    res.status(200).json(updateObra);
}

export const deleteObraById = async (req,res) =>{
    await Obra.findByIdAndDelete(req.params.id)
    res.status(204).json()
}