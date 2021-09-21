import express from 'express';
import morgan from 'morgan';
import { createRoles } from './libs/initialSetup';
import pkg from '../package.json'

import productsRoute from './routes/products.routes';
import authRoutes from './routes/auth.routes';
import obraRouter from './routes/obra.routes';
const app = express();


app.set('pkg',pkg);
createRoles();
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
app.use('/api/productos',productsRoute);
app.use('/api/auth',authRoutes);
app.use('/api/obra',obraRouter);
export default app;