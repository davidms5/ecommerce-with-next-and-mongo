import express from 'express';
//imports routes
import productos from './routes/productos.js';

//middleWares
import {manejoErrores} from './Middlewares/errors.js';


const app = express();
app.use(express.json())

//middleware para manejar errores
app.use(manejoErrores);

app.use('/api', productos)
export default app;
