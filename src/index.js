import express from 'express';
import { __dirname } from './path.js';
import handlebars from 'express-handlebars';
import viewsRouter from './routes/views.router.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));


// HANDLEBARS
app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars');


// RUTAS
app.use('/', viewsRouter);


// SERVER iniciado
app.listen(8080, () => console.log("server ok"));