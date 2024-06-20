import express from 'express';
import { __dirname } from './path.js';
import { errorHandler } from './middlewares/errorHandler.js';
import handlebars from 'express-handlebars';
import viewsRouter from './routes/views.router.js'
import productsRouter from './routes/products.router.js';
import cartRouter from './routes/cart.router.js';
import { initMongoDB } from './daos/mongodb/config/connection.js';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));


// HANDLEBARS configuracion
app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars');


// RUTAS
app.use('/', viewsRouter);
app.use('/products', productsRouter)
app.use('/carts', cartRouter)
app.use(errorHandler)

// BASE DE DATOS MONGODB
const PERSISTENCE = process.env.PERSISTENCE;
if(PERSISTENCE === "MONGO") initMongoDB();

// SERVER iniciado
app.listen(PORT, () => console.log(`Server ok en puerto ${PORT}`));