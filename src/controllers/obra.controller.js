import Obra from "../models/Obra";

export const createObra = async (req,res) =>{
    const imagenes = [
        "https://images.pexels.com/photos/3806244/pexels-photo-3806244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", 
        "https://images.pexels.com/photos/3378993/pexels-photo-3378993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/3345882/pexels-photo-3345882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/3183649/pexels-photo-3183649.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/5756239/pexels-photo-5756239.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/6075887/pexels-photo-6075887.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/3358707/pexels-photo-3358707.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    ];
    
    const random = Math.floor(Math.random() * imagenes.length);
    var imagen;
    if (req.body.imagen=== undefined || req.body.imagen === null ) {
        imagen = imagenes[random];
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