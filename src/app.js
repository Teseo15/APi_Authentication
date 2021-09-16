import express from 'express';
import morgan from 'morgan';
import { createRoles } from './libs/initialSetup';
import pkg from '../package.json'
import productsRoute from './routes/products.routes';
import authRoutes from './routes/auth.routes';

const app = express();
createRoles();

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
app.use('/api/productos',productsRoute);
app.use('/api/auth',authRoutes);
export default app;