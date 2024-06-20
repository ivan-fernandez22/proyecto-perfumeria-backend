import express from 'express';
import { __dirname } from './path.js';
import { errorHandler } from './middlewares/errorHandler.js';
import handlebars from 'express-handlebars';
import viewsRouter from './routes/views.router.js'
import productsRouter from './routes/products.router.js';
import { initMongoDB } from './daos/mongodb/config/connection.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));


// HANDLEBARS configuracion
app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars');


// RUTAS
app.use('/', viewsRouter);
app.use('/productos', productsRouter)

app.use(errorHandler)
// BASE DE DATOS MONGODB
initMongoDB();

// SERVER iniciado
app.listen(8080, () => console.log("server ok"));