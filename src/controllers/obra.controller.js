import Obra from "../models/Obra";

export const createObra = async (req,res) =>{
    const {titulo, author, publicacion,generos,imagen} = req.body;
    const newObra = new Obra( {titulo, author, publicacion,generos,imagen} )
    const obraSaved = await newObra.save();
    res.status(201).json(obraSaved);
}

export const getObras = async (req,res) =>{
    const obra = await Obra.find();
    res.json(obra);
}
