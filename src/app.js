import express from 'express';
import morgan from 'morgan';

import pkg from '../package.json'
import productsRoute from './routes/products.routes';
const app = express();

app.set('pkg',pkg);

//Registra los detalles de la solicitud
app.use(morgan('dev')); 
//Para que pueda leer datos json
app.use(express.json())

app.get('/',(req,res) =>{
    res.json({
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    });
})
app.use('/productos',productsRoute);
export default app;