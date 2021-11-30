import { Schema, model } from "mongoose";

const obraSchema = new Schema({
    titulo : String,
    author : String,
    publicación: String,
    generos: Array,
    imagen : String,
    sinopsis: String,
    precio: Double,
    disponible:Boolean,
    fecha: Date,
    });

export default model('Obra',obraSchema);
