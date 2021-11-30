import express from 'express';
import morgan from 'morgan';
import { createRoles } from './libs/initialSetup';
import pkg from '../package.json'
import cors from "cors";
import productsRoute from './routes/products.routes';
import authRoutes from './routes/auth.routes';
import obraRouter from './routes/obra.routes';
import commentRouter from './routes/comment.routes';
import storiesRouter from './routes/stories.routes';
const app = express();


app.set('pkg',pkg);
app.set("port", process.env.PORT || 7000);
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
// Middlewares
const corsOptions = {
    // origin: "http://localhost:3000",
  };
  app.use(cors(corsOptions));
app.use('/api/productos',productsRoute);
app.use('/api/auth',authRoutes);
app.use('/api/obra',obraRouter);
app.use('/api/comment',commentRouter);
app.use('/api/stories',storiesRouter);

export default app;