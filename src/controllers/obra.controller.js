import Obra from "../models/Obra";

export const createObra = async (req,res) =>{
   
    var imagen;
    if (req.body.imagen=== undefined) {
        imagen = "https://images.pexels.com/photos/3806244/pexels-photo-3806244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
    }
    else{
        imagen = req.body.imagen;
    }
    const {titulo, author, publicacion,generos,sinopsis,fecha,precio,disponible} = req.body;
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